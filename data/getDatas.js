//Récupère les données du fichier "photographers.json"
export const getDatas = async (array, target) => {
  await fetch("../../data/photographers.json")
    .then((response) => response.json())
    .then((promise) => {
      //Stocke les données dans le tableau "myData"
      array.push(...promise[target]);
    });
};
