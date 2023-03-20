import data from "../data/places.js";

function getParameter(pName) {
  let parameter = new URLSearchParams(window.location.search);
  return parameter.get(pName);
}
const id = parseInt(getParameter("id")) || 1;

const title = document.querySelector(".title");
// const background = document.querySelector(".background");
const back_img = document.createElement("img");
const container = document.querySelector(".container");
const map = document.querySelector(".map_iframe");
const secondary__heading = document.querySelector(".title");

let place_data = data[id-1];
secondary__heading.innerHTML = place_data.pagoda + " သမိုင်းအကြောင်း";
title.innerHTML = place_data.pagoda;
back_img.src = place_data.images.background;
// background.appendChild(back_img);

data.forEach((i) => {});

place_data.about.forEach((i, j) => {

  const history_card = document.createElement("div");
  history_card.classList.add("history__card");

  const img_div = document.createElement("div");
  img_div.classList.add("img__div");

  const img = document.createElement("img");
  //   img.src = place_data.images.img[j];
  img.src = place_data.images.img[j];
  img_div.appendChild(img);

  const history = document.createElement("div");
  history.classList.add("history");

  const history_content = document.createElement("p");
  history_content.innerText = i[`para${j+1}`];
  history_content.classList.add("history__content");

  history.appendChild(history_content);

  if (j % 2 == 0) {
    history_card.appendChild(img_div);
    history_card.appendChild(history);
  } else {
    history_card.appendChild(history);
    history_card.appendChild(img_div);
  }
  container.appendChild(history_card);
});

map.src = place_data.location;


const navBtn = document.querySelector(".navigation__button");
const navList = document.querySelector(".navigation__list");
navBtn.addEventListener("click", function (e) {
  navBtn.classList.toggle("active__btn");
  navList.classList.toggle("active__navigation__list");
});
