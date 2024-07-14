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
	case 'css/styles.sombre.min.css' : document.documentElement.style.backgroundColor = '#3C3C3C'; /* POUR ÉVITER UN FLASH BLANC SI MODE SOMBRE, ACTIVER DÉJÀ LA COULEUR DE FOND */
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
/* POUR INSTALLER MMENU.JS	VERSION 9.3 */
/* ******************************************************************************* */
/* SÉLECTIONNER LES GREFFONS SUIVANTS : offcanvas, iconPanels, Themes, scrollBugFix, backButton */
/* ******************************************************************************* */
/* COMPILER SA PROPRE VERSION, BEAUCOUP PLUS PETITE ET EFFICACE */
/* Installer Gulp dans Ubuntu 22.04. */
/* Avec le Terminal, presque toutes les install se font avec sudo. */ 
/* Installer curl, gcc et node: */
/* sudo apt-get install curl */
/* sudo apt-get install gcc g++ make */
/* curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -  */
/* (par ex. version LTS, sinon aller à https://deb.nodesource.com/setup et voir la version disponible) */
/* sudo apt-get install -y nodejs */
/* Pour connaitre les versions installées: */
/* node -v */
/* npm -v */
/* Changer les droits sur le fichier "~/.config": */
/* sudo chown -R $USER:$(id -gn $USER) /home/login/.config */
/* Installer Gulp: */
/* sudo npm install -g gulp */
/* sudo npm install --save-dev gulp */
/* gulp -v */
/*  */
/* Dans le dossier Utilisateur, créer un dossier "projet", */
/* y créer les 3 dossiers "custom-build/src/" et "custom-build/dist/" */
/* Décompresser l'archive mmenu-js dans le dossier "projet" et le nommer "master" */
/*  */
/* Copier dans le dossier "projet/custom-build/src/" les fichiers "projet/master/src/" suivants: */
/* _mixins.scss */
/* _variables.scss */
/* mmenu.js */
/* mmenu.scss */
/*  */
/* Personnaliser les fichiers mmenu.js, et mmenu.scss */
/* Attention dans 'mmenu.js', commencer les chemins de fichiers par '/home/login/projet/master/' */
/* Attention dans 'mmenu.scss', remplacer `@import '` par `@import '/home/login/projet/master/src/` */
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
/* Sinon, installer toutes les dépendances inscrites dans "packages.json": */
/* npm install --save-dev gulp-autoprefixer */
/* npm install --save-dev gulp-clean-css */
/* npm install --save-dev gulp-sass */
/* npm install --save-dev gulp-typescript */
/* npm install --save-dev sass */
/* npm install --save-dev typescript */
/* npm install --save-dev webpack-stream */
/* */
/* Aller dans le dossier "projet/master/gulp", ouvrir les fichiers "css.js" et "js.js" avec un éditeur de texte. */
/* À la constante 'dirs', changer les chemins de fichiers de `input: 'src'`, et `output: 'dist'` */
/* en `input: '../custom-build/src'`, et `output: '../custom-build/dist'` */
/* */
/* Puis compiler le projet. */
/* Se mettre dans le dossier à compiler "projet/master" et lancer gulp: */
/* gulp */
/* S'il y a des erreurs, utiliser une version moins récente de Node */
/* ******************************************************************************* */

/*!
 * mmenu.js v9.3.0
 * mmenujs.com
 *
 * Copyright (c) Fred Heusschen
 * frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
(()=>{"use strict";const e={hooks:{},navbar:{add:!0,title:"Menu",titleLink:"parent"},slidingSubmenus:!0},t={classNames:{divider:"Divider",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",vertical:"Vertical"},language:null,panelNodetype:["ul","ol","div"],screenReader:{closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},n=(e,t)=>{"object"!=i(e)&&(e={}),"object"!=i(t)&&(t={});for(let s in t)t.hasOwnProperty(s)&&(void 0===e[s]?e[s]=t[s]:"object"==i(e[s])&&n(e[s],t[s]));return e},i=e=>({}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()),s=()=>"mm-"+o++;let o=0;const a=e=>"mm-clone-"==e.slice(0,9)?e:`mm-clone-${e}`,l=e=>"mm-clone-"==e.slice(0,9)?e.slice(9):e,r={},m=(e,t)=>{void 0===r[t]&&(r[t]={}),n(r[t],e)},d=e=>{const t=e.split("."),n=document.createElement(t.shift());return n.classList.add(...t),n},h=(e,t)=>t.length?[].slice.call(e.querySelectorAll(t)):[],c=(e,t)=>{const n=Array.prototype.slice.call(e.children);return t?n.filter((e=>e.matches(t))):n},p=(e,t,n)=>{e.matches("."+t)&&e.classList.add(n)};let u={};const f=(e,t)=>{var n=t.matches?"yes":"no";for(let t=0;t<u[e].length;t++)u[e][t][n]()};var b,g,v,L=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},w=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};m({"Close submenu":"Untermenü schließen",Menu:"Menü","Open submenu":"Untermenü öffnen","Toggle submenu":"Untermenü wechseln"},"de"),m({"Close submenu":"بستن زیرمنو",Menu:"منو","Open submenu":"بازکردن زیرمنو","Toggle submenu":"سوییچ زیرمنو"},"fa"),m({"Close submenu":"Submenu sluiten",Menu:"Menu","Open submenu":"Submenu openen","Toggle submenu":"Submenu wisselen"},"nl"),m({"Close submenu":"Fechar submenu",Menu:"Menu","Open submenu":"Abrir submenu","Toggle submenu":"Alternar submenu"},"pt_br"),m({"Close submenu":"Закрыть подменю",Menu:"Меню","Open submenu":"Открыть подменю","Toggle submenu":"Переключить подменю"},"ru"),m({"Close submenu":"Zatvoriť submenu",Menu:"Menu","Open submenu":"Otvoriť submenu","Toggle submenu":"Prepnúť submenu"},"sk"),m({"Close submenu":"Закрити підменю",Menu:"Меню","Open submenu":"Відкрити підменю","Toggle submenu":"Перемкнути підменю"},"uk");class P{constructor(i,s,o){return b.set(this,void 0),g.set(this,void 0),v.set(this,void 0),this.opts=n(s,e),this.conf=n(o,t),this._api=["i18n","bind","openPanel","closePanel","setSelected"],this.node={},this.hook={},this.node.menu="string"==typeof i?document.querySelector(i):i,"function"==typeof this._deprecatedWarnings&&this._deprecatedWarnings(),this.trigger("init:before"),this._initObservers(),this._initAddons(),this._initHooks(),this._initAPI(),this._initMenu(),this._initPanels(),this._initOpened(),(()=>{for(let e in u){let t=window.matchMedia(e);f(e,t),t.onchange=n=>{f(e,t)}}})(),this.trigger("init:after"),this}openPanel(e,t=!0,n=!0){if(!e)return;e=e.closest(".mm-panel"),this.trigger("openPanel:before",[e,{animation:t,setfocus:n}]);const i=e.closest(".mm-listitem--vertical");if(i){i.classList.add("mm-listitem--opened");const e=i.closest(".mm-panel");this.openPanel(e)}else{const n=c(this.node.pnls,".mm-panel--opened")[0];e.matches(".mm-panel--parent")&&n&&n.classList.add("mm-panel--highest");const i=["mm-panel--opened","mm-panel--parent"],s=[];t?i.push("mm-panel--noanimation"):s.push("mm-panel--noanimation"),c(this.node.pnls,".mm-panel").forEach((t=>{t.classList.add(...s),t.classList.remove(...i),t!==n&&t.classList.remove("mm-panel--highest"),t===e?t.removeAttribute("inert"):t.setAttribute("inert","true")})),e.classList.add("mm-panel--opened");let o=h(this.node.pnls,`#${e.dataset.mmParent}`)[0];for(;o;)o=o.closest(".mm-panel"),o.classList.add("mm-panel--parent"),o=h(this.node.pnls,`#${o.dataset.mmParent}`)[0]}this.trigger("openPanel:after",[e,{animation:t,setfocus:n}])}closePanel(e,t=!0,n=!0){if(e&&(e.matches(".mm-panel--opened")||e.parentElement.matches(".mm-listitem--opened"))){if(this.trigger("closePanel:before",[e]),e.parentElement.matches(".mm-listitem--vertical"))e.parentElement.classList.remove("mm-listitem--opened");else if(e.dataset.mmParent){const i=h(this.node.pnls,`#${e.dataset.mmParent}`)[0];this.openPanel(i,t,n)}else{const i=c(this.node.pnls,".mm-panel--parent").pop();if(i&&i!==e)this.openPanel(i,t,n);else{const i=c(this.node.pnls,".mm-panel")[0];i&&i!==e&&this.openPanel(i,t,n)}}this.trigger("closePanel:after",[e])}}togglePanel(e){let t="openPanel";(e.parentElement.matches(".mm-listitem--opened")||e.matches(".mm-panel--opened"))&&(t="closePanel"),this[t](e)}setSelected(e){this.trigger("setSelected:before",[e]),h(this.node.menu,".mm-listitem--selected").forEach((e=>{e.classList.remove("mm-listitem--selected")})),e.classList.add("mm-listitem--selected"),this.trigger("setSelected:after",[e])}bind(e,t){this.hook[e]=this.hook[e]||[],this.hook[e].push(t)}trigger(e,t){if(this.hook[e])for(var n=0,i=this.hook[e].length;n<i;n++)this.hook[e][n].apply(this,t)}_initObservers(){L(this,b,new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{e.matches(this.conf.panelNodetype.join(", "))&&this._initListview(e)}))}))}))),L(this,g,new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{this._initListitem(e)}))}))}))),L(this,v,new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{(null==e?void 0:e.matches(this.conf.panelNodetype.join(", ")))&&this._initSubPanel(e)}))}))})))}_initAPI(){const e=this;this.API={},this._api.forEach((t=>{this.API[t]=function(){return e[t].apply(e,arguments)}})),this.node.menu.mmApi=this.API}_initHooks(){for(let e in this.opts.hooks)this.bind(e,this.opts.hooks[e])}_initAddons(){this.trigger("initAddons:before");for(let e in P.addons)P.addons[e].call(this);this.trigger("initAddons:after")}_initMenu(){this.trigger("initMenu:before"),this.node.wrpr=this.node.wrpr||this.node.menu.parentElement,this.node.wrpr.classList.add("mm-wrapper"),this.node.menu.classList.add("mm-menu"),this.node.menu.id=this.node.menu.id||s(),this.node.menu.setAttribute("aria-label",this.i18n(this.opts.navbar.title||"Menu")),this.node.menu.setAttribute("aria-modal","true"),this.node.menu.setAttribute("role","dialog");const e=c(this.node.menu).filter((e=>e.matches(this.conf.panelNodetype.join(", "))));this.node.pnls=d("div.mm-panels"),this.node.menu.append(this.node.pnls),e.forEach((e=>{this._initPanel(e)})),this.trigger("initMenu:after")}_initPanels(){this.trigger("initPanels:before"),this.node.menu.addEventListener("click",(e=>{var t,n;const i=(null===(n=null===(t=e.target)||void 0===t?void 0:t.closest("a[href]"))||void 0===n?void 0:n.getAttribute("href"))||"";if("#"===i.slice(0,1))try{const t=h(this.node.menu,i)[0];t&&(e.preventDefault(),this.togglePanel(t))}catch(e){}}),{capture:!0}),this.trigger("initPanels:after")}_initPanel(e){var t;if(!e.matches(".mm-panel")&&(p(e,this.conf.classNames.panel,"mm-panel"),p(e,this.conf.classNames.nopanel,"mm-nopanel"),!e.matches(".mm-nopanel"))){if(this.trigger("initPanel:before",[e]),e.id=e.id||s(),e.matches("ul, ol")){const t=d("div");t.id=e.id,e.removeAttribute("id"),[].slice.call(e.classList).filter((e=>"mm-"===e.slice(0,3))).forEach((n=>{t.classList.add(n),e.classList.remove(n)})),Object.keys(e.dataset).filter((e=>"mm"===e.slice(0,2))).forEach((n=>{t.dataset[n]=e.dataset[n],delete e.dataset[n]})),e.before(t),t.append(e),e=t}return e.classList.add("mm-panel"),(null===(t=e.parentElement)||void 0===t?void 0:t.matches(".mm-listitem--vertical"))||this.node.pnls.append(e),this._initNavbar(e),c(e,"ul, ol").forEach((e=>{this._initListview(e)})),w(this,b).observe(e,{childList:!0}),this.trigger("initPanel:after",[e]),e}}_initNavbar(e){if(c(e,".mm-navbar").length)return;let t=null,n=null;if(e.dataset.mmParent)for(t=h(this.node.pnls,`#${e.dataset.mmParent}`)[0],n=t.closest(".mm-panel");n.closest(".mm-listitem--vertical");)n=n.parentElement.closest(".mm-panel");if(null==t?void 0:t.matches(".mm-listitem--vertical"))return;this.trigger("initNavbar:before",[e]);const i=d("div.mm-navbar");if(this.opts.navbar.add||i.classList.add("mm-hidden"),n){const e=d("a.mm-btn.mm-btn--prev.mm-navbar__btn");e.href=`#${n.id}`,e.setAttribute("aria-label",this.i18n(this.conf.screenReader.closeSubmenu)),i.append(e)}let s=null;t?s=c(t,".mm-listitem__text")[0]:n&&(s=h(n,'a[href="#'+e.id+'"]')[0]);const o=d("a.mm-navbar__title");switch(o.tabIndex=-1,o.setAttribute("aria-hidden","true"),this.opts.navbar.titleLink){case"anchor":s&&(o.href=s.getAttribute("href"));break;case"parent":n&&(o.href=`#${n.id}`)}const a=d("span");var l;a.innerHTML=e.dataset.mmTitle||((l=s)?[].slice.call(l.childNodes).filter((e=>e.nodeType===Node.TEXT_NODE)).map((e=>e.nodeValue.trim())).join(" "):"")||this.i18n(this.opts.navbar.title||"Menu"),e.prepend(i),i.append(o),o.append(a),this.trigger("initNavbar:after",[e])}_initListview(e){["htmlulistelement","htmlolistelement"].includes(i(e))&&(e.matches(".mm-listview")||(p(e,this.conf.classNames.nolistview,"mm-nolistview"),e.matches(".mm-nolistview")||(this.trigger("initListview:before",[e]),e.classList.add("mm-listview"),c(e).forEach((e=>{this._initListitem(e)})),w(this,g).observe(e,{childList:!0}),this.trigger("initListview:after",[e]))))}_initListitem(e){["htmllielement"].includes(i(e))&&(e.matches(".mm-listitem")||(p(e,this.conf.classNames.divider,"mm-divider"),e.matches(".mm-divider")||(this.trigger("initListitem:before",[e]),e.classList.add("mm-listitem"),p(e,this.conf.classNames.selected,"mm-listitem--selected"),c(e,"a, span").forEach((e=>{e.classList.add("mm-listitem__text")})),c(e,this.conf.panelNodetype.join(", ")).forEach((e=>{this._initSubPanel(e)})),w(this,v).observe(e,{childList:!0}),this.trigger("initListitem:after",[e]))))}_initSubPanel(e){if(e.matches(".mm-panel"))return;const t=e.parentElement;(e.matches("."+this.conf.classNames.vertical)||!this.opts.slidingSubmenus)&&t.classList.add("mm-listitem--vertical"),t.id=t.id||s(),e.id=e.id||s(),t.dataset.mmChild=e.id,e.dataset.mmParent=t.id;let n=c(t,".mm-btn")[0];n||(n=d("a.mm-btn.mm-btn--next.mm-listitem__btn"),c(t,"a, span").forEach((e=>{e.matches("span")?(n.classList.add("mm-listitem__text"),n.innerHTML=e.innerHTML,t.insertBefore(n,e.nextElementSibling),e.remove()):t.insertBefore(n,e.nextElementSibling)})),n.setAttribute("aria-label",this.i18n(this.conf.screenReader[t.matches(".mm-listitem--vertical")?"toggleSubmenu":"openSubmenu"]))),n.href=`#${e.id}`,this._initPanel(e)}_initOpened(){this.trigger("initOpened:before");const e=h(this.node.pnls,".mm-listitem--selected").pop();let t=c(this.node.pnls,".mm-panel")[0];e&&(this.setSelected(e),t=e.closest(".mm-panel")),this.openPanel(t,!1,!1),this.trigger("initOpened:after")}i18n(e){return((e,t)=>"string"==typeof t&&void 0!==r[t]&&r[t][e]||e)(e,this.conf.language)}static i18n(e={},t=""){if(!e||!t)return r;m(e,t)}}b=new WeakMap,g=new WeakMap,v=new WeakMap,P.addons={},P.node={},P.vars={};const _={use:!0,position:"left"},E={clone:!1,menu:{insertMethod:"append",insertSelector:"body"},page:{nodetype:"div",selector:null,noSelector:[]},screenReader:{closeMenu:"Close menu",openMenu:"Open menu"}},k=["left","left-front","right","right-front","top","bottom"];P.prototype.open=function(){this.node.menu.matches(".mm-menu--opened")||(this.trigger("open:before"),this.node.wrpr.classList.add("mm-wrapper--opened",`mm-wrapper--position-${this.opts.offCanvas.position}`),this.node.menu.classList.add("mm-menu--opened"),this.node.menu.removeAttribute("inert"),P.node.blck.removeAttribute("inert"),P.node.page.setAttribute("inert","true"),this.node.open=document.activeElement,this.trigger("open:after"))},P.prototype.close=function(){var e;this.node.menu.matches(".mm-menu--opened")&&(this.trigger("close:before"),this.node.wrpr.classList.remove("mm-wrapper--opened",`mm-wrapper--position-${this.opts.offCanvas.position}`),this.node.menu.classList.remove("mm-menu--opened"),this.node.menu.setAttribute("inert","true"),P.node.blck.setAttribute("inert","true"),P.node.page.removeAttribute("inert"),null===(e=this.node.open||document.querySelector(`[href="#${this.node.menu.id}"]`)||null)||void 0===e||e.focus(),document.body.scrollLeft=0,document.documentElement.scrollLeft=0,this.trigger("close:after"))},P.prototype.setPage=function(e){const t=this.conf.offCanvas;if(!e){let n="string"==typeof t.page.selector?h(document.body,t.page.selector):c(document.body,t.page.nodetype);if(n=n.filter((e=>!e.matches(".mm-menu, .mm-wrapper__blocker"))),t.page.noSelector.length&&(n=n.filter((e=>!e.matches(t.page.noSelector.join(", "))))),n.length>1){let e=d("div");n[0].before(e),n.forEach((t=>{e.append(t)})),n=[e]}e=n[0]}this.trigger("setPage:before",[e]),e.classList.add("mm-page","mm-slideout"),e.id=e.id||s(),P.node.blck.setAttribute("href",`#${e.id}`),P.node.page=e,this.trigger("setPage:after",[e])};const y={fix:!0},M="ontouchstart"in window||!!navigator.msMaxTouchPoints||!1,S=["light","dark","white","black","light-contrast","dark-contrast","white-contrast","black-contrast"];P.prototype.theme=function(e=null){const t=this.opts.theme;if(!e)return t;S.includes(e)&&(this.node.menu.classList.remove(`mm-menu--theme-${t}`),this.node.menu.classList.add(`mm-menu--theme-${e}`),this.opts.theme=e)};const A={close:!1,open:!1},N={add:!1,blockPanel:!0,visible:3};P.addons={offcanvas:function(){this.opts.offCanvas=this.opts.offCanvas||{},this.conf.offCanvas=this.conf.offCanvas||{};const e=n(this.opts.offCanvas,_),t=n(this.conf.offCanvas,E);e.use&&(k.includes(e.position)||(e.position=k[0]),this._api.push("open","close","setPage","position"),t.clone&&(this.node.menu=this.node.menu.cloneNode(!0),this.node.menu.id&&(this.node.menu.id=a(this.node.menu.id)),h(this.node.menu,"[id]").forEach((e=>{e.id=a(e.id)}))),this.bind("initMenu:before",(()=>{this.node.wrpr=document.querySelector(t.menu.insertSelector),this.node.wrpr[t.menu.insertMethod](this.node.menu)})),P.node.blck||this.bind("initMenu:before",(()=>{const e=d("a.mm-wrapper__blocker.mm-blocker.mm-slideout");e.id=s(),e.setAttribute("aria-label",this.i18n(t.screenReader.closeMenu)),e.setAttribute("inert","true"),document.querySelector(t.menu.insertSelector).append(e),P.node.blck=e})),this.bind("initMenu:after",(()=>{this.setPage(P.node.page),this.node.menu.classList.add("mm-menu--offcanvas"),this.node.menu.setAttribute("inert","true"),k.includes(e.position)&&(this.node.wrpr.classList.add(`mm-wrapper--position-${e.position}`),this.node.menu.classList.add(`mm-menu--position-${e.position}`));let t=window.location.hash;if(t){let e=l(this.node.menu.id);e&&e==t.slice(1)&&setTimeout((()=>{this.open()}),1e3)}})),document.addEventListener("click",(e=>{var t;switch(null===(t=e.target.closest("a"))||void 0===t?void 0:t.getAttribute("href")){case`#${l(this.node.menu.id)}`:e.preventDefault(),this.open();break;case`#${l(P.node.page.id)}`:e.preventDefault(),this.close()}})),document.addEventListener("keyup",(e=>{"Escape"==e.key&&this.close()})))},scrollBugFix:function(){if(!M||!this.opts.offCanvas.use)return;if(this.opts.scrollBugFix=this.opts.scrollBugFix||{},!n(this.opts.scrollBugFix,y).fix)return;const e=(e=>{let t="",n=null;return e.addEventListener("touchstart",(e=>{1===e.touches.length&&(t="",n=e.touches[0].pageY)})),e.addEventListener("touchend",(e=>{0===e.touches.length&&(t="",n=null)})),e.addEventListener("touchmove",(e=>{if(t="",n&&1===e.touches.length){const i=e.changedTouches[0].pageY;i>n?t="down":i<n&&(t="up"),n=i}})),{get:()=>t}})(this.node.menu);this.node.menu.addEventListener("scroll",(e=>{e.preventDefault(),e.stopPropagation()}),{passive:!1}),this.node.menu.addEventListener("touchmove",(t=>{let n=t.target.closest(".mm-panel, .mm-iconbar__top, .mm-iconbar__bottom");n&&n.closest(".mm-listitem--vertical")&&(n=((e,t)=>{let n=[],i=e.parentElement;for(;i;)n.push(i),i=i.parentElement;return t?n.filter((e=>e.matches(t))):n})(n,".mm-panel").pop()),n?(n.scrollHeight===n.offsetHeight||0==n.scrollTop&&"down"==e.get()||n.scrollHeight==n.scrollTop+n.offsetHeight&&"up"==e.get())&&t.stopPropagation():t.stopPropagation()}),{passive:!1}),this.bind("open:after",(()=>{var e=c(this.node.pnls,".mm-panel--opened")[0];e&&(e.scrollTop=0)})),window.addEventListener("orientationchange",(e=>{var t=c(this.node.pnls,".mm-panel--opened")[0];t&&(t.scrollTop=0,t.style["-webkit-overflow-scrolling"]="auto",t.style["-webkit-overflow-scrolling"]="touch")}))},theme:function(){this.opts.theme=this.opts.theme||"light";const e=this.opts.theme;S.includes(e)||(this.opts.theme=S[0]),this._api.push("theme"),this.bind("initMenu:after",(()=>{this.theme(this.opts.theme)}))},backButton:function(){if(this.opts.backButton=this.opts.backButton||{},!this.opts.offCanvas.use)return;const e=n(this.opts.backButton,A),t=`#${this.node.menu.id}`;if(e.close){let e=[];const n=()=>{e=[t],c(this.node.pnls,".mm-panel--opened, .mm-panel--parent").forEach((t=>{e.push("#"+t.id)}))};this.bind("open:after",(()=>{history.pushState(null,"",location.pathname+location.search+t)})),this.bind("open:after",n),this.bind("openPanel:after",n),this.bind("close:after",(()=>{e=[],history.back(),history.pushState(null,"",location.pathname+location.search)})),window.addEventListener("popstate",(()=>{if(this.node.menu.matches(".mm-menu--opened")&&e.length){e=e.slice(0,-1);const n=e[e.length-1];n==t?this.close():(this.openPanel(this.node.menu.querySelector(n)),history.pushState(null,"",location.pathname+location.search+t))}}))}e.open&&window.addEventListener("popstate",(e=>{this.node.menu.matches(".mm-menu--opened")||location.hash!=t||this.open()}))},iconPanels:function(){this.opts.iconPanels=this.opts.iconPanels||{};const e=n(this.opts.iconPanels,N);let t=!1;if("first"==e.visible&&(t=!0,e.visible=1),e.visible=Math.min(3,Math.max(1,e.visible)),e.visible++,e.add){this.bind("initMenu:after",(()=>{this.node.menu.classList.add("mm-menu--iconpanel")}));const n=["mm-panel--iconpanel-0","mm-panel--iconpanel-1","mm-panel--iconpanel-2","mm-panel--iconpanel-3"];t?this.bind("initMenu:after",(()=>{var e;null===(e=c(this.node.pnls,".mm-panel")[0])||void 0===e||e.classList.add("mm-panel--iconpanel-first")})):this.bind("openPanel:after",(t=>{if(t.closest(".mm-listitem--vertical"))return;let i=c(this.node.pnls,".mm-panel");i=i.filter((e=>e.matches(".mm-panel--parent"))),i.push(t),i=i.slice(-e.visible),i.forEach(((e,t)=>{e.classList.remove("mm-panel--iconpanel-first",...n),e.classList.add(`mm-panel--iconpanel-${t}`)}))}))}}},window&&(window.Mmenu=P)})();

new Mmenu( "#my-menu", {
	/* options */
	offCanvas: { use:true, "position":"left" },
	"theme":"dark",
	"iconPanels":{ "add":true, "visible":1 },
	scrollBugFix:{ "fix":true },
	backButton:{}
	},{
	/* configurations */
	offCanvas: { page:{selector:"#page-wrapper"}, screenReader:{closeMenu:"Fermer le menu", openMenu:"Ouvrir le menu"} }
});

/* ******************************************************************************* */
/* FENÊTRE MODALE DE DIALOGUE  */
/* ******************************************************************************* */

const dModale = document.getElementById('dmodale');
// Afficher et fermer la fenêtre modale de dialogue au clic
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