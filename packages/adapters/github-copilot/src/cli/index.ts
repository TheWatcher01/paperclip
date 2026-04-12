import pc from "picocolors";

// ---------------------------------------------------------------------------
// CLI adapter for GitHub Copilot — formats stdout for `paperclipai run --watch`
// ---------------------------------------------------------------------------

export function printGitHubCopilotStreamEvent(
  line: string,
  _debug: boolean,
): void {
  if (line.startsWith("[github_copilot]")) {
    console.log(pc.dim(line));
  } else if (line.startsWith("[error]") || line.startsWith("Error:")) {
    console.log(pc.red(line));
  } else {
    console.log(pc.cyan(line));
  }
}
