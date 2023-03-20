import places_data from "../data/places.js";
import gift_data from "../data/gifts.js";
import resturant_data from "../data/resturant.js";
import hotel_data from "../data/hotel.js";

const all_data = {
  places: places_data,
  souvenirs: gift_data,
  restaurants: resturant_data,
  hotels: hotel_data,
};
const li = $("li");
let user_choice = "places";

let header;

const content = document.querySelector(".contents");
const placeInner = document.querySelector(".places-inner");
li.click(function () {
  user_choice = this.innerText.toLowerCase();

  content.scrollTo(0, 0);
  content.classList.add("active-content");
  li.map((i) => {
    li[i].classList.remove("active");
  });
  this.classList.toggle("active");

  setTimeout(open, 800);

  header = this.firstElementChild.innerText;

  setTimeout(() => {
    removeElements();
    createElements();
  }, 500);
});

function open() {
  content.classList.remove("active-content");
}

async function createElements() {
  const data = all_data[user_choice];
  console.log(user_choice);

  data.forEach((i) => {
    let h1 = document.createElement("h1");
    h1.innerText = i.pagoda;

    let p = document.createElement("p");
    p.innerText = i.about[0].para1.slice(0, 110) + "...";

    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("places-card");

    let imgDiv = document.createElement("div");
    imgDiv.style.backgroundImage = `url(${i.images.background})`;
    imgDiv.classList.add("img-class");

    let contentDiv = document.createElement("div");
    contentDiv.classList.add("content-class");
    contentDiv.appendChild(h1);
    contentDiv.appendChild(p);

    let button = document.createElement("a");
    button.classList.add("btn-class");
    button.href = user_choice + "Detail.html" + "?id=" + i.id;
    button.innerText = "See More";

    contentDiv.appendChild(h1);
    contentDiv.appendChild(p);
    contentDiv.appendChild(button);
    placeInner.appendChild(card);

    card.appendChild(imgDiv);
    card.appendChild(contentDiv);
  });
}

function removeElements() {
  let card = document.querySelectorAll(".card");
  console.log(card);

  card.forEach((i) => {
    placeInner.removeChild(i);
  });
}
createElements();

const navBtn = document.querySelector(".navigation__button");
const navList = document.querySelector(".navigation__list");
navBtn.addEventListener("click", function (e) {
  navBtn.classList.toggle("active__btn");
  navList.classList.toggle("active__navigation__list");
});
