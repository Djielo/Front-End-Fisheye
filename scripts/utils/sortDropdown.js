export const sortDropdown = () => {
  const mouseHover = document.querySelector(".sort_dropdown");
  let menu = document.querySelectorAll(".menu");
  let faChevronDown = document.querySelector(".fa-chevron-down");
  mouseHover.addEventListener("mouseover", () => {
    // pour chaque élément du tableau "menu", vérifier s'il existe une classe "menu
    menu.forEach((element) => {
      if (element.classList.contains("menuUnvisible")) {
        element.classList.replace("menuUnvisible", "menuVisible");
      }
    });
    if (faChevronDown.classList.contains("fa-chevron-down")) {
      faChevronDown.classList.replace("fa-chevron-down", "fa-chevron-up");
    }
  });
  mouseHover.addEventListener("mouseout", () => {
    // pour chaque élément du tableau "menu", vérifier s'il existe une classe "menu
    menu.forEach((element) => {
      if (element.classList.contains("menuVisible")) {
        element.classList.replace("menuVisible", "menuUnvisible");
      }
    });
    if (faChevronDown.classList.contains("fa-chevron-up")) {
      faChevronDown.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
};
