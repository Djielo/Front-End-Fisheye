//RECUPERE LES DONNEES DU JSON POUR POUVOIR LES EXPLOITER

export const getDatas = async (array, target) => {
  // Avec "fetch", on récupère toutes les datas du fichier "json"
  await fetch("scripts/datas/photographers.json")
    // Permet de savoir s'il y a du contenu dans le json !
    .then((response) => response.json())
    .then((promise) => {
      // On stocke les données dans deux tableaux distincts. Un tableau "datasAllPhotographers" et un tableau "datasAllMedias"
      // "promise" crée un tableau, le "spread operator (...)" permet de destructurer ce tableau tout en conservant les valeurs
      // On "push" les données json obtenues par "promise" dans chaque "array" selon sa "target"
      array.push(...promise[target]);
    });
};
