// import de toutes les fonctions necessaires au fonctionnement de ce constructeur
import { getDatas } from "../../data/getDatas.js";
import { getInfosThisPhotographer } from "../utils/getInfosThisPhotographer.js";
import { displayThisPhotographer } from "../utils/displayThisPhotographer.js";
import { getInfosMediasThisPhotographer } from "../utils/getInfosMediasThisPhotographer.js";
import { displayMediasThisPhotographer } from "../utils/displayMediasThisPhotographer.js";
import { likesCounter } from "../utils/likesCounter.js";

// Récupère l'id du photographe dans l'url
let currentId = document.location.href.split("?id=")[1];
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
  // On récupére les datas spécifiques pour les stocker dans un tableau spécifiques
  await getDatas(dataPhotographers, "photographers");
  await getDatas(dataMedia, "media");
  // Récupère les infos du photographe lié au currentId...
  getInfosThisPhotographer(dataPhotographers, currentId, thisPhotographer);
  // ... et les affiche
  displayThisPhotographer(thisPhotographer);
  // Récupère les infos médias du photographe lié au currentId...
  getInfosMediasThisPhotographer(dataMedia, currentId, thisMedia);
  // ... et les affiche
  displayMediasThisPhotographer(thisMedia, thisPhotographer);
  likesCounter();  
};

displayGlobal();
