import hotel_data from "../data/hotel.js";
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  // centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

function getParameter(pName) {
  let parameter = new URLSearchParams(window.location.search);
  return parameter.get(pName);
}
const id = parseInt(getParameter("id")) || 1;

let data = hotel_data[id - 1];

const service_heading = document.querySelector(".service_heading");
service_heading.innerHTML = `Welcome ${data.pagoda}`;
const service_paragraph = document.querySelector(".service_paragraph");
service_paragraph.innerHTML = data.begin;

const intro1 = document.querySelector(".intro1");
intro1.innerHTML = data.intro[0].content;

const intro2 = document.querySelector(".intro2");
intro2.innerHTML = data.intro[1].content;

const intro1Img = document.querySelector(".intro1-img");

intro1Img.src = data.img + "/intro/intro1.jpg";

const intro2Img = document.querySelector(".intro2-img");

intro2Img.src = data.img + "/intro/intro2.jpg";

const room_slide = document.querySelector(".roomslide").children;

for (let i = 0; i < 8; i++) {
  room_slide[i].children[0].src = data.img + `/Room/room${i + 1}.jpg`;
}

const food_slide = document.querySelector(".foodslide").children;

for (let i = 0; i < 8; i++) {
  food_slide[i].children[0].src = data.img + `/Food/food${i + 1}.jpg`;
}

const hotel_intro = document.querySelector(".heading_intro");
hotel_intro.innerHTML = data.pagoda;
const images = document.querySelectorAll(".hotels");
const fiveHotels = document.querySelectorAll(".photo_button");
fiveHotels.forEach((i, j) => {
  i.addEventListener("click", () => {
    window.location.assign("/hotelsDetail.html?id=" + (j + 1));
  });
});

images[id - 1].classList.add("active");
const photo_title = document.querySelector(".photo_title");
photo_title.innerHTML = data.pagoda;

// const loading = document.querySelector(".loading");
// loading.classList.add("active_loading");
// const body = document.querySelector("body");
// body.scrollTo(0, 100)

// body.style.overflow = "hidden";

// setTimeout(() => {
//   loading.classList.remove("active_loading");
//   body.style.overflow = "auto";
// }, 1000);

window.scrollTo(0, 800);

const map = document.querySelector(".iframeMap");
map.src = data.location;

const navBtn = document.querySelector(".navigation__button");
const navList = document.querySelector(".navigation__list");
navBtn.addEventListener("click", function (e) {
  navBtn.classList.toggle("active__btn");
  navList.classList.toggle("active__navigation__list");
});
