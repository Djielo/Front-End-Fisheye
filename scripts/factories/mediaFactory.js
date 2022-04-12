class Media {
  constructor(media, photographerArray) {
    this._media = media;
    this._photographerArray = photographerArray;
    this._mediaContent = document.querySelector(".photographer_images");
    this._thumbs = `assets/images/Sample_Photos/${this._photographerArray[0].name.split(" ")[0]}/`;

    if (this._media.image) {
      this.image();
    } else if (this._media.video) {
      this.video();
    }
  }

  init(media) {
    this._mediaContent.insertAdjacentHTML(
      "afterbegin",
      `
      <article tabindex="0">
        ${media}  
        <div tabindex="0">
          <p>${this._media.title}</p>
          <div>
            <div class="localCounter">${this._media.likes}</div>
            <button tabindex="0" class="unliked btn_heart"><i class="fas fa-heart"></i></button>
          </div>
        </div>
      </article>
    `
    );
  }

  image() {
    this._image = `<a href="${this._thumbs}${this._media.image}"><img src= ${this._thumbs}${this._media.image} alt="${this._media.title}"/></a>`;
    this.init(this._image);
  }

  video() {
    this._video = `<a href="${this._thumbs}${this._media.video}"><video src= ${this._thumbs}${this._media.video} alt="${this._media.title}"/></a>`;
    this.init(this._video);
  }
}

export const displayMedia = (mediaArray, photographerArray) => {
  mediaArray.forEach((media) => {
    new Media(media, photographerArray);
  });
};