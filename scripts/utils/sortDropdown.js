// const position1 = document.querySelector(".pos1");
// const position2 = document.querySelector(".pos2");
// const position3 = document.querySelector(".pos3");
// const allPositions = [position1, position2, position3];
// const sortDropdown = document.querySelector(".sort_dropdown");

// const isFocus = (el) => {
//   return document.hasFocus(el);
// };

// export const sortDropdownAcc = () => {
//   sortDropdown.addEventListener("focus", () => {
//     sortDropdown.style.display = "block";
//     position2(isFocus)
//   });
// };

//
//
//
//
export const sortDropdown = () => {
  const clickDropdown = document.querySelector(".pos1");
  let chevron = document.querySelector(".fa-chevron-down");
  clickDropdown.addEventListener("focus", () => {
    // pour chaque élément du tableau "menu", vérifier s'il existe une classe "menu
    if (chevron.classList.contains("fa-chevron-down")) {
      chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
    }
  });
  clickDropdown.addEventListener("focusout", () => {
    // pour chaque élément du tableau "menu", vérifier s'il existe une classe "menu    
    if (chevron.classList.contains("fa-chevron-up")) {    
      chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
};

// export const sortDropdownAcc = () => {
//   sortDropdown.style.height = "clamp(5rem, 0.8615rem + 9.4595vw, 9.375rem); /*150px*/";
//   position1.style.display = "block";
//   position1.style.height = "clamp(1.75rem, 0.0946rem + 3.7838vw, 3.5rem); /*56px*/";
//   position2.style.display = "block";
//   position2.style.height = "clamp(1.75rem, 0.0946rem + 3.7838vw, 3.5rem); /*56px*/";
//   position3.style.display = "block";
//   position3.style.height = "clamp(1.75rem, 0.0946rem + 3.7838vw, 3.5rem); /*56px*/";
// };
