export const sortDropdown = () => {
  const mouseHover = document.querySelector(".sort_dropdown");
  let faChevronDown = document.querySelector(".fa-chevron-down");
  mouseHover.addEventListener("mouseover", () => {
    // pour chaque élément du tableau "menu", vérifier s'il existe une classe "menu    
    if (faChevronDown.classList.contains("fa-chevron-down")) {
      faChevronDown.classList.replace("fa-chevron-down", "fa-chevron-up");
    }
    });
  mouseHover.addEventListener("mouseout", () => {
    // pour chaque élément du tableau "menu", vérifier s'il existe une classe "menu    
    if (faChevronDown.classList.contains("fa-chevron-up")) {
      faChevronDown.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
};
