const sortText = document.querySelector(".sort_text");
const span = document.querySelector(".span");
const dropdownMenu = document.querySelector(".sort_dropdown");
const sortPhotographer = document.querySelector(".photographer_sort");
const headerPhotographer = document.querySelector(".photographer_header");
const photographerImagesSection = document.querySelector(".photographer_images");
const chevron = document.querySelector(".fa-chevron-down");

// GERE L'OUVERTURE ET FERMETURE DU MENU DEROULANT
export const dropdownOpenOrClose = () => {
  span.addEventListener("focus", () => {
    sortPhotographer.setAttribute("tabindex", "0");
    span.style.display = "none";
    dropdownMenu.style.visibility = "visible";
    chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
  });

  const dropdownClose = (element) => {
    element.addEventListener("focus", () => {
      sortPhotographer.setAttribute("tabindex", "-1");
      span.style.display = "block";
      dropdownMenu.style.visibility = "hidden";
      chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    });
  };
  dropdownClose(photographerImagesSection);
  dropdownClose(sortPhotographer);
  dropdownClose(headerPhotographer);
  dropdownClose(sortText);
};
