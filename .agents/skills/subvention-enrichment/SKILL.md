---
name: subvention-enrichment
description: Enrichissement agentic OSINT d'associations FR pour SubventionAI (dirigeants, NAF, taux succès, signaux OSINT) avec staging obligatoire
triggers:
  - "enrichir association"
  - "profil dirigeants"
  - "benchmark NAF"
  - "signaux OSINT"
version: 1.0.0
---

# SubventionAI — Enrichissement Agentic

## Contexte

SubventionAI est une plateforme de détection/suivi de subventions publiques FR pour associations. Elle a besoin de profils enrichis :
- **Dirigeants** (président, trésorier, secrétaire) — depuis INPI RNE, annuaire public
- **NAF / secteur** — SIRENE cross-ref + classification
- **Taux de succès benchmark** — par code NAF, cross-ref Data.Subvention
- **Signaux OSINT** — présence web, réseaux sociaux publics, publications presse locale

**RÈGLE ABSOLUE** : rien ne part directement en DB production SubventionAI. Tout passe par l'endpoint callback qui atterrit dans `calendrier-db.staging.raw_osint_outputs`. La validation + promotion sont gérées côté SubventionAI.

## Workflow agentic (4 agents)

### 1. CEO Agent (Claude Sonnet 4.6)
- Lit queue `enrichment_tasks` (pg_boss sur subvention-ai-db ou fichier)
- Dispatche sur les 3 spécialistes
- Agrège résultats avec scoring de confiance cross-sources
- Callback vers SubventionAI

### 2. Dirigeants Specialist
- Source primaire : INPI RNE API (data.inpi.fr)
- Fallback : annuaire-entreprises.api.gouv.fr (dirigeants publics)
- JAMAIS LinkedIn scraping — respect ToS + RGPD
- Output : `{ presidents: [...], tresoriers: [...], confidence: 0-1 }`

### 3. NAF Specialist
- Source : SIRENE (déjà dans datalake via dl_entities)
- Benchmark : Data.Subvention agrégé par code NAF (taux succès moyen, montants moyens)
- Output : `{ naf_code, sector_label, benchmark: { avg_success_rate, avg_amount, sample_size } }`

### 4. OSINT Scout
- Sources éthiques (opt-in publique uniquement) :
  - Site web association (déclaré dans SIRENE)
  - Page Facebook/LinkedIn officielle (déclarée publiquement)
  - BODACC (procédures collectives via datalake)
  - Google Actualités (presse locale)
- Framework **R2C2** : Reliability / Relevance / Credibility / Corroboration
- Minimum 2 sources corroborantes pour confidence ≥ 0.7
- Output : `{ signals: [...], corroborations: N, confidence }`

## Contrat callback SubventionAI

```http
POST http://subvention-ai-app:3000/api/admin/enrichment/paperclip-callback
Authorization: Bearer ${SUBVENTION_AI_CALLBACK_SECRET}
Content-Type: application/json

{
  "associationRna": "W123456789",  // ou siren
  "enrichedAt": "2026-04-19T12:00:00Z",
  "agentRunId": "paperclip-run-uuid",
  "enrichment": {
    "dirigeants": { ... },
    "naf": { ... },
    "osint": { ... }
  },
  "confidenceScore": 0.82,
  "confidenceReason": "cross_referenced_2_sources",
  "sources": ["inpi-rne", "annuaire-entreprises", "bodacc"]
}
```

## Gouvernance data

- **Tier** : C par défaut (agentic) → peut monter à B si cross-ref tier A confirme
- **Verification** : `raw` → `cross_referenced` si ≥ 2 sources + confidence ≥ 0.7
- **Promotion** : exige `requires_human_validation: true` avant écriture dans public.association_profiles
- **RGPD** : dirigeants = DCP → minimisation, droit suppression respecté

## Anti-patterns (bloquants)

- ❌ Scraping LinkedIn, Facebook (hors pages publiques officielles opt-in)
- ❌ Inference dirigeants depuis NOM de l'association
- ❌ Appeler directement la DB subvention-ai (passer par l'endpoint callback)
- ❌ Retourner confidence > 0.5 sans au moins 1 source externe explicitement citée
