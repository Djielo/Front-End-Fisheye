// import de la fonction "getDatas"
import { getDatas } from "../datas/getDatas.js";

// Création d'un tableau vide qui contiendra toutes les informations des photographes
const dataPhotographers = [];
// Va cibler l'élément html contenant la classe ".photographers_section"
const photographersSection = document.querySelector(".photographers_section");
// Variable contenant de début du lien allant chercher le portrait de chaque photographe
const picture = "assets/images/Sample_Photos/Photographers_ID_Photos/";
// Variable contenant le début du lien redirigeant vers la page des différents photographes
const link = `photographer.html?id=`;

// Cette fonction permettra d'afficher les infos [choisies] de chaque photographe
const displayPhotographers = async () => {
  // Une fois les infos tirés de la partie "photographers" du json injectées dans le tableau "dataPhotographers"
  await getDatas(dataPhotographers, "photographers");
  // Nous allons injecter ces différentes infos dans le html
  // Injecter dans la balise contenant la classe ".photographers_section" les infos tirées du tableau "dataPhotographers" pour chaque photographe (.map)
  photographersSection.innerHTML = dataPhotographers
    .map(
      (photographer) =>
        `
        <article>          
            <a href=${link}${photographer.id}><img src=${picture}${photographer.portrait} alt="Portrait photo du photographe"></a>                      
            <h2>${photographer.name}</h2>
            <h3>${photographer.city}, ${photographer.country}</h3>
            <p>${photographer.tagline}</p>
            <h4>${photographer.price}€/jour</h4>          
        </article>
        `
    ) // le .join permet d'enlever les éléments séparateurs d'un tableau (qui peuvent créer des décalages à l'affichage)
    .join("");
};

displayPhotographers();
