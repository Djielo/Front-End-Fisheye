import { getDatas } from "../../data/getDatas.js";

const dataPhotographers = [];
const photographersSection = document.querySelector(".photographers_section");
const picture = "assets/images/Sample_Photos/Photographers_ID_Photos/";
const link = `photographer.html?id=`;

// ...
const displayPhotographers = async () => {
  await getDatas(dataPhotographers, "photographers");
  photographersSection.innerHTML = dataPhotographers
    .map(
      (photographer) =>
        `
        <article>          
            <a href=${link}${photographer.id}><img src=${picture}${photographer.portrait}></a>                      
            <h2>${photographer.name}</h2>
            <h3>${photographer.city}, ${photographer.country}</h3>
            <p>${photographer.tagline}</p>
            <h4>${photographer.price}€/jour</h4>          
        </article>
        `
    )
    .join("");
};

displayPhotographers();
