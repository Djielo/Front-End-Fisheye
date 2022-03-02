import { getDatas } from "../../data/getDatas.js";
let dataMedia = [];

const displayMedia = async () => {
  await getDatas(dataMedia, "media");
  console.log(dataMedia);
};
displayMedia();
