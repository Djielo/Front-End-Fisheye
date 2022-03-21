export const sortDropdown = () => {
  const mouseHover = document.querySelector(".sort_dropdown");
  let menu = document.querySelectorAll(".menu");
  mouseHover.addEventListener("mouseover", () => {
    // pour chaque élément du tableau "menu", vérifier s'il existe une classe "menu
    menu.forEach((element) => {
      if (element.classList.contains("menuUnvisible")) {
        element.classList.replace("menuUnvisible", "menuVisible");        
      }
    });
  });
  mouseHover.addEventListener("mouseout", () => {
    // pour chaque élément du tableau "menu", vérifier s'il existe une classe "menu
    menu.forEach((element) => {
      if (element.classList.contains("menuVisible")) {
        element.classList.replace("menuVisible", "menuUnvisible");        
      }
    });
  });
};
