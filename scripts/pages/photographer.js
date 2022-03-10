import { getDatas } from "../../data/getDatas.js";
import { displayMedia } from "../utils/displayMedia.js";
import { displayPhotographers } from "../utils/displayPhotographers.js";
import { getInfosThisPhotographer } from "../utils/getInfosThisPhotographer.js";
import { getInfosMedia } from "../utils/getMediaThisPhotographer.js";
// Récupère l'id du photogrphe dans l'url
let currentId = document.location.href.split("?id=")[1];
const dataPhotographers = [];
const dataMedia = [];
let thisPhotographer = [];
let thisMedia = [];

const displayGlobal = async () => {
  // On attend de recevoir les datas correspondantes  du fichier json
  await getDatas(dataPhotographers, "photographers");
  await getDatas(dataMedia, "media");
  // Récupère les infos d'un photographe et les affiche
  getInfosThisPhotographer(dataPhotographers, currentId, thisPhotographer);
  displayPhotographers(thisPhotographer);
  // Récupère les infos média d'un photographes et les affiche
  getInfosMedia(dataMedia, currentId, thisMedia);
  displayMedia(thisMedia, thisPhotographer);
};

displayGlobal();
