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
                { name: 'Crispy aubergine laquée, stracciatella et melon', price: '19 €' },
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
                  name: 'Cordon-bleu de veau, mayonnaise et crème à la truffe noire, purée & chips de panais, pickles d’oignon',
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
          subtitle: 'Selon poids (30 min de cuisson)',
          groups: [
            {
              items: [
                { name: 'Épaule d’agneau confite 13 heures', price: '70 €/kg' },
                { name: 'Tomahawk de bœuf', price: '145 €/kg' },
                {
                  name: 'Garnitures',
                  detail: 'Légumes · Purée de panais · Pommes de terre mitrailles au beurre persillé · Salade verte',
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
                { name: 'Crème caramel japonaise', price: '14 €' },
                { name: 'Cookie tiède, confiture de figues, glace baileys et dulce de leche', price: '15 €' },
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
                { name: 'Jacquesson', detail: 'Champagne - Extra Brut - Cuvée N°747', meta: 'NM', price: '26 €' },
                { name: 'Romain Henin', detail: 'Champagne - L’Odyssée Pétillante - Chapitre 1', meta: '2022', price: '16 €' },
              ],
            },
          ],
        },
        {
          title: 'Les Blancs',
          groups: [
            {
              label: 'Bourgogne',
              items: [
                { name: 'Fontaine-Gagnard', detail: 'Chassagne-Montrachet 1er Cru - Les Vergers', meta: '2022', price: '22 €' },
                { name: 'Laurent Tribut', detail: 'Chablis', meta: '2018', price: '11 €' },
              ],
            },
            {
              label: 'Languedoc',
              items: [{ name: 'Clos Constantin', detail: 'Languedoc - Strate', meta: '2023', price: '12 €' }],
            },
            {
              label: 'Vallée de la Loire',
              items: [
                { name: 'Eric Morgat', detail: 'Anjou - La Croisée Des Chenins', meta: '2017', price: '24 €' },
                { name: 'Terra Vita Vinum', detail: 'Anjou - Grand Vau', meta: '2022', price: '9 €' },
              ],
            },
          ],
        },
        {
          title: 'Les Rouges',
          groups: [
            {
              label: 'Bourgogne',
              items: [
                { name: 'Armand Heitz', detail: 'Bourgogne', meta: '2023', price: '14 €' },
                { name: 'Sylvain Cathiard & Fils', detail: 'Hautes-Côtes-de-Nuits - Les Dames Huguette', meta: '2022', price: '29 €' },
              ],
            },
            {
              label: 'Vallée du Rhône',
              items: [
                { name: 'Domaine Emmanuel Darnaud', detail: 'Crozes-Hermitage - Les Trois Chênes', meta: '2021', price: '10 €' },
                { name: 'Domaine R. & M. Saouma', detail: 'Châteauneuf-du-Pape - Omnia', meta: '2021', price: '27 €' },
              ],
            },
            {
              label: 'Vallée de la Loire',
              items: [{ name: 'Domaine Guiberteau', detail: 'Saumur', meta: '2023', price: '8 €' }],
            },
          ],
        },
        {
          title: 'Rosé',
          groups: [
            {
              label: 'Provence',
              items: [
                { name: 'Domaine de la Tour du Bon', detail: 'Bandol', meta: '2024', price: '12 €' },
                { name: 'Domaine Tempier', detail: 'Bandol', meta: '2021', price: '13 €' },
              ],
            },
          ],
        },
        {
          title: 'Doux / Liquoreux',
          groups: [
            {
              items: [
                { name: 'Pierre Deville', detail: 'Ratafia de Champagne', meta: '2019', price: '13 €' },
                { name: 'Château Coutet', detail: 'Barsac - 1er Cru Classé', meta: '2020', price: '23 €' },
                { name: 'Marnes Blanches', detail: 'Macvin du Jura', price: '13 €' },
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
                { name: 'Crispy lacquered aubergine, stracciatella & melon', price: '€19' },
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
                  name: 'Veal cordon bleu, black truffle mayonnaise & cream, parsnip purée & crisps, pickled onions',
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
          subtitle: 'Priced by weight (30 min cooking time)',
          groups: [
            {
              items: [
                { name: 'Lamb shoulder confit, slow-cooked for 13 hours', price: '€70/kg' },
                { name: 'Beef tomahawk', price: '€145/kg' },
                {
                  name: 'Sides',
                  detail: 'Vegetables · Parsnip purée · Baby potatoes in parsley butter · Green salad',
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
                { name: 'Japanese crème caramel', price: '€14' },
                { name: 'Warm cookie, fig jam, Baileys ice cream & dulce de leche', price: '€15' },
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
                { name: 'Jacquesson', detail: 'Champagne - Extra Brut - Cuvée N°747', meta: 'NV', price: '€26' },
                { name: 'Romain Henin', detail: 'Champagne - L’Odyssée Pétillante - Chapitre 1', meta: '2022', price: '€16' },
              ],
            },
          ],
        },
        {
          title: 'Whites',
          groups: [
            {
              label: 'Burgundy',
              items: [
                { name: 'Fontaine-Gagnard', detail: 'Chassagne-Montrachet 1er Cru - Les Vergers', meta: '2022', price: '€22' },
                { name: 'Laurent Tribut', detail: 'Chablis', meta: '2018', price: '€11' },
              ],
            },
            {
              label: 'Languedoc',
              items: [{ name: 'Clos Constantin', detail: 'Languedoc - Strate', meta: '2023', price: '€12' }],
            },
            {
              label: 'Loire Valley',
              items: [
                { name: 'Eric Morgat', detail: 'Anjou - La Croisée Des Chenins', meta: '2017', price: '€24' },
                { name: 'Terra Vita Vinum', detail: 'Anjou - Grand Vau', meta: '2022', price: '€9' },
              ],
            },
          ],
        },
        {
          title: 'Reds',
          groups: [
            {
              label: 'Burgundy',
              items: [
                { name: 'Armand Heitz', detail: 'Bourgogne', meta: '2023', price: '€14' },
                { name: 'Sylvain Cathiard & Fils', detail: 'Hautes-Côtes-de-Nuits - Les Dames Huguette', meta: '2022', price: '€29' },
              ],
            },
            {
              label: 'Rhône Valley',
              items: [
                { name: 'Domaine Emmanuel Darnaud', detail: 'Crozes-Hermitage - Les Trois Chênes', meta: '2021', price: '€10' },
                { name: 'Domaine R. & M. Saouma', detail: 'Châteauneuf-du-Pape - Omnia', meta: '2021', price: '€27' },
              ],
            },
            {
              label: 'Loire Valley',
              items: [{ name: 'Domaine Guiberteau', detail: 'Saumur', meta: '2023', price: '€8' }],
            },
          ],
        },
        {
          title: 'Rosé',
          groups: [
            {
              label: 'Provence',
              items: [
                { name: 'Domaine de la Tour du Bon', detail: 'Bandol', meta: '2024', price: '€12' },
                { name: 'Domaine Tempier', detail: 'Bandol', meta: '2021', price: '€13' },
              ],
            },
          ],
        },
        {
          title: 'Sweet wines',
          groups: [
            {
              items: [
                { name: 'Pierre Deville', detail: 'Ratafia de Champagne', meta: '2019', price: '€13' },
                { name: 'Château Coutet', detail: 'Barsac - 1er Cru Classé', meta: '2020', price: '€23' },
                { name: 'Marnes Blanches', detail: 'Macvin du Jura', price: '€13' },
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
