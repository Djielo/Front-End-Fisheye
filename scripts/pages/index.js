// import de la fonction "getDatas"
import { getDatas } from "../datas/getDatas.js";

// Servira à stocker les datas de TOUS les photographes
const datasAllPhotographers = [];
const photographersSection = document.querySelector(".photographers_section");
// Variable contenant de début du lien allant chercher le fichier du portrait de chaque photographe
const picture = "assets/images/Sample_Photos/Photographers_ID_Photos/";
// Variable contenant le début du lien redirigeant vers la page des différents photographes
const link = `photographer.html?id=`;

// CETTE FONCTION PERMETTRA D'AFFICHER LES INFOS [CHOISIES] DE CHAQUE PHOTOGRAPHE
const displayPhotographers = async () => {
  // Une fois les infos tirés de la partie "photographers" du json injectées dans le tableau "datasAllPhotographers"
  await getDatas(datasAllPhotographers, "photographers");
  // Nous allons injecter ces différentes infos dans le html
  // Injecter dans la balise contenant la classe ".photographers_section" les infos tirées du tableau "datasAllPhotographers" pour chaque photographe (.map)
  photographersSection.innerHTML = datasAllPhotographers
    .map(
      (photographer) =>
        `
        <article>          
            <a href=${link}${photographer.id}><img src=${picture}${photographer.portrait} alt="${photographer.name}"></a>                      
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
