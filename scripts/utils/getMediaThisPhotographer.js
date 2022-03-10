export const getInfosMedia = (dataMedia, currentId, thisMedia) => {
  // Permet d'obtenir les informations du media actuel
  // Pour chaque media dans "dataMedia"
  dataMedia.forEach((media) => {
    // Si le numéro dans l'url correspond à l'id du photographe des médias
    if (currentId == media.photographerId) {
      thisMedia.push(media);
    }
    // On injecte ses datas dans la variable "thisMedia"
  });
};
