# Restaurant Noé — site vitrine

Site du restaurant Noé (34 rue Legendre, Paris 17ᵉ), en ligne sur https://noe-restaurant.vercel.app.
React + Vite + Tailwind, animations GSAP et défilement fluide Lenis, en français et en anglais.

## Lancer le site en local

```bash
npm install
npm run dev        # http://localhost:5173
```

Avant de publier : `npm run typecheck`, `npm run lint`, puis `npm run build`.

## Publier sur Vercel

```bash
vercel --prod
```

Le dossier est déjà relié au projet Vercel `noe-restaurant` (dossier `.vercel`, non versionné).

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Un texte du site (FR et EN) | `src/i18n/translations.ts` |
| Un plat, un vin ou un prix | `src/data/cards.ts` (les deux langues) |
| Adresse, téléphone, email, Instagram | `src/data/info.ts` |
| Liens OpenTable, Google Maps, carte des vins PDF | `src/links.ts` |
| Les photos de la galerie | `public/images/galerie/` + la liste dans `src/components/Gallery.tsx` |
| Les animations | `src/motion.ts` |

Les photos de la galerie doivent être redimensionnées (1600 px de large environ) avant d'être ajoutées :
les originaux de plusieurs Mo ralentiraient fortement le site.
