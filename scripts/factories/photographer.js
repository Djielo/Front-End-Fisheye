// function photographerFactory(data) {
//   const { name, portrait } = data;
//   console.log(data);

//   const picture = `../assets/images/Sample_Photos/Photographers_ID_Photos/${portrait}`;

//   function getUserCardDOM() {
//     const article = document.createElement("article");
//     const img = document.createElement("img");
//     img.setAttribute("src", picture);
//     const h2 = document.createElement("h2");
//     h2.textContent = name;
//     const h31 = document.createElement("h3");
//     h31.textContent = city;
//     const h32 = document.createElement("h3");
//     h32.textContent = country;
//     const p = document.createElement("p");
//     p.textContent = tagline;
//     const h4 = document.createElement("h4");
//     h4.textContent = price;
//     article.appendChild(img);
//     article.appendChild(h2);
//     article.appendChild(h31);
//     article.appendChild(h32);
//     article.appendChild(p);
//     article.appendChild(h4);
//     return article;
//   }
//   return { name, picture, getUserCardDOM };
// }
