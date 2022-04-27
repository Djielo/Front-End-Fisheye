// PERMET L'AFFICHAGE PERSONNALISÉ DU HEADER, DU PRIX ET DE LA MODALE
export const displayThisPhotographer = (thisPhotographer) => {
  const photographerHeader = document.querySelector(".photographer_header");
  const priceDay = document.querySelector(".cta_price_day");
  const modalPhotographerName = document.querySelector(".modal_photographer_name");
  const picture = "assets/images/Sample_Photos/Photographers_ID_Photos/";

  // Injection du HTML ci-dessous dans la div de classe ".photographer_header" selon le photographe
  photographerHeader.innerHTML = thisPhotographer
    .map(
      (photographer) =>
        `
          <article class="photographer_profile">
            <h2>${photographer.name}</h2>
            <h3>${photographer.city}, ${photographer.country}</h3>
            <p>${photographer.tagline}</p>
          </article>
          <div class="photographer_contact">
            <button class="contact_button btn_open_modal">Contactez-moi</button>
          </div>
          <div class="photographer_picture">
          <img src=${picture}${photographer.portrait} alt="${photographer.name}">
          </div>
          `
    )
    .join("");
  // Affichage du nom et du prix selon le photographe
  modalPhotographerName.innerHTML = thisPhotographer.map((photographer) => `${photographer.name}`);
  priceDay.innerHTML = thisPhotographer.map((photographer) => `${photographer.price}€/jour`);
};
