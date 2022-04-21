import { contactForm } from "./contactForm.js";

export const contactFormEvents = () => {
  let modal = null;
  const focusableSelector = "button, input, textarea";
  let focusables = [];
  let previousFocusedElement = null;

  const btnOpenModal = document.querySelector(".js_modal");
  const contactModal = document.querySelector(".contact_modal");
  const submitButton = document.querySelector(".sendMessage");

  const openModal = function (e) {
    e.preventDefault();
    focusables = Array.from(contactModal.querySelectorAll(focusableSelector));
    previousFocusedElement = document.querySelector(":focus");
    contactModal.style.display = null;
    contactModal.removeAttribute("aria-hidden");
    contactModal.setAttribute("aria-modal", "true");
    modal = contactModal;
    submitButton.addEventListener("click", closeModal);
    modal.addEventListener("click", closeModal);
    modal.querySelector(".js_modal_close").addEventListener("click", closeModal);
    document.querySelector("input").focus();
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
    submitButton.removeEventListener("click", closeModal);
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
  contactForm();
};
