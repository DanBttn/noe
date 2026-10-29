import { WINE_LIST_URL } from '../links';
import type { Lang } from '../i18n/translations';

// Contenu des cartes affichées au clic sur « Menu » et « Carte des vins », en français et en anglais.
// Pour mettre à jour un plat, un vin ou un prix, modifiez-le ici dans les deux langues.

export type CardId = 'menu' | 'wine';

export interface CardItem {
  name: string;
  detail?: string;
  meta?: string;
  price: string;
}

export interface CardGroup {
  label?: string;
  items: CardItem[];
}

export interface CardSection {
  title: string;
  subtitle?: string;
  groups: CardGroup[];
}

export interface Card {
  title: string;
  subtitle: string;
  sections: CardSection[];
  notes: string[];
  link?: { label: string; href: string };
}

export const CARDS: Record<Lang, Record<CardId, Card>> = {
  fr: {
    menu: {
      title: 'Le Menu',
      subtitle: 'Cheffe Den Mi Kim',
      sections: [
        {
          title: 'Les petites assiettes',
          groups: [
            {
              items: [
                { name: 'Caviar 30g et blinis', price: '65 €' },
                { name: 'Cecina de bœuf', price: '18 €' },
                { name: 'Jambon ibérique Palette de Bellota', price: '18 €' },
                { name: 'Accras de crabe, sauce chien (3 pcs)', price: '17 €' },
                { name: 'Croquettes maïs, parmesan, tomate séchée (4 pcs)', price: '11 €' },
              ],
            },
          ],
        },
        {
          title: 'Entrées',
          groups: [
            {
              items: [
                {
                  name: 'Tartelette à l’encre de seiche, gambas, crème miso, concombre, agrumes & noisettes',
                  price: '22 €',
                },
                { name: 'Crispy aubergine laquée, stracciatella et pink lady', price: '19 €' },
                { name: 'Poêlée de champignons, halloumi, butternut & émulsion chorizo', price: '20 €' },
              ],
            },
          ],
        },
        {
          title: 'Plats',
          groups: [
            {
              items: [
                {
                  name: 'Cordon-bleu, mayonnaise et crème à la truffe noire, purée & chips de panais, pickles d’oignon',
                  price: '42 €',
                },
                {
                  name: 'Églefin, beurre au sésame, ail et combava, salsifis rôtis, jus de volaille et crème d’ail',
                  price: '30 €',
                },
                { name: 'Risotto de petit épeautre, maïs rôti, parmesan, moules & œufs de brochet fumé', price: '30 €' },
              ],
            },
          ],
        },
        {
          title: 'À partager',
          groups: [
            {
              items: [
                {
                  name: 'Souris d’agneau mijotée 7 h en cocotte, légumes et pommes de terre',
                  detail: 'Minimum 2 personnes',
                  price: '45 €/pers.',
                },
                { name: 'Tomahawk de bœuf (selon poids)', price: '145 €/kg' },
                {
                  name: 'Garnitures',
                  detail: 'Légumes · Purée de panais · Salade verte · Pommes de terre mitrailles au beurre persillé',
                  price: '8 €',
                },
              ],
            },
          ],
        },
        {
          title: 'Desserts',
          groups: [
            {
              items: [
                { name: 'Crème caramel et tuile chocolat', price: '14 €' },
                {
                  name: 'Cookie tiède aux figues séchées, confiture maison, glace baileys et dulce de leche',
                  price: '15 €',
                },
                { name: 'Gâteau chocolat et crème légère, cerises confites', price: '15 €' },
                { name: 'Sélection de fromages Maison Ratafia, confiture d’abricot', price: '17 €' },
              ],
            },
          ],
        },
      ],
      notes: [
        'Des options végétariennes peuvent être proposées sur demande.',
        'La liste des allergènes présents dans nos plats est disponible sur demande.',
        'Prix nets - service compris.',
      ],
    },
    wine: {
      title: 'Carte des vins',
      subtitle: 'La sélection des vins au verre',
      sections: [
        {
          title: 'Les Bulles',
          groups: [
            {
              label: 'Champagne',
              items: [
                { name: 'Krug', detail: 'Champagne - Grande Cuvée - 174ème Édition', meta: 'NM', price: '49 €' },
                { name: 'Olivier Horiot', detail: 'Champagne - Brut Nature - Métisse - Noirs & Blancs', meta: 'NM', price: '19 €' },
              ],
            },
          ],
        },
        {
          title: 'Les Blancs',
          groups: [
            {
              label: 'Bourgogne',
              items: [{ name: 'Armand Heitz', detail: 'Hautes-Côtes-de-Nuits', meta: '2023', price: '14 €' }],
            },
            {
              label: 'Jura',
              items: [{ name: 'Domaine de la Renardière', detail: 'Arbois-Pupillin - Jurassique', meta: '2023', price: '12 €' }],
            },
            {
              label: 'Savoie',
              items: [{ name: 'Nicolas Gonin', detail: 'Isère Balmes Dauphinoises - Altesse', meta: '2018', price: '11 €' }],
            },
            {
              label: 'Vallée du Rhône',
              items: [{ name: 'Domaine des Entrefaux', detail: 'Crozes-Hermitage', meta: '2023', price: '13 €' }],
            },
            {
              label: 'Vallée de la Loire',
              items: [{ name: 'Guillerault Fargette', detail: 'Sancerre - Alpha-Omega', meta: '2022', price: '15 €' }],
            },
          ],
        },
        {
          title: 'Les Rouges',
          groups: [
            {
              label: 'Bourgogne',
              items: [{ name: 'Fanny Sabre', detail: 'Bourgogne', meta: '2023', price: '15 €' }],
            },
            {
              label: 'Beaujolais',
              items: [{ name: 'Binaume', detail: 'Vin de France - Le Gamay de Bully', meta: '2023', price: '11 €' }],
            },
            {
              label: 'Vallée du Rhône',
              items: [{ name: 'Domaine Charvin', detail: 'Côtes-du-Rhône', meta: '2018', price: '13 €' }],
            },
            {
              label: 'Languedoc',
              items: [{ name: 'Héritage du Pic Saint Loup', detail: 'Pic Saint Loup - Tour de Pierre', meta: '2021', price: '12 €' }],
            },
            {
              label: 'Bordeaux',
              items: [{ name: 'Château d’Aiguilhe', detail: 'Castillon-Côtes-de-Bordeaux', meta: '2012', price: '14 €' }],
            },
          ],
        },
        {
          title: 'Les Vins Doux',
          groups: [
            {
              items: [
                { name: 'Château Suduiraut', detail: 'Sauternes', meta: '2017', price: '29 €' },
                { name: 'Marnes Blanches', detail: 'Macvin du Jura', price: '13 €' },
                { name: 'Pierre Deville', detail: 'Ratafia de Champagne', meta: '2019', price: '13 €' },
              ],
            },
          ],
        },
      ],
      notes: ['Prix au verre. Notre cave compte plus de 2 000 références en bouteille.'],
      link: { label: 'Consulter la carte complète des bouteilles (PDF)', href: WINE_LIST_URL },
    },
  },
  en: {
    menu: {
      title: 'The Menu',
      subtitle: 'Chef Den Mi Kim',
      sections: [
        {
          title: 'Small plates',
          groups: [
            {
              items: [
                { name: 'Caviar (30 g) with blinis', price: '€65' },
                { name: 'Beef cecina', price: '€18' },
                { name: 'Ibérico ham, Bellota shoulder', price: '€18' },
                { name: 'Crab accras, sauce chien (3 pcs)', price: '€17' },
                { name: 'Corn, parmesan & sun-dried tomato croquettes (4 pcs)', price: '€11' },
              ],
            },
          ],
        },
        {
          title: 'Starters',
          groups: [
            {
              items: [
                {
                  name: 'Squid ink tartlet, prawns, miso cream, cucumber, citrus & hazelnuts',
                  price: '€22',
                },
                { name: 'Crispy lacquered aubergine, stracciatella & Pink Lady apple', price: '€19' },
                { name: 'Pan-fried mushrooms, halloumi, butternut squash & chorizo emulsion', price: '€20' },
              ],
            },
          ],
        },
        {
          title: 'Mains',
          groups: [
            {
              items: [
                {
                  name: 'Cordon bleu, black truffle mayonnaise & cream, parsnip purée & crisps, pickled onions',
                  price: '€42',
                },
                {
                  name: 'Haddock, sesame, garlic & kaffir lime butter, roasted salsify, chicken jus & garlic cream',
                  price: '€30',
                },
                { name: 'Spelt risotto, roasted corn, parmesan, mussels & smoked pike roe', price: '€30' },
              ],
            },
          ],
        },
        {
          title: 'To share',
          groups: [
            {
              items: [
                {
                  name: 'Lamb shank slow-cooked for 7 hours in a cocotte, vegetables & potatoes',
                  detail: 'Minimum 2 people',
                  price: '€45/person',
                },
                { name: 'Beef tomahawk (priced by weight)', price: '€145/kg' },
                {
                  name: 'Sides',
                  detail: 'Vegetables · Parsnip purée · Green salad · Baby potatoes in parsley butter',
                  price: '€8',
                },
              ],
            },
          ],
        },
        {
          title: 'Desserts',
          groups: [
            {
              items: [
                { name: 'Crème caramel with chocolate tuile', price: '€14' },
                { name: 'Warm dried fig cookie, homemade jam, Baileys ice cream & dulce de leche', price: '€15' },
                { name: 'Chocolate cake, light cream, candied cherries', price: '€15' },
                { name: 'Cheese selection from Maison Ratafia, apricot jam', price: '€17' },
              ],
            },
          ],
        },
      ],
      notes: [
        'Vegetarian options are available on request.',
        'A list of the allergens in our dishes is available on request.',
        'Net prices, service included.',
      ],
    },
    wine: {
      title: 'Wine list',
      subtitle: 'Our wines by the glass',
      sections: [
        {
          title: 'Sparkling',
          groups: [
            {
              label: 'Champagne',
              items: [
                { name: 'Krug', detail: 'Champagne - Grande Cuvée - 174ème Édition', meta: 'NV', price: '€49' },
                { name: 'Olivier Horiot', detail: 'Champagne - Brut Nature - Métisse - Noirs & Blancs', meta: 'NV', price: '€19' },
              ],
            },
          ],
        },
        {
          title: 'Whites',
          groups: [
            {
              label: 'Burgundy',
              items: [{ name: 'Armand Heitz', detail: 'Hautes-Côtes-de-Nuits', meta: '2023', price: '€14' }],
            },
            {
              label: 'Jura',
              items: [{ name: 'Domaine de la Renardière', detail: 'Arbois-Pupillin - Jurassique', meta: '2023', price: '€12' }],
            },
            {
              label: 'Savoie',
              items: [{ name: 'Nicolas Gonin', detail: 'Isère Balmes Dauphinoises - Altesse', meta: '2018', price: '€11' }],
            },
            {
              label: 'Rhône Valley',
              items: [{ name: 'Domaine des Entrefaux', detail: 'Crozes-Hermitage', meta: '2023', price: '€13' }],
            },
            {
              label: 'Loire Valley',
              items: [{ name: 'Guillerault Fargette', detail: 'Sancerre - Alpha-Omega', meta: '2022', price: '€15' }],
            },
          ],
        },
        {
          title: 'Reds',
          groups: [
            {
              label: 'Burgundy',
              items: [{ name: 'Fanny Sabre', detail: 'Bourgogne', meta: '2023', price: '€15' }],
            },
            {
              label: 'Beaujolais',
              items: [{ name: 'Binaume', detail: 'Vin de France - Le Gamay de Bully', meta: '2023', price: '€11' }],
            },
            {
              label: 'Rhône Valley',
              items: [{ name: 'Domaine Charvin', detail: 'Côtes-du-Rhône', meta: '2018', price: '€13' }],
            },
            {
              label: 'Languedoc',
              items: [{ name: 'Héritage du Pic Saint Loup', detail: 'Pic Saint Loup - Tour de Pierre', meta: '2021', price: '€12' }],
            },
            {
              label: 'Bordeaux',
              items: [{ name: 'Château d’Aiguilhe', detail: 'Castillon-Côtes-de-Bordeaux', meta: '2012', price: '€14' }],
            },
          ],
        },
        {
          title: 'Sweet wines',
          groups: [
            {
              items: [
                { name: 'Château Suduiraut', detail: 'Sauternes', meta: '2017', price: '€29' },
                { name: 'Marnes Blanches', detail: 'Macvin du Jura', price: '€13' },
                { name: 'Pierre Deville', detail: 'Ratafia de Champagne', meta: '2019', price: '€13' },
              ],
            },
          ],
        },
      ],
      notes: ['Prices per glass. Our cellar holds more than 2,000 bottle references.'],
      link: { label: 'View the full bottle list (PDF, in French)', href: WINE_LIST_URL },
    },
  },
};
