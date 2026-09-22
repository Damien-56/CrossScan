# CrossScan BETA 3 AUTONOME

PWA de classement d'arrivée pour cross scolaire.

- 4 courses indépendantes
- import CSV des élèves
- si la colonne Course est absente, l'import est affecté à la course active
- numéros 001–400 réutilisables indépendamment dans chaque course
- lecture QR par grille de 12 cases
- correction manuelle sans décalage de place
- classement et export CSV
- données élèves conservées localement dans le navigateur
- moteur QR @zxing/browser 0.1.1 embarqué localement dans vendor/
- service worker mettant en cache l'application et ZXing pour usage hors ligne

## Bêta
La pile physique de cartons reste la référence jusqu'à validation du classement numérique.
