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

const dropdownMenu = document.querySelector(".sort_dropdown");
const myarticle = document.querySelector(".photographer_images");
const sortText = document.querySelector(".sort_text");
const buttons = document.querySelector(".sort_btn");
let chevron = document.querySelector(".fa-chevron-down");

dropdownMenu.addEventListener("focus", () => {
  buttons.style.display = "block";
  chevron.classList.replace("fa-chevron-down", "fa-chevron-up");
});

const dropdownClose = (element) => {
  element.addEventListener("focus", () => {
    buttons.style.display = "none";
    chevron.classList.replace("fa-chevron-up", "fa-chevron-down");
  });
};

dropdownClose(myarticle);
dropdownClose(sortText);

// export const sortDropdownAcc = () => {
//   sortDropdown.style.height = "clamp(5rem, 0.8615rem + 9.4595vw, 9.375rem); /*150px*/";
//   position1.style.display = "block";
//   position1.style.height = "clamp(1.75rem, 0.0946rem + 3.7838vw, 3.5rem); /*56px*/";
//   position2.style.display = "block";
//   position2.style.height = "clamp(1.75rem, 0.0946rem + 3.7838vw, 3.5rem); /*56px*/";
//   position3.style.display = "block";
//   position3.style.height = "clamp(1.75rem, 0.0946rem + 3.7838vw, 3.5rem); /*56px*/";
// };
