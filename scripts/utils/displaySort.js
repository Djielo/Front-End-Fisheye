import { displayMediasThisPhotographer } from "./displayMediasThisPhotographer.js";

export const displaySort = (array, thisPhotographer) => {
  let menu = document.querySelectorAll(".menu");
  const position1 = document.querySelector(".pos1");
  const position2 = document.querySelector(".pos2");
  const position3 = document.querySelector(".pos3");
  let tempo = [];

  menu.forEach((element) => {
    element.addEventListener("click", () => {
      //
      //
      ////////// DATE
      if (element.innerText == "Date") {
        array.sort((a, b) => {
          return a.date > b.date ? -1 : 1;
        });
        console.log(element.innerText);
        if (element.innerText == "Date" && element.classList.contains("pos2")) {
          tempo = position1.innerText;
          position1.innerText = position2.innerText;
          position2.innerText = tempo;
        } else if (element.innerText == "Date" && element.classList.contains("pos3")) {
          tempo = position1.innerText;
          position1.innerText = position3.innerText;
          position3.innerText = tempo;
        }
      }

      //
      //
      ////////// POPULARITE
      else if (element.innerText == "Popularité") {
        array.sort((a, b) => {
          return a.likes > b.likes ? -1 : 1;
        });
        console.log(element.innerText);
        if (element.innerText == "Popularité" && element.classList.contains("pos2")) {
          tempo = position1.innerText;
          position1.innerText = position2.innerText;
          position2.innerText = tempo;
        } else if (element.innerText == "Popularité" && element.classList.contains("pos3")) {
          tempo = position1.innerText;
          position1.innerText = position3.innerText;
          position3.innerText = tempo;
        }
      }
      //
      //
      ////////// TITRE
      else if (element.innerText == "Titre") {
        array.sort((a, b) => {
          return a.title < b.title ? -1 : 1;
        });
        console.log(element.innerText);
        if (element.innerText == "Titre" && element.classList.contains("pos2")) {
          tempo = position1.innerText;
          position1.innerText = position2.innerText;
          position2.innerText = tempo;
        } else if (element.innerText == "Titre" && element.classList.contains("pos3")) {
          tempo = position1.innerText;
          position1.innerText = position3.innerText;
          position3.innerText = tempo;
        }
      }
      //
      //
      displayMediasThisPhotographer(array, thisPhotographer);
    });
  });
};