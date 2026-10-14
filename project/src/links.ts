export const OPENTABLE_RESERVATION_URL =
  'https://www.opentable.fr/booking/restref/availability?lang=fr-FR&restRef=485235&otSource=Restaurant%20website';

const MAPS_ADDRESS = encodeURIComponent('Noé, 34 rue Legendre, 75017 Paris');

// URL d'intégration directe : l'ancienne forme (maps?output=embed) passe par une redirection
// que certains navigateurs refusent d'afficher dans une iframe.
export const MAPS_EMBED_URL = `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${MAPS_ADDRESS}!6i16!3m1!1sfr!5m1!1sfr`;

// Ouvre Google Maps avec l'itinéraire depuis la position du visiteur.
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_ADDRESS}`;

export const WINE_LIST_URL =
  'https://drive.google.com/file/d/1fKnRDSArCyHuPhgWj3SWI68lrPIAv692/view?usp=sharing';
