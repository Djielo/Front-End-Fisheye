export class Media {
  constructor(media, mediaContent) {
    this._media = media;
    this._mediaContent = mediaContent;

    if (this._media.image) {
      this.image();
    } else if (this._media.video) {
      this.video();
    }
  }

  image() {
    this._mediaContent.insertAdjacentHTML = ("afterbegin",
      `
      <h1>image</h1>
      `);
    }
    
    video() {
      this._mediaContent.insertAdjacentHTML = ("afterbegin",
      `
      <h1>video</h1>
      `);
    }
  }
  
  
  // <a href="${thumbs}${this._media.image}"><img src= ${thumbs}${this._media.image} alt="${this._media.title}"/></a>

  // <a href="${thumbs}${this._media.video}"><img src= ${thumbs}${this._media.video} alt="${this._media.title}"/></a>


//
//
//
//
//
//
//
//
// export class Media {
//   static init() {
//     const links = document.querySelector('a[href$=".jpg"]');
//     const links2 = document.querySelector('a[href$=".mp4"]');
//     console.log(links);
//   }

//   /**
//    *
//    * @param {string} url URL du media à faire apparaitre
//    */
//   constructor(url) {
//     // cette avariable contiendra la construction du DOM faite à partir de l'URL
//     const element = this.buildDOM(url);
//     // On prend notre section, et on y ajoute notre DOM qui affichera les médias
//     document.section.appendChild(element);
//   }

//   /**
//    *
//    * @param {string} url du media à faire apparaitre
//    * @return {HTMLElement} injectera dans le HTML chaque image avec ses éléments attenants
//    */
//   buildDOM(url) {
//     const article = document.createElement("article");
//     console.log("test");
//     article.classList.add("mediaContent");
//     article.innerHTML = `<a href="${thumbs}${media.image}">
//         <img src= ${thumbs}${media.image} alt="${media.title}"/>
//       </a>
//       <div>
//         <p>${media.title}</p>
//         <div>
//           <div class="localCounter">${media.likes}</div>
//           <i class="fas fa-heart btn_heart unliked"></i>
//         </div>
//       </div>`;
//       // a t-on la possibilité de faire un forEach ici pour afficher soit une image, soit une vidéo ???
//     return article;
//   }
// }
// Media.init();

/**
 * <article>     
      <a href="${thumbs}${media.image}">
        <img src= ${thumbs}${media.image} alt="${media.title}"/>
      </a>     
      <div>
        <p>${media.title}</p>
        <div>
          <div class="localCounter">${media.likes}</div>
          <i class="fas fa-heart btn_heart unliked"></i>
        </div>
      </div>
    </article>
 */

//
//
//
//
//
//
//
//
// export let mediaFactory = (array, element) => {
//   let tag = document.querySelectorAll("article > a");
//   const thumbs = `assets/images/Sample_Photos/${element[0].name.split(" ")[0]}/`;
//   console.log(thumbs);
//   console.log(array);
//   console.log(tag);
//   console.log(tag == "img");

//   let videoContent = `<a href="${thumbs}${media.video}"><video src= ${thumbs}${media.video} alt="${media.title}"/></a>`;

//   let imageContent = `<a href="${thumbs}${media.image}"><img src= ${thumbs}${media.image} alt="${media.title}"/></a>`;

//   console.log(video);

//   if (element == video) {
//     videoContent.display = block;
//     imageContent.display = none;
//   }
// };
// mediaFactory();

//
//
//
//
//
/* <a href="assets/images/Sample_Photos/${thisPhotographer[0].name.split(" ")[0]}/${media.image}"><img src= "assets/images/Sample_Photos/${thisPhotographer[0].name.split(" ")[0]}/${media.image} alt=${media.title}"/></a> */
//

// export class Media {
//   constructor(media) {
//     this.media = media;
//     // this.type = type;
//   }
// }

// const mediaImage = new Media("img");
// const mediaVideo = new Media("video");
// // Crée un tableau vide pour stocker ensuite les datas DU photographe lié au currentId
// let thisPhotographer = [];
// // Crée un tableau vide pour stocker ensuite les medias DU photographe lié au currentId
// let thisMedia = [];

// if (mediaImage.media == "" && mediaImage.type == "") {
// }

// console.log(mediaImage, mediaVideo);
// console.log(thisMedia);
