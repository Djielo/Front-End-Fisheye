// GERE L'INCREMENTATION ET LA DECREMENTATION DES LIKE DE CHAQUE MEDIA ET LIKE GLOBAL
export const likesCounter = () => {
  const buttonsHeart = document.querySelectorAll(".buttons_heart");
  const localCounters = document.querySelectorAll(".local_counters");
  const globalCounterHeart = document.querySelector(".cta_global_counter_heart");

  // Permet d'actualiser le nouveau total global selon like ou unlike sur media
  const globalCounter = () => {
    // Servira à stocker le total des likes des medias
    let totalCounter = [];
    localCounters.forEach((counter) => {
      totalCounter.push(Number(counter.innerText));
    });
    totalCounter = totalCounter.reduce((acc, cur) => acc + cur);
    globalCounterHeart.innerHTML = `${totalCounter} <i class="fas fa-heart"></i>`;
  };
  globalCounter();

  // Pour chaque élément (coeur) contenant la classe ".buttons_heart"
  buttonsHeart.forEach((button) => {
    // Cette variable va stocker le nombre de like de chaque élément
    let localCounter = button.parentElement.children[0];
    // Cette variable va garder en mémoire la valeur une fois incrémentée ou décrémentée
    let memoryCount = localCounter.innerText;

    // Lors de son appel, permettra de donner la nouvelle valeur de "memoryCount" à "localCounter.innerText"
    const refreshLike = () => {
      localCounter.innerText = `${memoryCount}`;
    };

    // Au clic sur un coeur, on vérifie si class "liked" ou "unliked", on agit en conséquence
    button.addEventListener("click", () => {
      if (button.classList.contains("unliked")) {
        button.classList.replace("unliked", "liked");
        localCounter.style.color = "#d3573c";
        memoryCount++;
        refreshLike();
        globalCounter();
      } else {
        button.classList.replace("liked", "unliked");
        localCounter.style.color = "#901c1c";
        memoryCount--;
        refreshLike();
        globalCounter();
      }
    });
  });
};
