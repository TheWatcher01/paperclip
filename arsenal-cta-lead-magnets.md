oui# Arsenal de Simulateurs & CTA — Growth Hacking Lead Capture

> Principe : chaque outil gratuit a 3 fonctions simultanées
>
> 1. **Prouver** ta compétence technique (le prospect voit ton IA tourner)
> 2. **Qualifier** le prospect (ses réponses te disent exactement son besoin)
> 3. **Capturer** ses coordonnées (résultat partiel gratuit → rapport complet contre email)
>
> Pattern universel : résultat partiel visible (score, jauge, 3 insights) → "Recevez votre rapport complet de 20 pages" → email gate → CTA "Réservez un diagnostic gratuit de 30 min"

---

## 1. SIMULATEURS DE PEUR (Fear-Based — Urgence)

### 1.1 Simulateur de Sanction NIS2

- L'utilisateur entre : secteur d'activité, CA annuel, nombre d'employés
- L'outil calcule : montant max de sanction encourue (2% du CA mondial pour entités essentielles, 1.4% pour importantes), détermine s'il est entité essentielle ou importante, affiche le countdown jusqu'au 17 octobre 2026
- Résultat visible : "Votre exposition maximale : XXX XXX€ — Il vous reste XX jours"
- Gate : "Téléchargez votre fiche d'exposition personnalisée" → email
- Données capturées : secteur, taille, CA = prospect parfaitement qualifié

### 1.2 Calculateur de Coût d'une Cyberattaque

- L'utilisateur entre : nombre d'employés, secteur, CA, type d'infra (cloud/on-prem/hybride)
- L'outil calcule : coût moyen d'un incident selon les stats IBM Cost of Data Breach 2024 (150k€ moyen pour PME européenne), ventilé en : perte d'exploitation, remise en état SI, frais juridiques, impact réputation, notification CNIL, amende potentielle
- Résultat visible : jauge animée qui monte avec les différents postes de coût
- Gate : "Recevez votre analyse de risque financier complète" → email
- Growth hack : ajouter un bouton "Partagez ce résultat à votre direction" qui génère un PDF branded à envoyer au DSI/DG

### 1.3 Simulateur d'Amende RGPD

- L'utilisateur entre : type de données traitées, nombre de personnes concernées, mesures de sécurité en place (checkboxes)
- L'outil calcule : amende potentielle CNIL (jusqu'à 4% du CA ou 20M€), niveau de gravité selon critères CNIL, exemples d'amendes récentes similaires
- Résultat visible : montant + comparaison avec des amendes réelles prononcées en France
- Gate : "Vérifiez votre conformité RGPD en 5 minutes" → redirige vers l'audit RGPD (outil 2.2)

### 1.4 Timer "Combien de PII fuitent en ce moment"

- Widget animé façon compteur en temps réel
- Basé sur les stats réelles : X violations de données par heure en France (stats Cybermalveillance 2025 : 504 000 demandes/an)
- Pas interactif mais hypnotique — c'est un hook visuel pur
- CTA permanent : "Scannez vos données en 2 minutes →"

---

## 2. AUDITS AUTOMATISÉS (Score-Based — Qualification)

### 2.1 Auto-Diagnostic NIS2 / ReCyF

- 20 questions basées sur les vrais 20 objectifs du ReCyF v2.5 de l'ANSSI
- Réponses : Oui / Partiellement / Non
- Résultat visible : score global (jauge circulaire), score par catégorie (gouvernance, risques, protection, détection, continuité), niveau de risque (critique/élevé/modéré/bon), 3 premières recommandations
- Gate : "Téléchargez votre rapport de conformité NIS2 complet (20+ pages)" → email + taille entreprise + secteur
- Growth hack avancé : le rapport PDF est généré dynamiquement par Mistral 7B Q4 avec des recommandations personnalisées selon les réponses. Ça bluffe le prospect parce que c'est pas un template générique
- Données capturées : les 20 réponses te donnent un diagnostic précis du prospect avant même de l'appeler

### 2.2 Auto-Diagnostic RGPD Express

- 15 questions : registre des traitements ? DPO ? AIPD ? Politique de conservation ? Gestion des droits ? Sécurité technique ? Sous-traitants ?
- Résultat visible : score de conformité, 3 non-conformités critiques identifiées, checklist "quick wins"
- Gate : "Recevez votre checklist RGPD personnalisée + modèle de registre des traitements" → email
- Le modèle de registre est un vrai template utilisable = valeur immédiate, le prospect te fait confiance

### 2.3 Test de Maturité Cybersécurité

- Version plus accessible/moins technique que le NIS2
- 10 questions simples façon quiz Buzzfeed : "Vos mots de passe sont-ils…", "Que se passe-t-il si votre serveur tombe…", "Qui a accès aux données clients…"
- Résultat visible : profil de maturité (Débutant / Conscient / Structuré / Avancé) avec illustration, comparaison anonymisée "Vous êtes dans les X% des PME françaises"
- Gate : "Recevez votre feuille de route cybersécurité personnalisée" → email
- Growth hack : profil partageable sur LinkedIn avec le badge de maturité — viralité organique

### 2.4 Audit Flash AI Act

- 8 questions : utilisez-vous de l'IA ? Laquelle ? Pour quoi ? Données traitées ? Humain dans la boucle ?
- Résultat visible : classification du niveau de risque de vos systèmes IA (inacceptable / haut / limité / minimal), obligations correspondantes, deadline applicable
- Gate : "Recevez votre registre des systèmes IA pré-rempli" → email
- Timing parfait : application progressive AI Act en 2026, les entreprises ne savent pas si elles sont concernées

### 2.5 Diagnostic Supply Chain Security

- 12 questions sur les fournisseurs : combien de prestataires TIC ? Évaluez-vous leur sécurité ? Clauses contractuelles ? SLA ? Audit droit ?
- Résultat visible : score de risque supply chain, nombre de fournisseurs non évalués, risque estimé
- Gate : "Téléchargez votre modèle de questionnaire fournisseur NIS2" → email
- Le template de questionnaire fournisseur est un outil que le prospect va réellement utiliser = forte rétention

---

## 3. CALCULATEURS ROI (Value-Based — Justification budget)

### 3.1 Calculateur ROI d'un Audit Cybersécurité

- L'utilisateur entre : taille, secteur, budget IT actuel, incidents passés (oui/non)
- L'outil calcule : coût moyen d'un incident dans son secteur, probabilité estimée d'incident sur 12 mois, coût d'un audit vs coût d'un incident, ROI projeté, économies assurance cyber potentielles
- Résultat visible : "Pour 1€ investi en audit, vous économisez X€ en risque"
- Gate : "Recevez votre business case cybersécurité à présenter à votre direction" → email
- Growth hack : le PDF généré est littéralement le document que le DSI peut donner à son DG pour débloquer le budget. Tu vends à travers ton prospect.

### 3.2 Calculateur d'Économies Compliance-as-Code

- L'utilisateur entre : nombre d'audits/an, temps passé par audit (jours), coût journalier équipe, nombre de frameworks (NIS2, RGPD, ISO…)
- L'outil calcule : temps total manuel vs automatisé, économie annuelle, temps libéré pour l'équipe
- Résultat visible : "Vous passez X jours/an en conformité manuelle. Automatisé : X jours. Économie : XX 000€"
- Gate : "Recevez votre roadmap d'automatisation personnalisée" → email

### 3.3 Simulateur Budget Mise en Conformité NIS2

- L'utilisateur entre : taille, maturité actuelle (via 5 curseurs), deadline souhaitée
- L'outil calcule : budget estimé selon les fourchettes marché (35k-180k€ pour une mise en conformité complète), répartition par poste (audit initial, solutions techniques, formation, accompagnement), comparaison "faire seul" vs "accompagné" vs "full outsource"
- Résultat visible : 3 scénarios budget avec timeline
- Gate : "Réservez un diagnostic gratuit pour affiner votre budget" → booking Calendly
- Growth hack : le prospect qui utilise ça a DÉJÀ le budget mental. Il compare les options. Ton offre "audit flash IA-powered à 2 500€" paraît ultra compétitive face au marché à 8 000-25 000€

---

## 4. DÉMOS TECHNIQUES LIVE (Show-Don't-Tell — Proof of Tech)

### 4.1 Scanner PII Live

- L'utilisateur colle du texte (ou upload un petit fichier)
- L'outil détecte en temps réel : noms, emails, téléphones, IBAN, numéros sécu, adresses — surlignés en couleur dans le texte
- Résultat visible : texte annoté avec les PII colorées par type, compteur par catégorie, score de risque du document
- Gate : "Scannez l'intégralité de vos fichiers — Demandez un scan complet" → email
- Growth hack MASSIF : c'est interactif, c'est immédiat, ça impressionne. Le prospect colle un mail interne et voit 15 PII apparaître. L'effet "wow" déclenche l'achat.
- Technique : faire tourner un modèle léger côté client (ONNX/WebAssembly) OU appeler ton API Presidio en backend. Même un regex intelligent + patterns français (SIREN, SIRET, NIR, IBAN FR) fait déjà un effet massif.

### 4.2 Démo Classification de Documents

- L'utilisateur upload un document (PDF, DOCX, texte)
- L'outil retourne : classification automatique (confidentiel/interne/public), entités détectées, niveau de sensibilité, recommandations de traitement
- Résultat visible : badge de classification + extraction des 5 premières entités
- Gate : "Classifiez automatiquement tous vos documents — Demandez une démo" → email + nombre de documents estimé
- Le nombre de documents capturé te permet de quoter directement

### 4.3 Simulateur d'Anonymisation

- L'utilisateur colle un texte avec des données personnelles
- L'outil montre côte-à-côte : texte original vs texte anonymisé (remplacement, masquage, pseudonymisation)
- Toggle entre les méthodes : remplacement par [PERSONNE], masquage partiel (J**\* D**), pseudonymisation (hash), chiffrement
- Gate : "Déployez l'anonymisation automatique sur vos données — Contactez-nous" → email
- Valeur ajoutée : le prospect comprend visuellement ce qu'est l'anonymisation RGPD

### 4.4 Analyse de Vulnérabilité URL

- L'utilisateur entre l'URL de son site web
- L'outil check : headers de sécurité (HSTS, CSP, X-Frame-Options…), certificat SSL (validité, force), technologies détectées, ports ouverts basiques
- Résultat visible : note A-F par catégorie, 3 premières vulnérabilités, comparaison avec les bonnes pratiques ANSSI
- Gate : "Recevez votre rapport de sécurité web complet" → email
- Growth hack : le prospect partage son "F" en sécurité headers sur LinkedIn ou à sa direction. Panique. Il te rappelle.
- Attention légale : ne scanner QUE ce que le prospect autorise (son propre domaine), avec ToS clairs

### 4.5 Vérificateur de Fuites de Données

- L'utilisateur entre son domaine d'entreprise (pas d'email personnel)
- L'outil check via sources OSINT publiques : nombre de fuites connues associées au domaine (Have I Been Pwned API, dehashed public data), types de données exposées, dates des fuites
- Résultat visible : "X comptes de votre domaine apparaissent dans Y fuites connues"
- Gate : "Recevez l'analyse complète des fuites + plan de remédiation" → email
- Effet émotionnel très fort — le prospect voit ses propres données dans des fuites. Conversion quasi garantie.

---

## 5. OUTILS SUBVENTIONIA / ASSOCIATIONS (Vertical Produit)

### 5.1 Simulateur d'Éligibilité Subventions

- L'utilisateur entre : type d'association (loi 1901, fondation, etc.), secteur (culture, sport, social, environnement…), territoire, budget annuel, nombre de salariés/bénévoles, projet envisagé
- L'outil retourne : nombre de subventions potentiellement éligibles, top 5 avec % de matching, montants moyens attribuables, calendrier des prochaines échéances
- Résultat visible : 3 subventions les plus probables avec scoring
- Gate : "Accédez aux 50+ subventions identifiées + pré-remplissage automatique" → email + type asso
- C'est littéralement un aperçu gratuit de SubventionIA. Le freemium parfait.

### 5.2 Calculateur de Financement Association

- L'utilisateur entre son projet et son budget
- L'outil calcule : mix de financement optimal (subventions publiques + mécénat + autofinancement + cotisations), montants estimés par source, probabilité d'obtention
- Résultat visible : camembert du mix de financement + 3 premières pistes
- Gate : "Obtenez votre plan de financement complet avec matching automatique" → email
- Prépare le terrain pour le modèle tripartite mécénat

### 5.3 Diagnostic Numérique pour Associations

- 10 questions : avez-vous un site web ? Utilisez-vous un CRM ? Gestion comptable informatisée ? Outils collaboratifs ? Sécurité des données bénévoles/adhérents ?
- Résultat visible : score de maturité numérique, 3 priorités, subventions numériques éligibles (type France Num, AFNIC)
- Gate : "Téléchargez votre feuille de route numérique + liste des aides" → email
- Double capture : prospect pour SubventionIA ET pour des prestations de conseil numérique

---

## 6. OUTILS VIRAUX & COMPARATIFS (Viralité Organique)

### 6.1 Benchmark Cybersécurité Sectoriel

- L'utilisateur entre : secteur, taille, quelques métriques
- L'outil compare anonymement avec les autres entreprises du même secteur ayant utilisé l'outil
- Résultat visible : "Vous êtes dans le top/bottom X% de votre secteur" avec radar chart
- Gate : aucune gate sur le score basique. Gate sur le rapport détaillé.
- Growth hack : les gens ADORENT se comparer. "Vous êtes moins mature que 73% des PME de votre secteur" → partage LinkedIn → viralité → plus de prospects dans la base → meilleur benchmark → cercle vertueux

### 6.2 Générateur de Politique de Sécurité

- L'utilisateur répond à 10 questions sur sa structure
- L'outil génère via LLM local un template de PSSI (Politique de Sécurité des Systèmes d'Information) personnalisé
- Résultat visible : sommaire de la PSSI + premier chapitre
- Gate : "Téléchargez votre PSSI complète (15 pages)" → email
- Valeur perçue ÉNORME : une PSSI coûte normalement 2-5k€ en prestation. Tu la donnes "gratuite" (mais générée en 30 secondes par Mistral). Le prospect qui l'utilise revient pour l'accompagnement.

### 6.3 Générateur de Registre des Traitements RGPD

- L'utilisateur décrit en langage naturel ses activités (ex: "on gère des adhérents, on envoie des newsletters, on a un site avec un formulaire de contact")
- Le LLM génère automatiquement les premières lignes du registre des traitements (finalité, base légale, durée de conservation, destinataires)
- Résultat visible : 3 premiers traitements identifiés et formatés
- Gate : "Générez votre registre complet + modèle CNIL" → email
- Même logique que la PSSI : valeur perçue massive, coût de génération quasi nul

### 6.4 Quiz "Seriez-vous sanctionné par la CNIL ?"

- 7 questions scénario : "Un employé perd son laptop avec des données clients, que faites-vous ?", "Un client demande l'effacement de ses données, quel est votre délai ?"
- Format ludique type quiz Buzzfeed avec des résultats partageable
- Résultat visible : profil ("Le Prudent", "Le Joueur", "Le Kamikaze") + score + 2 insights
- Gate : aucune gate (l'objectif c'est la viralité). CTA discret : "Vérifiez votre conformité réelle →"
- Growth hack : le format quiz est le contenu le plus partagé sur LinkedIn/réseaux sociaux. Chaque partage = visibilité gratuite.

### 6.5 Infographie Interactive "Anatomie d'une Cyberattaque"

- Pas un calculateur mais une expérience narrative interactive
- L'utilisateur "vit" une cyberattaque étape par étape : phishing → compromission → exfiltration → demande de rançon → notification ANSSI → gestion de crise
- À chaque étape, il voit les coûts s'accumuler et les décisions à prendre
- À la fin : "Êtes-vous préparé ? Testez votre résilience →" → redirige vers le diagnostic NIS2
- Growth hack : c'est du storytelling interactif, ça se partage massivement, et ça éduque le prospect sur exactement pourquoi il a besoin de toi

---

## 7. STRATÉGIE DE DÉPLOIEMENT

### Phase 1 — Semaine 1-2 (2 outils, impact max)

1. **Simulateur de Sanction NIS2** (1.1) — Le plus simple à coder, le plus effrayant, conversion la plus rapide
2. **Scanner PII Live** (4.1) — L'effet "wow" technique, prouve ta stack IA immédiatement

### Phase 2 — Semaine 3-4 (3 outils, qualification)

3. **Auto-Diagnostic NIS2** (2.1) — Le plus qualifiant, capture 20 data points par prospect
4. **Quiz CNIL** (6.4) — Le plus viral, growth organique LinkedIn
5. **Analyse Vulnérabilité URL** (4.4) — Résultat instantané, très partageable

### Phase 3 — Semaine 5-8 (scaling)

6. **Simulateur Éligibilité Subventions** (5.1) — Funnel SubventionIA
7. **Calculateur ROI Audit** (3.1) — Outil de closing (le prospect génère son propre business case)
8. **Générateur PSSI** (6.2) — Lead magnet premium, valeur perçue très haute
9. **Calculateur Budget NIS2** (3.3) — Prospect chaud qui compare les budgets

### Phase 4 — Scaling & viralité

10-15. Le reste, en itérant selon les données de conversion de la Phase 1-3

---

## 8. ARCHITECTURE TECHNIQUE RECOMMANDÉE

### Frontend

- React/Next.js sur Vercel (gratuit)
- Chaque outil = une page avec sa propre URL trackable
- Analytics : Plausible (RGPD-compliant, self-hosted possible) ou PostHog
- A/B testing sur les CTAs et les gates

### Backend (quand nécessaire)

- API FastAPI sur ton VPS Contabo
- Présidio pour le scan PII
- Mistral 7B Q4 via Ollama pour la génération de rapports/PSSI/registres
- Rate limiting strict (anti-abuse)

### Lead Capture

- Formulaire minimaliste : nom, email, entreprise, taille (4 champs max)
- Webhook vers CRM (Brevo gratuit jusqu'à 300 emails/jour, ou n8n self-hosted)
- Email automatique avec le rapport PDF (généré dynamiquement)
- Séquence de nurturing : J+0 rapport, J+3 cas d'étude, J+7 offre diagnostic gratuit

### Tracking & Optimisation

- Chaque outil a un UTM unique
- Mesurer : visiteurs → démarrage quiz → completion → conversion email → booking call → client
- Le taux de completion du quiz te dit si les questions sont trop techniques
- Le taux de conversion email te dit si la gate est bien placée (ni trop tôt, ni trop tard)
- Objectif : 30-40% de completion, 15-25% de conversion email, 5-10% de booking

---

## 9. COPYWRITING DES GATES (Templates)

### Gate Standard (après résultat partiel)

> **Votre score : 43/100 — Risque élevé**
>
> Nous avons identifié 7 non-conformités critiques dans votre organisation.
>
> Recevez votre rapport personnalisé avec :
> ✓ Détail des 7 non-conformités et leur criticité
> ✓ Plan d'action priorisé en 90 jours
> ✓ Estimation budgétaire de mise en conformité
> ✓ Comparaison avec votre secteur
>
> [Champ email] [Recevoir mon rapport →]
>
> 🔒 Vos données restent confidentielles et ne sont jamais partagées.

### Gate Urgence (pour NIS2)

> **⚠️ Il reste 183 jours avant la deadline NIS2**
>
> Votre organisation couvre seulement 4 des 20 objectifs ReCyF de l'ANSSI.
> Sanctions encourues : jusqu'à XXX XXX€
>
> Recevez votre feuille de route de mise en conformité accélérée :
>
> [Champ email] [Recevoir ma feuille de route →]
>
> 📞 Besoin d'agir maintenant ? Réservez un diagnostic gratuit de 30 min

### Gate Valeur (pour les générateurs)

> **Votre PSSI personnalisée est prête (15 pages)**
>
> Nous l'avons générée à partir de vos réponses.
> Valeur estimée de ce document : 2 000 – 5 000€
>
> [Champ email] [Télécharger gratuitement →]

---

## 10. GROWTH HACKS AVANCÉS

### Effet de rareté

- "Diagnostic gratuit limité aux 20 premières entreprises ce mois-ci" (même si c'est pas vrai au début, ça crée l'urgence)

### Social proof dynamique

- "142 entreprises ont déjà évalué leur conformité NIS2 cette semaine" (compteur réel basé sur les completions)

### Retargeting par score

- Score < 30% → email séquence "urgence", CTA audit flash
- Score 30-60% → email séquence "accompagnement", CTA gap analysis
- Score > 60% → email séquence "validation", CTA audit de confirmation
- Chaque segment a un message et une offre différente

### LinkedIn Automation

- Poster les stats anonymisées : "Cette semaine, 68% des PME ayant utilisé notre simulateur NIS2 ont un score inférieur à 40%"
- Chaque stat = contenu LinkedIn gratuit qui ramène du trafic vers les outils
- Les stats agrégées de tes outils SONT ton contenu marketing

### Referral Loop

- Après le rapport : "Partagez cet outil à un confrère DSI/RSSI → Recevez une checklist bonus exclusive"
- Le prospect qualifié recrute d'autres prospects qualifiés

### Embed Partnerships

- Proposer aux CCI, fédérations d'associations, réseaux ESS d'embedder tes outils sur leur site
- "Outil de diagnostic NIS2 propulsé par [ta marque]" = distribution gratuite massive
- Les CCI adorent offrir des outils gratuits à leurs adhérents, et toi tu captures les leads

### Content Flywheel

- Chaque nouvel outil = 1 article de blog + 1 post LinkedIn + 1 démo vidéo
- Les données agrégées des outils = matière première pour des études sectorielles
- Les études sectorielles = contenu premium qui attire les DSI/RSSI
- Les DSI/RSSI qui lisent l'étude = prospects chauds pour les outils = boucle

---

## 11. CONFIGURATEUR DE DEVIS INTERACTIF

> Inspiré des meilleurs : OVHcloud (configurateur serveur), Alan (devis mutuelle en 2 min), Qonto (pricing dynamique), Leroy Merlin (devis cuisine), les comparateurs d'assurance. Le principe : le prospect construit son propre devis, il s'implique, il comprend la valeur, il achète.

### 11.1 Configurateur de Mission "Build Your Pack"

**Concept** : Le prospect compose sa mission comme un menu de restaurant. Il sélectionne des briques, le devis se met à jour en temps réel avec un total glissant.

**Parcours utilisateur** :

Étape 1 — Contexte (3 questions rapides) :

- Votre structure : TPE (<10) / PME (10-50) / PME+ (50-250) / ETI (250+) / Association
- Votre secteur : sélecteur parmi les 18 secteurs NIS2 + "Autre"
- Votre priorité : NIS2 / RGPD / Cybersécurité générale / Conformité AI Act / Subventions

Étape 2 — Sélection des briques (le cœur) :

- Interface type "carte à cocher" avec toggle on/off
- Chaque brique affiche : nom, description en 1 ligne, fourchette de prix, durée estimée, badge "Recommandé" si pertinent vu le contexte de l'étape 1
- Les briques se regroupent par catégorie (Audit / Protection / Détection / Conformité / Formation)
- Quand le prospect active une brique, le total en bas se met à jour avec une animation fluide

**Les briques du catalogue** :

Audit & Diagnostic :

- Scan PII / Données personnelles — 800-2 000€ — 1 jour
- Audit flash RGPD automatisé — 1 500-3 500€ — 2 jours
- Gap analysis NIS2 / ReCyF — 2 500-5 000€ — 3 jours
- Scan vulnérabilités infrastructure — 1 500-4 000€ — 1 jour
- Audit flash AI Act — 1 000-3 000€ — 2 jours
- Diagnostic supply chain security — 1 000-3 000€ — 2 jours

Protection & Remédiation :

- Classification documentaire automatisée — 500-1 500€ — 1 jour
- Déploiement MFA & durcissement accès — 1 500-3 500€ — 3 jours
- Anonymisation/pseudonymisation de données — 1 000-3 000€ — 2 jours
- Chiffrement données sensibles (repos + transit) — 1 500-4 000€ — 3 jours
- Compliance-as-Code pipeline CI/CD — 3 000-8 000€ — 5 jours

Détection & Réponse :

- Monitoring sécurité continu (setup) — 2 000-5 000€ — 3 jours (+ 300-800€/mois)
- Kit réponse incidents + playbooks — 2 000-4 000€ — 2 jours
- Formation gestion de crise cyber — 1 500-3 000€ — 1 jour (atelier)

Conformité & Documentation :

- Rédaction PSSI personnalisée — 1 500-3 500€ — 3 jours
- Registre des traitements RGPD — 800-2 000€ — 2 jours
- Analyse d'impact (AIPD) — 1 000-2 500€ — 2 jours
- Registre des systèmes IA (AI Act) — 1 000-2 000€ — 1 jour
- Plan de continuité / PRA-PCA — 2 500-5 000€ — 5 jours

Formation & Sensibilisation :

- Sensibilisation cybersécurité équipes (atelier 2h) — 800-1 500€
- Formation RGPD pour managers (demi-journée) — 1 000-2 000€
- Exercice phishing simulé + debriefing — 1 500-3 000€

Étape 3 — Récapitulatif & options :

- Résumé visuel des briques sélectionnées
- Total fourchette basse / fourchette haute
- Option "Pack Essentiel" (-10%) si 3+ briques
- Option "Pack Complet" (-15%) si 5+ briques
- Option "Accompagnement récurrent" : toggle qui ajoute le monitoring mensuel
- Durée totale estimée de la mission
- Timeline visuelle (Gantt simplifié)

Étape 4 — Capture & envoi :

- "Recevez votre devis détaillé par email"
- Champs : nom, email, entreprise, téléphone (optionnel)
- Bouton : "Recevoir mon devis →"
- Bouton secondaire : "Réserver un appel pour affiner →" (Calendly embed)
- Le devis PDF est généré dynamiquement (Mistral 7B ou template) avec : logo, détail de chaque brique, engagement de délai, CGV simplifiées, mention "Devis valable 30 jours"

**Growth hacks spécifiques au configurateur** :

- Le prix total s'affiche AVANT la gate email — le prospect a déjà investi du temps à configurer, il ne va pas abandonner au moment de recevoir le PDF
- Les briques marquées "Recommandé" sont pré-cochées par défaut selon le contexte (opt-out, pas opt-in) — augmente le panier moyen de 30-40%
- Afficher "47 entreprises de votre secteur ont demandé un devis ce mois-ci" (social proof)
- Si le total dépasse 5 000€ : afficher "Éligible au financement OPCO — Nous gérons le dossier pour vous" → upsell
- Si le prospect est une association : afficher "Cette prestation peut être financée par une subvention" → crossover SubventionIA
- Afficher en comparaison discrète : "Tarif marché moyen pour cette mission : XX 000€" (toujours plus élevé que ton devis) — ancrage prix

### 11.2 Devis Express "3 Questions / 30 Secondes"

**Concept** : Version ultra-rapide pour les prospects pressés. 3 questions, 1 résultat, 0 friction.

**Parcours** :

- Question 1 : "Quel est votre besoin principal ?" → 4 gros boutons visuels (NIS2, RGPD, Cybersécurité, Subventions)
- Question 2 : "Quelle est la taille de votre structure ?" → 4 boutons (TPE / PME / ETI / Asso)
- Question 3 : "Quel est votre niveau d'urgence ?" → 3 boutons (Immédiat / 1-3 mois / Exploration)
- Résultat : pack recommandé avec prix, durée, et 1 phrase d'accroche personnalisée
- CTA : "Réserver mon créneau →" (pas de gate email, direct Calendly)
- Pourquoi : les DSI/CTO n'ont pas le temps de remplir 20 champs. 30 secondes max sinon ils partent. Ce format capture les prospects les plus chauds.

### 11.3 Comparateur "Votre Situation vs. Conformité Cible"

**Concept** : Le prospect voit visuellement l'écart entre sa situation actuelle et la cible réglementaire, avec le coût pour combler chaque gap.

**Parcours** :

- Radar chart interactif avec 6-8 axes (gouvernance, gestion des risques, protection, détection, réponse, continuité, supply chain, conformité data)
- Le prospect positionne un curseur sur chaque axe : "Où en êtes-vous ?" (1 à 5)
- Le radar affiche en overlay la cible NIS2/RGPD minimum
- Chaque gap entre la position actuelle et la cible est cliquable → révèle la brique de prestation correspondante et son prix
- Le total de comblement de tous les gaps = le devis
- Visuellement très puissant : le prospect VOIT ses lacunes

---

## 12. AGENT CONVERSATIONNEL PRÉ-VENTE (Agentic Advisor)

> Inspiré des chatbots de Drift, Intercom, et les assistants de devis en ligne des assureurs (Alan, Luko) et banques en ligne. Mais ici c'est un vrai agent LLM, pas un arbre de décision. Il comprend le langage naturel, qualifie le prospect, recommande des prestations, et génère un devis.

### 12.1 "Albert Advisor" — Agent IA Pré-Vente

**Concept** : Widget de chat sur le site. Le prospect décrit sa situation en langage naturel, l'agent pose des questions de qualification, recommande un package et génère un devis. C'est un avant-goût de la puissance d'Albert.

**Exemple de conversation** :

> Prospect : "Bonjour, on est une PME de 80 salariés dans la logistique et on ne sait pas si on est concernés par NIS2"
>
> Albert : "Le secteur Transport & Logistique fait partie des secteurs critiques de NIS2. Avec 80 salariés, votre entreprise est très probablement classée comme entité importante. Vous avez jusqu'au 17 octobre 2026 pour être en conformité — il reste 183 jours.
>
> Pour estimer votre niveau de préparation, j'ai besoin de 3 informations :
>
> 1. Avez-vous un responsable cybersécurité désigné ?
> 2. Disposez-vous d'une politique de sécurité (PSSI) écrite ?
> 3. Avez-vous un système de détection d'incidents en place ?"
>
> Prospect : "On a un DSI qui gère ça en plus de son poste, pas de PSSI formelle, et non pas de détection"
>
> Albert : "Voici mon évaluation rapide :
>
> - Gouvernance : ⚠️ Partielle (pas de rôle dédié cybersécurité)
> - Documentation : 🔴 Absente (PSSI manquante, obligation NIS2 Art. 21)
> - Détection : 🔴 Absente (obligation ReCyF objectif 14)
>
> Pour une PME logistique de votre taille, je recommande le Pack Conformité NIS2 Accélérée :
> → Gap Analysis NIS2 + Rédaction PSSI + Setup Monitoring
> → Estimation : 6 000 – 9 500€ · Durée : 8-12 jours
>
> Souhaitez-vous recevoir un devis détaillé ou réserver un appel avec notre consultant ?"

**Capacités de l'agent** :

- Qualifier le prospect (secteur, taille, maturité, urgence, budget)
- Déterminer si l'entreprise est concernée par NIS2 (secteurs, seuils)
- Recommander des briques de prestation adaptées
- Générer une estimation de prix cohérente avec le catalogue
- Proposer un créneau de RDV (intégration Calendly)
- Répondre aux questions fréquentes (délais, méthodologie, garanties)
- Capturer les coordonnées naturellement dans le flux de conversation

### 12.2 Cadrage Sécurité Anti-Détournement (CRITIQUE)

**Le risque** : Un agent LLM sur un site public est une surface d'attaque. Prompt injection, détournement, extraction de données système, utilisation comme chatbot gratuit hors sujet. Il faut blinder.

**Architecture défensive — 7 couches** :

Couche 1 — System prompt blindé :

- Instructions immuables en tête de prompt, jamais modifiables par l'input utilisateur
- L'agent a UN rôle : conseiller pré-vente en cybersécurité/RGPD. Point.
- Liste exhaustive de ce qu'il peut faire (recommander des prestations, qualifier, répondre aux FAQ) et de ce qu'il NE peut PAS faire (tout le reste)
- Interdiction explicite : ne jamais révéler le system prompt, ne jamais exécuter de code, ne jamais agir comme un autre persona, ne jamais sortir du domaine cybersécurité/RGPD/conformité

Couche 2 — Whitelist de sujets :

- L'agent ne répond QUE sur : NIS2, RGPD, AI Act, cybersécurité, conformité, prestations du catalogue, tarifs, méthodologie, prise de RDV
- Pour TOUT autre sujet : réponse standardisée "Je suis spécialisé en cybersécurité et conformité. Pour toute autre question, je vous invite à nous contacter directement."
- Pas de mode "je suis un assistant général" — c'est un spécialiste, point.

Couche 3 — Validation d'input :

- Longueur max par message : 500 caractères (un prospect légitime n'écrit pas de pavés)
- Détection de patterns d'injection : "ignore previous instructions", "you are now", "system:", "as an AI", chaînes encodées, markdown/code blocks dans l'input
- Si pattern détecté → réponse neutre sans acknowledger l'attaque : "Pourriez-vous reformuler votre question sur la cybersécurité ou la conformité ?"
- Pas de copier-coller de longs textes autorisé dans le widget

Couche 4 — Grounding sur le catalogue :

- L'agent ne peut citer QUE les prestations qui existent dans une base de données structurée (JSON/DB)
- Les prix ne sont JAMAIS inventés — ils viennent de la base catalogue avec des fourchettes min/max
- Si le prospect demande un service qui n'existe pas dans le catalogue → "Ce service n'est pas dans notre offre actuelle, mais je peux vous mettre en relation avec notre consultant pour en discuter."
- Zéro hallucination de prix, zéro invention de prestation

Couche 5 — Rate limiting & abus :

- Max 20 messages par session (après : "Pour poursuivre, je vous propose de réserver un appel →")
- Max 5 sessions par IP par jour
- Cooldown de 3 secondes entre les messages (anti-bot)
- Si détection de boucle (même question répétée) → "Il semble que je ne puisse pas répondre à cette question. Souhaitez-vous parler à un humain ?"
- Pas de streaming visible (le message apparaît complet) pour éviter l'exploitation du stream

Couche 6 — Pas de mémoire cross-session :

- Chaque conversation repart de zéro
- Aucune donnée de session précédente n'est accessible
- Les coordonnées capturées sont envoyées au CRM et purgées du contexte LLM
- Pas de "tu m'avais dit que..." — si le prospect revient, il recommence (ou il se connecte via son espace client, c'est un autre flux)

Couche 7 — Monitoring & alertes :

- Log de toutes les conversations (chiffré, RGPD-compliant, durée de rétention 30 jours)
- Alerte automatique si : tentative d'injection détectée, conversation anormalement longue (>15 messages sans qualification), mots-clés suspects
- Dashboard de review hebdomadaire des conversations pour améliorer l'agent
- Bouton "Signaler un problème" visible pour le prospect → feedback direct

**Modèle technique recommandé** :

- Backend : Mistral 7B Q4 via Ollama sur ton VPS Contabo (souverain, pas d'envoi de données vers des API tierces)
- Ou si tu veux de la qualité supérieure : API Claude Sonnet via Anthropic avec system prompt blindé (les données sont déjà protégées par les ToS Anthropic)
- Frontend : widget custom (pas Intercom/Drift — tu contrôles tout), iframe isolé avec CSP strict
- Les structured outputs (Outlines) pour forcer le format des recommandations (JSON → rendering propre)
- Fallback : si le LLM ne répond pas en 5 secondes ou erreur → formulaire de contact classique, jamais de message d'erreur technique visible

### 12.3 Agent "Pré-Audit Express" (Qualification Profonde)

**Concept** : Pas un chatbot généraliste mais un agent à parcours guidé. Il pose une séquence de questions structurée (pas de free-form au début), puis ouvre le langage naturel une fois le prospect qualifié. Hybride entre formulaire intelligent et conversation.

**Parcours** :

Phase 1 — Qualification structurée (questions fermées, boutons cliquables) :

- "Bienvenue. Je vais évaluer votre situation en 2 minutes. Quel est votre secteur d'activité ?" → boutons par secteur
- "Combien de salariés ?" → boutons par tranche
- "Avez-vous déjà été audité en cybersécurité ?" → Oui / Non / Je ne sais pas
- "Quel est votre principal enjeu aujourd'hui ?" → Conformité NIS2 / RGPD / Sécuriser mon SI / Répondre à un client grand compte / Autre

Phase 2 — Mini-audit dynamique (5-8 questions adaptatives) :

- Les questions changent selon les réponses de la Phase 1
- Si NIS2 sélectionné → questions ReCyF ciblées (gouvernance, détection, incident)
- Si RGPD → questions CNIL (registre, DPO, droits des personnes)
- Si "sécuriser mon SI" → questions techniques (MFA, sauvegardes, patches)
- Toujours sous forme de boutons/curseurs, pas de saisie libre

Phase 3 — Résultat + ouverture conversationnelle :

- Score affiché avec radar chart
- Top 3 des non-conformités identifiées
- Pack recommandé avec prix
- "Avez-vous des questions sur ces résultats ?" → maintenant le free-form s'ouvre, mais UNIQUEMENT sur le contexte du pré-audit (le LLM a le contexte des réponses)
- L'agent peut alors affiner, expliquer, rassurer, et closer vers le RDV

**Avantage vs chatbot pur** : le prospect ne peut PAS détourner l'agent en Phase 1 et 2 (c'est des boutons, pas du texte libre). Le LLM n'intervient qu'en Phase 3, dans un contexte déjà cadré. La surface d'attaque est réduite de 80%.

### 12.4 Agent "Concierge Subventions" (Vertical Associations)

**Concept** : Agent spécialisé pour les associations qui cherchent des financements. Il discute du projet de l'association et matche avec les subventions du datalake.

**Exemple de conversation** :

> Association : "On est une asso loi 1901 à Toulouse, on fait de l'insertion par le sport pour les jeunes des quartiers et on cherche des financements pour ouvrir un deuxième local"
>
> Agent : "Votre projet d'insertion par le sport à Toulouse est éligible à plusieurs dispositifs. Voici ce que j'ai identifié :
>
> 🏆 Forte compatibilité :
>
> - Agence Nationale du Sport — Projet Sportif Fédéral (PSF)
> - DRAJES Occitanie — Subventions politique de la ville
> - Toulouse Métropole — Appel à projets Sport & Inclusion
>
> 💰 Compatibilité moyenne :
>
> - FDVA 2 — Fonctionnement/Innovation
> - Fondation de France — Appel Sport & Éducation
>
> Pour affiner le matching, j'ai besoin de savoir :
>
> 1. Votre budget annuel actuel ?
> 2. Nombre de bénéficiaires par an ?
> 3. Avez-vous déjà obtenu des subventions publiques ?"

**Cadrage sécurité identique au 12.2** mais avec whitelist de sujets restreinte au monde associatif, subventions et financement. Les données du datalake ne sont jamais exposées en brut — l'agent ne montre que des résultats de matching, jamais les données sources.

---

## 13. SYSTÈMES AVANCÉS (Différenciation Maximum)

### 13.1 Simulateur de Crise Cyber Interactif

**Concept** : Le prospect vit une cyberattaque simulée en temps réel. C'est un serious game, pas un quiz. Chaque décision a des conséquences sur le score final.

**Parcours narratif** (5-7 étapes, 3-4 minutes) :

Scénario d'entrée : "Lundi 8h47. Votre DAF vous appelle : impossible d'accéder aux fichiers comptables. Tous les dossiers partagés affichent une extension .locked. Une fenêtre rouge demande 50 000€ en Bitcoin. Que faites-vous ?"

À chaque étape, 3 choix possibles :

- Le bon choix (conforme aux recommandations ANSSI) → score +
- Le choix moyen (instinct naturel mais sous-optimal) → score neutre
- Le mauvais choix (aggrave la situation) → score - et conséquences visibles (coût qui monte, données perdues, temps qui passe)

Métriques qui évoluent à chaque décision :

- Compteur de coût financier (commence à 0€, monte selon les décisions)
- Barre de temps (l'horloge tourne — rappel des 24h de notification ANSSI)
- Jauge de confiance des parties prenantes (clients, direction, ANSSI)
- Données compromises (nombre de fichiers/personnes impactées)

Scénarios possibles (sélectionnés aléatoirement ou au choix) :

- Ransomware classique
- Phishing ciblé + compromission email du DG (fraude au président)
- Fuite de données clients découverte par un journaliste
- Attaque supply chain via un prestataire compromis
- Insider threat : un employé exfiltre des données avant de partir

Résultat final :

- Score de gestion de crise (A-F)
- Récap des décisions avec "ce qu'il aurait fallu faire" à chaque étape
- Coût total de l'incident selon vos décisions vs coût optimal
- "Votre PRA/PCA vous aurait fait économiser XX 000€"
- CTA : "Préparez votre organisation → Kit Réponse Incidents (2 000-4 000€)"

### 13.2 Scan de Surface d'Attaque en Self-Service

**Concept** : Le prospect entre le nom de domaine de son entreprise, l'outil lance un scan non-intrusif et retourne un rapport de surface d'attaque externe.

**Ce que le scan vérifie (100% passif et légal)** :

- DNS records (MX, SPF, DKIM, DMARC) — la majorité des PME n'ont pas DMARC
- Headers HTTP de sécurité (HSTS, CSP, X-Frame-Options, X-Content-Type-Options)
- Certificat SSL/TLS (validité, force, chaîne complète)
- Sous-domaines exposés (via certificat transparency logs, DNS brute-force léger)
- Technologies détectées (CMS, framework, versions — via Wappalyzer-like)
- Ports ouverts communs (80, 443, 22, 21, 3389 — scan TCP léger)
- Présence dans les listes de fuites connues (Have I Been Pwned, domaine)
- Score DMARC et risque d'usurpation email

**Résultat visible** (sans gate) :

- Note globale A-F avec jauge
- 3 trouvailles les plus critiques (ex: "SPF configuré mais pas DMARC → risque d'usurpation email")
- Nombre total de findings par sévérité (critique / haute / moyenne / info)

**Gate** : "Téléchargez votre rapport complet avec détail des 23 points vérifiés et les étapes de remédiation" → email

**Garde-fous légaux** :

- Disclaimer explicite : "Ce scan est 100% passif et n'envoie aucune requête intrusive"
- ToS que le prospect accepte avant le scan : "Je confirme être autorisé à scanner ce domaine"
- Rate limit : 3 scans par IP par jour, 1 scan par domaine par semaine
- Exclusion des domaines gouvernementaux et militaires
- Log de tous les scans pour audit de conformité

### 13.3 Tableau de Bord de Conformité Temps Réel (Teaser Produit)

**Concept** : Dashboard interactif pré-rempli avec des données de démo qui montre à quoi ressemble un suivi de conformité NIS2/RGPD continu. C'est la démo de ce que le prospect obtient s'il achète l'offre Monitoring.

**Contenu du dashboard démo** :

- Score de conformité global avec évolution sur 12 mois (courbe montante)
- Matrice de maturité ReCyF avec couleurs par objectif
- Alertes récentes simulées ("3 nouvelles vulnérabilités détectées", "Certificat SSL expire dans 15 jours")
- Timeline des prochaines échéances réglementaires
- Comparaison sectorielle anonymisée
- Rapport mensuel auto-généré (preview)

**Interactivité** :

- Le prospect peut cliquer partout, explorer les métriques
- Certaines zones sont "blurred" avec un cadenas : "Disponible avec l'offre Monitoring"
- Bouton "Voir avec vos données réelles → Réservez un appel"

### 13.4 Générateur de Cahier des Charges Cybersécurité

**Concept** : Le prospect répond à 10-15 questions, l'agent LLM génère un cahier des charges cybersécurité qu'il peut utiliser pour consulter des prestataires (dont toi évidemment).

**Pourquoi c'est brillant** :

- Le prospect obtient un vrai document utile (5-10 pages)
- Le cahier des charges est structuré selon TES prestations et TA méthodologie
- Quand le prospect envoie ce CDC à 3 prestataires, le tien est déjà aligné par construction
- Les concurrents devront s'adapter à un format qui t'avantage
- Tu as les coordonnées + le besoin détaillé du prospect avant même qu'il te contacte

**Contenu généré** :

- Contexte de l'entreprise (pré-rempli via les réponses)
- Périmètre de la mission (basé sur les gaps identifiés)
- Exigences techniques (alignées sur ReCyF/ANSSI)
- Livrables attendus (calqués sur ton catalogue)
- Critères d'évaluation (qui matchent tes forces)
- Budget indicatif (basé sur ton configurateur)
- Planning indicatif

**Gate** : Généré gratuitement mais envoyé par email en PDF branded. Le prospect voit ton logo sur le document qu'il envoie à tes concurrents. Même s'il ne te choisit pas (peu probable), ta marque circule.

### 13.5 Espace "War Room" — Simulateur de Notification ANSSI

**Concept** : Le prospect simule la notification d'un incident à l'ANSSI dans les délais NIS2 (24h / 72h / 30 jours). Chronomètre réel.

**Parcours** :

- Scénario : "Un incident vient d'être détecté. Le chrono démarre."
- Le prospect doit remplir les champs du formulaire de notification ANSSI (simplifié)
- À chaque champ : aide contextuelle ("Quelles informations l'ANSSI attend ici")
- Le chrono tourne en haut de l'écran
- Si le prospect met plus de 5 minutes pour la notification initiale → message : "En situation réelle, vous auriez 24h pour cette étape. Combien de temps vous faudrait-il ?"
- À la fin : comparaison temps du prospect vs temps d'une organisation préparée
- CTA : "Préparez votre procédure de notification → Kit Réponse Incidents"

### 13.6 Comparateur "Votre Offre vs. Le Marché"

**Concept** : Le prospect configure sa mission, et l'outil compare TON prix vs le prix marché moyen. Tu gagnes à tous les coups puisque tu es 30-50% moins cher grâce à l'automatisation GPU.

**Affichage** :

- Colonne gauche : "Approche traditionnelle" — prix marché (8 000-25 000€), délai (15-25 jours), méthodologie (manuelle, Excel)
- Colonne droite : "Approche IA-Augmentée" — ton prix (2 500-5 000€), délai (3-5 jours), méthodologie (automatisée, GPU, LLM souverain)
- Différence mise en évidence : "Vous économisez 60% et 15 jours"
- Badge : "Même rigueur, puissance de l'IA en plus"

---

## 14. MISE À JOUR STRATÉGIE DE DÉPLOIEMENT

### Priorisation révisée avec les nouveaux outils

Phase 1 — Semaine 1-2 (lead capture immédiat) :

1. Scanner PII Live (4.1) — effet wow, preuve de tech
2. Simulateur de Sanction NIS2 (1.1) — peur, 3h de dev
3. Devis Express 3 questions (11.2) — conversion directe
   → Objectif : premiers leads qualifiés entrants

Phase 2 — Semaine 3-4 (qualification + closing) : 4. Auto-Diagnostic NIS2 (2.1) — qualification profonde 5. Configurateur Build Your Pack (11.1) — closing self-service 6. Quiz CNIL viral (6.4) — acquisition organique LinkedIn
→ Objectif : premiers devis envoyés, premiers clients

Phase 3 — Semaine 5-8 (agentic + différenciation) : 7. Agent Pré-Audit Express (12.3) — qualification conversationnelle 8. Scan Surface d'Attaque (13.2) — preuve technique massive 9. Simulateur de Crise (13.1) — contenu viral + éducation prospect 10. Comparateur vs Marché (13.6) — outil de closing

Phase 4 — Semaine 9-12 (scaling + produit) : 11. Albert Advisor full agent (12.1) — automatisation pré-vente 12. Agent Concierge Subventions (12.4) — funnel SubventionIA 13. Dashboard Conformité Teaser (13.3) — upsell monitoring 14. Générateur CDC (13.4) — acquisition sneaky via le CDC

---

## 15. HOOKS PHYSIQUES & SOCIAL ENGINEERING COMMERCIAL

> Principe : appliquer les techniques d'intrusion physique en cybersécurité (red team) au commerce. Chaque "attaque" est en réalité une démonstration de compétence qui se termine par une offre commerciale. Tu prouves le problème en le démontrant.

### 15.1 QR Code "WiFi Gratuit" Piégé (Le Hook de Ted)

**Concept** : Imprimer des affiches/stickers "WiFi Gratuit — Scannez pour vous connecter" et les placer devant des entreprises, coworkings, CCI, pôles d'activité, campus, salles de conférence.

**Parcours du "piégé"** :

- La personne scanne le QR code pensant accéder au WiFi
- Elle arrive sur une landing page qui ressemble à un portail WiFi captif classique (champ email, bouton "Se connecter")
- MAIS au lieu de connecter au WiFi, la page affiche un message révélation :

> "STOP. Vous venez de scanner un QR code inconnu et de donner votre email à un inconnu.
>
> En situation réelle, ce QR code aurait pu :
> → Installer un malware sur votre téléphone
> → Voler vos identifiants
> → Vous rediriger vers un faux site bancaire
>
> Bonne nouvelle : ceci est une démonstration de sensibilisation cybersécurité par [Ta Marque].
> Votre email n'a pas été enregistré. Mais la prochaine fois, il pourrait l'être.
>
> Votre entreprise est-elle protégée contre ce type d'attaque ?
> [Testez votre sécurité gratuitement →] [Réservez une sensibilisation pour vos équipes →]"

**Variantes** :

- Version "portail captif" : demande email + mot de passe → révèle "vous venez de donner vos identifiants à un inconnu"
- Version "mise à jour" : "Votre téléphone nécessite une mise à jour de sécurité. Cliquez ici." → révèle le piège
- Version "QR code parking" : simule un QR de paiement de parking → même révélation

**Cadrage éthique et légal** :

- AUCUNE donnée n'est collectée ni stockée avant la révélation — la page montre le formulaire mais ne l'envoie pas (le JS bloque la soumission)
- Disclaimer visible en petit en bas de l'affiche : "Démonstration de sensibilisation cybersécurité — [tamarque.fr]"
- Pas de placement sur des propriétés privées sans accord (espaces publics, événements avec autorisation)
- Conformité RGPD totale : aucune collecte de donnée. Le prospect donne son email APRÈS la révélation, volontairement, pour recevoir la sensibilisation
- Retirer les affiches après 48-72h pour rester dans le cadre d'une "campagne de sensibilisation"

**Où placer** :

- Devant les CCI et Chambres de Métiers (forte concentration de dirigeants PME)
- Halls d'entrée d'immeubles de bureaux / pôles tech / pépinières
- Événements business locaux, salons, meetups tech
- Campus universitaires (toucher les futurs DSI/RSSI)
- Salles d'attente médicales et cabinets comptables (cibles RGPD)

**Déclinaison événement** : Organiser un mini-atelier "Live Hacking Demo" de 20 minutes dans un coworking/CCI. Tu montres en live comment le QR code piège fonctionne, comment un phishing est construit, comment on récupère un mot de passe WiFi. 20 minutes de démo = 45 minutes de questions = 3-5 prospects chauds dans la salle.

### 15.2 Clé USB "Rapport Cybersécurité" (USB Drop Markéting)

**Concept** : Laisser des clés USB brandées dans des zones stratégiques (parkings d'entreprise, halls, salles de conférence). L'étiquette dit "Rapport Confidentiel — Audit Cybersécurité 2026". La curiosité fait le reste.

**Ce qui se passe quand on la branche** :

- La clé contient un unique fichier HTML (pas d'exécutable, 100% safe)
- Le fichier s'ouvre dans le navigateur et affiche :

> "Vous venez de brancher une clé USB inconnue sur votre machine professionnelle.
>
> En situation réelle, cette clé aurait pu :
> → Installer un keylogger en 3 secondes
> → Exfiltrer vos fichiers vers un serveur distant
> → Chiffrer votre disque dur (ransomware)
> → Ouvrir un accès permanent à votre réseau
>
> C'est exactement comme ça que 48% des intrusions physiques commencent.
>
> Ceci est une démonstration de [Ta Marque]. Aucun logiciel n'a été installé.
>
> [Testez la sécurité de votre entreprise →] [Réservez un atelier sensibilisation →]"

**Cadrage éthique** :

- AUCUN exécutable, AUCUN script actif, AUCUN autorun — juste un fichier HTML statique et inerte
- La clé est brandée avec ton logo et l'URL de ton site
- Mention sur l'étiquette en petit : "Démonstration de sensibilisation — [tamarque.fr]"
- Coût : 2-3€/clé USB en lot. 50 clés = 150€ pour potentiellement toucher 50 DSI/dirigeants

### 15.3 Faux Email de Phishing Personnalisé (Cold Outreach Choc)

**Concept** : Envoyer un email qui RESSEMBLE à un phishing ciblé (spear phishing) au DSI/RSSI d'une entreprise cible. Le lien mène à ta page de révélation + offre commerciale.

**Exemple d'email** :

> Objet : Facture impayée #INV-2026-4417 — Action requise
>
> Bonjour [Prénom],
>
> Nous vous informons que la facture ci-jointe reste impayée depuis 30 jours.
> Veuillez régulariser avant le [date] pour éviter des pénalités de retard.
>
> [Consulter la facture →]
>
> Service Comptabilité
> [Nom d'une entreprise crédible]

**Quand le prospect clique** :

> "Vous venez de cliquer sur un lien dans un email non sollicité imitant une facture.
>
> Cet email présentait 5 indicateurs de phishing. Sauriez-vous les identifier ?
> [Quiz interactif : retrouvez les 5 indices →]
>
> Chaque jour, 3.4 milliards d'emails de phishing sont envoyés.
> 91% des cyberattaques commencent par un email.
>
> [Protégez vos équipes → Exercice phishing simulé complet (1 500-3 000€)]"

**ATTENTION — Cadrage légal très strict** :

- NE PAS usurper l'identité d'une vraie entreprise (utiliser un nom fictif ou clairement le tien)
- NE PAS envoyer en masse (cibler 1 par 1 les DSI/RSSI identifiés, comme du cold outreach)
- L'email doit contenir un footer visible : "Ceci est un test de sensibilisation par [Ta Marque]"
- Alternative plus safe : proposer le test APRÈS un premier contact ("Je peux vous montrer en live comment vos équipes réagiraient à un phishing — voulez-vous que je vous envoie un test ?")
- La version la plus propre : l'email n'est PAS envoyé en cold. Tu proposes sur ton site "Testez la résilience de vos équipes — Recevez un email de phishing simulé" et c'est le prospect qui demande à être "attaqué"

### 15.4 Carte de Visite "Hack" (NFC/QR Interactif)

**Concept** : Ta carte de visite n'est pas une carte — c'est une démo de compétence.

**Variante NFC** :

- Carte avec puce NFC intégrée (5-8€/carte en petites séries)
- Quand le prospect approche son téléphone, la carte ouvre automatiquement une page web
- La page dit : "Votre téléphone vient de se connecter automatiquement à un appareil inconnu. En milieu professionnel, ce comportement est un risque de sécurité."
- Puis transition vers ta page de présentation avec tes services

**Variante QR dynamique** :

- Un QR code sur la carte qui change de destination selon le contexte (via un short link dynamique)
- En mode "salon/événement" → page d'auto-diagnostic rapide
- En mode "prospection" → page de prise de RDV Calendly
- En mode "suivi" → page de case studies et témoignages
- Tu changes la destination depuis un dashboard sans réimprimer les cartes

**Variante "carte piégée" minimaliste** :

- Recto : juste un QR code et "Scannez-moi" (pas de nom, pas de logo, rien)
- Verso (révélé seulement après le scan) : ton nom, titre, contact
- La curiosité fait le reste — taux de scan quasi 100%

### 15.5 Audit "Guerilla" en Live dans les Événements

**Concept** : Aller dans un salon/meetup/événement business avec un laptop, scanner en live les réseaux WiFi visibles, les headers des sites web des entreprises présentes, et montrer les résultats anonymisés sur un écran.

**Le setup** :

- Laptop avec un écran visible ou un petit moniteur posé sur la table
- Dashboard qui affiche en temps réel : nombre de réseaux WiFi ouverts (non chiffrés), sites web des exposants avec notes de sécurité headers (A-F), nombre de domaines sans DMARC
- Un panneau : "Votre entreprise est-elle sur cet écran ? Venez vérifier."
- Les gens s'approchent, cherchent leur entreprise, voient leur score → conversation commerciale naturelle

**Cadrage** : Uniquement des scans passifs et publics (WiFi broadcast, headers HTTP publics). Aucune intrusion. C'est l'équivalent de regarder les enseignes des magasins depuis la rue.

---

## 16. CHEVAUX DE TROIE NUMÉRIQUES

> Principe : offrir quelque chose de réellement utile et gratuit, mais dont l'usage naturel crée une dépendance, une visibilité, ou un flux de données qui te profite commercialement.

### 16.1 Templates de Conformité Open Source (Le Trojan Documentaire)

**Concept** : Publier sur GitHub et ton site un pack de templates de conformité professionnels et gratuits.

**Contenu du pack** :

- Template de PSSI (Politique de Sécurité du SI) — 15 pages, professionnel
- Template de Registre des traitements RGPD — format Excel/Notion
- Template de PCA/PRA — 10 pages
- Template de procédure de notification d'incident ANSSI
- Template d'analyse de risques simplifiée (EBIOS RM light)
- Checklist NIS2 imprimable (poster A3)
- Template de questionnaire sécurité fournisseurs

**Pourquoi c'est un cheval de Troie** :

- Chaque template contient en header/footer : "Template créé par [Ta Marque] — Besoin d'aide pour le remplir ? tamarque.fr"
- Le prospect télécharge, utilise, envoie à sa direction → ta marque circule dans l'organisation
- Les templates sont bons mais incomplets — il manque la partie personnalisée qui nécessite un accompagnement
- Le prospect qui utilise tes templates pense naturellement à toi quand il a besoin d'aide
- Le pack est hébergé sur ton site derrière une gate email → lead capture
- Sur GitHub : les stars et forks deviennent de la social proof technique

**Le twist** : Inclure un petit script d'analytics dans les templates Excel/Notion (pixel de suivi dans le logo en ligne) — quand quelqu'un ouvre le fichier en ligne, tu sais que le template est utilisé. Éthiquement borderline, à réserver à la version web/Notion uniquement avec mention dans les ToS.

### 16.2 Extension Chrome "Security Score" (Le Trojan Navigateur)

**Concept** : Extension Chrome gratuite qui affiche un badge de sécurité pour chaque site web visité (note A-F basée sur les headers de sécurité).

**Ce que l'extension fait** :

- Analyse automatiquement les headers HTTP de chaque site visité
- Affiche un petit badge coloré (vert A → rouge F) dans la barre d'extension
- Au clic : détail des headers manquants, note par catégorie, recommandations
- Optionnel : "Scannez votre propre site → rapport complet" (redirige vers ton outil 13.2)

**Pourquoi c'est un Trojan** :

- Les DSI/RSSI l'installent parce que c'est utile au quotidien
- Chaque jour ils voient ta marque dans leur navigateur
- Quand ils visitent leur propre site et voient un "D" → ils te contactent
- L'extension peut notifier : "3 nouveaux sites dangereux visités cette semaine" → rappel constant du risque cyber → rappel de toi
- Analytics anonymisées (sans PII) : tu sais quels types de sites sont les plus mal sécurisés → contenu marketing data-driven

### 16.3 Bot Telegram/Slack "Veille Cybersécurité" (Le Trojan Communautaire)

**Concept** : Un bot gratuit qui poste quotidiennement dans un canal Telegram/Slack : alertes CVE françaises, actualités ANSSI, deadlines NIS2, résumés de sanctions CNIL.

**Ce que le bot poste** :

- Chaque matin : résumé des 3 principales alertes cyber du jour (via flux RSS CERT-FR, ANSSI)
- Chaque semaine : countdown NIS2 ("Il reste X jours"), résumé des sanctions CNIL de la semaine
- Alertes en temps réel : quand une CVE critique touche un logiciel courant (Microsoft, Apache, PHP…)
- Mensuel : mini-rapport de tendances ("Ce mois-ci : +23% d'attaques ransomware en France")

**Pourquoi c'est un Trojan** :

- Les DSI/RSSI ajoutent le bot à leur canal interne → ta marque est dans leur outil de travail quotidien
- Chaque alerte se termine par un discret : "Besoin d'un audit ? [tamarque.fr]"
- Tu construis une audience captive sans effort de contenu (tout est auto-généré via API/RSS + LLM)
- Le bot peut répondre à des questions basiques sur NIS2/RGPD → version light de l'agent Albert
- Quand le bot détecte une CVE qui touche le stack technique du prospect (s'il l'a renseigné) → alerte personnalisée → moment de vulnérabilité = moment d'achat

### 16.4 GitHub Actions / CI Plugin Gratuit (Le Trojan DevOps)

**Concept** : Publier un plugin GitHub Actions gratuit qui scanne le code pour détecter les secrets exposés (API keys, mots de passe) et les PII hardcodées.

**Ce que le plugin fait** :

- Scan automatique à chaque push/PR
- Détecte : clés API, tokens, mots de passe, connexions BDD en clair, PII dans le code
- Report dans la PR avec annotations inline
- Badge de status dans le README ("PII-free ✓")

**Pourquoi c'est un Trojan** :

- Les développeurs l'installent parce que c'est utile et gratuit
- Chaque PR affiche "Powered by [Ta Marque]" → visibilité dans l'équipe dev
- Le CTO/DSI voit le badge dans les repos → awareness de ta marque
- Upsell naturel : "Vous voulez un scan complet de votre infrastructure ? Pas juste le code ?" → prestation complète
- Analytics (opt-in) : nombre de secrets détectés, langages les plus courants → données pour ton marketing

### 16.5 Newsletter "Le Bulletin de Conformité" (Le Trojan Inbox)

**Concept** : Newsletter hebdomadaire automatisée, générée par LLM à partir des flux RSS ANSSI/CNIL/CERT-FR, envoyée tous les mardis matin.

**Contenu** :

- 3-5 actualités résumées (sanctions CNIL, alertes ANSSI, deadlines NIS2)
- 1 "Quick Win" : une action concrète que le lecteur peut faire cette semaine
- 1 outil gratuit de la semaine (lien vers un de tes outils du site)
- Countdown NIS2 permanent en header
- Footer : "Besoin d'aide ? Réservez 30 minutes →"

**Pourquoi c'est un Trojan** :

- Le lecteur reçoit de la valeur gratuitement chaque semaine → confiance
- Chaque numéro contient un lien vers un de tes outils → trafic récurrent
- Le countdown NIS2 crée une pression progressive semaine après semaine
- Quand le prospect est prêt à acheter, il a déjà reçu 10+ preuves de compétence
- Le contenu est quasi-zero effort (LLM + flux RSS + template email)

### 16.6 Rapport Sectoriel Annuel Gratuit (Le Trojan Thought Leadership)

**Concept** : Publier un "Baromètre Cybersécurité des PME [Région/Secteur] 2026" basé sur les données anonymisées de tes outils + datalake.

**Contenu** :

- Score moyen de maturité cyber par secteur (données de tes simulateurs)
- Top 5 des vulnérabilités les plus courantes dans la région
- Taux de conformité NIS2 estimé
- Comparaison nationale vs régionale
- Tendances sur 6-12 mois
- Recommandations par profil de maturité

**Pourquoi c'est un Trojan** :

- Les CCI, fédérations, médias locaux relaient le rapport → visibilité massive gratuite
- Les entreprises citées (anonymement) dans le rapport veulent en savoir plus → leads inbound
- Le rapport positionne ta marque comme l'expert de référence dans la région
- Les journalistes locaux te citent comme source → SEO + crédibilité
- Le rapport est gaté derrière un email, mais le résumé exécutif (2 pages) est libre → double layer de capture

---

## 17. TECHNIQUES CYBERSEC APPLIQUÉES AU MARKETING

> Concept central : chaque technique d'offensive cybersécurité a un miroir marketing légitime. La kill chain d'une cyberattaque est structurellement identique à un tunnel de vente.

### 17.1 Mapping Kill Chain → Funnel de Vente

| Étape Kill Chain     | Technique Cyber                | Équivalent Marketing                          | Ton Outil                         |
| -------------------- | ------------------------------ | --------------------------------------------- | --------------------------------- |
| Reconnaissance       | OSINT, scan de surface         | Recherche de prospects, scraping LinkedIn     | Datalake + OSINT agents Albert    |
| Weaponization        | Craft du payload               | Création du contenu/outil de conversion       | Simulateurs, quiz, calculateurs   |
| Delivery             | Email, USB, web                | Distribution du contenu (LinkedIn, SEO, QR)   | Posts, QR codes, événements       |
| Exploitation         | Exécution du payload           | Le prospect utilise l'outil, voit le résultat | Scanner PII, diagnostic NIS2      |
| Installation         | Persistence dans le système    | Le prospect s'abonne, installe l'extension    | Newsletter, extension Chrome, bot |
| Command & Control    | Communication avec l'attaquant | Nurturing : emails séquencés, relances        | Séquence email, CRM, retargeting  |
| Actions on Objective | Exfiltration, chiffrement      | Closing : devis, signature, paiement          | Configurateur, appel, contrat     |

### 17.2 OSINT Pré-Prospection Automatisée

**Concept** : Avant de contacter un prospect, lancer automatiquement un mini-recon OSINT pour personnaliser l'approche.

**Ce que tu collectes (tout est public)** :

- Site web → headers de sécurité, techno détectée, certificat SSL
- LinkedIn → taille de l'entreprise, postes ouverts (un poste RSSI ouvert = ils cherchent de l'aide), actualités
- Societe.com / Pappers → CA, effectif, secteur NAF → déterminer si entité NIS2
- CNIL → vérifier s'ils ont un DPO déclaré (cnil.fr/dpo)
- DNS/DMARC → score email security
- Have I Been Pwned → fuites associées au domaine
- data.gouv.fr → subventions reçues (pour les assos)

**Le résultat** : une fiche prospect pré-remplie avec un "angle d'attaque" marketing personnalisé.

**Exemple de cold outreach ultra-personnalisé** :

> "Bonjour [Prénom], j'ai remarqué que [entreprise] n'a pas de DMARC configuré sur son domaine email — ce qui signifie que n'importe qui peut envoyer des emails en se faisant passer pour vous. Par ailleurs, en tant qu'entreprise de [secteur] avec [X] salariés, vous êtes probablement classés comme entité importante sous NIS2 (deadline octobre 2026). Souhaitez-vous un diagnostic rapide gratuit ?"

**Taux de réponse estimé** : 20-35% (vs 2-5% pour un cold outreach générique). Parce que le prospect voit que tu sais de quoi tu parles et que c'est spécifique à LUI.

**Automatisation** : Albert (agent OSINT) fait le recon, génère la fiche, rédige le cold email. Tu valides et envoies. 10 prospects/jour en 30 minutes.

### 17.3 Honeypot Marketing (Attirer les Prospects à Toi)

**Concept** : Au lieu de chercher les prospects, créer des "pièges" qui les attirent naturellement.

**Les honeypots** :

- Page web "Votre entreprise est-elle sur la liste NIS2 ?" — SEO optimisé sur "NIS2 entreprise concernée France" → le prospect qui cherche tape exactement ça dans Google
- Page "Vérifier mon DMARC" — SEO sur "test DMARC" → les DSI qui cherchent arrivent chez toi
- Page "Modèle registre des traitements RGPD gratuit" — SEO sur "registre traitements RGPD template" → les DPO arrivent chez toi
- Page "Combien coûte un audit cybersécurité" — SEO sur "prix audit cyber PME" → les décideurs avec budget arrivent chez toi
- Chaque page = un outil interactif (pas juste un article) → conversion 5-10x supérieure à un simple blog post

**Pourquoi ça marche** : Le prospect qui cherche "suis-je concerné par NIS2" a DÉJÀ le problème, DÉJÀ l'intention, et DÉJÀ l'urgence. Tu ne vends pas — tu réponds à une question qu'il se pose déjà.

### 17.4 Lateral Movement Commercial (Pivot Organisationnel)

**Concept** : Quand tu as un contact dans une entreprise, l'utiliser comme vecteur pour atteindre les autres décideurs.

**Les techniques** :

- Tu fais un scan PII pour le DPO → tu trouves des vulnérabilités techniques → tu demandes une intro au DSI
- Tu fais un diagnostic NIS2 pour le DSI → tu identifies des risques juridiques → tu demandes une intro au DG et au directeur juridique
- Tu sensibilises les équipes (atelier phishing) → les participants en parlent à la direction → la direction te contacte
- Tu fais un mini-audit gratuit pour un service → tu publies les résultats (anonymisés) en interne → les autres services veulent le même
- Chaque prestation livrée = une porte vers le prochain interlocuteur et la prochaine prestation

**Le script** : "Les résultats de votre audit RGPD montrent des points qui concernent aussi votre infrastructure technique. Votre DSI serait-il disponible pour un point de 15 minutes ? Je pourrais lui montrer 2-3 quick wins gratuits."

### 17.5 Supply Chain Attack Marketing (Attaque par la Chaîne de Valeur)

**Concept** : Au lieu d'attaquer la cible finale directement, passer par ses fournisseurs ou clients.

**Application concrète** :

- Tu sais que les grandes entreprises exigent de leurs fournisseurs PME des preuves de conformité NIS2/RGPD (Art. 21 NIS2 — supply chain)
- Tu cibles les grands donneurs d'ordre de la région (Airbus, Thales, Pierre Fabre, etc.) et tu leur proposes un "Pack Conformité Fournisseurs" → ils diffusent ton outil de diagnostic à leurs 50-200 fournisseurs PME → chaque PME fait le diagnostic → chaque PME reçoit ton offre
- Tu ne démarches pas 200 PME. Tu démarches 1 grand compte qui te donne accès à 200 PME.
- Le grand compte est content (il vérifie sa supply chain gratuitement), les PME sont contentes (elles obtiennent un diagnostic gratuit), et toi tu captures 200 leads qualifiés.

**Le pitch au grand compte** : "Vous êtes responsable de la sécurité de votre supply chain sous NIS2. Je vous propose un outil de diagnostic gratuit que vos fournisseurs peuvent utiliser pour évaluer leur conformité. Vous recevez un dashboard agrégé de la maturité de votre supply chain. Vos fournisseurs reçoivent un diagnostic personnalisé et une offre d'accompagnement s'ils en ont besoin."

### 17.6 Watering Hole Marketing (Point d'Eau)

**Concept** : En cybersécurité, un watering hole attack consiste à compromettre un site que la cible visite régulièrement. En marketing, c'est aller là où tes prospects se rassemblent déjà.

**Les "points d'eau" de tes prospects** :

- Groupes LinkedIn : "RSSI France", "DPO France", "DSI PME", "Cybersécurité Occitanie"
- Communautés Slack/Discord : communautés French Tech, communautés DevSecOps
- Forums : Reddit r/france, forum ANSSI, commentaires sur les articles ZDNet/LeMagIT
- Événements récurrents : FIC (Forum International de la Cybersécurité), meetups locaux, webinaires ANSSI
- Publications : newsletter ANSSI, newsletter CNIL, newsletter DPO

**La stratégie** : Ne pas vendre dans ces espaces. Contribuer. Répondre aux questions. Partager tes outils gratuits comme "j'ai fait ça, ça pourrait vous servir". Devenir le mec qui sait. Quand ils ont un besoin, ils pensent à toi en premier parce que tu es déjà dans leur champ de vision.

### 17.7 Persistence & Callbacks (Rester dans le Système)

**Concept** : En cybersécurité, la persistence c'est s'assurer que l'accès au système survit à un redémarrage. En marketing, c'est s'assurer que le prospect ne t'oublie pas.

**Mécanismes de persistence** :

- Extension Chrome installée → ta marque visible chaque jour
- Bot Telegram/Slack dans leur canal → présence quotidienne
- Newsletter chaque mardi → rappel hebdomadaire
- Templates avec ton logo dans leurs dossiers → ta marque dans leurs fichiers
- Calendrier NIS2 avec tes deadlines dans leur Google Calendar → rappels automatiques
- Rapport annuel/trimestriel dans leurs bookmarks → ressource de référence
- Plugin CI/CD dans leur pipeline → ta marque dans leur workflow dev

**Le principe** : plus tu as de "callbacks" installés, plus le prospect te contacte naturellement le jour J. Pas de relance agressive nécessaire — tu es déjà dans son environnement.

---

## 18. SYSTÈMES D'ESSOREUSE (Maximiser la Valeur par Client)

> Objectif : chaque client entre par UNE prestation et ressort avec CINQ. Le coût d'acquisition d'un client est élevé — il faut l'amortir en maximisant le revenu par client.

### 18.1 La Cascade de Prestations (Upsell Automatique)

Chaque prestation livrée génère mécaniquement le besoin de la suivante :

Scan PII (800€) → "Nous avons trouvé 347 PII non protégées. Voulez-vous un audit RGPD complet ?"
→ Audit RGPD (2 500€) → "Votre registre des traitements est incomplet et vous n'avez pas d'AIPD."
→ Registre + AIPD (2 500€) → "Votre sécurité technique ne couvre pas les exigences de l'Art. 32."
→ Scan Vulnérabilités (2 000€) → "Vous n'avez pas de monitoring ni de procédure d'incident."
→ Kit Incidents + Monitoring (4 000€ + 500€/mois) → "Pour être pleinement conforme NIS2, il manque la PSSI et le PCA."
→ PSSI + PCA (5 000€) → "La conformité se maintient. Nous proposons un suivi récurrent."
→ Monitoring mensuel (800€/mois) → récurrence infinie

**Revenu total cascade complète** : ~16 800€ one-shot + 800€/mois récurrent
**Revenu si le client était entré directement par "audit NIS2 complet"** : ~5 000€

**La cascade 3x le revenu** parce que chaque étape crée un nouveau besoin que le client ne voyait pas au départ.

### 18.2 Le Programme "Parrain Cyber"

**Concept** : Chaque client satisfait devient un apporteur d'affaires rémunéré.

**Mécanique** :

- Après livraison + satisfaction confirmée, proposer : "Connaissez-vous d'autres dirigeants/DSI qui pourraient bénéficier d'un diagnostic ? Pour chaque client signé via votre recommandation, nous vous offrons 10% du montant de la mission en avoir sur votre prochaine prestation."
- Le 10% est un avoir, pas du cash → ça revient chez toi
- Le parrain est motivé parce qu'il réduit le coût de sa prochaine prestation
- Le filleul arrive avec un niveau de confiance élevé (recommandation pair)
- Taux de conversion sur les leads parrainés : typiquement 40-60% (vs 5-10% en cold)

### 18.3 Le Rapport Trimestriel "Maintien de Conformité"

**Concept** : Après chaque mission, proposer un suivi trimestriel automatisé.

**Ce que le client reçoit** :

- Re-scan automatique de ses vulnérabilités (Nuclei/Trivy cron)
- Vérification DMARC/headers (automatique)
- Alerte si une nouvelle CVE touche sa stack technique
- Résumé des évolutions réglementaires qui le concernent
- Score de conformité mis à jour avec évolution vs trimestre précédent
- Le tout dans un PDF auto-généré par Mistral + template

**Prix** : 200-500€/trimestre (soit 800-2 000€/an)
**Coût pour toi** : quasi nul (tout est automatisé)
**Marge** : 85-95%

Le client reste "dans la boucle" indéfiniment. Si un problème apparaît → mission ponctuelle supplémentaire.

### 18.4 Certification / Badge de Conformité

**Concept** : Après un audit réussi (ou une mise en conformité), délivrer un "badge de conformité" que le client peut afficher sur son site web, ses propositions commerciales, et ses réponses aux appels d'offres.

**Ce que ça inclut** :

- Badge SVG/PNG "Audité NIS2 — [Ta Marque] — 2026" à intégrer sur le site web du client
- Certificat PDF signé avec le périmètre et la date de l'audit
- Page de vérification en ligne : tamarque.fr/verify/[ID] qui confirme l'authenticité du badge
- Validité 12 mois → le client doit renouveler chaque année → récurrence

**Pourquoi c'est un Trojan** :

- Le badge sur le site du client = publicité gratuite permanente pour ta marque
- Les visiteurs du site client voient ton badge → cliquent → découvrent tes services
- Quand le client envoie son badge dans une réponse à un appel d'offres, ta marque circule chez le donneur d'ordre
- Le donneur d'ordre veut la même chose pour lui ou ses autres fournisseurs → lead inbound
- Le renouvellement annuel = revenu récurrent garanti

### 18.5 Offre "RSSI à Temps Partagé"

**Concept** : Pour les PME qui n'ont pas les moyens d'un RSSI à temps plein (salaire 70-90k€/an), proposer un RSSI externalisé à temps partagé.

**Formule** :

- 1 jour/mois : veille, reporting, suivi conformité → 800-1 200€/mois
- 2 jours/mois : + gestion incidents, relation ANSSI → 1 500-2 500€/mois
- 4 jours/mois : + gouvernance, comité direction → 3 000-4 500€/mois

**Pourquoi c'est l'essoreuse ultime** :

- C'est récurrent, prévisible, et le client ne peut pas facilement changer (coût de switching élevé)
- Tu es au cœur de la gouvernance du client → tu vois tous les besoins avant qu'ils soient formulés
- Chaque besoin identifié → prestation complémentaire facturée en plus du forfait
- 5 clients en RSSI partagé à 1 500€/mois = 7 500€/mois de MRR = 90 000€/an → ton allocation de 430€/mois est un lointain souvenir

---

## 19. IA PRÉDICTIVE — TRANSFORMER LA DATA EN MACHINE À CASH

> Les plateformes d'intent data B2B (6sense, Bombora, Demandbase) facturent 12 000 à 300 000$/an pour faire exactement ce que tu peux construire toi-même avec ton datalake 2.84M entités + OSINT + GPU. La différence : tes données sont françaises, souveraines, et personne d'autre ne les a dans cette combinaison. C'est ton moat ultime.

### 19.1 Predictive Lead Scoring — "Qui contacter demain matin ?"

**Concept** : Un modèle ML qui score chaque entreprise de ton datalake sur sa probabilité d'acheter une prestation cybersécurité/RGPD dans les 30 prochains jours.

**Features d'entrée (ce que le modèle mange)** :

Données statiques (datalake) :

- Secteur NAF → poids si secteur NIS2 (18 secteurs critiques)
- Effectif → poids si >50 salariés (seuil NIS2) ou si entre 10-49 (marché cible PME)
- CA annuel → corrélé au budget disponible
- Ancienneté de l'entreprise → les jeunes structures ont souvent zéro compliance
- Localisation → proximité géographique (Toulouse/Occitanie = tu peux faire du sur-site)
- Présence d'un DPO déclaré à la CNIL (oui/non) → si non = besoin RGPD immédiat
- Marchés publics remportés récemment → si fournisseur d'entité NIS2, il a des obligations cascade

Signaux OSINT dynamiques (collectés par agents Albert) :

- Offre d'emploi RSSI/DSI/DPO publiée récemment → signal d'achat massif ("ils cherchent quelqu'un = ils ont un besoin non couvert")
- Changement de dirigeant récent (Pappers/Societe.com) → nouveau DG = nouvelles priorités = fenêtre de vente
- Mention dans un article presse liée à un incident cyber ou une sanction CNIL
- Domaine email sans DMARC configuré → vulnérabilité prouvable, angle d'attaque commercial
- Certificat SSL expiré ou faible → même logique
- Fuite de données connue associée au domaine (HIBP) → urgence démontrable
- Présence ou absence de page "mentions légales" / "politique de confidentialité" sur le site → indicateur de maturité RGPD
- Technologies détectées sur le site (Wappalyzer) → CMS obsolète = vulnérabilité, cloud provider = type d'infra
- Activité LinkedIn du dirigeant/DSI → posts récents sur cybersécurité ou conformité = awareness = réceptivité
- Subventions reçues récemment (data.gouv) → argent disponible = capacité de paiement

Signaux temporels :

- Distance temporelle au 17 octobre 2026 (deadline NIS2) → plus on s'approche, plus le score monte pour toutes les entités concernées
- Date de dernier contrôle CNIL dans le secteur → si la CNIL a contrôlé des concurrents récemment, panique sectorielle
- Saisonnalité budgétaire → les entreprises signent plus facilement en Q1 (nouveau budget) et Q4 (utiliser le budget restant)

**Modèle** : XGBoost GPU, entraîné sur les données de conversion de tes propres outils (qui a utilisé le simulateur NIS2, qui a demandé un devis, qui a signé). Au début sans données de conversion, tu démarres avec un scoring rule-based pondéré, puis tu migres vers du ML dès que tu as 50-100 leads qualifiés.

**Output** : Chaque matin, Albert te livre un top 10 des entreprises à contacter aujourd'hui, classées par score, avec l'angle d'attaque recommandé et le cold email pré-rédigé personnalisé.

**VRAM** : ~2 GB (XGBoost GPU) — tourne en 30 secondes sur 2.84M entités.

### 19.2 Détection de Signaux d'Achat en Temps Réel

**Concept** : Un pipeline qui monitore en continu les sources OSINT et déclenche des alertes quand un prospect montre un signal d'achat.

**Les signaux et leur source** :

| Signal                                                | Source                                | Interprétation                                          | Urgence    |
| ----------------------------------------------------- | ------------------------------------- | ------------------------------------------------------- | ---------- |
| Offre d'emploi RSSI/DPO/DevSecOps                     | LinkedIn API, Indeed, APEC, HelloWork | Besoin non couvert, budget alloué                       | TRÈS HAUTE |
| Nouveau dirigeant/DG/DSI                              | Pappers, Bodacc, LinkedIn             | Changement de priorités, fenêtre de décision            | HAUTE      |
| Levée de fonds / croissance rapide                    | Pappers, presse, Crunchbase           | Budget disponible, scaling = nouveaux risques           | HAUTE      |
| Incident cyber dans le secteur                        | CERT-FR, presse, Google Alerts        | Panique sectorielle, réflexe "ça pourrait nous arriver" | TRÈS HAUTE |
| Sanction CNIL dans le secteur                         | cnil.fr, presse                       | Même panique, plus spécifique RGPD                      | TRÈS HAUTE |
| Appel d'offres public mentionnant cybersécurité/RGPD  | BOAMP, marchés-publics.gouv           | Le budget est DÉJÀ voté, le besoin est FORMALISÉ        | MAXIMALE   |
| Expiration de certificat SSL                          | Certificate Transparency Logs         | Vulnérabilité technique, angle d'approche concret       | MOYENNE    |
| Changement de technologie sur le site                 | Scan Wappalyzer périodique            | Migration = nouveaux risques = nouveau besoin           | MOYENNE    |
| Suppression de la page "politique de confidentialité" | Monitoring web diff                   | Possible refonte = moment de remise à plat RGPD         | MOYENNE    |
| Subvention obtenue pour projet numérique              | data.gouv, Journal Officiel           | Argent frais + projet tech = besoin sécurité            | HAUTE      |

**Pipeline technique** :

- Agents Albert (OSINT) scrapent les sources toutes les 6-12h
- NER (CamemBERT) extrait les entités des articles/annonces
- Entity Resolution matche avec le datalake
- Scoring d'urgence (rule-based → ML)
- Notification Telegram/email avec fiche prospect pré-remplie + cold email suggéré

**Coût** : 0€ (agents sur VPS Contabo + modèles locaux)
**Équivalent commercial** : Bombora/6sense facturent ça 12 000-100 000$/an

### 19.3 Prédiction de Sanctions CNIL — "Qui sera le prochain ?"

**Concept** : Modèle prédictif qui identifie les entreprises/secteurs les plus susceptibles d'être sanctionnés par la CNIL dans les 6 prochains mois.

**Features** :

- Historique des sanctions CNIL (open data) : secteur, taille, type de manquement, montant
- Programmes de contrôle annoncés par la CNIL (thématiques prioritaires annuelles)
- Secteur d'activité de l'entreprise (corrélation avec les thématiques CNIL)
- Présence/absence de DPO déclaré
- Qualité de la politique de confidentialité du site (analysée par LLM)
- Volume de données traitées estimé (basé sur secteur + taille)
- Plaintes publiques (réseaux sociaux, forums, avis Google mentionnant "données personnelles", "RGPD")
- Nombre de sous-traitants techniques détectés sur le site (trackers, cookies tiers)

**Output** :

- Score de risque par entreprise (0-100)
- Top 100 des entreprises les plus exposées dans ta zone
- Secteurs en "zone rouge" ce trimestre

**Utilisation commerciale** :

- Cold outreach chirurgical : "La CNIL a annoncé des contrôles renforcés sur [votre secteur] ce trimestre. Votre entreprise est-elle prête ?"
- Contenu marketing : "Notre modèle prédit que 35% des PME du secteur santé en Occitanie ne survivraient pas un contrôle CNIL" → LinkedIn post viral → leads
- Vendu comme prestation : "Analyse de risque CNIL prédictive" → 500-1 500€

### 19.4 Prédiction de Succès de Subventions (SubventionIA Core)

**Concept** : Modèle qui prédit la probabilité qu'une association obtienne une subvention donnée, basé sur les attributions passées.

**Features** :

- Historique des subventions attribuées (data.gouv, Journal Officiel) : qui a reçu quoi, combien, quand
- Profil de l'association (RNA) : secteur, ancienneté, territoire, taille budget
- Profil de la subvention : critères publiés, montants moyens, taux de sélection
- Matching sémantique (embeddings BGE-M3) entre l'objet social de l'asso et les critères de la subvention
- Distance géographique entre l'asso et le financeur (certaines subventions sont très territoriales)
- Subventions déjà obtenues par l'asso (historique) → les financeurs financent souvent les mêmes
- Saisonnalité : les appels à projets ont des calendriers récurrents
- Budget du financeur année en cours vs année précédente

**Modèle** : XGBoost GPU + embeddings pour le matching sémantique

**Output** : Score de probabilité par couple (association, subvention) + recommandations pour maximiser les chances (timing, reformulation du projet, co-financements suggérés)

**C'est le cœur de SubventionIA** — ce modèle prédictif EST le produit. Les assos ne paient pas pour une liste de subventions (ça existe déjà gratuitement). Elles paient pour savoir LESQUELLES elles vont obtenir et COMMENT maximiser leurs chances.

### 19.5 Prédiction de Marchés Publics — "Quels appels d'offres vont sortir ?"

**Concept** : Prédire quels organismes publics vont publier des marchés en cybersécurité/RGPD dans les prochaines semaines, avant même la publication.

**Signaux prédictifs** :

- Historique des marchés passés (BOAMP, marchés-publics.gouv) → récurrence annuelle de certains marchés
- Budget voté dans les délibérations publiques des collectivités → si une mairie a voté un budget "sécurisation SI", le marché va sortir
- Renouvellement de contrats existants → les marchés expirent, les renouvellements sont prévisibles (3-4 ans typique)
- Postes ouverts dans les collectivités (RSSI, DSI) → signal de structuration cyber
- Incidents publics (hôpitaux, mairies hackées) → budget d'urgence = marché publié dans les semaines suivantes
- Calendrier budgétaire des collectivités → les marchés sortent typiquement en Q1 et Q3

**Output** : Calendrier prédictif des marchés à venir avec score de probabilité + alerte quand un marché prédit est effectivement publié

**Utilisation** : Préparer les réponses AVANT la publication. Quand le marché sort, tu as déjà ton dossier prêt. Les autres ont 21 jours pour réagir. Toi tu as 21 jours + le temps d'avance de la prédiction.

### 19.6 Prédiction de Churn Client — "Qui va partir ?"

**Concept** : Identifier les clients existants qui risquent de ne pas renouveler ou de réduire leur engagement.

**Signaux de churn** :

- Baisse d'engagement avec les rapports trimestriels (ouvre-t-il les emails ? télécharge-t-il les PDF ?)
- Réduction de l'utilisation des outils/dashboards mis à disposition
- Changement de contact principal (nouveau DSI/DPO = risque de remise en question)
- Offre d'emploi RSSI interne → ils veulent internaliser
- Concurrent détecté dans leur stack (nouveau prestataire tagué sur LinkedIn)
- Retard de paiement → signal de désengagement financier
- Absence de demande de prestations complémentaires depuis >6 mois

**Action prédictive** : Quand le score de churn dépasse un seuil → alerte automatique → appeler le client proactivement avec une offre de fidélisation ou une prestation offerte

### 19.7 Optimisation Dynamique des Prix

**Concept** : Ajuster les prix en temps réel selon la demande, l'urgence, et le profil du prospect.

**Variables de pricing** :

- Distance à la deadline NIS2 → plus on s'approche d'octobre 2026, plus les prix montent (urgence marché)
- Score de maturité du prospect → plus il est bas, plus la valeur perçue est haute (il a beaucoup à perdre)
- Taille de l'entreprise → CA proxy pour le willingness-to-pay
- Secteur réglementé ou non → les secteurs obligés paient plus (santé, finance, énergie)
- Saisonnalité → Q1 et Q4 plus chers (budget dispo), Q2-Q3 promotions pour remplir le pipeline
- Volume de briques sélectionnées dans le configurateur → remises automatiques progressives
- Source d'acquisition → un lead venant du simulateur de sanction (peur) a un willingness-to-pay supérieur à un lead venant du quiz viral (curiosité)

**Implémentation** : Le configurateur de devis (section 11) intègre un pricing engine qui ajuste les fourchettes selon ces variables. Le prospect ne voit que le résultat final, pas les variables.

### 19.8 Intelligence Territoriale — "Où prospecter cette semaine ?"

**Concept** : Cartographier dynamiquement les zones géographiques les plus rentables à prospecter.

**Features géographiques** :

- Densité d'entités NIS2 par code postal / bassin d'emploi
- Nombre de DPO déclarés par zone (plus c'est bas, plus c'est un désert de conformité)
- Subventions numériques disponibles par territoire (certaines régions ont plus de dispositifs)
- Tissus associatif dense (pour SubventionIA)
- Proximité des CCI, pépinières, clusters tech (points de contact)
- Historique des incidents cyber par zone (CERT-FR, presse locale)
- Concurrents présents par zone (cabinets cyber, ESN locales)

**Output** :

- Carte de chaleur (heatmap) des opportunités
- Score d'attractivité par zone combinant : densité de cibles × faible maturité × absence de concurrents × présence de dispositifs de financement
- Itinéraire de prospection optimisé si tu fais du sur-site

**Modèle** : Clustering spatial (HDBSCAN GPU) + scoring multicritères

### 19.9 Prédiction d'Incidents Cyber — "Qui va se faire hacker ?"

**Concept** : Modèle qui score le risque d'incident cyber par entreprise, basé sur leur surface d'attaque observable.

**Features (toutes publiques/passives)** :

- Score DMARC/SPF/DKIM → exposition au phishing email
- Headers HTTP de sécurité → score de maturité web
- Âge du CMS / versions détectées → software obsolète = vulnérable
- Nombre de sous-domaines exposés → surface d'attaque étendue
- Ports ouverts détectés → surface d'attaque réseau
- Présence dans les fuites de données → comptes compromis réutilisables
- Secteur → certains secteurs sont ciblés (santé, éducation, collectivités)
- Taille → les PME sont disproportionnellement ciblées (manque de moyens)

**Utilisation commerciale** :

- Cold outreach ultra-ciblé : "Notre analyse indique que votre surface d'attaque expose 7 vulnérabilités critiques. Souhaitez-vous un diagnostic gratuit ?"
- Scoring pour les assureurs cyber → prestation B2B2B : tu vends ton scoring aux compagnies d'assurance qui l'utilisent pour tarifier leurs polices cyber
- Rapport sectoriel : "Les 10 secteurs les plus exposés en Occitanie" → thought leadership

**Éthique** : Le modèle ne prédit pas QUI sera attaqué (c'est aléatoire). Il prédit QUI EST VULNÉRABLE. La nuance est importante et doit être explicite dans toute communication.

### 19.10 Détection de Réseaux & Cercles de Décision (Graph Intelligence)

**Concept** : Utiliser le knowledge graph du datalake pour identifier les réseaux d'influence et les cercles de décision.

**Ce que le graphe révèle** :

- Dirigeants multi-mandats → un DG qui siège dans 3 associations et 2 PME = un seul contact qui ouvre 5 portes
- Clusters d'entreprises avec dirigeants communs → vendre à l'une = accès naturel aux autres
- Fédérations et réseaux → identifier le point d'entrée (président de fédération) qui donne accès à tous les membres
- Parcours de carrière des DSI/RSSI (LinkedIn) → un RSSI qui change d'entreprise emmène son prestataire préféré
- Relations client-fournisseur (marchés publics) → si tu es chez le donneur d'ordre, ses fournisseurs deviennent accessibles
- Co-financement de projets → les assos qui reçoivent des subventions communes ont des réseaux croisés

**Modèle** : Community Detection (Louvain/Leiden sur cuGraph GPU) + Link Prediction (RotatE)

**Output** : "Pour toucher 50 PME dans le secteur aéro Toulouse, le chemin optimal passe par [cette personne] qui est connectée à [ces 3 clusters]"

**C'est littéralement du social engineering appliqué au commercial** — mais au lieu de hacker des systèmes, tu hack des réseaux d'influence pour vendre de la cybersécurité.

### 19.11 Prédiction de Budget & Willingness-to-Pay

**Concept** : Estimer le budget cybersécurité probable d'une entreprise avant même de la contacter.

**Features** :

- CA annuel (Pappers/Societe.com) → les études montrent 5-10% du budget IT en cyber
- Budget IT estimé (benchmarks sectoriels : 3-6% du CA pour les PME)
- Secteur réglementé → budget cyber plus élevé (santé 8-10% du budget IT, finance 10-12%)
- Taille → corrélation linéaire jusqu'à 250 salariés, puis plateau
- Incidents passés → post-incident, les budgets explosent (+40-60%)
- Postes RSSI/DSI existants → signal d'investissement déjà en cours
- Fournisseur cloud détecté (AWS/Azure/OVH) → corrélation avec la maturité et le budget

**Output** : Estimation de budget cyber annuel de l'entreprise → permet d'adapter l'offre (pas proposer 8k€ à une boîte qui a 2k€ de budget annuel)

### 19.12 Content Intelligence — "Quel contenu publier cette semaine ?"

**Concept** : Prédire quels sujets/angles vont générer le plus d'engagement et de leads cette semaine.

**Signaux** :

- Trending topics CERT-FR / ANSSI cette semaine → publier en réaction rapide
- CVE critiques publiées → article "Ce que [CVE] signifie pour votre PME" dans les 24h
- Questions les plus posées dans tes outils (simulateurs, chatbot) → transformer les FAQ en articles
- Sujets LinkedIn avec engagement en hausse dans les groupes DSI/RSSI → surfer la vague
- Recherches Google trending sur "NIS2", "audit RGPD", "cybersécurité PME" → SEO opportuniste
- Sanctions CNIL de la semaine → article de décryptage → trafic organique

**Pipeline** : Agent Albert monitore les sources → Mistral 7B génère un draft → tu valides et publies → mesure engagement → feedback loop vers le modèle

---

## 20. ARCHITECTURE UNIFIÉE — ALBERT COMME MOTEUR PRÉDICTIF

> Toute cette intelligence prédictive converge dans Albert. Les 24 agents ne font pas que exécuter des tâches — ils alimentent un cerveau prédictif central qui optimise chaque décision business.

### 20.1 Le Loop Prédictif Quotidien

Chaque matin à 7h, Albert fait tourner le cycle suivant :

1. **Collecte** (agents OSINT) → scrapent les sources, détectent les nouveaux signaux
2. **Enrichissement** (agents Data) → matchent avec le datalake, mettent à jour les fiches
3. **Scoring** (modèles GPU) → recalculent les scores de tous les leads
4. **Priorisation** (agent Business) → classent les 10 meilleures opportunités du jour
5. **Rédaction** (agent Content) → génèrent les cold emails, posts LinkedIn, articles
6. **Briefing** (agent Personnel) → livrent un résumé Telegram : "Aujourd'hui : contacter X (score 87, signal : offre RSSI publiée), publier Y (trending : CVE Apache), relancer Z (devis envoyé il y a 5 jours)"

Tu te lèves, tu lis le briefing, tu exécutes. Le cerveau c'est Albert. Les mains c'est toi.

### 20.2 Le Flywheel Data

Chaque interaction alimente le modèle :

Prospect utilise un simulateur → données capturées → enrichissent le datalake → améliorent le scoring → meilleur ciblage → plus de prospects qualifiés → plus de données → meilleur modèle → boucle

Client signé → données de conversion → entraînent le modèle prédictif → le modèle identifie des prospects similaires → plus de clients similaires → plus de données de conversion → meilleur modèle → boucle

Contenu publié → engagement mesuré → entraîne le modèle content → meilleur contenu → plus d'engagement → plus de trafic → plus de leads → boucle

**3 flywheels qui tournent en parallèle, chacun alimentant les autres. C'est un système qui s'améliore mécaniquement avec le temps — et que personne ne peut copier parce que la data est souveraine et unique.**

---

## 21. AGENCE DE RENSEIGNEMENT AGENTIC — "LA DGSE DU BUSINESS"

> Paperclip modélise des entreprises d'agents. Albert est ton écosystème de 24 agents sur OpenClaw. En les combinant, tu construis une agence de renseignement business souveraine qui tourne 24/7, alimente toutes les sections précédentes (lead scoring, signaux d'achat, prédictions, growth hacking, chevaux de Troie, essoreuse), et te donne un avantage informationnel qu'aucun concurrent solo ne peut égaler.
>
> "OpenClaw est l'employé. Paperclip est l'entreprise." — ton fork de Paperclip devient le QG de l'agence.

### 21.1 Organigramme de l'Agence de Renseignement

L'agence est une "company" Paperclip dédiée, avec sa propre hiérarchie, ses budgets, et sa gouvernance. Elle coexiste avec tes autres "companies" Paperclip (dev, marketing, opérations).

```
Toi (Board / Directeur du Renseignement)
└── DIREX — Directeur Exécutif (agent CEO Paperclip)
    │   Rôle : Priorise les missions, alloue les budgets agents, consolide les briefings
    │   Modèle : Claude Sonnet (qualité de synthèse)
    │   Heartbeat : toutes les 4h
    │
    ├── Division SIGINT — Signals Intelligence (signaux numériques)
    │   Chef : Agent SIGINT-Lead
    │   │
    │   ├── Agent CERT-Watch
    │   │   Mission : Monitorer CERT-FR, ANSSI, CVE feeds en continu
    │   │   Sources : cert.ssi.gouv.fr/flux RSS, NVD API, GitHub Advisory
    │   │   Output : Alertes CVE critiques + mapping vers les stacks clients et prospects
    │   │   Heartbeat : toutes les 2h
    │   │
    │   ├── Agent CNIL-Watch
    │   │   Mission : Monitorer sanctions CNIL, mises en demeure, contrôles annoncés
    │   │   Sources : cnil.fr/decisions, Légifrance, presse juridique
    │   │   Output : Alertes sanctions + analyse sectorielle + mapping prospects concernés
    │   │   Heartbeat : toutes les 6h
    │   │
    │   ├── Agent NIS2-Watch
    │   │   Mission : Suivre l'avancement de la transposition NIS2, le ReCyF, les positions ANSSI
    │   │   Sources : ANSSI, messervices.cyber.gouv.fr, presse spécialisée, Journal Officiel
    │   │   Output : Alertes réglementaires + impact sur nos offres + contenu marketing exploitable
    │   │   Heartbeat : toutes les 12h
    │   │
    │   └── Agent Dark-Web-Monitor (optionnel, avancé)
    │       Mission : Monitorer les fuites de données mentionnant des domaines prospects/clients
    │       Sources : Have I Been Pwned API, pastes publics, forums indexés
    │       Output : Alertes fuites + notification client/prospect
    │       Heartbeat : toutes les 12h
    │
    ├── Division HUMINT — Human Intelligence (signaux humains)
    │   Chef : Agent HUMINT-Lead
    │   │
    │   ├── Agent LinkedIn-Recon
    │   │   Mission : Monitorer les activités LinkedIn des DSI/RSSI/DPO cibles
    │   │   Sources : LinkedIn (via scraping respectueux / RSS / API partenaire)
    │   │   Signaux captés : posts sur NIS2/RGPD/cyber, changements de poste, nouvelles connexions,
    │   │                     endorsements skills cybersécurité, likes/commentaires sur des contenus concurrents
    │   │   Output : Fiches de renseignement par personne-clé + signaux d'achat détectés
    │   │   Heartbeat : toutes les 8h
    │   │
    │   ├── Agent Job-Watch
    │   │   Mission : Détecter les offres d'emploi RSSI/DPO/DevSecOps/DSI publiées par les cibles
    │   │   Sources : LinkedIn Jobs, Indeed, APEC, HelloWork, Welcome to the Jungle
    │   │   Output : Alerte immédiate + fiche entreprise enrichie + cold email pré-rédigé
    │   │   Ce signal est le plus prédictif : une offre RSSI = besoin confirmé + budget alloué
    │   │   Heartbeat : toutes les 4h
    │   │
    │   └── Agent Event-Scout
    │       Mission : Repérer les événements, webinaires, conférences où nos prospects participent/interviennent
    │       Sources : Eventbrite, Meetup, programmes de conférences, LinkedIn Events, CCI
    │       Output : Calendrier d'opportunités de rencontre + recommandations de networking
    │       Heartbeat : toutes les 24h
    │
    ├── Division OSINT — Open Source Intelligence (données publiques)
    │   Chef : Agent OSINT-Lead
    │   │
    │   ├── Agent Corporate-Recon
    │   │   Mission : Enrichir et mettre à jour les fiches entreprises du datalake
    │   │   Sources : Pappers, Societe.com, Infogreffe, Bodacc, INSEE SIRENE
    │   │   Données extraites : CA, effectif, dirigeants, changements de statut, procédures collectives,
    │   │                        changements d'adresse, modifications statutaires
    │   │   Output : Fiches entreprises à jour + alertes sur événements significatifs
    │   │   Heartbeat : scan incrémental quotidien (batch de 10 000 entités/jour = couverture complète en ~10 mois)
    │   │
    │   ├── Agent Asso-Recon
    │   │   Mission : Enrichir les données associations pour SubventionIA
    │   │   Sources : RNA (Journal Officiel), data.gouv.fr, comptes-asso.fr, annonces-legales
    │   │   Données : créations, dissolutions, changements de bureau, subventions reçues, rapports d'activité
    │   │   Output : Fiches asso enrichies + scoring SubventionIA mis à jour
    │   │   Heartbeat : quotidien
    │   │
    │   ├── Agent Surface-Scanner
    │   │   Mission : Scanner la surface d'attaque externe des prospects prioritaires (passif/légal)
    │   │   Sources : DNS, Certificate Transparency, Shodan API (gratuite), headers HTTP
    │   │   Données : DMARC/SPF/DKIM, headers sécurité, SSL, technologies, sous-domaines
    │   │   Output : Score de vulnérabilité par prospect + angles d'approche commerciaux
    │   │   Heartbeat : scan des top 100 prospects chaque nuit
    │   │
    │   ├── Agent Marché-Public-Watch
    │   │   Mission : Monitorer les appels d'offres publics liés à la cybersécurité, RGPD, audit SI
    │   │   Sources : BOAMP, marchés-publics.gouv.fr, PLACE (marchés de l'État), plateforme Mégalis/AWS
    │   │   Filtres : mots-clés (cybersécurité, RGPD, NIS2, audit SI, DPO, PSSI, PCA/PRA, SSI)
    │   │   Output : Alerte immédiate + fiche marché + estimation de pertinence + draft de réponse
    │   │   Heartbeat : toutes les 4h (les marchés sont publiés à heures fixes)
    │   │
    │   └── Agent Subvention-Watch
    │       Mission : Monitorer les nouveaux appels à projets et subventions pour le monde associatif
    │       Sources : aides-territoires.beta.gouv.fr, data.gouv, sites des fondations, DRAJES, FDVA
    │       Output : Nouvelles subventions indexées dans le datalake + matching SubventionIA mis à jour
    │       Heartbeat : quotidien
    │
    ├── Division TECHINT — Technical Intelligence (renseignement technique)
    │   Chef : Agent TECHINT-Lead
    │   │
    │   ├── Agent Stack-Detector
    │   │   Mission : Identifier les technologies utilisées par les prospects (web, cloud, outils)
    │   │   Sources : Wappalyzer/BuiltWith data, DNS, headers, JavaScript public
    │   │   Output : Profil technique par entreprise (CMS, framework, cloud provider, analytics, CDN)
    │   │   Utilité : adapter l'offre (WordPress obsolète → vulnérabilités web, AWS → audit cloud, etc.)
    │   │   Heartbeat : scan incrémental nocturne
    │   │
    │   ├── Agent CVE-Mapper
    │   │   Mission : Croiser les CVE critiques avec les stacks techniques détectées des prospects
    │   │   Input : CVE feeds (Agent CERT-Watch) × profils techniques (Agent Stack-Detector)
    │   │   Output : "L'entreprise X utilise Apache 2.4.51, CVE-2026-XXXX publiée aujourd'hui, score CVSS 9.1"
    │   │   C'est le signal d'achat le plus chirurgical qui existe : tu sais EXACTEMENT quelle vulnérabilité
    │   │   touche EXACTEMENT quel prospect → cold outreach avec preuve technique irréfutable
    │   │   Heartbeat : déclenché par CERT-Watch (event-driven)
    │   │
    │   └── Agent Leak-Correlator
    │       Mission : Croiser les fuites de données connues avec les entités du datalake
    │       Input : HIBP API × datalake domaines
    │       Output : "Le domaine @entreprise.fr apparaît dans 3 fuites, 47 comptes exposés"
    │       Heartbeat : scan mensuel du datalake complet, quotidien pour les prospects chauds
    │
    ├── Division FININT — Financial Intelligence (renseignement financier)
    │   Chef : Agent FININT-Lead
    │   │
    │   ├── Agent Budget-Estimator
    │   │   Mission : Estimer le budget cyber et le willingness-to-pay de chaque prospect
    │   │   Sources : CA (Pappers), benchmarks sectoriels, taille, historique marchés publics remportés
    │   │   Output : Estimation budget IT + budget cyber + fourchette de prix recommandée pour nos offres
    │   │   Alimente : Section 19.11 + configurateur de devis (section 11)
    │   │   Heartbeat : recalcul hebdomadaire des top 500 prospects
    │   │
    │   └── Agent Funding-Tracker
    │       Mission : Détecter les levées de fonds, financements publics, et injections de capital
    │       Sources : Pappers (augmentations de capital), Crunchbase, BPI France, presse économique
    │       Output : Alerte "L'entreprise X vient de lever Y€" → budget disponible → fenêtre d'approche
    │       Heartbeat : quotidien
    │
    └── Division STRATINT — Strategic Intelligence (synthèse et décision)
        Chef : Agent STRATINT-Lead (le plus senior, interfacé avec DIREX)
        │
        ├── Agent Competitive-Intel
        │   Mission : Surveiller les concurrents (cabinets cyber, ESN, freelances) de la zone
        │   Sources : LinkedIn, sites web, offres d'emploi des concurrents, avis Google, marchés publics remportés
        │   Données : nouvelles offres lancées, recrutements, clients affichés, tarifs publiés, contenus produits
        │   Output : Rapport concurrentiel mensuel + alertes en temps réel si un concurrent publie une offre similaire
        │   Heartbeat : hebdomadaire + event-driven
        │
        ├── Agent Trend-Analyzer
        │   Mission : Identifier les tendances émergentes dans la cybersécurité et la conformité
        │   Sources : Google Trends, Reddit, Hacker News, ArXiv, blogs tech, rapports analystes
        │   Output : Trending topics de la semaine + opportunités de contenu + signaux de nouveaux marchés
        │   Alimente : Section 19.12 (Content Intelligence) + calendrier éditorial
        │   Heartbeat : quotidien
        │
        └── Agent Morning-Brief
            Mission : Consolider TOUS les outputs des autres agents en un briefing unique
            Input : Tous les rapports des 15 agents précédents
            Output : Briefing Telegram/email de 20 lignes structuré :
              - TOP 3 prospects du jour (avec score, signal déclencheur, action recommandée, email draft)
              - ALERTES (CVE critique, sanction CNIL, marché public urgent)
              - OPPORTUNITÉS (nouveau financement détecté, concurrent en difficulté, trend exploitable)
              - CONTENU (article/post LinkedIn à publier aujourd'hui + angle + draft)
              - CLIENTS (signaux de churn, renouvellements imminents, upsell opportunités)
            Format : actionnable en 5 minutes au petit-déjeuner
            Heartbeat : 7h00 tous les matins
```

### 21.2 Flux de Données entre l'Agence et l'Arsenal

L'agence n'est pas isolée — elle alimente CHAQUE composant de l'arsenal :

| Division Agence              | Ce qu'elle produit                      | Où ça va dans l'arsenal                                                                 |
| ---------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------- |
| SIGINT / CERT-Watch          | CVE critiques + mapping stacks          | Cold outreach ciblé (17.2), Scanner Surface (13.2), Agent Advisor (12.1)                |
| SIGINT / CNIL-Watch          | Sanctions + contrôles sectoriels        | Simulateur sanction (1.1), Quiz CNIL (6.4), Prédiction sanctions (19.3)                 |
| SIGINT / NIS2-Watch          | Évolutions ReCyF + deadlines            | Auto-diagnostic NIS2 (2.1), Newsletter (16.5), Bot veille (16.3)                        |
| HUMINT / LinkedIn-Recon      | Profils décideurs + signaux sociaux     | Lead scoring (19.1), OSINT pré-prospection (17.2), Lateral movement (17.4)              |
| HUMINT / Job-Watch           | Offres d'emploi RSSI/DPO                | Signal d'achat #1 (19.2), Cold outreach (17.2), Lead scoring (19.1)                     |
| HUMINT / Event-Scout         | Calendrier événements prospects         | Audit guerilla live (15.5), QR code WiFi (15.1), Networking ciblé                       |
| OSINT / Corporate-Recon      | Fiches entreprises enrichies            | Datalake souverain, Lead scoring (19.1), Configurateur devis (11.1)                     |
| OSINT / Asso-Recon           | Fiches associations enrichies           | SubventionIA (5.1), Agent Concierge (12.4), Matching sémantique                         |
| OSINT / Surface-Scanner      | Scores vulnérabilité                    | Scan surface CTA (13.2), Cold outreach avec preuves (17.2), Prédiction incidents (19.9) |
| OSINT / Marché-Public-Watch  | Alertes appels d'offres                 | Prédiction marchés (19.5), Réponse rapide, Revenue direct                               |
| OSINT / Subvention-Watch     | Nouveaux appels à projets               | SubventionIA, Agent Concierge (12.4), Newsletter assos                                  |
| TECHINT / Stack-Detector     | Profils techniques                      | Personnalisation offre, CVE-Mapper, Prédiction incidents (19.9)                         |
| TECHINT / CVE-Mapper         | Vulnérabilités spécifiques par prospect | Cold outreach chirurgical, Upsell clients existants, Alertes monitoring                 |
| TECHINT / Leak-Correlator    | Fuites de données par domaine           | Vérificateur fuites CTA (4.5), Cold outreach, Rapport sectoriel (16.6)                  |
| FININT / Budget-Estimator    | Estimation budget par prospect          | Pricing dynamique (19.7), Configurateur devis (11.1), Priorisation                      |
| FININT / Funding-Tracker     | Alertes financement/levée               | Signal d'achat (19.2), Timing d'approche, Lead scoring (19.1)                           |
| STRATINT / Competitive-Intel | Veille concurrentielle                  | Comparateur vs marché (13.6), Positionnement prix, Différenciation                      |
| STRATINT / Trend-Analyzer    | Tendances + opportunités                | Content Intelligence (19.12), Calendrier éditorial, SEO opportuniste                    |
| STRATINT / Morning-Brief     | Briefing quotidien consolidé            | TOI. C'est ton cockpit de pilotage. Tout converge ici.                                  |

### 21.3 Configuration Paperclip — La Company "Renseignement"

```yaml
# paperclip company config: intelligence-agency
company:
  name: "DGSE Business — Agence de Renseignement Opérationnel"
  mission: "Fournir un avantage informationnel décisif pour chaque décision commerciale"
  budget_monthly: 50 # tokens USD — majorité sur Ollama/local, Claude Sonnet pour la synthèse

departments:
  - name: SIGINT
    budget: 8
    agents: [cert-watch, cnil-watch, nis2-watch, dark-web-monitor]
  - name: HUMINT
    budget: 12
    agents: [linkedin-recon, job-watch, event-scout]
  - name: OSINT
    budget: 15
    agents:
      [
        corporate-recon,
        asso-recon,
        surface-scanner,
        marche-public-watch,
        subvention-watch,
      ]
  - name: TECHINT
    budget: 8
    agents: [stack-detector, cve-mapper, leak-correlator]
  - name: FININT
    budget: 5
    agents: [budget-estimator, funding-tracker]
  - name: STRATINT
    budget: 12
    agents: [competitive-intel, trend-analyzer, morning-brief]

governance:
  approval_gates:
    - type: "cold_outreach"
      requires: "human_approval" # Jamais d'email envoyé sans validation
    - type: "scan_external"
      requires: "human_approval" # Jamais de scan sans validation domaine
    - type: "budget_exceed_80pct"
      requires: "human_approval"
  audit_log: true
  retention_days: 90
```

### 21.4 Modèles d'Agents — Répartition LLM

L'enjeu c'est le coût. Pas besoin de Claude Opus pour parser du RSS.

| Rôle                                          | Modèle                       | Raison                                                          | Coût          |
| --------------------------------------------- | ---------------------------- | --------------------------------------------------------------- | ------------- |
| Collecte/scraping (CERT, CNIL, jobs, marchés) | Mistral 7B Q4 local (Ollama) | Tâches structurées, pas besoin de raisonnement complexe         | 0€            |
| NER/extraction d'entités                      | CamemBERT-NER local (GPU)    | Spécialisé français, rapide, précis                             | 0€            |
| Enrichissement/matching                       | BGE-M3 local (GPU)           | Embeddings pour entity resolution et matching                   | 0€            |
| Scoring/prédiction                            | XGBoost GPU local            | Rapide, précis sur données tabulaires                           | 0€            |
| Génération de rapports/emails                 | Mistral 7B Q4 local          | Qualité suffisante pour des drafts, tu valides                  | 0€            |
| Synthèse Morning Brief                        | Claude Sonnet (API)          | Besoin de qualité de raisonnement pour prioriser et recommander | ~1-2$/jour    |
| Analyse concurrentielle complexe              | Claude Sonnet (API)          | Raisonnement nuancé sur la stratégie                            | ~0.5$/semaine |
| Agent DIREX (CEO)                             | Claude Sonnet (API)          | Coordination, allocation, décisions                             | ~1$/jour      |

**Coût total estimé** : 95% des agents tournent en local (Ollama + GPU) = 0€. Les 5% qui nécessitent Claude Sonnet coûtent ~50-80$/mois. Couvert par ton Claude Max.

### 21.5 Mémoire Persistante — Le Datalake comme Cerveau Central

Problème de Paperclip identifié par le créateur : les agents sont des "Memento Man" — ils se réveillent sans mémoire. La solution classique (fichiers PARA) est fragile. Ta solution est meilleure :

**Le datalake souverain EST la mémoire partagée de l'agence.**

Chaque agent lit et écrit dans le datalake via l'API MCP :

- Agent Corporate-Recon met à jour les fiches entreprises → Agent Lead-Scoring les consomme le lendemain
- Agent CERT-Watch écrit une alerte CVE → Agent CVE-Mapper la croise avec les stacks du datalake
- Agent Job-Watch détecte une offre RSSI → écrit un signal dans la fiche prospect → Agent Morning-Brief l'intègre au briefing
- Agent Surface-Scanner met à jour le score de vulnérabilité → Agent Budget-Estimator ajuste le willingness-to-pay

Pas de fichiers texte dans des dossiers. Pas de mémoire fragmentée. Une base unique, structurée, requêtable, avec historique de versions.

**C'est l'avantage architectural** : tes concurrents qui utilisent Paperclip vanilla ont des agents avec des post-its. Toi tu as des agents avec accès au renseignement de 2.84 millions d'entités.

### 21.6 Boucle de Rétroaction — L'Agence qui Apprend

L'agence ne fait pas que collecter — elle apprend de chaque cycle :

Cycle 1 — Le Morning Brief recommande de contacter l'Entreprise X (score 82, signal : offre RSSI publiée)
Cycle 2 — Tu contactes X, le prospect répond positivement → le signal "offre RSSI" est renforcé dans le modèle de scoring
Cycle 3 — Le modèle ajusté remonte plus d'entreprises avec des offres RSSI dans les prochains briefings
Cycle 4 — Tu signes 3 clients sur ce signal → le modèle converge → le signal devient ton meilleur prédicteur

L'inverse aussi : si un signal génère des faux positifs (contacts sans réponse), le modèle le pénalise automatiquement.

**En 3-6 mois, l'agence sait exactement quels signaux mènent à des signatures.** Aucun concurrent ne peut répliquer ça sans tes données de conversion.

### 21.7 Doctrine Opérationnelle — Les 7 Règles de l'Agence

1. **Jamais d'action externe sans validation humaine.** Les agents collectent, analysent, recommandent. Ils n'envoient jamais d'email, ne publient jamais de contenu, ne scannent jamais un domaine sans ton feu vert. La dernière décision est toujours humaine.

2. **Tout est loggé.** Chaque requête, chaque scrape, chaque enrichissement est tracé dans l'audit log Paperclip. Si un prospect te demande "comment avez-vous eu cette information", tu peux répondre précisément : "source publique X, date Y".

3. **100% légal, 100% passif.** L'agence ne fait RIEN qui nécessite un accès non autorisé. Tout vient de sources publiques : sites web, API ouvertes, registres officiels, flux RSS, données open data. Zéro intrusion, zéro hacking.

4. **RGPD-by-design.** Les données personnelles collectées (noms de dirigeants, emails professionnels) ont une base légale (intérêt légitime pour la prospection B2B, données accessibles publiquement). Durée de rétention : 12 mois max sans interaction. Droit d'opposition respecté immédiatement.

5. **Budget contrôlé.** Chaque division a un budget token mensuel dans Paperclip. Si un agent dérape (boucle infinie, sur-scraping), il est automatiquement pausé à 100% d'utilisation. Pas de surprise sur la facture.

6. **Souveraineté totale.** 95% du traitement est local (Ollama + GPU). Les 5% qui passent par l'API Claude ne contiennent que des synthèses, jamais de données brutes prospects. Aucune donnée du datalake ne quitte ton infrastructure sans ta décision explicite.

7. **L'information n'a de valeur que si elle génère une action.** Un signal non exploité dans les 48h perd 80% de sa valeur. Le Morning Brief ne contient que des éléments ACTIONNABLES dans la journée. Le reste va en archive pour analyse tendancielle.

### 21.8 Cas d'Usage Concrets — Une Journée Type

**7h00 — Morning Brief arrive sur Telegram**

> **BRIEFING AGENCE — Mercredi 15 octobre 2026**
>
> 🎯 TOP 3 PROSPECTS
>
> 1. **Logistique Garonne SAS** (score 91) — Signal : offre "Responsable SSI" publiée hier sur LinkedIn + domaine sans DMARC + CA 12M€ + secteur transport = entité NIS2 importante.
>    Action : cold email envoyable (draft joint). Angle : NIS2 deadline + vulnérabilité email prouvable.
> 2. **Centre Hospitalier de Montauban** (score 87) — Signal : marché public "audit de sécurité SI" publié ce matin sur PLACE. Montant estimé 15-30k€. Deadline réponse : 5 novembre.
>    Action : préparer réponse AO immédiatement. Draft structure de réponse joint.
> 3. **Association Toulouse Solidarité** (score 78) — Signal : subvention FDVA2 obtenue (18k€) + pas de DPO déclaré + site sans mentions légales.
>    Action : proposer diagnostic numérique + RGPD. Angle : financement déjà sécurisé.
>
> ⚠️ ALERTES
>
> - CVE-2026-41823 (Apache Struts, CVSS 9.8) — 3 prospects utilisent Apache : [liste]. Cold email CVE-spécifique recommandé.
> - CNIL : sanction 150k€ contre une clinique à Lyon pour défaut de sécurité des données patients. Angle contenu : "Cliniques : êtes-vous prêtes pour un contrôle CNIL ?"
>
> 📈 OPPORTUNITÉS
>
> - Concurrent "CyberSud Consulting" a publié une offre DevSecOps → ils recrutent → ils ont trop de demande ou ils perdent un consultant → opportunité de récupérer leurs clients insatisfaits
> - Trending : "NIS2 PME" +45% de recherches Google cette semaine → publier l'article SEO aujourd'hui
>
> ✍️ CONTENU DU JOUR
>
> - Article : "Apache Struts CVE-2026-41823 : votre PME est-elle concernée ?" (draft de 500 mots joint)
> - Post LinkedIn : thread sur la sanction CNIL clinique Lyon (3 slides draft joint)
>
> 🔄 CLIENTS
>
> - Client "Pharmacie Centrale" : certificat SSL expire dans 12 jours. Alerte envoyée au monitoring. Proposer renouvellement + scan trimestriel.

**7h30 — Tu valides les actions**

- Approve le cold email Logistique Garonne → l'agent l'envoie (ou tu l'envoies manuellement)
- Approve l'article Apache Struts → publié sur le blog
- Approve le post LinkedIn → schedulé à 9h
- Lance la préparation de la réponse AO hôpital → l'agent génère un premier draft

**Le reste de la journée** : tu te concentres sur les RDV, les livrables clients, et les appels. L'agence continue de tourner en arrière-plan, collectant les prochains signaux pour le briefing de demain.

### 21.9 Roadmap d'Installation

**Semaine 1** : Fork Paperclip + installer sur VPS Contabo + créer la company "intelligence-agency"

**Semaine 2** : Déployer les 4 agents critiques (ceux qui rapportent le plus vite) :

- Agent Job-Watch (signal d'achat #1)
- Agent Marché-Public-Watch (revenue direct)
- Agent CERT-Watch (contenu + cold outreach)
- Agent Morning-Brief (consolidation)

**Semaine 3-4** : Ajouter la couche OSINT :

- Agent Corporate-Recon (enrichissement datalake)
- Agent Surface-Scanner (angles d'approche)
- Agent CNIL-Watch (contenu + peur)

**Semaine 5-8** : Compléter l'organigramme :

- Division HUMINT complète (LinkedIn, Events)
- Division TECHINT complète (Stack, CVE-Mapper, Leaks)
- Division FININT (Budget, Funding)
- Division STRATINT (Competitive, Trends)

**Semaine 9-12** : Boucle de rétroaction :

- Connecter les données de conversion (qui a signé, via quel signal) au modèle de scoring
- Fine-tuner les heartbeats selon les résultats (certains agents trop fréquents, d'autres pas assez)
- Optimiser les prompts des agents selon la qualité des outputs observée
- Documenter les patterns gagnants pour les reproduire

### 21.10 L'Avantage Compétitif Irréplicable

Pourquoi personne ne peut copier ce système :

1. **Le datalake est unique.** 2.84M entités françaises enrichies avec des données croisées RNA + SIREN + CNIL + marchés publics + subventions. Aucun concurrent solo n'a cette base.

2. **Les données de conversion sont les tiennes.** Le modèle prédictif apprend de TES ventes, TES prospects, TES signaux gagnants. Même avec le même code, un concurrent partirait de zéro.

3. **L'effet réseau interne est cumulatif.** Chaque jour l'agence tourne, le datalake s'enrichit, les modèles s'améliorent, les signaux s'affinent. À T+6 mois, l'agence est 10x meilleure qu'à T+0. À T+12 mois, 50x.

4. **Le coût marginal est quasi nul.** L'agence tourne sur ton VPS à 20€/mois + ton GPU laptop. Ajouter un prospect au monitoring coûte 0€. L'asymétrie est totale : un concurrent humain passe 2h par prospect en recon manuelle. Toi c'est 0 minute — l'agence a déjà tout préparé.

5. **C'est un patrimoine business.** Quand tu créeras ta SASU, l'agence et son datalake sont des actifs incorporels valorisables. Une agence de renseignement business avec 3M d'entités enrichies et un modèle prédictif entraîné, c'est un actif qui vaut 6-7 chiffres si tu la vends ou la licencie un jour.
