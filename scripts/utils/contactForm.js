export const contactForm = () => {
  let modal = null;
  const focusableSelector = "button, input, textarea";
  let focusables = [];
  let previousFocusedElement = null;

  const btnOpenModal = document.querySelector(".js_modal");
  const contactModal = document.querySelector(".contact_modal");

  const openModal = function (e) {
    e.preventDefault();
    focusables = Array.from(contactModal.querySelectorAll(focusableSelector));
    previousFocusedElement = document.querySelector(":focus");
    contactModal.style.display = null;
    contactModal.removeAttribute("aria-hidden");
    contactModal.setAttribute("aria-modal", "true");
    modal = contactModal;
    modal.addEventListener("click", closeModal);
    modal.querySelector(".js_modal_close").addEventListener("click", closeModal);
    modal.querySelector(".js_modal_stoprop").addEventListener("click", stopPropagation);
  };

  const closeModal = function (e) {
    if (modal === null) return;
    if (previousFocusedElement !== null) previousFocusedElement.focus();
    e.preventDefault();
    window.setTimeout(function () {
      modal.style.display = "none";
      modal = null;
    }, 500);
    contactModal.setAttribute("aria-hidden", "true");
    contactModal.removeAttribute("aria-modal");
    modal.removeEventListener("click", closeModal);
    modal.querySelector(".js_modal_close").removeEventListener("click", closeModal);
    modal.querySelector(".js_modal_stoprop").removeEventListener("click", stopPropagation);
  };

  const stopPropagation = function (e) {
    e.stopPropagation();
  };

  btnOpenModal.addEventListener("click", openModal);

  const focusModal = function (e) {
    e.preventDefault();
  };

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      closeModal(e);
    }
    if (e.key === "Tab" && modal !== null) {
      focusModal(e);
      let index = focusables.findIndex((f) => f === contactModal.querySelector(":focus"));

      if (e.shiftKey === true) {
        index--;
      } else {
        index++;
      }
      if (index >= focusables.length) {
        index = 0;
      }
      if (index < 0) {
        index = focusables.length - 1;
      }
      focusables[index].focus();
    }
  });
};

//////////////////////////////////////// AVEC MENTOR
const firstname = document.querySelector("#prenom");
const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

function validateText(e) {
  if (e.value.trim().length < 2) {
    console.log("Doit contenir plus de 2 caractères");
    // return false;
  } else {
    console.log("ok pour cette partie");
    // return true;
  }
}

function validateForm(e) {
  let formOk = [];
  e.preventDefault();
  formOk.push(validateText(firstname));
  console.log("formOk");

  if (!formOk.includes(false)) {
    // Create a test FormData object
    const formDatas = new FormData();
    // formDatas.append('key1', 'value1');
    // formDatas.append('key2', 'value2');

    // Display the key/value pairs
    for (let pair of formDatas.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  }
}

// validateForm();
