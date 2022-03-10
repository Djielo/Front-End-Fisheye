export const displayPhotographers = (array) => {
    const photographerHeader = document.querySelector(".photographer_header");
    const picture = "assets/images/Sample_Photos/Photographers_ID_Photos/";
    const link = "photographer.html/?";
    photographerHeader.innerHTML = array
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
  };