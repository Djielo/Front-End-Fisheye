import { Lightbox } from "../lightbox/lightbox.js";
import { displayMedia } from "../factories/mediaFactory.js";
import { likesCounter } from "./likesCounter.js";


// PERMET DE FAIRE LE TRI ET DE LE VISUALISER
export const displaySort = (thisMedia, thisPhotographer) => {
  let menu = document.querySelectorAll(".menu");
  const span = document.querySelector(".span");
  const position1 = document.querySelector(".pos1");
  const position2 = document.querySelector(".pos2");
  const position3 = document.querySelector(".pos3");
  let storageTempo = [];

  menu.forEach((element) => {
    element.addEventListener("click", () => {
      span.innerText = element.innerText;
    });
  });

  // Tri par défaut
  const sortDefault = () => {
    if (position1.innerText == "Date") {
      thisMedia.sort((a, b) => {
        return a.date < b.date ? -1 : 1;
      });
    }
  };
  sortDefault();

  // Tri selon le clic sur Date, popularité (like) ou titre des medias
  menu.forEach((element) => {
    element.addEventListener("click", () => {
      //
      //
      ////////// DATE
      if (element.innerText == "Date") {
        thisMedia.sort((a, b) => {
          return a.date < b.date ? -1 : 1;
        });        
        if (element.innerText == "Date" && element.classList.contains("pos2")) {
          storageTempo = position1.innerText;
          position1.innerText = position2.innerText;
          position2.innerText = storageTempo;
        } else if (element.innerText == "Date" && element.classList.contains("pos3")) {
          storageTempo = position1.innerText;
          position1.innerText = position3.innerText;
          position3.innerText = storageTempo;
        }
      }

      //
      //
      ////////// POPULARITE
      else if (element.innerText == "Popularité") {
        thisMedia.sort((a, b) => {
          return a.likes < b.likes ? -1 : 1;
        });        
        if (element.innerText == "Popularité" && element.classList.contains("pos2")) {
          storageTempo = position1.innerText;
          position1.innerText = position2.innerText;
          position2.innerText = storageTempo;
        } else if (element.innerText == "Popularité" && element.classList.contains("pos3")) {
          storageTempo = position1.innerText;
          position1.innerText = position3.innerText;
          position3.innerText = storageTempo;
        }
      }
      //
      //
      ////////// TITRE
      else if (element.innerText == "Titre") {
        thisMedia.sort((a, b) => {
          return a.title > b.title ? -1 : 1;
        });        
        if (element.innerText == "Titre" && element.classList.contains("pos2")) {
          storageTempo = position1.innerText;
          position1.innerText = position2.innerText;
          position2.innerText = storageTempo;
        } else if (element.innerText == "Titre" && element.classList.contains("pos3")) {
          storageTempo = position1.innerText;
          position1.innerText = position3.innerText;
          position3.innerText = storageTempo;
        }
      }
      // PERMET D'INITIALISER LE CONTENU DU TALEAU APRES CHAQUE TRI
      // Crée un tableau à partir de l'HTMLCollection et y inclut les articles contenus (children)
      let arrayArticles = Array.from(document.querySelector(".photographer_images").children);
      // Efface chaque article du tableau
      arrayArticles.forEach((article) => article.remove());
      // Rappelle la nouvelle composition selon le nouveau tri
      displayMedia(thisMedia, thisPhotographer);
      // Réassignation de la lightbox au media après tri
      Lightbox.init();
      likesCounter();
    });
  });
};
