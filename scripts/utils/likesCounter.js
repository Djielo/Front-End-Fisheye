export const likesCounter = () => {
  // Récupère tous les éléments html contenant la classe ".btn_heart" (coeurs de chaque média), puis les stocke dans le tableau "buttons"
  const buttons = document.querySelectorAll(".btn_heart");
  // Récupère tous les éléments html contenant la classe ".localCounter" (like de chaque média), puis les stocke dans le tableau "allCounters"
  const allCounters = document.querySelectorAll(".localCounter");
  // Récupère l'élément html contenant la classe ".cta_heart" (like global), puis les stocke dans le tableau "globalCounter"
  const globalCounter = document.querySelector(".cta_heart");

  // Cette fonction permet d'actualiser le nouveau total global de like en fonction des incrémentations et décrémentations sur les likes de chaque média
  const finalCounter = () => {
    // Crée un tableau vide qui servira à stocker le total des likes de chaque média
    let totalCounter = [];
    // Pour chaque élément html contenant la classe "localCounter"
    allCounters.forEach((counter) => {
      // On "push" dans le tableau ".totalCounter" la valeur de l'élément en lui donnant le type Number
      totalCounter.push(Number(counter.innerText));
    });
    // On additionne toutes les valeurs grâce à "reduce". "totalCounter" stockera le total !
    totalCounter = totalCounter.reduce((acc, cur) => acc + cur);
    // On affiche ce total dans l'élément html contenant la classe ".cta_heart"
    globalCounter.innerHTML = `${totalCounter} <i class="fas fa-heart"></i>`;
  };
  finalCounter();

  // Pour chaque élément (coeur) contenant la classe ".btn_heart"
  buttons.forEach((button) => {
    // Cette variable va stocker le nombre de like de chaque élément
    let localCounter = button.parentElement.children[0];
    // Cette variable va garder en mémoire la valeur une fois incrémentée ou décrémentée
    let memoryCount = localCounter.innerText;

    // Lors de l'appel de cette fonction, il permet de donner la nouvelle valeur de "memoryCount" à "localCounter.innerText"
    const refreshLike = () => {
      localCounter.innerText = `${memoryCount}`;
    };

    // Au clic sur un coeur,
    button.addEventListener("click", () => {
      // on vérifie si parmi les classes du bouton (coeur), il existe la classe ".unliked"
      if (button.classList.contains("unliked")) {
        // si oui, on remplace "unliked" par "liked"
        button.classList.replace("unliked", "liked");
        // on change la couleur du nombre de like
        localCounter.style.color = "#d3573c";
        // on incrémente de 1 le compteur du média
        memoryCount++; // +1
        // on appelle la fonction "refreshLike" qui donne la nouvelle valeur de "memoryCount" à "localCounter.innerText"
        refreshLike();
        // Permet d'actualiser le nouveau total global de like en fonction des incrémentations et décrémentations sur les likes de chaque média
        finalCounter();
      } else {
        // remple "liked" par "unliked"
        button.classList.replace("liked", "unliked");
        // donne le style de base au nombre de like
        localCounter.style.color = "#901c1c";
        // on décrémente de 1 le compteur du média
        memoryCount--;
        // Idem if
        refreshLike();
        finalCounter();
      }
    });
  });
};
