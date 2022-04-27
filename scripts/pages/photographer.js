// import de toutes les fonctions necessaires au fonctionnement du constructeur displayGlobal
import { getDatas } from "../datas/getDatas.js";
import { Lightbox } from "../lightbox/lightbox.js";
import { displaySort } from "../utils/displaySort.js";
import { displayThisPhotographer } from "../utils/displayThisPhotographer.js";
import { getInfosThisPhotographer } from "../utils/getInfosThisPhotographer.js";
import { likesCounter } from "../utils/likesCounter.js";
import { dropdownOpenOrClose } from "../utils/dropdownOpenOrClose.js";
import { displayMedia } from "../factories/mediaFactory.js";
import { contactFormEvents } from "../utils/contactFormEvents.js";

// Servira à stocker les datas et medias de TOUS les photographes
const datasAllPhotographers = [];
const datasAllMedias = [];
// Servira à stocker les datas et medias DU photographe lié au currentId
let thisPhotographer = [];
let thisMedia = [];

// Constructeur chargé de lancer chaque fonction créée
const displayGlobal = async () => {
  // Récupére les datas spécifiques "photographers" ou "media" du fichier json  et stocke dans tableau "datasAllPhotographers" et "datasAllMedias"
  await getDatas(datasAllPhotographers, "photographers");
  await getDatas(datasAllMedias, "media");

  // Récupère les infos et medias du photographe liés au currentId...
  getInfosThisPhotographer(datasAllPhotographers, thisPhotographer, "id");
  getInfosThisPhotographer(datasAllMedias, thisMedia, "photographerId");
  // ... et les affiche
  displayThisPhotographer(thisPhotographer);
  displaySort(thisMedia, thisPhotographer);
  displayMedia(thisMedia, thisPhotographer);
  // Gère modale, menu déroulant, compteur de like et lightbox
  contactFormEvents();
  dropdownOpenOrClose();
  likesCounter();
  Lightbox.init();
};

displayGlobal();
