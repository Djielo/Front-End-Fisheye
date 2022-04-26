import { enableBodyScroll, disableBodyScroll } from "./bodyScrollLock.js";

/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemin des images de la lightbox
 * @property {string} url Image actuellement affichée
 */

export class Lightbox {
  // Permet d'initialiser la lightbox
  static init() {
    // On récupère et stocke tous les liens des images ou vidéo afin d'afficher celle sur laquelle on clique
    const links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'));
    // On récupère et stocke tous les fichiers détenant l'attribut "href"
    const gallery = links.map((link) => link.getAttribute("href"));
    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // Crée une nouvelle lightbox à partir de l'image ou la vidéo sur laquelle on clique
        new Lightbox(link.getAttribute("href"), gallery);
      })
    );
  }

  /**
   * @param {string} url URL de l'image
   * @param {string[]} images Chemin des images de la lightbox
   * 
   */

  constructor(url, images) {
    this.element = this.buildDOM(url);    
    this.images = images;
    this.loadMedia(url);
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(this.element);
    disableBodyScroll(this.element);
    document.addEventListener("keyup", this.onKeyUp);
  }

  /**
   * @param {string} url URL de l'image
   */
  loadMedia(url) {
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
   * Gère les events liés au keyboard pour la navigation au clavier
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
   * Passe au media suivant
   * @param {MouseEvent/KeyboardEvent} e
   * @returns
   */
  next(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i == this.images.length - 1) {
      i = -1;
    }
    this.loadMedia(this.images[i + 1]);
  }

  /**
   * Passe au media précédent
   * @param {MouseEvent/KeyboardEvent} e
   * @returns
   */
  preview(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i == 0) {
      i = this.images.length;
    }
    this.loadMedia(this.images[i - 1]);
  }

  /**
   * Crée la lightbox dans le DOM
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
