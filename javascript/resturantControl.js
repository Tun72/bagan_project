import resturant_data from "../data/resturant.js";

function getParameter(pName) {
  let parameter = new URLSearchParams(window.location.search);
  return parameter.get(pName);
}
const id = parseInt(getParameter("id")) || 1;

let data = resturant_data[id - 1];
const intro = document.querySelector(".intro__heading_");

intro.innerHTML = data.pagoda;

const content = document.querySelector(".content__");
content.innerText = data.intro;

const menu_img = document.querySelectorAll(".menu_img");
const price = document.querySelectorAll(".price");
const menuHeading = document.querySelectorAll(".menu_heading");
menu_img.forEach((img, i) => {
  menu_img[i].src = data.imgs[i].img;
  price[i].innerHTML = data.imgs[i].price;
  menuHeading[i].innerHTML = data.imgs[i].name;
});

const images = document.querySelector(".image");
images.src = data.images.background;

const map = document.querySelector(".iframeMap");
map.src = data.location;


const navBtn = document.querySelector(".navigation__button");
const navList = document.querySelector(".navigation__list");
navBtn.addEventListener("click", function (e) {
  navBtn.classList.toggle("active__btn");
  navList.classList.toggle("active__navigation__list");
});