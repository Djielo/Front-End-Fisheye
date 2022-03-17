export const displayMediasThisPhotographer = (mediaArray, thisPhotographer) => {
  // On crée une variable dans laquelle on récupère la classe ".photographer_images"
  const photographerImages = document.querySelector(".photographer_images");
  // On crée une variable qui contient le début du lien des images
  const thumbs = `assets/images/Sample_Photos/${thisPhotographer[0].name.split(" ")[0]}/`;
  //On injecte le HTML ci-dessous dans la div de classe ".photographer_images"
  photographerImages.innerHTML = mediaArray
    .map(
      (media) =>
        `
    <article>
      <img src= ${thumbs}${media.image} alt="${media.title}"/>
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
