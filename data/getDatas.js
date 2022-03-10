//Récupère les données du fichier "photographers.json"
export const getDatas = async (array, target) => {
  // Avec "fetch", on récupère toutes les datas du fichier "json"
  await fetch("data/photographers.json")
  // Quand on a une réponse comme quoi notre fichier "json" existe (voir avec Enzo le "then, etc...")
    .then((response) => response.json())
    .then((promise) => {
      //Stocke les données dans le tableau "dataPhotographers" et "dataMedia"
      // "spread operator" permet de garder les valeurs du tableau de la "promise" sans la mise en forme du tableau
      array.push(...promise[target]);
    });
};
