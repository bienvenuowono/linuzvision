# LinuZvision — Directive complète de développement et de reprise

Ce fichier est la source d'instructions opérationnelles pour tout agent de développement reprenant ce projet, notamment Antigravity. Il doit être lu intégralement avant toute modification. Son objectif est de permettre une continuité de travail cohérente même sans accès aux conversations précédentes.

Directive impérative : l'agent qui ouvre ce projet doit poursuivre le développement, pas recommencer l'analyse générale ni recréer les pages validées. Il doit reconstruire l'état courant depuis les fichiers du projet, déterminer la première surface inachevée et reprendre à cet endroit.

## 0. Orchestration Impeccable obligatoire

Ce projet utilise **Impeccable** comme protocole de conception, de contrôle et de documentation. Lorsqu'une compétence, un plugin, une commande ou des sous-agents Impeccable sont disponibles, leur utilisation est obligatoire pour toute création ou modification matérielle d'interface.

L'agent principal reste responsable de l'implémentation. Il doit utiliser Impeccable de la manière suivante :

1. Charger les instructions de la compétence UI et d'Impeccable avant de modifier une surface.
2. Charger le contexte du projet et le playbook de nouvelle surface.
3. Lire le craft floor immédiatement avant l'implémentation.
4. Créer ou mettre à jour le brief `.impeccable/surfaces/<route>.md`.
5. Exécuter le détecteur mécanique **une seule fois** après la construction complète.
6. Produire les captures desktop, mobile et hero.
7. Lancer un sous-agent reviewer Impeccable frais et indépendant, sans historique de raisonnement de l'agent constructeur.
8. Appliquer ses corrections par lots, recapturer, puis lui faire scorer les corrections jusqu'à `ship` dans la limite du protocole.
9. Après `ship`, lancer un sous-agent documenter Impeccable frais pour mettre à jour `DESIGN.md` et `.impeccable/design.json`.
10. Exécuter le build final.

Noms de rôles recommandés lorsque la plateforme accepte des sous-agents :

- `impeccable_<surface>_reviewer` : revue indépendante ;
- `impeccable_<surface>_documenter` : mise à jour du système après `ship`.

Le reviewer ne modifie pas les fichiers. Le documenter ne doit modifier que `DESIGN.md` et `.impeccable/design.json`, sauf instruction explicite contraire.

Si la plateforme ne possède réellement ni compétence Impeccable, ni sous-agent, ni outil équivalent, l'agent doit reproduire le protocole en deux passes séparées :

- une passe de revue fraîche, fondée uniquement sur les sources et captures ;
- une passe de documentation après validation.

Cette dégradation doit être annoncée. Elle ne permet pas de supprimer le détecteur, les captures, la comparaison Stitch, la documentation ou le build final.

## 1. Mission

Développer le site institutionnel et commercial de LinuZvision en React/Next.js à partir des écrans Google Stitch présents dans `design/`.

La priorité absolue est une reproduction visuelle très poussée, écran par écran, avant l'intégration fonctionnelle avancée. Chaque page doit être une narration continue et architecturale, pas un assemblage de composants génériques.

Le site présente :

- LinuZvision, LLC ;
- TASHA, son intelligence artificielle propriétaire ;
- les solutions d'IA et d'automatisation ;
- les services technologiques ;
- le cloud et l'infrastructure ;
- la cybersécurité ;
- le support informatique et la formation ;
- l'histoire et la vision Afrique ↔ Amérique ;
- les insights ;
- la prise de contact.

Ne jamais inventer de clients, partenaires, bureaux, certifications, coordonnées, prix, récompenses ou résultats commerciaux. Les chiffres ne peuvent être repris que lorsqu'ils existent explicitement dans les sources du projet.

## 2. Sources d'autorité, par ordre de priorité

1. La demande explicite la plus récente de l'utilisateur.
2. `PRODUCT.md` pour la vérité fonctionnelle et commerciale.
3. L'écran `screen.png` dédié dans `design/` pour la composition visuelle.
4. Le fichier `code.html` situé à côté du `screen.png` pour le contenu, l'ordre des sections et certains détails.
5. `DESIGN.md` et `.impeccable/design.json` pour les règles visuelles durables.
6. Le brief de page dans `.impeccable/surfaces/<page>.md`.
7. Les pages déjà validées et leurs composants globaux.

Lorsqu'une page possède une maquette Stitch dédiée, elle est `comp-led` : la maquette est la loi visuelle. Une adaptation est permise uniquement pour le responsive, l'accessibilité, les limites techniques ou l'absence d'un actif source. Toute adaptation importante doit être consignée dans le brief de surface.

## 3. Stack et commandes

- Next.js 16 avec App Router.
- React 19.
- TypeScript.
- CSS global dans `app/globals.css`.
- Inter Variable auto-hébergée avec `@fontsource-variable/inter`.
- Aucun framework CSS ou kit de composants générique.

Commandes principales :

```powershell
npm install
npm run dev
npm run build
```

Le serveur local utilise généralement `http://localhost:3000`.

Une livraison n'est jamais terminée si `npm run build` ne réussit pas.

## 4. Architecture du code

- Chaque route App Router reste minimale : `app/<route>/page.tsx` importe un composant de page.
- Chaque surface vit dans `components/<Nom>Page.tsx`.
- Les composants globaux sont :
  - `components/Header.tsx` ;
  - `components/Footer.tsx` ;
  - `components/WhatsappButton.tsx` ;
  - `components/ArrowIcon.tsx`.
- Les images livrées vivent dans `public/images/`.
- Les captures de validation vivent dans `.impeccable/review/`.
- Les décisions propres à une route vivent dans `.impeccable/surfaces/<route>.md`.

Réutiliser les composants globaux. Ne pas dupliquer le header, le footer, le bouton WhatsApp ou les icônes de base dans une page.

## 5. Direction visuelle « Void and Form »

Le monde visuel est monochrome, cinématique, premium, technique, architectural et humain.

Règles fondamentales :

- Palette achromatique : papier chaud, encre presque noire, gris froids, chambres sombres.
- Inter Variable sur toute l'interface.
- Titres monumentaux, serrés, généralement en capitales.
- Fort contraste entre titres très grands et libellés très petits.
- Géométrie strictement rectangulaire.
- Coins carrés ; aucun rayon décoratif.
- Règles structurelles d'un pixel.
- Aucune couleur d'accent décorative.
- Aucun dégradé de texte.
- Aucune ombre de carte générique.
- Aucune grille de cartes répétitives « icône + titre + texte » comme structure principale.
- Aucun surtitre décoratif au-dessus d'un titre. Les petits libellés sont réservés aux états, métadonnées et informations réellement nécessaires.
- L'image doit prouver une réalité technique : infrastructure, réseau, sécurité, topologie ou interaction humain-machine.
- TASHA est un système opérationnel, jamais un robot, un visage, un avatar, un orbe ou un chatbot générique.

Les transitions de scènes s'effectuent avec l'espace, les règles horizontales, les inversions noir/blanc et les changements de matière.

## 6. Responsive

Breakpoints principaux déjà utilisés :

- `1050px` : la navigation desktop devient un menu mobile.
- `760px` : les compositions multi-colonnes deviennent des narrations mono-colonne.

Sur mobile :

- conserver strictement l'ordre narratif du document ;
- convertir les séparateurs verticaux en séparateurs horizontaux ;
- rendre les CTA principaux pleine largeur ;
- garder les titres dominants sans débordement horizontal ;
- transformer les séquences horizontales en séquences verticales explicites ;
- vérifier les chiffres, acronymes et mots longs ;
- réduire les images par recadrage intentionnel, pas par écrasement ;
- maintenir un espace de bord d'environ 24 px.

## 7. Accessibilité et qualité

Chaque page doit inclure :

- structure HTML sémantique ;
- un seul `h1` ;
- hiérarchie de titres cohérente ;
- textes alternatifs utiles sur les images informatives ;
- liens et boutons accessibles au clavier ;
- focus visible ;
- contraste suffisant ;
- libellés accessibles pour les commandes iconiques ;
- prise en charge de `prefers-reduced-motion` ;
- contenu complet et compréhensible sans animation ;
- aucun débordement horizontal aux formats 390 px et 1440 px.

L'animation doit ressembler à un signal traversant une infrastructure : rare, linéaire, lente et subordonnée à la compréhension. Ne jamais ajouter la même animation d'apparition à toutes les sections.

## 8. Méthode obligatoire pour chaque nouvelle page

### Étape A — comprendre la surface

1. Lire `PRODUCT.md`.
2. Lire `DESIGN.md`.
3. Trouver le dossier Stitch correspondant dans `design/`.
4. Ouvrir et inspecter son `screen.png` en résolution originale.
5. Lire son `code.html` et relever :
   - le contenu ;
   - l'ordre des sections ;
   - les images ;
   - les relations de grille ;
   - les états et CTA.
6. Inspecter au moins une page validée et `app/globals.css`.
7. Créer `.impeccable/surfaces/<route>.md` avant ou pendant la construction.

Le brief de surface doit contenir au minimum :

- mode (`Persuade` pour les pages marketing actuelles) ;
- route ;
- autorité visuelle ;
- build path (`comp-led` lorsqu'une maquette existe) ;
- `THESIS` ;
- `OWN-WORLD` ;
- `STORY` ;
- `FIRST VIEWPORT` ;
- `FORM` ;
- `QUALITY BAR` ;
- contraintes de vérité commerciale ;
- adaptation mobile.

### Étape B — préparer les actifs

1. Réutiliser un actif de `public/images/` seulement s'il correspond réellement à la matière de la maquette.
2. Rechercher d'abord un écran source pertinent dans `design/`.
3. Si un raster manque, utiliser un générateur d'images disponible pour produire un actif dédié.
4. Le prompt doit imposer : usage, composition, palette, matière, contraintes et interdictions.
5. Copier l'actif final dans `public/images/` et référencer ce chemin dans le composant.
6. Ne jamais laisser un actif utilisé uniquement dans un dossier temporaire de l'outil.

Pour les icônes et diagrammes simples, préférer des SVG écrits dans le code. Ne jamais utiliser emoji ou caractères Unicode comme icônes.

### Étape C — construire

1. Créer `app/<route>/page.tsx`.
2. Créer `components/<Nom>Page.tsx`.
3. Mettre à jour `components/Header.tsx` avec une vraie route et un état actif.
4. Ajouter les styles dans une section clairement commentée de `app/globals.css`.
5. Construire d'abord toute la page, puis inspecter. Ne pas faire une boucle infinie de micro-retouches.
6. Reprendre la composition Stitch, mais utiliser les composants globaux validés pour le cadre du site.
7. Conserver l'ordre sémantique du desktop afin qu'il devienne naturellement l'ordre mobile.

### Étape D — vérifier

1. Exécuter le détecteur UI une seule fois. Utiliser Impeccable lorsqu'il est disponible ; sinon exécuter un contrôle mécanique équivalent et documenter la substitution :

```powershell
node "$env:USERPROFILE\.codex\skills\impeccable\scripts\detect.mjs" --json components\NomPage.tsx app\route\page.tsx app\globals.css components\Header.tsx
```

2. Interpréter les résultats :
   - corriger les défauts structurels réels ;
   - ne pas remplacer Inter, car elle est explicitement épinglée ;
   - distinguer les avis historiques de `globals.css` des défauts créés par la nouvelle page.
3. Exécuter `npm run build`.
4. Tester dans un vrai navigateur à :
   - `1440 × 1000` ;
   - `390 × 844`.
5. Capturer la page entière dans :
   - `.impeccable/review/<route>-desktop.png` ;
   - `.impeccable/review/<route>-mobile.png`.
6. Capturer le hero dans `.impeccable/review/<route>-hero-repro.png` avec un viewport desktop qui montre toute la première scène.
7. Ouvrir toutes les captures et vérifier qu'elles ne sont ni vides, ni tronquées, ni prises avec le mauvais breakpoint.

### Étape E — faire une revue indépendante

Lancer un reviewer Impeccable frais, sans lui transmettre le raisonnement de construction. Si la plateforme ne peut pas créer de sous-agent, effectuer une revue dégradée dans un contexte séparé. Lui fournir :

- la demande utilisateur ;
- le `screen.png` et le `code.html` de référence ;
- le composant de page ;
- les styles ;
- le brief de surface ;
- les captures desktop, mobile et hero ;
- les résultats matériels du détecteur ;
- le chemin vers `PRODUCT.md` et `DESIGN.md`.

Le reviewer doit juger :

- `persistence` ;
- `fidelity` ;
- `ceiling` ;
- `material_fixes` ;
- `keep` ;
- puis rendre `ship`, `fix`, `recapture` ou `rebuild`.

Traiter les corrections en une seule passe groupée, recapturer, puis faire scorer uniquement les corrections. Ne déclarer une page terminée qu'après `ship`.

### Étape F — documenter et livrer

Après `ship` :

1. Mettre à jour `DESIGN.md` sans supprimer les règles existantes.
2. Mettre à jour `.impeccable/design.json` et valider le JSON.
3. Documenter uniquement les vérités réutilisables réellement présentes dans le code.
4. Relancer `npm run build`.
5. Communiquer la route, les principaux fichiers, le verdict et la prochaine page logique.

## 9. Pages terminées

| Surface | Route | Composant | État |
|---|---|---|---|
| Home | `/` | `components/HomePage.tsx` | validée |
| TASHA | `/tasha` | `components/TashaPage.tsx` | validée |
| AI Solutions & Automation | `/solutions` | `components/SolutionsPage.tsx` | validée |
| Services | `/services` | `components/ServicesPage.tsx` | développée ; anomalie historique de capture de preuve, interface compilée |
| Cloud Computing | `/cloud` | `components/CloudPage.tsx` | validée `ship` |
| Cybersecurity | `/cybersecurity` | `components/CybersecurityPage.tsx` | validée `ship` |
| IT Support & Training | `/training` | `components/TrainingPage.tsx` | validée `ship` |
| About / Our Story | `/about` | `components/AboutPage.tsx` | validée `ship` |
| Insights | `/insights` | `components/InsightsPage.tsx` | validée `ship` |
| Contact | `/contact` | `components/ContactPage.tsx` | validée `ship` |

## 10. Ordre recommandé pour la suite

Toutes les surfaces prévues sont construites. La prochaine phase est l'intégration fonctionnelle des canaux officiels de contact et la correction des dettes connues :

1. Connecter le formulaire Contact à l'endpoint officiel lorsqu'il est fourni.
2. Configurer la destination WhatsApp officielle sans inventer de coordonnées.
3. Corriger les liens encore temporaires du footer et les ancres `/#contact` vers les routes réelles appropriées.
4. Résoudre l'anomalie historique de capture de preuve de Services.

## 11. Pièges connus

- Le navigateur intégré peut produire une capture pleine page blanche ou appliquer le mauvais viewport. Toujours vérifier les dimensions réelles dans la page et ouvrir le PNG enregistré.
- Appliquer le viewport à un onglet déjà ouvert, recharger, attendre le rendu, capturer, écrire le fichier, puis seulement réinitialiser le viewport.
- Un `screen.png` Stitch très étroit peut être un export pleine page réduit et non un vrai viewport mobile. Documenter le viewport de comparaison canonique plutôt que de forcer une composition desktop dans 258 px.
- `server-architecture.png` est un gros plan de baie serveur, pas une topologie. Utiliser `cloud-topology.png` pour les plans d'architecture.
- Utiliser `zero-trust-datacenter.png` pour l'allée Zero Trust et conserver `server-architecture.png` pour la résilience matérielle.
- Ne jamais écraser une preuve d'une autre surface avec un nom générique. Toujours préfixer les captures par la route.
- Les styles globaux sont volumineux : ajouter une section commentée et ne pas réécrire les blocs des pages déjà validées.

## 12. État des actifs principaux

- `public/images/server-architecture.png` : gros plan serveur.
- `public/images/fiber-network.png` : réseau fibre.
- `public/images/human-machine-synergy.png` : interaction humain-machine.
- `public/images/tasha-corridor-map.png` : corridor TASHA Afrique–Amérique.
- `public/images/ai-security-matrix.png` : matrice de sécurité autonome TASHA.
- `public/images/cloud-topology.png` : topologie cloud isométrique dédiée.
- `public/images/zero-trust-datacenter.png` : allée datacenter Zero Trust.
- `public/images/about-datacenter-hero.png` : baie serveur datacenter pour le hero About.
- `public/images/about-global-network-map.png` : visuel carte réseau globale Afrique–Amérique pour About.

## 13. Définition de « terminé »

Une page est terminée uniquement si :

- la narration Stitch complète est présente ;
- la composition desktop est fidèle ;
- la version mobile est intentionnelle et sans débordement ;
- les composants globaux sont utilisés ;
- aucune affirmation non vérifiée n'a été ajoutée ;
- les actifs sont réellement enregistrés dans le projet ;
- le détecteur a été exécuté une seule fois lorsque disponible ;
- les captures ont été ouvertes et vérifiées ;
- la revue indépendante a rendu `ship` ;
- `DESIGN.md` et `.impeccable/design.json` reflètent le résultat ;
- `npm run build` réussit.

## 14. Première action de l'agent qui reprend

Lire dans cet ordre :

1. `AGENTS.md` ;
2. `PRODUCT.md` ;
3. `DESIGN.md` ;
4. `.impeccable/design.json` ;
5. la maquette et le prototype HTML de la prochaine page ;
6. `components/Header.tsx`, `components/Footer.tsx` et une page validée comparable ;
7. `app/globals.css`.

Ensuite, exécuter automatiquement le protocole de reprise suivant :

1. Inventorier `app/*/page.tsx`, `components/*Page.tsx` et `.impeccable/surfaces/*.md`.
2. Lire le tableau « Pages terminées » ci-dessus.
3. Vérifier que chaque page marquée `ship` possède sa route, son composant, son brief et ses captures principales.
4. Exécuter `npm run build` pour établir l'état de départ. Si le build échoue à cause de la surface en cours, reprendre cette surface avant d'en ouvrir une autre.
5. Choisir la première surface non validée dans « Ordre recommandé pour la suite ».
6. Si des fichiers existent déjà pour cette surface, les traiter comme un travail en cours : inspecter et continuer, ne pas les remplacer aveuglément.
7. Si aucune surface de la liste ne reste, passer à la phase d'intégration fonctionnelle et de correction des liens temporaires.
8. Annoncer brièvement la surface reprise et commencer directement. Ne pas redemander les choix déjà fixés.

### Règle de mise à jour de l'évolution

Après chaque page ayant reçu `ship`, l'agent doit, dans le même travail :

- ajouter ou actualiser sa ligne dans « Pages terminées » ;
- la retirer de « Ordre recommandé pour la suite » ;
- mettre à jour `PRODUCT.md` dans la section « Delivery State » ;
- laisser la prochaine surface en première position ;
- vérifier que `DESIGN.md` documente la nouvelle surface ;
- conserver cette règle dans `AGENTS.md` pour l'agent suivant.

Le prochain point de reprise actuel est : **intégration fonctionnelle des canaux officiels et correction des dettes connues**. Aucune nouvelle page n'est planifiée.
