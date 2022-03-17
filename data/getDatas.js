//Récupère les données du fichier "photographers.json" pour pouvoir les exploiter
export const getDatas = async (array, target) => {
  // Avec "fetch", on récupère toutes les datas du fichier "json"
  await fetch("data/photographers.json")
  // Quand on a une réponse comme quoi notre fichier "json" existe (voir avec Enzo le "then, etc...")
    .then((response) => response.json())
    .then((promise) => {
      //On stocke les données dans deux tableaux distincts. Un tableau "dataPhotographers" et un tableau "dataMedia"
      // "promise" crée un tableau, le "spread operator" permet de destructurer ce tableau tout en conservant les valeurs
      // On "push" les données dans chaque tableau selon sa cible // Ex: dans le tableau "dataPhotographers, on push le contenu "photographers" du json !
      array.push(...promise[target]);
    });
};
