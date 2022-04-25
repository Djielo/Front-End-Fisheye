// PERMET D'OBTENIR LES INFOS ET MEDIAS DU PHOTOGRAPHE ACTUEL PAR RAPPORT A SON ID

export const getInfosThisPhotographer = (array, newArray, photographerOrMediaId) => {
  // Récupère l'id du photographe dans l'url
  let currentId = document.location.href.split("?id=")[1];
  // Pour chaque photographe dans "dataPhotographers"
  array.forEach((element) => {
    // Si le numéro dans l'url correspond à l'id du photographe
    if (currentId == element[photographerOrMediaId]) {
      // On injecte ses datas dans le tableau de la variable "thisPhotographer"
      newArray.push(element);
    }
  });
};