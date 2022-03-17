// Permet d'obtenir les informations du photographe actuel
export const getInfosThisPhotographer = (dataPhotographers, currentId, thisPhotographer) => {
  // Pour chaque photographe dans "dataPhotographers"
  dataPhotographers.forEach((photographer) => {
    // Si le numéro dans l'url correspond à l'id du photographe
    if (currentId == photographer.id) {
      // On injecte ses datas dans le tableau de la variable "thisPhotographer"
      thisPhotographer.push(photographer);      
    }
  });
};
