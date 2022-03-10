export const displayMedia = (mediaArray, thisPhotographer) => {
  const photographerImages = document.querySelector(".photographer_images");
  const thumbs = `assets/images/Sample_Photos/${thisPhotographer[0].name.split(" ")[0]}/`;
  photographerImages.innerHTML = mediaArray
    .map(
      (media) =>
        `
    <article>
      <img src= ${thumbs}${media.image} alt="${media.title}"/>
      <div>
        <p>${media.title}</p>
        <div>
          <div class="number">${media.likes}</div>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </article>
        `
    )
    .join("");
};
