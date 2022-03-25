export const displayMediasThisPhotographer = (array, element) => {
  // On crée une variable dans laquelle on récupère la classe ".photographer_images"
  const photographerImages = document.querySelector(".photographer_images");
  // On crée une variable qui contient le début du lien des images
  const thumbs = `assets/images/Sample_Photos/${element[0].name.split(" ")[0]}/`;
  //On injecte le HTML ci-dessous dans la div de classe ".photographer_images"
  photographerImages.innerHTML = array
    .map(
      (media) =>
        `
    <article>     
      <a href="${thumbs}${media.image}">
        <img src= ${thumbs}${media.image} alt="${media.title}"/>
      </a>     
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
};
