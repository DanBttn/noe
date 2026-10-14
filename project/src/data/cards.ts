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
                { name: 'Brochette de langue de bœuf, prune & amandes, sauce soja', price: '20 €' },
                { name: 'Crispy aubergine laquée, stracciatella et melon', price: '19 €' },
                { name: 'Tartelette gribiche, chutney de tomates, tomates cerises fraîches et anisées', price: '19 €' },
              ],
            },
          ],
        },
        {
          title: 'Plats',
          groups: [
            {
              items: [
                { name: 'Rouget, purée de carottes, poireaux, sauce curry rouge & tomates', price: '32 €' },
                {
                  name: 'Filet de veau, sauce au vin rouge, jambon & girolles, pommes de terre mitrailles au beurre persillé',
                  price: '40 €',
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
                  detail: 'Légumes · Purée de carottes · Pommes de terre mitrailles au beurre persillé · Salade verte',
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
                { name: 'Gâteau chocolat et crème légère, cerises confites', price: '15 €' },
                {
                  name: 'Financier amande, noisettes & abricots, crème chantilly, glace chocolat blanc & lavande',
                  price: '15 €',
                },
                { name: 'Panacotta vanille, confiture de figues, gelée de vin chaud', price: '14 €' },
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
                { name: 'Beef tongue skewer, plum & almonds, soy sauce', price: '€20' },
                { name: 'Crispy lacquered aubergine, stracciatella & melon', price: '€19' },
                { name: 'Gribiche tartlet, tomato chutney, fresh cherry tomatoes with anise', price: '€19' },
              ],
            },
          ],
        },
        {
          title: 'Mains',
          groups: [
            {
              items: [
                { name: 'Red mullet, carrot purée, leeks, red curry & tomato sauce', price: '€32' },
                {
                  name: 'Veal fillet, red wine sauce, ham & chanterelles, baby potatoes in parsley butter',
                  price: '€40',
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
                  detail: 'Vegetables · Carrot purée · Baby potatoes in parsley butter · Green salad',
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
                { name: 'Chocolate cake, light cream, candied cherries', price: '€15' },
                {
                  name: 'Almond financier, hazelnuts & apricots, whipped cream, white chocolate & lavender ice cream',
                  price: '€15',
                },
                { name: 'Vanilla panna cotta, fig jam, mulled wine jelly', price: '€14' },
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
