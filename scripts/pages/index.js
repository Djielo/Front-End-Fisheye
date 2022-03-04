import { getDatas } from "../../data/getDatas.js";

const dataPhotographers = [];

// Penser à remplacer par les données récupérées dans le json
const displayPhotographers = async () => {
  await getDatas(dataPhotographers, "photographers");
  const photographersSection = document.querySelector(".photographer_section");
  const picture = "assets/images/Sample_Photos/Photographers_ID_Photos/";  
  photographersSection.innerHTML = dataPhotographers
    .map(
      (photograph) =>
        `
        <article>
            <img src=${picture}${photograph.portrait}>
            <h2>${photograph.name}</h2>
            <h3>${photograph.city}, ${photograph.country}</h3>
            <p>${photograph.tagline}</p>
            <h4>${photograph.price}€/jour</h4>
        </article>
        `
    )
    .join("");
};

displayPhotographers();
