import { definePage } from "./define";

export const insights = definePage("Insights", "/insights", {
  "hero.from": ["En-tête", "Premier mot du titre", "FROM"],
  "hero.words": ["En-tête", "Mots qui défilent après « FROM » — un mot par ligne", "INSIGHTS\nIDEAS\nKNOWLEDGE\nEXPERIENCE\nINTELLIGENCE\nACTION"],
  "hero.text": ["En-tête", "Texte d'introduction", "Strategic perspectives on artificial intelligence, autonomous systems, and global infrastructure."],
  "hero.scroll": ["En-tête", "Invitation à défiler", "SCROLL TO EXPLORE"],

  "featured.label": ["Article à la une", "Petit libellé", "FEATURED INTELLIGENCE"],
  "featured.button": ["Article à la une", "Bouton", "READ THE INSIGHT"],
  "featured.media": ["Article à la une", "Mention sur l'image", "LZV / INTELLIGENCE"],
  "featured.empty": ["Article à la une", "Message quand aucun article n'est publié", "NEW INTELLIGENCE IS BEING PREPARED."],

  "list.label": ["Liste des articles", "Petit libellé", "KNOWLEDGE HUB"],
  "list.title": ["Liste des articles", "Titre", "LATEST PUBLICATIONS"],
});
