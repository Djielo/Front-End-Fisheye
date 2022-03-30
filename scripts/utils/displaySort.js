import { Lightbox } from "../../js/lightbox.js";
import { displayMedia } from "../factories/mediaFactory.js";

export const displaySort = (thisMedia, thisPhotographer) => {
  let menu = document.querySelectorAll(".menu");
  const position1 = document.querySelector(".pos1");
  const position2 = document.querySelector(".pos2");
  const position3 = document.querySelector(".pos3");
  let storageTempo = [];

  menu.forEach((element) => {
    element.addEventListener("click", () => {
      //
      //
      ////////// DATE
      if (element.innerText == "Date") {
        thisMedia.sort((a, b) => {
          return a.date > b.date ? -1 : 1;
        });
        console.log(element.innerText);
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
          return a.likes > b.likes ? -1 : 1;
        });
        console.log(element.innerText);
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
          return a.title < b.title ? -1 : 1;
        });
        console.log(element.innerText);
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
      //
      //
      let x = Array.from(document.querySelector(".photographer_images").children);
      x.forEach((y) => y.remove());
      displayMedia(thisMedia, thisPhotographer);
      // Réassignation de la lightbox au media après tri
      Lightbox.init();
    });
  });
};
