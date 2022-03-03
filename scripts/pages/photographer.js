import { getDatas } from "../../data/getDatas.js";
const dataMedia = [];

const displayMedia = async () => {
  await getDatas(dataMedia, "media");
  console.log(dataMedia);
};
displayMedia();
