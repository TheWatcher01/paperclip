#!/bin/bash
# SOTA update watchdog — daily check of upstream repos vs local forks + tracked tools.
# Output: JSON to stdout. Exit 0 always (errors captured in payload).
# Usage: bash sota-update-watchdog.sh
#   Optional env: GITHUB_TOKEN (raises rate limit), HOME_HOST (override host home)

set -u
: "${HOME_HOST:=/home/TheWatcher01}"
PROJECTS="${HOME_HOST}/projects"

# Config: name | type | path-or-repo | upstream-remote-or-branch
# type=git_fork (compare local HEAD with upstream remote HEAD)
# type=gh_release (track latest GitHub release tag — informational only)
REPOS=(
  "paperclip|git_fork|${PROJECTS}/paperclip|origin/main"
  "openclaw|git_fork|${PROJECTS}/albert_agent/openclaw|origin/main"
  "kestra|gh_release|kestra-io/kestra|"
  "langfuse|gh_release|langfuse/langfuse|"
  "searxng|gh_commit|searxng/searxng|master"
  "twenty-crm|gh_release|twentyhq/twenty|"
)

GH_HEADERS=(-sS -H "Accept: application/vnd.github+json")
[[ -n "${GITHUB_TOKEN:-}" ]] && GH_HEADERS+=(-H "Authorization: Bearer ${GITHUB_TOKEN}")

results="[]"

for entry in "${REPOS[@]}"; do
  IFS='|' read -r name type target ref <<< "${entry}"
  status="unknown"; behind="0"; local_sha=""; upstream_sha=""; latest_tag=""; err=""

  case "${type}" in
    git_fork)
      if [[ ! -d "${target}/.git" ]]; then
        status="missing"; err="local path not a git repo: ${target}"
      else
        local_sha=$(git -C "${target}" rev-parse --short HEAD 2>/dev/null || echo "")
        upstream_branch="${ref#*/}"; upstream_remote="${ref%/*}"
        # Get upstream HEAD SHA via ls-remote (no need for tracking branch)
        upstream_sha_full=$(timeout 90 git -C "${target}" ls-remote "${upstream_remote}" "refs/heads/${upstream_branch}" 2>/dev/null | awk '{print $1}')
        if [[ -z "${upstream_sha_full}" ]]; then
          # Fallback: try master branch
          upstream_sha_full=$(timeout 90 git -C "${target}" ls-remote "${upstream_remote}" "refs/heads/master" 2>/dev/null | awk '{print $1}')
          [[ -n "${upstream_sha_full}" ]] && upstream_branch="master"
        fi
        if [[ -z "${upstream_sha_full}" ]]; then
          status="error"; err="ls-remote returned no SHA for ${upstream_remote} (network or branch missing)"
        else
          upstream_sha="${upstream_sha_full:0:8}"
          # Fetch that specific SHA so we can count distance locally
          timeout 90 git -C "${target}" fetch --quiet "${upstream_remote}" "${upstream_sha_full}" 2>/dev/null || true
          if git -C "${target}" cat-file -e "${upstream_sha_full}" 2>/dev/null; then
            behind=$(git -C "${target}" rev-list --count "HEAD..${upstream_sha_full}" 2>/dev/null || echo "0")
          else
            behind="?"
          fi
          if [[ "${behind}" == "0" ]]; then status="up_to_date"
          elif [[ "${behind}" == "?" ]]; then status="unknown"; err="fetch SHA failed; commit not local"
          else status="behind"
          fi
        fi
      fi
      ;;
    gh_release)
      # target = "owner/repo"
      resp=$(curl "${GH_HEADERS[@]}" --max-time 15 "https://api.github.com/repos/${target}/releases/latest" 2>/dev/null || echo "{}")
      latest_tag=$(echo "${resp}" | python3 -c "import json,sys
try: d=json.load(sys.stdin)
except: d={}
print(d.get('tag_name') or '')" 2>/dev/null || echo "")
      if [[ -z "${latest_tag}" ]]; then
        # Fallback to /tags (some repos don't publish Releases)
        resp=$(curl "${GH_HEADERS[@]}" --max-time 15 "https://api.github.com/repos/${target}/tags?per_page=1" 2>/dev/null || echo "[]")
        latest_tag=$(echo "${resp}" | python3 -c "import json,sys
try: d=json.load(sys.stdin)
except: d=[]
print(d[0].get('name') if d else '')" 2>/dev/null || echo "")
      fi
      if [[ -n "${latest_tag}" ]]; then
        status="tracked"
      else
        status="error"; err="no tag/release from GitHub (rate limit or repo not found)"
      fi
      ;;
    gh_commit)
      # target = "owner/repo", ref = branch (default master)
      branch="${ref:-master}"
      resp=$(curl "${GH_HEADERS[@]}" --max-time 15 "https://api.github.com/repos/${target}/commits/${branch}" 2>/dev/null || echo "{}")
      sha_full=$(echo "${resp}" | python3 -c "import json,sys
try: d=json.load(sys.stdin)
except: d={}
print(d.get('sha') or '')" 2>/dev/null || echo "")
      if [[ -n "${sha_full}" ]]; then
        upstream_sha="${sha_full:0:8}"
        latest_tag="${branch}@${upstream_sha}"
        status="tracked"
      else
        status="error"; err="no commit SHA from GitHub for ${target}@${branch}"
      fi
      ;;
  esac

  # Build JSON entry safely with python
  entry_json=$(python3 -c "
import json,sys
print(json.dumps({
  'name': '${name}',
  'type': '${type}',
  'status': '${status}',
  'local_sha': '${local_sha}',
  'upstream_sha': '${upstream_sha}',
  'behind': int('${behind}' or 0),
  'latest_tag': '${latest_tag}',
  'error': '${err}',
}))")
  results=$(python3 -c "
import json
arr = json.loads('''${results}''')
arr.append(json.loads('''${entry_json}'''))
print(json.dumps(arr))")
done

# Aggregate summary
python3 -c "
import json
arr = json.loads('''${results}''')
behind_count = sum(1 for r in arr if r['status'] == 'behind' and r['behind'] > 0)
errors = [r for r in arr if r['status'] == 'error']
print(json.dumps({
  'generated_at': '$(date -Iseconds)',
  'host': '$(hostname)',
  'summary': {
    'total': len(arr),
    'behind': behind_count,
    'errors': len(errors),
  },
  'repos': arr,
}, indent=2))
"
