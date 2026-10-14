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

La mise en ligne est automatique : le dépôt GitHub est relié au projet Vercel `noe-restaurant`.

- Chaque `git push` sur `main` met le site en production (environ 1 minute).
- Un push sur une autre branche crée une version de test, avec sa propre adresse.
- Le suivi des déploiements se fait sur https://vercel.com/danbitton04-4990/noe-restaurant/deployments

Dans les réglages Vercel, le dossier racine est `project` et le framework est Vite.
Pour publier à la main sans passer par GitHub : `vercel --prod` depuis la racine du dépôt.

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
