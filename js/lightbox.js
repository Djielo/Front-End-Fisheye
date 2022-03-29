import { enableBodyScroll, disableBodyScroll } from "./bodyScrollLock.js";

/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemin des images de la lightbox
 * @property {string} url Image actuellement affichée
 */

export class Lightbox {
  // Permet d'initialiser la lightbox
  static init() {
    // On récupère tous les liens des images afin d'afficher celle sur laquelle on clique
    const links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'));
    const gallery = links.map((link) => link.getAttribute("href"));
    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // On affiche l'image dont le lien s'affiche dans l'URL
        new Lightbox(e.currentTarget.getAttribute("href"), gallery);
      })
    );
  }

  /**
   * @param {string} url URL de l'image
   * @param {string[]} images Chemin des images de la lightbox
   */
  constructor(url, images) {
    this.element = this.buildDOM(url);
    this.images = images;
    this.loadImage(url);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);
    disableBodyScroll(this.element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  /**
   * @param {string} url URL de l'image
   */
  loadImage(url) {
    this.url = null;
    const container = this.element.querySelector(".lightbox__container");
    const loader = document.createElement("div");
    loader.classList.add("lightbox__loader");
    container.innerHTML = "";
    container.appendChild(loader);

    if (url.includes("jpg")) {
      const image = new Image();
      image.onload = () => {
        container.removeChild(loader);
        container.appendChild(image);
        this.url = url;
      };
      image.src = url;
    } else if (url.includes("mp4")) {
      let video = document.createElement("video");
      video.src = url;
      video.setAttribute("autoplay", "");
      video.setAttribute("loop", "");      
      container.removeChild(loader);
      container.appendChild(video);
      this.url = url;
    }
  }

  /**
   * @param {KeyboardEvent} e
   */
  onKeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    } else if (e.key === "ArrowLeft") {
      this.preview(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
  }

  /**
   * Ferme la lightbox
   * @param {MouseEvent/KeyboardEvent} e
   * @returns
   */
  close(e) {
    e.preventDefault();
    this.element.classList.add("fadeOut");
    enableBodyScroll(this.element);
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500);
    document.removeEventListener("keyup", this.onKeyUp);
  }

  /**
   * Passe à l'image suivante
   * @param {MouseEvent/KeyboardEvent} e
   * @returns
   */
  next(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i == this.images.length - 1) {
      i = -1;
    }
    this.loadImage(this.images[i + 1]);
  }

  /**
   * Passe à l'image précédente
   * @param {MouseEvent/KeyboardEvent} e
   * @returns
   */
  preview(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i == 0) {
      i = this.images.length;
    }
    this.loadImage(this.images[i - 1]);
  }

  /**
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */
  buildDOM() {
    const dom = document.createElement("div");
    dom.classList.add("lightbox");
    dom.innerHTML = `<button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Suivant</button>
      <button class="lightbox__preview">Précédent</button>
      <div class="lightbox__container">      
      </div>`;
    dom.querySelector(".lightbox__close").addEventListener("click", this.close.bind(this));
    dom.querySelector(".lightbox__next").addEventListener("click", this.next.bind(this));
    dom.querySelector(".lightbox__preview").addEventListener("click", this.preview.bind(this));
    return dom;
  }
}

// Si le tag = img, alors afficher l'image
// si tag = video, alors affihcer la vidéo
//// Injecter la balise contenant le tag video dans le html et remove la balise contenant le tag img
