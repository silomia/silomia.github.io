# Journal des modifications

## [2.0.9] - 2024-05-01

Simples détails et mises à jours mineures.  

### Changé
- `conseils-pratiques-photographie.html`, dessin et peinture  
- `internet-referencement-site-web.html`, l'ère du PageRank est révolue  
- `gateau-roule.html`, recette modifiée  
- `meditation-relaxation-seance-video.html`, lien avec l'univers  
- `recueil-de-blagues.html`, nouvelle histoire  
- README, autre adresse de courriel  
- Mise à jour oubliée des `dateModified` des fichiers html modifiés depuis la version 2.0.8.  

### Retrait
- `styles.css` et autres feuilles de styles CSS, retrait des `background-image` sans `image-set`  
- `courrier.html` et `images/e-mail.svg`, retrait de l'adresse à Posteo  
- README, retrait d'un commentaire erroné.  


## [2.0.8] - 2023-10-07

Changement du mode sombre (moins foncé pour faciliter la longue lecture) et du mode lecture (choix d'une autre police de caractères Inconsolata Semicondensed à chasse fixe un peu plus grasse). Quelques modifications de "Manipuler la foule"  

### Changé
- `styles.css` et autres feuilles de styles CSS, `script.js`, `courrier.html` et `menu.html` pour le nouveau mode sombre et lecture  
- Remplacement des fontes Inter du mode lecture par Inconsolata Semicondensed et nouvelle compression des autres fontes Inter  
- `mmenu.js` en version 9.3.0  
- `contre-la-manipulation-des-masses.html`, `en-manipulation-crowd-social-opinion.html`, précisions pour lever des ambiguïtés, phrases de transitions, ordre de paragraphes  
- Quelques corrections en anglais  
- `conseils-pratiques-photographie.html`, ajout d'un style  
- `mignardise-muffins.html`, `gourmandise.html`, `et` par `est`  
- README mise à jour des crédits.  


## [2.0.7] - 2022-12-21

Mises à jour de mmenu.js et mburger, optimisations du code, AVIF, navigation au clavier améliorée, cosmétique  

### Changé
- `mmenu.js` en version 9.2.3 et `mburger.css` en version 2.0  
- navigations améliorées au clavier du menu et du dialogue modal.  
- barre d'entête, usage d'un nombre entier comme taille de caractère en pixels.  
- mises à jour et adaptations des `script.js`, `styles.css` et de tous les fichiers `html`.  
- `le-monde-et-l-humanite-doivent-changer.html`, faute d'accord au principe 6.  
- `menu.html`, modification d'un titre.  
- Remplace toutes les images au format AVIF pour une version de meilleure qualité avec respect de la colorimétrie.  
- `styles.css` et autres feuilles de styles CSS, retrait des préfixes vendeurs -o et -ms, optimisation et minimisation par le logiciel CSSO.  


## [2.0.6] - 2022-08-01

Servir les images au format AVIF, révision de quelques phrases  

### Ajouté
- Servir des images au format AVIF (plus léger d'environ -30%) comme alternative au JPEG.  

### Changé
- `le-monde-et-l-humanite-doivent-changer.html`, `en-change-the-world-and-humanity.html`, petits ajouts au principe 4, réécriture du principe 6.  
- `styles.css`, correction de `:hover` sur `button`.   


## [2.0.5] - 2022-07-15

Révision de quelques phrases, changements techniques mineurs 

### Changé
- `contre-la-manipulation-des-masses.html`, `en-manipulation-crowd-social-opinion.html`, la sottise n'est pas une alternative, la fabrique du doute, divers.  
- `Tous les fichiers html` et `CSS`, passage de max-width:359px à 360px car des écrans de téléphones mobiles avec cette largeur en pixels sont plus larges en cm, mais garde cette résolution, alors le texte affiché est trop grand.  
- `Tous les fichiers html`, date de modification en en-tête  
- `styles.css` un fin de commentaire à `#cta` pas effacé  


## [2.0.4] - 2022-04-12

Révision de quelques phrases  

### Changé
- `contre-la-manipulation-des-masses.html`, `en-manipulation-crowd-social-opinion.html`, mise en évidence du paradoxe de la société tolérante, réécriture des 3 questions, rôle des influencés.  
- `README` révision des dépôts.  


## [2.0.3] - 2022-03-20

Changements techniques mineurs, moins de code JS et optimisation  

### Changé
- `Tous les fichiers html`, `styles.css`, `script.js`, affichage de la fenêtre modale de copie d'URL en utilisant la balise `dialog` au lieu d'une combinaison d'astuces en CSS et JS.  
- `Tous les fichiers html`, les modes sombre, clair et lecture étaient inopérants avec les versions récentes de Google Chrome.  
- `30-min-relaxation-meditation-fr+en+st.mp4`, changement d'encodeur vidéo de h.265 vers h.264.  

### Retrait
- `Tous les fichiers html`, `script.js`, méthode de chargement différé des images en JavaScript au profit de la méthode native loading="lazy".   


## [2.0.2] - 2022-03-15

Corrections mineures  

### Changé
- `conseils-pratiques-photographie.html`, `en-change-your-life-succeed-evolve.html`, `gateau-stollen.html`, `gateau-streusel-a-la-creme.html`, `gourmandise-brioche-au-beurre.html`, `gourmandise-croissants-pains-au-chocolat.html`, `internet-referencement-site-web.html`, `internet-se-proteger-des-pirates-et-hackers.html`, `le-monde-et-l-humanite-doivent-changer.html`, tabulations de mise en forme du code.  
- `README`, ajout des services web.  
- Ajout de la balise `link rel="canonical"` pointant vers le site gitlab pour indiquer le contenu dupliqué.  


## [2.0.1] - 2022-02-15

Corrections mineures  

### Changé
- Diverses petites corrections en anglais.  
- `en-change-the-world-and-humanity.html`, correction du schéma.org.  
- Police `rasmus inter`, ajout du caractère `ô` en semi-gras et gras.  


## [2.0] - 2022-01-15

Version bilingue en français et en anglais  

### Ajouté
- Les fichiers HTML commençants par `en-` sont les versions anglaises de leurs équivalents en français.  
- Les scripts d'exemples PHP sont traduits en anglais, ils se terminent par `-en.zip`.  
- `30-min-relaxation-meditation-en.mp4` avec ma voix en anglais et texte des sous-titres.  
- `conseils-pratiques-photographie.html`, ajout de 7 photos d'illustration (voir le dossier `images` pour les versions 400, 800 et 3000 px). _Profitant du confinement pendant la pandémie de coronavirus en 2020 et 2021, j'ai enfin décidé de me former sérieusement à cet art et ces photos proviennent de mes exercices de cours ! (pas de ma collection personnelle)_.  

### Changé
- `30-min-relaxation-meditation` en version bilingue Fr et En et enregistrements avec un débit binaire plus élevé pour une meilleure qualité.  
- `internet-referencement-site-web.html`, mise à jour des URLs.  
- `sitemap.xml`, déclaration des attributs `hrflang`.  
- README avec paragraphe en anglais et mise à jour des crédits.  
- Police `rasmus inter` en version: 3.19
- Script `Mmenu-js` en version: 8.5.24
- Script `mhead.js` en version: 2.1.1

### Retrait
- `internet-notification-paypal-ipn.html`, `paypal-ipn-mail.zip`, `paiement-carte-orla.jpg` car obsolète.  
- `critique (court).css` car inutile.  
