export const sortDropdown = () => {
  const mouseHover = document.querySelector(".sort_dropdown");
  let menu = document.querySelectorAll(".menu");
  let chevron = document.querySelector(".fa-chevron-down");
  mouseHover.addEventListener("mouseover", () => {
    // pour chaque élément du tableau "menu", vérifier s'il existe une classe "menu
    menu.forEach((element) => {
      console.log(element);
      if (element.classList.contains("menuUnvisible")) {
        element.classList.replace("menuUnvisible", "menuVisible");
      }
    });
    console.log(chevron.classList.contains("fa-chevron-down"));
    if (chevron.classList.contains("fa-chevron-down")) {
      chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
    }
  });
  mouseHover.addEventListener("mouseout", () => {
    // pour chaque élément du tableau "menu", vérifier s'il existe une classe "menu
    menu.forEach((element) => {
      if (element.classList.contains("menuVisible")) {
        element.classList.replace("menuVisible", "menuUnvisible");
      }
    });
    if (chevron.classList.contains("fa-chevron-up")) {
      chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
};
