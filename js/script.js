/* ******************************************************************************* */
/* CODES JS À METTRE DANS CET ORDRE */
/* ******************************************************************************* */

/* ******************************************************************************* */
/* EN CAS D'ERREUR D'INTERPRÉTATION DU CODE JAVASCRIPT PAR UN NAVIGATEUR WEB, UN SCRIPT */
/* DE SECOURS SUPPRIMERA LES BALISES DE COMMENTAIRES <!--z> POUR AFFICHER LA PAGE */
/* AVEC STYLE MAIS SANS SCRIPTS. À METTRE EN BAS DU FICHIER HTML APRÈS LE SCRIPT */
/* PRINCIPAL, OU APPELER UN AUTRE FICHIER JS. PUIS, ACTIVER AVEC <body onerror="ers()"> */
/* OU ALORS METTRE DIRECTEMENT LE CODE : */
/* <body onerror="var e=document.getElementById('page-wrapper').innerHTML.replace(/(<!--z>|<\/z-->)/g,'');document.getElementById('page-wrapper').innerHTML=e;"> */
/* ******************************************************************************* */
/* function ers() { */
/* 	var tagns = document.getElementById("page-wrapper").innerHTML.replace(/(<!--z>|<\/z-->)/g,""); */
/* 	document.getElementById("page-wrapper").innerHTML = tagns */
/* }; */
/* POUR LES NAVIGATEURS WEB QUI N'INTERPRÉTENT PAS ECMASCRIPT 6 */
/* try { eval("(class Foo{})"); } catch(err) { ers(); } */


/* ******************************************************************************* */
/* COMMUTATION ENTRE DEUX FEUILLES DE STYLES, MODE CLAIR ET SOMBRE */
/* PLACER EN PREMIER POUR LA VITESSE D'AFFICHAGE */
/* COMPATIBILITÉ ARRIÈRE AVEC LES NAVIGATEURS NE COMPRENANT PAS CSS @media prefers-color-scheme */
/* <link rel="stylesheet" id="feuillestyle-active"> */
/* <a href="#0" class="commutateur mode-sombre" data-stylesheet="css/styles.sombre.min.css">Clic</a> */
/* <a href="#0" class="commutateur mode-clair" data-stylesheet="css/styles.clair.min.css">Clic</a> */
/* ******************************************************************************* */

var boutons = document.getElementsByClassName('commutateur');
var feuilleActive = document.getElementById('feuillestyle-active');

/* TEST POUR VOIR SI SESSIONSTORAGE A DÉJÀ UNE VALEUR ENREGISTRÉE, */
/* SI OUI, CHARGE LA FEUILLE DE STYLES */
var SilomiaStyle = sessionStorage.getItem('SilomiaStyle');
switch (SilomiaStyle) {
	case null : ; break; /* SI VIDE, ARRÊT */
	case 'css/styles.sombre.min.css' : document.documentElement.style.backgroundColor = '#151515'; /* POUR ÉVITER UN FLASH BLANC SI MODE SOMBRE, ACTIVER DÉJÀ LA COULEUR DE FOND */
	/* case 'css/styles.clair.min.css' : document.documentElement.style.backgroundColor = '#f3f2e8'; */ /* POUR ÉVITER UN FLASH NOIR SI MODE CLAIR, ACTIVER DÉJÀ LA COULEUR DE FOND */
	default : feuilleActive.setAttribute('href', SilomiaStyle);
};

/* ASSIGNE UN ÉCOUTEUR D'ÉVÈNEMENT POUR CHAQUE BOUTON */
for (var i = 0; i < boutons.length; i++) boutons[i].addEventListener('click', changeStyle);

/* DÉTERMINE #feuillestyle-active POUR ACTIVER LA FEUILLE DE STYLE CLAIR OU SOMBRE */
function changeStyle() {
	var feuilleSelect = this.getAttribute('data-stylesheet');
	feuilleActive.setAttribute('href', feuilleSelect);
/* PAS D'ENREGISTREMENT DANS sessionStorage DE LA CSS QUI CORRESPOND AU MODE D'APPARENCE ACTUEL */
/* POUR LES ANCIENS NAVIGATEURS WEB NE COMPRENANT PAS prefers-color-scheme, MODE CLAIR PAR DÉFAUT */
/* SINON, POUR LES AUTRES CAS, ENREGISTREMENT DE LA CSS DANS sessionStorage */
	( (feuilleSelect == 'css/styles.clair.min.css' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) 
	|| (feuilleSelect == 'css/styles.sombre.min.css' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
	|| (feuilleSelect == 'css/styles.clair.min.css' && window.matchMedia && !window.matchMedia('(prefers-color-scheme: light)').matches && !window.matchMedia('(prefers-color-scheme: dark)').matches) ) ?
	sessionStorage.removeItem('SilomiaStyle') 
	: sessionStorage.setItem('SilomiaStyle', feuilleSelect);
};

/* ******************************************************************************* */
/* ANCIENNE VERSION AVANT UTILISATION DE CSS @media prefers-color-scheme */
/* COMMUTATION ENTRE DEUX FEUILLES DE STYLES, MODE CLAIR ET SOMBRE */
/* <link id="feuillestyle-active" rel="stylesheet" href="css/styles.min.css"> */
/* <a href="#" class="commutateur mode-sombre" data-stylesheet="css/styles.sombre.min.css">Clic</a> */
/* <a href="#" id="vide-memoire">Clic</a> */
/* ******************************************************************************* */
/* var boutons = document.getElementsByClassName('commutateur'); */
/* var feuilleActive = document.getElementById('feuillestyle-active'); */
/* var boutonVideMemoire = document.getElementById('vide-memoire'); */
/* Test pour voir si localStorage a déjà une valeur enregistrée */
/* if (localStorage.getItem('SilomiaStyle')) {feuilleActive.setAttribute('href', localStorage.getItem('SilomiaStyle'));} */
/* Assigne un écouteur d'événement pour chaque bouton */
/* for (var i = 0; i < boutons.length; i++) {boutons[i].addEventListener('click', changeStyle);} */
/* Crée un bouton pour vider le localStorage */
/* boutonVideMemoire.addEventListener('click', videMemoire); */
/* Détermine #feuillestyle-active pour activer la feuille de style clair ou sombre */
/* function changeStyle() {var feuilleSelect = this.getAttribute('data-stylesheet'); feuilleActive.setAttribute('href', feuilleSelect); localStorage.setItem('SilomiaStyle', feuilleSelect);} */
/* Fonction pour englober localStorage.clear */
/* function videMemoire() {localStorage.clear();} */


/* ******************************************************************************* */
/* mhead.js v2.1.1 - mmenujs.com */
/* ******************************************************************************* */
!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i,s={pin:0,unpin:0,tolerance:5};class o{constructor(t,e={}){if(this.opts={},this.header="string"==typeof t?document.querySelector(t):t,!t)return;const n=Object.keys(o.options);for(let t=0;t<n.length;t++)this.opts[n[t]]=e[n[t]]||o.options[n[t]];this.initScroll()}initScroll(){if(!1===this.opts.unpin)return;this.header.classList.add("mh-sticky");var t=2*this.header.offsetHeight;this.opts.unpin=Math.max(t,this.opts.unpin||0),this.opts.pin=Math.max(t,this.opts.pin||0),this.state=null;var e=0;const n=(t={})=>{var n=document.documentElement.scrollTop||document.body.scrollTop,i=e-n,s=i<0?"down":"up";i=Math.abs(i),e=n,this.state==o.UNPINNED?"up"==s&&(n<this.opts.pin||i>this.opts.tolerance)&&this.pin():this.state==o.PINNED?"down"==s&&n>this.opts.unpin&&i>this.opts.tolerance&&this.unpin():this.pin()};window.addEventListener("scroll",n,{passive:!0}),n()}pin(){this.header.classList.add("mh-pinned"),this.header.classList.remove("mh-unpinned"),this.state=o.PINNED}unpin(){this.header.classList.remove("mh-pinned"),this.header.classList.add("mh-unpinned"),this.state=o.UNPINNED}}o.version="2.1.0",o.options=s,o.PINNED="pinned",o.UNPINNED="unpinned",
/*!
 * mhead.js
 * mmenu.frebsite.nl/mhead
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-4.0
 * http://creativecommons.org/licenses/by/4.0/
 */
window&&(window.Mhead=o,(i=window.jQuery||window.Zepto||null)&&(i.fn.mhead=function(t){return this.each((e,n)=>{new o(n,t)})}))}]);

/* ACTIVATION DU SCRIPT mhead.js ET OPTIONS */
new Mhead( '#header', {
	/* pin:0, unpin:0, tolerance:5 */
});

/* ******************************************************************************* */
/* mmenu.js - mmenujs.com - compilé avec GULP */
/* ******************************************************************************* */

/* ******************************************************************************* */
/* POUR INSTALLER MMENU.JS	VERSION 8.5.24 */
/* ******************************************************************************* */
/* SÉLECTIONNER LES GREFFONS SUIVANTS : offcanvas, screenReader, scrollBugFix, autoHeight, dropDown, iconPanels, keyboardNavigation, Borderstyle, Shadows, Themes */
/* AUCUN wrappers */
/* ******************************************************************************* */
/* COMPILER SA PROPRE VERSION, BEAUCOUP PLUS PETITE ET EFFICACE */
/* Installer Gulp dans Ubuntu 21.10. */
/* Avec le Terminal, presque toutes les install se font avec sudo. */ 
/* Installer curl, gcc et node: */
/* sudo apt-get install curl */
/* sudo apt-get install gcc g++ make */
/* curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -  */
/* (ici version 14, sinon aller à https://deb.nodesource.com/setup et voir la version disponible) */
/* sudo apt-get install -y nodejs */
/* Pour connaitre les versions installées */
/* node -v */
/* npm -v */
/* Changer les droits sur le fichier ~/.config */
/* sudo chown -R $USER:$(id -gn $USER) /home/login/.config */
/* Installer Gulp */
/* sudo npm install -g gulp */
/* sudo npm install --save-dev gulp */
/* gulp -v */
/*  */
/* Suivre le tutoriel: */
/* https://mmenujs.com/documentation/custom-build.html */
/*  */
/* Dans le dossier Utilisateur, créer un dossier "projet", y créer les 2 dossiers "custom-build/src/" */
/* Décompresser l'archive mmenu-js dans le dossier "projet" et le nommer "master" */
/*  */
/* Copier dans le dossier "projet/custom-build/src/" les fichiers "projet/master/src/" suivants: */
/* _includes.scss */
/* _variables.scss */
/* mmenu.js */
/* mmenu.scss (bug, pas de scrollbugfix) */
/*  */
/* Personnaliser les fichiers mmenu.js, mmenu.scss et _variables.scss */
/* Attention dans 'mmenu.js', commencer les chemins de fichiers par '/home/login/projet/master/' */
/* Attention dans 'mmenu.scss', remplacer `@import '` par `@import '/home/login/projet/master/src/` */
/* Pour le fichier _includes.scss, ne rien effacer, remplacer `true` par `false` */
/* Se mettre dans le dossier à compiler "projet/master": */
/* cd projet/master/ */
/* mkdir node_modules */
/* chmod u+rw node_modules/ */
/* npm install */
/* npm install gulp --save-dev */
/*  */
/* S'il y a des erreurs, se mettre dans le dossier à compiler "projet/master": */
/* Effacer le fichier 'package-lock.json' et refaire une install npm */
/* rm package-lock.json */
/* npm install */
/* npm install gulp --save-dev */
/*  */
/* Sinon, installer toutes les dépendances inscrites dans "packages.json" */
/* npm install --save-dev gulp-autoprefixer */
/* npm install --save-dev gulp-clean-css */
/* npm install --save-dev gulp-concat */
/* npm install --save-dev gulp-sass */
/* npm install --save-dev gulp-typescript */
/* npm install --save-dev typescript */
/* npm install --save-dev webpack-stream */
/* */
/* Puis compiler le projet */
/* Se mettre dans le dossier à compiler "projet/master": */
/* gulp custom --i ../custom-build/src --o ../custom-build/dist */
/* ******************************************************************************* */

/*!
 * mmenu.js v8.5.24
 * mmenujs.com
 *
 * Copyright (c) Fred Heusschen
 * frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */

!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i={hooks:{},extensions:[],wrappers:[],navbar:{add:!0,sticky:!0,title:"Menu",titleLink:"parent"},onClick:{close:null,preventDefault:null,setSelected:!0},slidingSubmenus:!0},o={classNames:{inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",vertical:"Vertical"},language:null,openingInterval:25,panelNodetype:["ul","ol","div"],transitionDuration:400};function s(e,t){for(var n in"object"!=a(e)&&(e={}),"object"!=a(t)&&(t={}),t)t.hasOwnProperty(n)&&(void 0===e[n]?e[n]=t[n]:"object"==a(e[n])&&s(e[n],t[n]));return e}function a(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function r(e,t,n){if("function"==typeof t){var i=t.call(e);if(void 0!==i)return i}return null!==t&&"function"!=typeof t&&void 0!==t||void 0===n?t:n}function m(e,t,n){var i=!1,o=function(n){void 0!==n&&n.target!==e||(i||(e.removeEventListener("transitionend",o),e.removeEventListener("webkitTransitionEnd",o),t.call(e)),i=!0)};e.addEventListener("transitionend",o),e.addEventListener("webkitTransitionEnd",o),setTimeout(o,1.1*n)}function l(){return"mm-"+c++}var c=0;function u(e){return"mm-"==e.slice(0,3)?e.slice(3):e}var d={};function p(e,t){void 0===d[t]&&(d[t]={}),s(d[t],e)}var f={Menu:"منو"},h={Menu:"Menü"},v={Menu:"Меню"};function b(e){var t=e.split("."),n=document.createElement(t.shift());return t.forEach((function(e){n.classList.add(e)})),n}function g(e,t){return Array.prototype.slice.call(e.querySelectorAll(t))}function _(e,t){var n=Array.prototype.slice.call(e.children);return t?n.filter((function(e){return e.matches(t)})):n}function y(e,t){for(var n=[],i=e.parentElement;i;)n.push(i),i=i.parentElement;return t?n.filter((function(e){return e.matches(t)})):n}function w(e,t,n){e.matches("."+t)&&(e.classList.remove(t),e.classList.add(n))}var L={};function E(e,t){for(var n=t.matches?"yes":"no",i=0;i<L[e].length;i++)L[e][i][n]()}p({Menu:"Menu"},"nl"),p(f,"fa"),p(h,"de"),p(v,"ru");var k=function(){function e(t,n,i){return this.opts=s(n,e.options),this.conf=s(i,e.configs),this._api=["bind","initPanel","initListview","openPanel","closePanel","closeAllPanels","setSelected"],this.node={},this.vars={},this.hook={},this.clck=[],this.node.menu="string"==typeof t?document.querySelector(t):t,"function"==typeof this._deprecatedWarnings&&this._deprecatedWarnings(),this._initWrappers(),this._initAddons(),this._initExtensions(),this._initHooks(),this._initAPI(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),function(){var e=function(e){var t=window.matchMedia(e);E(e,t),t.onchange=function(n){E(e,t)}};for(var t in L)e(t)}(),this}return e.prototype.openPanel=function(e,t){var n=this;if(this.trigger("openPanel:before",[e]),e&&(e.matches(".mm-panel")||(e=e.closest(".mm-panel")),e)){if("boolean"!=typeof t&&(t=!0),e.parentElement.matches(".mm-listitem_vertical")){y(e,".mm-listitem_vertical").forEach((function(e){e.classList.add("mm-listitem_opened"),_(e,".mm-panel").forEach((function(e){e.classList.remove("mm-hidden")}))}));var i=y(e,".mm-panel").filter((function(e){return!e.parentElement.matches(".mm-listitem_vertical")}));this.trigger("openPanel:start",[e]),i.length&&this.openPanel(i[0]),this.trigger("openPanel:finish",[e])}else{if(e.matches(".mm-panel_opened"))return;var o=_(this.node.pnls,".mm-panel"),s=_(this.node.pnls,".mm-panel_opened")[0];o.filter((function(t){return t!==e})).forEach((function(e){e.classList.remove("mm-panel_opened-parent")}));for(var a=e.mmParent;a;)(a=a.closest(".mm-panel"))&&(a.parentElement.matches(".mm-listitem_vertical")||a.classList.add("mm-panel_opened-parent"),a=a.mmParent);o.forEach((function(e){e.classList.remove("mm-panel_highest")})),o.filter((function(e){return e!==s})).filter((function(t){return t!==e})).forEach((function(e){e.classList.add("mm-hidden")})),e.classList.remove("mm-hidden");var r=function(){s&&s.classList.remove("mm-panel_opened"),e.classList.add("mm-panel_opened"),e.matches(".mm-panel_opened-parent")?(s&&s.classList.add("mm-panel_highest"),e.classList.remove("mm-panel_opened-parent")):(s&&s.classList.add("mm-panel_opened-parent"),e.classList.add("mm-panel_highest")),n.trigger("openPanel:start",[e])},l=function(){s&&(s.classList.remove("mm-panel_highest"),s.classList.add("mm-hidden")),e.classList.remove("mm-panel_highest"),n.trigger("openPanel:finish",[e])};t&&!e.matches(".mm-panel_noanimation")?setTimeout((function(){m(e,(function(){l()}),n.conf.transitionDuration),r()}),this.conf.openingInterval):(r(),l())}this.trigger("openPanel:after",[e])}},e.prototype.closePanel=function(e){this.trigger("closePanel:before",[e]);var t=e.parentElement;t.matches(".mm-listitem_vertical")&&(t.classList.remove("mm-listitem_opened"),e.classList.add("mm-hidden"),this.trigger("closePanel",[e])),this.trigger("closePanel:after",[e])},e.prototype.closeAllPanels=function(e){this.trigger("closeAllPanels:before"),this.node.pnls.querySelectorAll(".mm-listitem").forEach((function(e){e.classList.remove("mm-listitem_selected"),e.classList.remove("mm-listitem_opened")}));var t=_(this.node.pnls,".mm-panel"),n=e||t[0];_(this.node.pnls,".mm-panel").forEach((function(e){e!==n&&(e.classList.remove("mm-panel_opened"),e.classList.remove("mm-panel_opened-parent"),e.classList.remove("mm-panel_highest"),e.classList.add("mm-hidden"))})),this.openPanel(n,!1),this.trigger("closeAllPanels:after")},e.prototype.togglePanel=function(e){var t=e.parentElement;t.matches(".mm-listitem_vertical")&&this[t.matches(".mm-listitem_opened")?"closePanel":"openPanel"](e)},e.prototype.setSelected=function(e){this.trigger("setSelected:before",[e]),g(this.node.menu,".mm-listitem_selected").forEach((function(e){e.classList.remove("mm-listitem_selected")})),e.classList.add("mm-listitem_selected"),this.trigger("setSelected:after",[e])},e.prototype.bind=function(e,t){this.hook[e]=this.hook[e]||[],this.hook[e].push(t)},e.prototype.trigger=function(e,t){if(this.hook[e])for(var n=0,i=this.hook[e].length;n<i;n++)this.hook[e][n].apply(this,t)},e.prototype._initAPI=function(){var e=this,t=this;this.API={},this._api.forEach((function(n){e.API[n]=function(){var e=t[n].apply(t,arguments);return void 0===e?t.API:e}})),this.node.menu.mmApi=this.API},e.prototype._initHooks=function(){for(var e in this.opts.hooks)this.bind(e,this.opts.hooks[e])},e.prototype._initWrappers=function(){this.trigger("initWrappers:before");for(var t=0;t<this.opts.wrappers.length;t++){var n=e.wrappers[this.opts.wrappers[t]];"function"==typeof n&&n.call(this)}this.trigger("initWrappers:after")},e.prototype._initAddons=function(){for(var t in this.trigger("initAddons:before"),e.addons)e.addons[t].call(this);this.trigger("initAddons:after")},e.prototype._initExtensions=function(){var e=this;this.trigger("initExtensions:before"),"array"==a(this.opts.extensions)&&(this.opts.extensions={all:this.opts.extensions}),Object.keys(this.opts.extensions).forEach((function(t){var n=e.opts.extensions[t].map((function(e){return"mm-menu_"+e}));n.length&&function(e,t,n){"number"==typeof e&&(e="(min-width: "+e+"px)"),L[e]=L[e]||[],L[e].push({yes:t,no:n})}(t,(function(){n.forEach((function(t){e.node.menu.classList.add(t)}))}),(function(){n.forEach((function(t){e.node.menu.classList.remove(t)}))}))})),this.trigger("initExtensions:after")},e.prototype._initMenu=function(){var e=this;this.trigger("initMenu:before"),this.node.wrpr=this.node.wrpr||this.node.menu.parentElement,this.node.wrpr.classList.add("mm-wrapper"),this.node.menu.id=this.node.menu.id||l();var t=b("div.mm-panels");_(this.node.menu).forEach((function(n){e.conf.panelNodetype.indexOf(n.nodeName.toLowerCase())>-1&&t.append(n)})),this.node.menu.append(t),this.node.pnls=t,this.node.menu.classList.add("mm-menu"),this.trigger("initMenu:after")},e.prototype._initPanels=function(){var e=this;this.trigger("initPanels:before"),this.clck.push((function(t,n){if(n.inMenu){var i=t.getAttribute("href");if(i&&i.length>1&&"#"==i.slice(0,1))try{var o=g(e.node.menu,i)[0];if(o&&o.matches(".mm-panel"))return t.parentElement.matches(".mm-listitem_vertical")?e.togglePanel(o):e.openPanel(o),!0}catch(e){}}})),_(this.node.pnls).forEach((function(t){e.initPanel(t)})),this.trigger("initPanels:after")},e.prototype.initPanel=function(e){var t=this,n=this.conf.panelNodetype.join(", ");if(e.matches(n)&&(e.matches(".mm-panel")||(e=this._initPanel(e)),e)){var i=[];i.push.apply(i,_(e,"."+this.conf.classNames.panel)),_(e,".mm-listview").forEach((function(e){_(e,".mm-listitem").forEach((function(e){i.push.apply(i,_(e,n))}))})),i.forEach((function(e){t.initPanel(e)}))}},e.prototype._initPanel=function(e){var t=this;if(this.trigger("initPanel:before",[e]),w(e,this.conf.classNames.panel,"mm-panel"),w(e,this.conf.classNames.nopanel,"mm-nopanel"),w(e,this.conf.classNames.inset,"mm-listview_inset"),e.matches(".mm-listview_inset")&&e.classList.add("mm-nopanel"),e.matches(".mm-nopanel"))return null;var n=e.id||l(),i=e.matches("."+this.conf.classNames.vertical)||!this.opts.slidingSubmenus;if(e.classList.remove(this.conf.classNames.vertical),e.matches("ul, ol")){e.removeAttribute("id");var o=b("div");e.before(o),o.append(e),e=o}e.id=n,e.classList.add("mm-panel"),e.classList.add("mm-hidden");var s=[e.parentElement].filter((function(e){return e.matches("li")}))[0];if(i?s&&s.classList.add("mm-listitem_vertical"):this.node.pnls.append(e),s&&(s.mmChild=e,e.mmParent=s,s&&s.matches(".mm-listitem")&&!_(s,".mm-btn").length)){var a=_(s,".mm-listitem__text")[0];if(a){var r=b("a.mm-btn.mm-btn_next.mm-listitem__btn");r.setAttribute("href","#"+e.id),a.matches("span")?(r.classList.add("mm-listitem__text"),r.innerHTML=a.innerHTML,s.insertBefore(r,a.nextElementSibling),a.remove()):s.insertBefore(r,_(s,".mm-panel")[0])}}return this._initNavbar(e),_(e,"ul, ol").forEach((function(e){t.initListview(e)})),this.trigger("initPanel:after",[e]),e},e.prototype._initNavbar=function(e){if(this.trigger("initNavbar:before",[e]),!_(e,".mm-navbar").length){var t=null,n=null;if(e.getAttribute("data-mm-parent")?n=g(this.node.pnls,e.getAttribute("data-mm-parent"))[0]:(t=e.mmParent)&&(n=t.closest(".mm-panel")),!t||!t.matches(".mm-listitem_vertical")){var i=b("div.mm-navbar");if(this.opts.navbar.add?this.opts.navbar.sticky&&i.classList.add("mm-navbar_sticky"):i.classList.add("mm-hidden"),n){var o=b("a.mm-btn.mm-btn_prev.mm-navbar__btn");o.setAttribute("href","#"+n.id),i.append(o)}var s=null;t?s=_(t,".mm-listitem__text")[0]:n&&(s=g(n,'a[href="#'+e.id+'"]')[0]);var a=b("a.mm-navbar__title"),r=b("span");switch(a.append(r),r.innerHTML=e.getAttribute("data-mm-title")||(s?s.textContent:"")||this.i18n(this.opts.navbar.title)||this.i18n("Menu"),this.opts.navbar.titleLink){case"anchor":s&&a.setAttribute("href",s.getAttribute("href"));break;case"parent":n&&a.setAttribute("href","#"+n.id)}i.append(a),e.prepend(i),this.trigger("initNavbar:after",[e])}}},e.prototype.initListview=function(e){var t=this;this.trigger("initListview:before",[e]),w(e,this.conf.classNames.nolistview,"mm-nolistview"),e.matches(".mm-nolistview")||(e.classList.add("mm-listview"),_(e).forEach((function(e){e.classList.add("mm-listitem"),w(e,t.conf.classNames.selected,"mm-listitem_selected"),_(e,"a, span").forEach((function(e){e.matches(".mm-btn")||e.classList.add("mm-listitem__text")}))}))),this.trigger("initListview:after",[e])},e.prototype._initOpened=function(){this.trigger("initOpened:before");var e=this.node.pnls.querySelectorAll(".mm-listitem_selected"),t=null;e.forEach((function(e){t=e,e.classList.remove("mm-listitem_selected")})),t&&t.classList.add("mm-listitem_selected");var n=t?t.closest(".mm-panel"):_(this.node.pnls,".mm-panel")[0];this.openPanel(n,!1),this.trigger("initOpened:after")},e.prototype._initAnchors=function(){var e=this;this.trigger("initAnchors:before"),document.addEventListener("click",(function(t){var n=t.target.closest("a[href]");if(n){for(var i={inMenu:n.closest(".mm-menu")===e.node.menu,inListview:n.matches(".mm-listitem > a"),toExternal:n.matches('[rel="external"]')||n.matches('[target="_blank"]')},o={close:null,setSelected:null,preventDefault:"#"==n.getAttribute("href").slice(0,1)},m=0;m<e.clck.length;m++){var l=e.clck[m].call(e,n,i);if(l){if("boolean"==typeof l)return void t.preventDefault();"object"==a(l)&&(o=s(l,o))}}i.inMenu&&i.inListview&&!i.toExternal&&(r(n,e.opts.onClick.setSelected,o.setSelected)&&e.setSelected(n.parentElement),r(n,e.opts.onClick.preventDefault,o.preventDefault)&&t.preventDefault(),r(n,e.opts.onClick.close,o.close)&&e.opts.offCanvas&&"function"==typeof e.close&&e.close())}}),!0),this.trigger("initAnchors:after")},e.prototype.i18n=function(e){return function(e,t){return"string"==typeof t&&void 0!==d[t]&&d[t][e]||e}(e,this.conf.language)},e.options=i,e.configs=o,e.addons={},e.wrappers={},e.node={},e.vars={},e}(),P={blockUI:!0,moveBackground:!0};var x={clone:!1,menu:{insertMethod:"prepend",insertSelector:"body"},page:{nodetype:"div",selector:null,noSelector:[]}};function A(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function S(e,t,n){var i=t.split(".");e[t="mmEvent"+A(i[0])+A(i[1])]=e[t]||[],e[t].push(n),e.addEventListener(i[0],n)}function M(e,t){var n=t.split(".");t="mmEvent"+A(n[0])+A(n[1]),(e[t]||[]).forEach((function(t){e.removeEventListener(n[0],t)}))}k.options.offCanvas=P,k.configs.offCanvas=x;k.prototype.open=function(){var e=this;this.trigger("open:before"),this.vars.opened||(this._openSetup(),setTimeout((function(){e._openStart()}),this.conf.openingInterval),this.trigger("open:after"))},k.prototype._openSetup=function(){var e=this,t=this.opts.offCanvas;this.closeAllOthers(),function(e,t,n){var i=t.split(".");(e[t="mmEvent"+A(i[0])+A(i[1])]||[]).forEach((function(e){e(n||{})}))}(window,"resize.page",{force:!0});var n=["mm-wrapper_opened"];t.blockUI&&n.push("mm-wrapper_blocking"),"modal"==t.blockUI&&n.push("mm-wrapper_modal"),t.moveBackground&&n.push("mm-wrapper_background"),n.forEach((function(t){e.node.wrpr.classList.add(t)})),setTimeout((function(){e.vars.opened=!0}),this.conf.openingInterval),this.node.menu.classList.add("mm-menu_opened")},k.prototype._openStart=function(){var e=this;m(k.node.page,(function(){e.trigger("open:finish")}),this.conf.transitionDuration),this.trigger("open:start"),this.node.wrpr.classList.add("mm-wrapper_opening")},k.prototype.close=function(){var e=this;this.trigger("close:before"),this.vars.opened&&(m(k.node.page,(function(){e.node.menu.classList.remove("mm-menu_opened");["mm-wrapper_opened","mm-wrapper_blocking","mm-wrapper_modal","mm-wrapper_background"].forEach((function(t){e.node.wrpr.classList.remove(t)})),e.vars.opened=!1,e.trigger("close:finish")}),this.conf.transitionDuration),this.trigger("close:start"),this.node.wrpr.classList.remove("mm-wrapper_opening"),this.trigger("close:after"))},k.prototype.closeAllOthers=function(){var e=this;g(document.body,".mm-menu_offcanvas").forEach((function(t){if(t!==e.node.menu){var n=t.mmApi;n&&n.close&&n.close()}}))},k.prototype.setPage=function(e){this.trigger("setPage:before",[e]);var t=this.conf.offCanvas;if(!e){var n="string"==typeof t.page.selector?g(document.body,t.page.selector):_(document.body,t.page.nodetype);if(n=n.filter((function(e){return!e.matches(".mm-menu, .mm-wrapper__blocker")})),t.page.noSelector.length&&(n=n.filter((function(e){return!e.matches(t.page.noSelector.join(", "))}))),n.length>1){var i=b("div");n[0].before(i),n.forEach((function(e){i.append(e)})),n=[i]}e=n[0]}e.classList.add("mm-page"),e.classList.add("mm-slideout"),e.id=e.id||l(),k.node.page=e,this.trigger("setPage:after",[e])};var C=function(){var e=this;M(document.body,"keydown.tabguard"),S(document.body,"keydown.tabguard",(function(t){9==t.keyCode&&e.node.wrpr.matches(".mm-wrapper_opened")&&t.preventDefault()}))},N=function(){var e=this;this.trigger("initBlocker:before");var t=this.opts.offCanvas,n=this.conf.offCanvas;if(t.blockUI){if(!k.node.blck){var i=b("div.mm-wrapper__blocker.mm-slideout");i.innerHTML="<a></a>",document.querySelector(n.menu.insertSelector).append(i),k.node.blck=i}var o=function(t){t.preventDefault(),t.stopPropagation(),e.node.wrpr.matches(".mm-wrapper_modal")||e.close()};k.node.blck.addEventListener("mousedown",o),k.node.blck.addEventListener("touchstart",o),k.node.blck.addEventListener("touchmove",o),this.trigger("initBlocker:after")}},T={aria:!0,text:!0};var H={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},O={"Close menu":"بستن منو","Close submenu":"بستن زیرمنو","Open submenu":"بازکردن زیرمنو","Toggle submenu":"سوییچ زیرمنو"},j={"Close menu":"Menü schließen","Close submenu":"Untermenü schließen","Open submenu":"Untermenü öffnen","Toggle submenu":"Untermenü wechseln"},I={"Close menu":"Закрыть меню","Close submenu":"Закрыть подменю","Open submenu":"Открыть подменю","Toggle submenu":"Переключить подменю"};p({"Close menu":"Menu sluiten","Close submenu":"Submenu sluiten","Open submenu":"Submenu openen","Toggle submenu":"Submenu wisselen"},"nl"),p(O,"fa"),p(j,"de"),p(I,"ru"),k.options.screenReader=T,k.configs.screenReader=H;var D;D=function(e,t,n){e[t]=n,n?e.setAttribute(t,n.toString()):e.removeAttribute(t)},k.sr_aria=function(e,t,n){D(e,"aria-"+t,n)},k.sr_role=function(e,t){D(e,"role",t)},k.sr_text=function(e){return'<span class="mm-sronly">'+e+"</span>"};var B={fix:!0};var U="ontouchstart"in window||!!navigator.msMaxTouchPoints||!1;k.options.scrollBugFix=B;var q={height:"default"};k.options.autoHeight=q;var R={drop:!1,fitViewport:!0,event:"click",position:{},tip:!0};var W={offset:{button:{x:-5,y:5},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};k.options.dropdown=R,k.configs.dropdown=W;var F={add:!1,blockPanel:!0,hideDivider:!1,hideNavbar:!0,visible:3};k.options.iconPanels=F;var z={enable:!1,enhance:!1};k.options.keyboardNavigation=z;var V=function(e){var t=this;M(document.body,"keydown.tabguard"),M(document.body,"focusin.tabguard"),S(document.body,"focusin.tabguard",(function(e){if(t.node.wrpr.matches(".mm-wrapper_opened")){var n=e.target;if(n.matches(".mm-tabend")){var i=void 0;n.parentElement.matches(".mm-menu")&&k.node.blck&&(i=k.node.blck),n.parentElement.matches(".mm-wrapper__blocker")&&(i=g(document.body,".mm-menu_offcanvas.mm-menu_opened")[0]),i||(i=n.parentElement),i&&_(i,".mm-tabstart")[0].focus()}}})),M(document.body,"keydown.navigate"),S(document.body,"keydown.navigate",(function(t){var n=t.target,i=n.closest(".mm-menu");if(i){i.mmApi;if(!n.matches("input, textarea"))switch(t.keyCode){case 13:(n.matches(".mm-toggle")||n.matches(".mm-check"))&&n.dispatchEvent(new Event("click"));break;case 32:case 37:case 38:case 39:case 40:t.preventDefault()}if(e)if(n.matches("input"))switch(t.keyCode){case 27:n.value=""}else{var o=i.mmApi;switch(t.keyCode){case 8:var s=g(i,".mm-panel_opened")[0].mmParent;s&&o.openPanel(s.closest(".mm-panel"));break;case 27:i.matches(".mm-menu_offcanvas")&&o.close()}}}}))};
/*!
 * mmenu.js
 * mmenujs.com
 *
 * Copyright (c) Fred Heusschen
 * frebsite.nl
 */
k.addons={offcanvas:function(){var e=this;if(this.opts.offCanvas){var t=function(e){return"object"!=typeof e&&(e={}),e}(this.opts.offCanvas);this.opts.offCanvas=s(t,k.options.offCanvas);var n=this.conf.offCanvas;this._api.push("open","close","setPage"),this.vars.opened=!1,this.bind("initMenu:before",(function(){n.clone&&(e.node.menu=e.node.menu.cloneNode(!0),e.node.menu.id&&(e.node.menu.id="mm-"+e.node.menu.id),g(e.node.menu,"[id]").forEach((function(e){e.id="mm-"+e.id}))),e.node.wrpr=document.body,document.querySelector(n.menu.insertSelector)[n.menu.insertMethod](e.node.menu)})),this.bind("initMenu:after",(function(){N.call(e),e.setPage(k.node.page),C.call(e),e.node.menu.classList.add("mm-menu_offcanvas");var t=window.location.hash;if(t){var n=u(e.node.menu.id);n&&n==t.slice(1)&&setTimeout((function(){e.open()}),1e3)}})),this.bind("setPage:after",(function(e){k.node.blck&&_(k.node.blck,"a").forEach((function(t){t.setAttribute("href","#"+e.id)}))})),this.bind("open:start:sr-aria",(function(){k.sr_aria(e.node.menu,"hidden",!1)})),this.bind("close:finish:sr-aria",(function(){k.sr_aria(e.node.menu,"hidden",!0)})),this.bind("initMenu:after:sr-aria",(function(){k.sr_aria(e.node.menu,"hidden",!0)})),this.bind("initBlocker:after:sr-text",(function(){_(k.node.blck,"a").forEach((function(t){t.innerHTML=k.sr_text(e.i18n(e.conf.screenReader.text.closeMenu))}))})),this.clck.push((function(t,n){var i=u(e.node.menu.id);if(i&&t.matches('[href="#'+i+'"]')){if(n.inMenu)return e.open(),!0;var o=t.closest(".mm-menu");if(o){var s=o.mmApi;if(s&&s.close)return s.close(),m(o,(function(){e.open()}),e.conf.transitionDuration),!0}return e.open(),!0}if((i=k.node.page.id)&&t.matches('[href="#'+i+'"]'))return e.close(),!0}))}},screenReader:function(){var e=this,t=function(e){return"boolean"==typeof e&&(e={aria:e,text:e}),"object"!=typeof e&&(e={}),e}(this.opts.screenReader);this.opts.screenReader=s(t,k.options.screenReader);var n=this.conf.screenReader;t.aria&&(this.bind("initAddons:after",(function(){e.bind("initMenu:after",(function(){this.trigger("initMenu:after:sr-aria",[].slice.call(arguments))})),e.bind("initNavbar:after",(function(){this.trigger("initNavbar:after:sr-aria",[].slice.call(arguments))})),e.bind("openPanel:start",(function(){this.trigger("openPanel:start:sr-aria",[].slice.call(arguments))})),e.bind("close:start",(function(){this.trigger("close:start:sr-aria",[].slice.call(arguments))})),e.bind("close:finish",(function(){this.trigger("close:finish:sr-aria",[].slice.call(arguments))})),e.bind("open:start",(function(){this.trigger("open:start:sr-aria",[].slice.call(arguments))})),e.bind("initOpened:after",(function(){this.trigger("initOpened:after:sr-aria",[].slice.call(arguments))}))})),this.bind("updateListview",(function(){e.node.pnls.querySelectorAll(".mm-listitem").forEach((function(e){k.sr_aria(e,"hidden",e.matches(".mm-hidden"))}))})),this.bind("openPanel:start",(function(t){var n=g(e.node.pnls,".mm-panel").filter((function(e){return e!==t})).filter((function(e){return!e.parentElement.matches(".mm-panel")})),i=[t];g(t,".mm-listitem_vertical .mm-listitem_opened").forEach((function(e){i.push.apply(i,_(e,".mm-panel"))})),n.forEach((function(e){k.sr_aria(e,"hidden",!0)})),i.forEach((function(e){k.sr_aria(e,"hidden",!1)}))})),this.bind("closePanel",(function(e){k.sr_aria(e,"hidden",!0)})),this.bind("initNavbar:after",(function(e){var t=_(e,".mm-navbar")[0],n=t.matches(".mm-hidden");k.sr_aria(t,"hidden",n)})),t.text&&"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",(function(e){var t=_(e,".mm-navbar")[0],n=!!t.querySelector(".mm-btn_prev");k.sr_aria(g(t,".mm-navbar__title")[0],"hidden",n)}))),t.text&&(this.bind("initAddons:after",(function(){e.bind("setPage:after",(function(){this.trigger("setPage:after:sr-text",[].slice.call(arguments))})),e.bind("initBlocker:after",(function(){this.trigger("initBlocker:after:sr-text",[].slice.call(arguments))}))})),this.bind("initNavbar:after",(function(t){var i=_(t,".mm-navbar")[0];if(i){var o=_(i,".mm-btn_prev")[0];o&&(o.innerHTML=k.sr_text(e.i18n(n.text.closeSubmenu)))}})),this.bind("initListview:after",(function(t){var i=t.closest(".mm-panel").mmParent;if(i){var o=_(i,".mm-btn_next")[0];if(o){var s=e.i18n(n.text[o.parentElement.matches(".mm-listitem_vertical")?"toggleSubmenu":"openSubmenu"]);o.innerHTML+=k.sr_text(s)}}})))},scrollBugFix:function(){var e=this;if(U&&this.opts.offCanvas&&this.opts.offCanvas.blockUI){var t=function(e){return"boolean"==typeof e&&(e={fix:e}),"object"!=typeof e&&(e={}),e}(this.opts.scrollBugFix);if(this.opts.scrollBugFix=s(t,k.options.scrollBugFix),t.fix){var n,i,o=(n=this.node.menu,i="",n.addEventListener("touchmove",(function(e){i="",e.movementY>0?i="down":e.movementY<0&&(i="up")})),{get:function(){return i}});this.node.menu.addEventListener("scroll",a,{passive:!1}),this.node.menu.addEventListener("touchmove",(function(e){var t=e.target.closest(".mm-panel, .mm-iconbar__top, .mm-iconbar__bottom");t&&t.closest(".mm-listitem_vertical")&&(t=y(t,".mm-panel").pop()),t?(t.scrollHeight===t.offsetHeight||0==t.scrollTop&&"down"==o.get()||t.scrollHeight==t.scrollTop+t.offsetHeight&&"up"==o.get())&&a(e):a(e)}),{passive:!1}),this.bind("open:start",(function(){var t=_(e.node.pnls,".mm-panel_opened")[0];t&&(t.scrollTop=0)})),window.addEventListener("orientationchange",(function(t){var n=_(e.node.pnls,".mm-panel_opened")[0];n&&(n.scrollTop=0,n.style["-webkit-overflow-scrolling"]="auto",n.style["-webkit-overflow-scrolling"]="touch")}))}}function a(e){e.preventDefault(),e.stopPropagation()}},autoHeight:function(){var e=this,t=function(e){return"boolean"==typeof e&&e&&(e={height:"auto"}),"string"==typeof e&&(e={height:e}),"object"!=typeof e&&(e={}),e}(this.opts.autoHeight);if(this.opts.autoHeight=s(t,k.options.autoHeight),"auto"==t.height||"highest"==t.height){var n,i=(n=function(e){return e.parentElement.matches(".mm-listitem_vertical")&&(e=y(e,".mm-panel").filter((function(e){return!e.parentElement.matches(".mm-listitem_vertical")}))[0]),e},function(){if(!e.opts.offCanvas||e.vars.opened){var i,o,s=0,a=e.node.menu.offsetHeight-e.node.pnls.offsetHeight;e.node.menu.classList.add("mm-menu_autoheight-measuring"),"auto"==t.height?((o=_(e.node.pnls,".mm-panel_opened")[0])&&(o=n(o)),o||(o=_(e.node.pnls,".mm-panel")[0]),s=o.scrollHeight):"highest"==t.height&&(i=0,_(e.node.pnls,".mm-panel").forEach((function(e){e=n(e),i=Math.max(i,e.scrollHeight)})),s=i),e.node.menu.style.height=s+a+"px",e.node.menu.classList.remove("mm-menu_autoheight-measuring")}});this.bind("initMenu:after",(function(){e.node.menu.classList.add("mm-menu_autoheight")})),this.opts.offCanvas&&this.bind("open:start",i),"highest"==t.height&&this.bind("initPanels:after",i),"auto"==t.height&&(this.bind("updateListview",i),this.bind("openPanel:start",i))}},dropdown:function(){var e=this;if(this.opts.offCanvas){var t=function(e){return"boolean"==typeof e&&e&&(e={drop:e}),"object"!=typeof e&&(e={}),"string"==typeof e.position&&(e.position={of:e.position}),e}(this.opts.dropdown);this.opts.dropdown=s(t,k.options.dropdown);var n=this.conf.dropdown;if(t.drop){var i;this.bind("initMenu:after",(function(){if(e.node.menu.classList.add("mm-menu_dropdown"),"string"!=typeof t.position.of){var n=u(e.node.menu.id);n&&(t.position.of='[href="#'+n+'"]')}if("string"==typeof t.position.of){i=g(document.body,t.position.of)[0];var o=t.event.split(" ");1==o.length&&(o[1]=o[0]),"hover"==o[0]&&i.addEventListener("mouseenter",(function(){e.open()}),{passive:!0}),"hover"==o[1]&&e.node.menu.addEventListener("mouseleave",(function(){e.close()}),{passive:!0})}})),this.bind("open:start",(function(){e.node.menu.mmStyle=e.node.menu.getAttribute("style"),e.node.wrpr.classList.add("mm-wrapper_dropdown")})),this.bind("close:finish",(function(){e.node.menu.setAttribute("style",e.node.menu.mmStyle),e.node.wrpr.classList.remove("mm-wrapper_dropdown")}));var o=function(e,o){var s,a,r,m=o[0],l=o[1],c="x"==e?"offsetWidth":"offsetHeight",u="x"==e?"left":"top",d="x"==e?"right":"bottom",p="x"==e?"width":"height",f="x"==e?"innerWidth":"innerHeight",h="x"==e?"maxWidth":"maxHeight",v=null,b=(s=u,i.getBoundingClientRect()[s]+document.body["left"===s?"scrollLeft":"scrollTop"]),g=b+i[c],_=window[f],y=n.offset.button[e]+n.offset.viewport[e];if(t.position[e])switch(t.position[e]){case"left":case"bottom":v="after";break;case"right":case"top":v="before"}return null===v&&(v=b+(g-b)/2<_/2?"after":"before"),"after"==v?(r=_-((a="x"==e?b:g)+y),m[u]=a+n.offset.button[e]+"px",m[d]="auto",t.tip&&l.push("mm-menu_tip-"+("x"==e?"left":"top"))):(r=(a="x"==e?g:b)-y,m[d]="calc( 100% - "+(a-n.offset.button[e])+"px )",m[u]="auto",t.tip&&l.push("mm-menu_tip-"+("x"==e?"right":"bottom"))),t.fitViewport&&(m[h]=Math.min(n[p].max,r)+"px"),[m,l]};this.bind("open:start",a),window.addEventListener("resize",(function(t){a.call(e)}),{passive:!0}),this.opts.offCanvas.blockUI||window.addEventListener("scroll",(function(t){a.call(e)}),{passive:!0})}}function a(){var e=this;if(this.vars.opened){this.node.menu.setAttribute("style",this.node.menu.mmStyle);var n=[{},[]];for(var i in n=o.call(this,"y",n),(n=o.call(this,"x",n))[0])this.node.menu.style[i]=n[0][i];if(t.tip){["mm-menu_tip-left","mm-menu_tip-right","mm-menu_tip-top","mm-menu_tip-bottom"].forEach((function(t){e.node.menu.classList.remove(t)})),n[1].forEach((function(t){e.node.menu.classList.add(t)}))}}}},iconPanels:function(){var e=this,t=function(e){return"boolean"==typeof e&&(e={add:e}),"number"!=typeof e&&"string"!=typeof e||(e={add:!0,visible:e}),"object"!=typeof e&&(e={}),e}(this.opts.iconPanels);this.opts.iconPanels=s(t,k.options.iconPanels);var n=!1;if("first"==t.visible&&(n=!0,t.visible=1),t.visible=Math.min(3,Math.max(1,t.visible)),t.visible++,t.add){this.bind("initMenu:after",(function(){var n=["mm-menu_iconpanel"];t.hideNavbar&&n.push("mm-menu_hidenavbar"),t.hideDivider&&n.push("mm-menu_hidedivider"),n.forEach((function(t){e.node.menu.classList.add(t)}))}));var i=[];if(!n)for(var o=0;o<=t.visible;o++)i.push("mm-panel_iconpanel-"+o);this.bind("openPanel:start",(function(o){var s=_(e.node.pnls,".mm-panel");if(!(o=o||s[0]).parentElement.matches(".mm-listitem_vertical"))if(n)s.forEach((function(e,t){e.classList[0==t?"add":"remove"]("mm-panel_iconpanel-first")}));else{s.forEach((function(e){i.forEach((function(t){e.classList.remove(t)}))})),s=s.filter((function(e){return e.matches(".mm-panel_opened-parent")}));var a=!1;s.forEach((function(e){o===e&&(a=!0)})),a||s.push(o),s.forEach((function(e){e.classList.remove("mm-hidden")})),(s=s.slice(-t.visible)).forEach((function(e,t){e.classList.add("mm-panel_iconpanel-"+t)}))}})),this.bind("initPanel:after",(function(e){if(t.blockPanel&&!e.parentElement.matches(".mm-listitem_vertical")&&!_(e,".mm-panel__blocker")[0]){var n=b("a.mm-panel__blocker");n.setAttribute("href","#"+e.closest(".mm-panel").id),e.prepend(n)}}))}},keyboardNavigation:function(){var e=this;if(!U){var t=function(e){return"boolean"!=typeof e&&"string"!=typeof e||(e={enable:e}),"object"!=typeof e&&(e={}),e}(this.opts.keyboardNavigation);if(this.opts.keyboardNavigation=s(t,k.options.keyboardNavigation),t.enable){var n=b("button.mm-tabstart.mm-sronly"),i=b("button.mm-tabend.mm-sronly"),o=b("button.mm-tabend.mm-sronly");this.bind("initMenu:after",(function(){t.enhance&&e.node.menu.classList.add("mm-menu_keyboardfocus"),V.call(e,t.enhance)})),this.bind("initOpened:before",(function(){e.node.menu.prepend(n),e.node.menu.append(i),_(e.node.menu,".mm-navbars-top, .mm-navbars-bottom").forEach((function(e){e.querySelectorAll(".mm-navbar__title").forEach((function(e){e.setAttribute("tabindex","-1")}))}))})),this.bind("initBlocker:after",(function(){k.node.blck.append(o),_(k.node.blck,"a")[0].classList.add("mm-tabstart")}));var a="input, select, textarea, button, label, a[href]",r=function(n){n=n||_(e.node.pnls,".mm-panel_opened")[0];var i=null,o=document.activeElement.closest(".mm-navbar");if(!o||o.closest(".mm-menu")!=e.node.menu){if("default"==t.enable&&((i=g(n,".mm-listview a[href]:not(.mm-hidden)")[0])||(i=g(n,a+":not(.mm-hidden)")[0]),!i)){var s=[];_(e.node.menu,".mm-navbars_top, .mm-navbars_bottom").forEach((function(e){s.push.apply(s,g(e,a+":not(.mm-hidden)"))})),i=s[0]}i||(i=_(e.node.menu,".mm-tabstart")[0]),i&&i.focus()}};this.bind("open:finish",r),this.bind("openPanel:finish",r),this.bind("initOpened:after:sr-aria",(function(){[e.node.menu,k.node.blck].forEach((function(e){_(e,".mm-tabstart, .mm-tabend").forEach((function(e){k.sr_aria(e,"hidden",!0),k.sr_role(e,"presentation")}))}))}))}}}},k.wrappers={};var Y;t.default=k;window&&(window.Mmenu=k),(Y=window.jQuery||window.Zepto||null)&&(Y.fn.mmenu=function(e,t){var n=Y();return this.each((function(i,o){if(!o.mmApi){var s=new k(o,e,t),a=Y(s.node.menu);a.data("mmenu",s.API),n=n.add(a)}})),n})}]);

/* ACTIVATION DU SCRIPT mmenu.js ET OPTIONS */
(window.matchMedia("(min-width:1900px)").matches) ? (
/* Si la largeur de l'écran est supérieure à 1900px, alors menu Dropdown */
	new Mmenu( "#my-menu", {
		/* options */
		"extensions": ["shadow-panels","theme-dark"],
		"dropdown" 	: true,
		"autoHeight": true,
		"tip" 	 	: true,
		"iconPanels": true,
		},{
		/* configuration */
		dropdown: {offset:{button:{y:7,x:-7}},
		screenReader:{text:{closeMenu:"Fermer le menu",closeSubmenu:"Fermer le sous menu",openSubmenu:"Ouvrir le sous menu",toggleSubmenu:"Basculer le sous menu"}}
		}
	})
) : (
/* Si la largeur de l'écran est inférieure à 1900px, alors menu offCanvas Panel */
	new Mmenu( "#my-menu", {
		/* options */
		"extensions": ["shadow-page","shadow-panels","border-offset","theme-dark"],
		"iconPanels": true,
		},{
		/* configuration */
		offCanvas:{page:{selector: "#page-wrapper"}},
		screenReader:{text:{closeMenu:"Fermer le menu",closeSubmenu:"Fermer le sous menu",openSubmenu:"Ouvrir le sous menu",toggleSubmenu:"Basculer le sous menu"}}
	})
);

/* ******************************************************************************* */
/* FENÊTRE DIALOGUE MODALE  */
/* ******************************************************************************* */

const dModale = document.getElementById('dmodale');
// Afficher et fermer la fenêtre de dialogue modale au clic
if (dModale) {
	document.getElementById('omodale').addEventListener('click', function(e) {
		dModale.showModal();
	});
	document.getElementById('cmodale').addEventListener('click', function(e) {
		dModale.close();
	});

	/* Prise en charge de la touche ECHAPPE (active par défaut avec <dialog>), EFFACE et SUPPRIME */
	document.addEventListener('keyup', function(e) {
		switch (e.key) {
			case 'Escape': dModale.close();
				break;
			case 'Backspace': dModale.close();
				break;
			case 'Delete': dModale.close();
				break;
			default:
				return; /* Quitte quand pas d'autre key event. */
		}
	});
};
/* Bouton Copier l'URL dans le presse papier */
/* <a id="lmodale" href="fichier.html">lien</a> */
/* <a id="copier" data-copie=">> Lien copié" class="bouton">Copier</a> */
function copieLienTexte() {
	const copieUrl = document.getElementById('lmodale');
	copieUrl.getAttribute('href');
	navigator.clipboard.writeText(copieUrl);
/* Changer le texte du bouton `COPIER` en `>> LIEN COPIÉ` */
	var texteBouton = document.getElementById('copier');
	texteBouton.firstChild.textContent = this.getAttribute('data-copie'); 
}
var copierBouton = document.getElementById('copier');
copierBouton ? document.getElementById('copier').addEventListener('click', copieLienTexte) : false;


/* ******************************************************************************* */
/* OUVERTURE PAR DÉVOILEMENT POUR MENTIONS LEGALES À LA PAGE COURRIER et POEME DE KIPLING */
/* AJOUTER CSS: #mentionslegales {transition: height 1s linear; overflow: hidden; height: 0;} */
/* CLIC SUR LE LIEN: <a href="#0" id="clicmoi">TEXTE</a> */
/* ZONE CACHÉE: <p id="mentionslegales">TEXTE CACHÉ</p> */
/* D'APRÈS https://stackoverflow.com/questions/3795481/javascript-slidedown-without-jquery */
/* ******************************************************************************* */

const zoneClic = document.getElementById('clicmoi')
const conteneur = document.getElementById('mentionslegales')

if (zoneClic && conteneur) {
const glisseBas = element => element.style.height = `${element.scrollHeight}px`;
zoneClic.addEventListener('click', function () {
	glisseBas(conteneur);
})};


/* ******************************************************************************* */
/* COMMUTATION ENTRE DEUX FEUILLES DE STYLES, MODE LECTURE CARACTOPTI ET CARACTNORM */
/* <link rel="stylesheet" id="feuilleStyleCaract"> */
/* <a href="#0" id="modecaractopti">Clic</a> */
/* LA FEUILLE styles.caractnorm.min.css EST POUR LE RETOUR À LA NORMALE */
/* ******************************************************************************* */

/* LIENS VERS LES FEUILLES DE STYLE */
const caractOpti = 'css/styles.caractopti.min.css';
const caractNorm = 'css/styles.caractnorm.min.css';
var poussoir = document.getElementById('modecaractopti');
var styleCaractActive = document.getElementById('feuilleStyleCaract');

/* TEST POUR VOIR SI SESSIONSTORAGE A DÉJÀ UNE VALEUR ENREGISTRÉE, */
/* SI OUI, CHARGE LA FEUILLE DE STYLES */
var SilomiaCaract = sessionStorage.getItem('SilomiaCaract');
SilomiaCaract ? styleCaractActive.setAttribute('href', caractOpti) : false;

/* ASSIGNE UN ÉCOUTEUR D'ÉVÈNEMENT CLIC AU poussoir */
/* poussoir.addEventListener('click', changeCaract); */
/* DÉTERMINE LE LIEN POUR ACTIVER LA FEUILLE DE STYLE caractOpti OU caractNorm */
/* DANS #feuilleStyleCaract */
poussoir.onclick = function changeCaract() {
	styleCaractActive.getAttribute('href') != caractOpti ? (
		styleCaractActive.setAttribute('href', caractOpti),
		sessionStorage.setItem('SilomiaCaract', caractOpti)
	) : (
		styleCaractActive.setAttribute('href', caractNorm),
		sessionStorage.removeItem('SilomiaCaract') 
	);
/* PAS D'ENREGISTREMENT DANS sessionStorage DE LA CSS QUI CORRESPOND AU RETOUR À LA NORMALE */
};