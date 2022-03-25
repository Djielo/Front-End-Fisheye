export let mediaFactory = (array, element) => {
  let tag = document.querySelectorAll("article > a > img");
  const thumbs = `assets/images/Sample_Photos/${element[0].name.split(" ")[0]}/`;
  console.log(array);
  console.log(tag);
  console.log(array.includes("image"));

  if (array.includes("image")) {
  }

  //
  let videoContent = `<a href="${thumbs}${media.video}"><video src= ${thumbs}${media.video} alt="${media.title}"/></a>`;
  //
  let imageContent = `<a href="${thumbs}${media.image}"><img src= ${thumbs}${media.image} alt="${media.title}"/></a>`;
  //
  console.log(video);
  //
  if (element == video) {
    videoContent.display = block;
    imageContent.display = none;
  }
};

//
//
//
//
//
/* <a href="assets/images/Sample_Photos/${thisPhotographer[0].name.split(" ")[0]}/${media.image}"><img src= "assets/images/Sample_Photos/${thisPhotographer[0].name.split(" ")[0]}/${media.image} alt=${media.title}"/></a> */
//

// import { displayMediasThisPhotographer } from "../utils/displayMediasThisPhotographer.js";

// export class Media {
//   constructor(media, type) {
//     this.media = media;
//     this.type = type;
//   }
// }

// const mediaImage = new Media("img", "jpg");
// const mediaVideo = new Media("video", "mp4");
// // Crée un tableau vide pour stocker ensuite les datas DU photographe lié au currentId
// let thisPhotographer = [];
// // Crée un tableau vide pour stocker ensuite les medias DU photographe lié au currentId
// let thisMedia = [];

// if (mediaImage.media == "" && mediaImage.type == "") {
// }

// console.log(mediaImage, mediaVideo);
// displayMediasThisPhotographer(thisMedia, thisPhotographer);
// console.log(thisMedia);


