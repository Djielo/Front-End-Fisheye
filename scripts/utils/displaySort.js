import { displayMediasThisPhotographer } from "./displayMediasThisPhotographer.js";

export const displaySort = (array, thisPhotographer) => {  
  let menu = document.querySelectorAll(".menu");

  menu.forEach((element) => {    
    element.addEventListener("click", () => {
      if (element.innerText == "Date") {
        console.log("pos1");        
        array.sort((a, b) => {
          return a.date < b.date ? -1 : 1;
        });
      }
      if (element.innerText == "Popularité") {
        console.log("pos2");
        array.sort((a, b) => {
          return a.likes > b.likes ? -1 : 1;
        });
      }
      if (element.innerText == "Titre") {
        console.log("pos3");
        array.sort((a, b) => {
          return a.title < b.title ? -1 : 1;
        });
      }
      displayMediasThisPhotographer(array, thisPhotographer);
    });
  });
};
