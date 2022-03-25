// import de toutes les fonctions necessaires au fonctionnement de ce constructeur
import { getDatas } from "../../data/getDatas.js";
import { Lightbox } from "../../js/lightbox.js";
import { mediaFactory } from "../factories/mediaFactory.js";
// import { Media } from "../factories/mediaFactory.js";
import { displayMediasThisPhotographer } from "../utils/displayMediasThisPhotographer.js";
import { displaySort } from "../utils/displaySort.js";
import { displayThisPhotographer } from "../utils/displayThisPhotographer.js";
import { getInfosThisPhotographer } from "../utils/getInfosThisPhotographer.js";
import { likesCounter } from "../utils/likesCounter.js";
import { sortDropdown } from "../utils/sortDropdown.js";

// Crée un tableau vide pour stocker ensuite les datas de TOUS les photographes
const dataPhotographers = [];
// Crée un tableau vide pour stocker ensuite les medias de TOUS les photographes
const dataMedia = [];
// Crée un tableau vide pour stocker ensuite les datas DU photographe lié au currentId
let thisPhotographer = [];
// Crée un tableau vide pour stocker ensuite les medias DU photographe lié au currentId
let thisMedia = [];

// Constructeur chargé de lancer chaque fonction créée
const displayGlobal = async () => {
  // On récupére les datas spécifiques "photographers" ou "media" du fichier json pour les stocker dans un tableau spécifiques "dataPhotographers" ou "dataMedia"
  await getDatas(dataPhotographers, "photographers");
  await getDatas(dataMedia, "media");

  // Récupère les infos du photographe lié au currentId...
  getInfosThisPhotographer(dataPhotographers, thisPhotographer, "id");
  // Récupère les infos médias du photographe lié au currentId...
  getInfosThisPhotographer(dataMedia, thisMedia, "photographerId");
  // ... et les affiche
  displayThisPhotographer(thisPhotographer);
  // ... et les affiche
  displayMediasThisPhotographer(thisMedia, thisPhotographer);
  likesCounter();
  sortDropdown();
  displaySort(thisMedia, thisPhotographer);
  Lightbox.init();
  // Media;
  mediaFactory(thisMedia, thisPhotographer);
};

displayGlobal();
