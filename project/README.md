# Restaurant Noé — site vitrine

Site du restaurant Noé (34 rue Legendre, Paris 17ᵉ), en ligne sur https://noeparis.com (hébergé sur Firebase : https://noe-restaurant-web.web.app).
React + Vite + Tailwind, animations GSAP et défilement fluide Lenis, en français et en anglais.

## Lancer le site en local

```bash
npm install
npm run dev        # http://localhost:5173
```

Avant de publier : `npm run typecheck`, `npm run lint`, puis `npm run build`.

## Publier sur Firebase

Le site est hébergé sur Firebase Hosting, projet `noe-restaurant-web`.

Depuis la racine du dépôt : `firebase deploy`. Le build (`npm run build` dans `project/`) se lance
automatiquement avant l'envoi, puis le dossier `project/dist` est mis en ligne.

- La configuration est dans `firebase.json` et `.firebaserc`, à la racine du dépôt.
- Le suivi des versions se fait sur https://console.firebase.google.com/project/noe-restaurant-web/hosting

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Un texte du site (FR et EN) | `src/i18n/translations.ts` |
| Un plat, un vin ou un prix | `src/data/cards.ts` (les deux langues) |
| Adresse, téléphone, email, Instagram | `src/data/info.ts` |
| Liens OpenTable, Google Maps, carte des vins PDF | `src/links.ts` |
| Les photos de la galerie | `public/images/galerie/` + la liste dans `src/components/Gallery.tsx` |
| Les badges des distinctions | `public/images/distinctions/` + `src/components/Awards.tsx` |
| Les animations | `src/motion.ts` |

Les photos de la galerie doivent être redimensionnées (1600 px de large environ) avant d'être ajoutées :
les originaux de plusieurs Mo ralentiraient fortement le site.
