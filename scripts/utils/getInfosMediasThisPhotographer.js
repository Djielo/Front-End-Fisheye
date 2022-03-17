// Permet d'obtenir les informations du media actuel !
export const getInfosMediasThisPhotographer = (dataMedia, currentId, thisMedia) => {
  // Pour chaque media dans "dataMedia"
  dataMedia.forEach((media) => {
    // Si le numéro dans l'url correspond à l'id du photographe des médias
    if (currentId == media.photographerId) {
      // On injecte ses datas dans le tableau de la variable "thisMedia"
      thisMedia.push(media);
    }
  });
};
