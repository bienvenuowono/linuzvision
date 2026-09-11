# LinuZvision — Audit de communication et d’intégration

Date : 28 août 2026

## Architecture vérifiée

- Frontend public Next.js : toutes les surfaces utilisent le Header, le Footer et le bouton WhatsApp globaux.
- Identité : `public/images/linuzvision-logo.jpg` est le logo partagé par le site et l’administration.
- Navigation : les routes sont regroupées sous Intelligence, Infrastructure et Company.
- Backend : les routes `/api/insights`, `/api/insights/[id]`, `/api/contact`, `/api/admin/login` et `/api/admin/logout` communiquent avec le frontend.
- Base : SQLite initialisée automatiquement avec les tables `insights` et `inquiries`. En production, `DATABASE_DIRECTORY` doit pointer vers un volume persistant partagé par une instance applicative unique.
- Administration : `/dashboard/login` protège `/dashboard` par un cookie signé, HTTP-only, SameSite strict et sécurisé en production.
- Publications : création, brouillon/publication, modification, suppression, liste publique et page d’article dynamique sont reliés à la même table.
- Contact : le formulaire public enregistre les demandes dans `inquiries`, ensuite visibles dans le dashboard.

## Résultats matériels

- `npm run build` : réussi, 18 routes générées.
- `npm run db:check` : intégrité SQLite `ok`.
- Test de bout en bout : connexion réussie, publication créée, visible par l’API publique et dans sa page, demande de contact visible dans le dashboard, publication supprimée.
- Données fictives d’audit : supprimées après le contrôle.
- Responsive Insights : aucun débordement à 1440 px et 390 px.
- Coordonnées : WhatsApp `https://wa.me/14432488520`, téléphone `+1 (443) 248-8520`, email `linuzvisionllc@gmail.com`.

## SEO livré

- Titres avec modèle global et descriptions spécifiques par surface.
- Canonical, Open Graph, Twitter Card, robots et directives Google.
- Données structurées Organization avec email et téléphone.
- `robots.txt`, `sitemap.xml` dynamique incluant les publications, et manifest.
- Dashboard et API exclus de l’indexation.

## Configuration avant production

Copier `.env.example` vers `.env.local` ou définir les mêmes variables dans l’hébergeur :

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD` avec un secret unique et robuste
- `ADMIN_SESSION_SECRET` avec une valeur aléatoire longue
- `NEXT_PUBLIC_SITE_URL` avec le domaine HTTPS définitif
- `DATABASE_DIRECTORY` avec le chemin absolu du volume persistant

Ne jamais versionner les secrets ni le fichier SQLite de production. Pour une infrastructure multi-instance ou serverless, migrer l’adaptateur de persistance vers PostgreSQL géré avant montée en charge ; le contrat API et le frontend peuvent rester identiques.
