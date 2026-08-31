# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js avec React. La première phase livre une Home complète et les composants globaux, avant la déclinaison des autres pages.

## Users

Décideurs, responsables d’entreprise et institutions financières en Afrique et en Amérique qui évaluent des solutions d’intelligence artificielle, d’automatisation, de cloud, de cybersécurité, d’infrastructure et de formation.

## Product Purpose

Présenter LinuZvision, expliquer rapidement ses capacités et conduire les visiteurs vers TASHA, les offres technologiques et une prise de contact qualifiée.

## Positioning

LinuZvision associe agents IA, automatisation métier, expertise infrastructure et accompagnement humain. TASHA est son agent IA propriétaire destiné à participer aux flux opérationnels des entreprises.

## Operating Context

Le site est une expérience institutionnelle et commerciale. La Home doit permettre de découvrir l’entreprise, comprendre sa proposition de valeur, rencontrer TASHA, explorer ses expertises et commencer une conversation.

## Capabilities and Constraints

- Home développée en premier avec les composants globaux réutilisables.
- Pages prévues : TASHA, AI Solutions & Automation, Services, Cloud Computing, Cybersecurity, IT Support & Training, About Us, Insights et Contact.
- Les contenus Insights, partenaires et chiffres clés devront pouvoir être alimentés ultérieurement par des données structurées et PostgreSQL.
- WhatsApp et « Start a conversation » sont les principaux leviers de conversion.
- Les animations doivent rester performantes et proposer une expérience réduite lorsque l’utilisateur préfère moins de mouvement.

## Brand Commitments

- Marque : LinuZvision, LLC.
- Vision géographique : Afrique ↔ Amérique.
- Identité monochrome, cinématique, premium, technique, architecturale et humaine.
- Les designs du dossier `design/` constituent la référence visuelle.

## Evidence on Hand

- Designs Google Stitch et prototypes HTML dans `design/`.
- Système visuel documenté dans `design/linuzvision_core/DESIGN.md`.
- Visuels cinématiques et prototypes Three.js/shaders disponibles dans `design/`.
- Plus de 15 ans d’expérience technologique, indiqué dans le brief fourni.
- Aucun client, partenaire, prix, certification, bureau, chiffre commercial ou contact officiel ne doit être inventé.

## Product Principles

- Expliquer la valeur commerciale de l’intelligence avant la technologie seule.
- Faire de TASHA une technologie propriétaire crédible, pas un personnage artificiel.
- Relier IA, automatisation, infrastructure, sécurité et adoption humaine.
- Transformer chaque page en récit continu plutôt qu’en empilement de blocs génériques.
- Préserver la vérité commerciale avec des espaces réservés explicites lorsque les informations manquent.

## Accessibility & Inclusion

Navigation au clavier, contrastes élevés, structure sémantique, commandes accessibles et prise en charge de `prefers-reduced-motion`. Le contenu doit rester compréhensible sans animation.

## Delivery Method

Le développement frontend suit obligatoirement le protocole Impeccable lorsque celui-ci est disponible : contexte et craft floor avant implémentation, brief de surface, détecteur mécanique exécuté une fois, captures desktop/mobile/hero, reviewer indépendant, corrections par lots jusqu'à `ship`, documenter indépendant, puis build final.

Si la plateforme ne fournit pas Impeccable ou les sous-agents, elle doit reproduire ces responsabilités dans des passes séparées et annoncer la substitution. L'absence d'un outil ne supprime jamais les critères de fidélité, de capture, de revue, de documentation ou de compilation.

## Delivery State

État canonique de l'avancement au dernier handoff :

- Home `/` : validée.
- TASHA `/tasha` : validée.
- AI Solutions `/solutions` : validée.
- Services `/services` : développée et compilée ; preuve de capture historique imparfaite.
- Cloud `/cloud` : validée `ship`.
- Cybersecurity `/cybersecurity` : validée `ship`.
- IT Support & Training `/training` : validée `ship`.
- About / Our Story `/about` : validée `ship`.
- Insights `/insights` : validée `ship`.
- Contact `/contact` : validée `ship`.

Toutes les surfaces prévues sont désormais construites. La prochaine phase est l’intégration fonctionnelle des canaux officiels (endpoint de contact et destination WhatsApp), puis la correction des dettes connues, notamment les liens temporaires et la preuve de capture historique de Services.

Tout agent doit reconstruire et vérifier cet état depuis les routes, composants, briefs et captures avant de poursuivre. Il ne doit jamais recommencer une page marquée validée sauf demande explicite de l'utilisateur ou preuve matérielle d'une régression.
