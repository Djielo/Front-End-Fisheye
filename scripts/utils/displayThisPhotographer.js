export const displayThisPhotographer = (thisPhotographer) => {
  // On crée une variable dans laquelle on récupère la classe ".photographer_header"
  const photographerHeader = document.querySelector(".photographer_header");
  // On crée une variable dans laquelle on récupère la classe ".cta_days"
  const price = document.querySelector(".cta_days");
  // On crée une variable dans laquelle on récupère la classe ".cta_days"
  const modalPhotographerName = document.querySelector(".modal_photographer_name");
  // On crée une variable qui contient le début du lien des images
  const picture = "assets/images/Sample_Photos/Photographers_ID_Photos/";
  //On injecte le HTML ci-dessous dans la div de classe ".photographer_header"
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
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
          </div>
          <div class="photographer_picture">
          <img src=${picture}${photographer.portrait}>
          </div>
          `
    )
    .join("");
  // Permet d'injecter le tarif de chaque photographe sur sa page
  price.innerHTML = thisPhotographer.map((photographer) => `${photographer.price}€/jour`);
  // Permet d'afficher le nom de chaque photographe sur sa modal de contact
  modalPhotographerName.innerHTML = thisPhotographer.map((photographer) => `${photographer.name}`);

};
