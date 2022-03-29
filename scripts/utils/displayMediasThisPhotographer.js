import { Media } from "../factories/mediaFactory.js";
// On crée une variable dans laquelle on récupère la classe ".photographer_images"
const photographerImages = document.querySelector(".photographer_images");

export const displayMediasThisPhotographer = (array, element) => {
  // On crée une variable qui contient le début du lien des images
  const thumbs = `assets/images/Sample_Photos/${element[0].name.split(" ")[0]}/`;
  // On injecte le HTML ci-dessous dans la div de classe ".photographer_images"

  photographerImages.innerHTML = array
    .map(
      (media) =>
        `
    <article>   
      <div>
        <p>${media.title}</p>
        <div>
          <div class="localCounter">${media.likes}</div>
          <i class="fas fa-heart btn_heart unliked"></i>
        </div>
      </div>
    </article>
        `
    )
    .join("");
  x(array);
};

const x = (array) => {
  array.forEach((el) => {
    const articles = photographerImages.querySelectorAll("article");
    articles.forEach((article) => {
      new Media(el, article);
    });
  });
};
