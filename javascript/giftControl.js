import gift_data from "../data/gifts.js";

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var myswiper = new Swiper(".my_Swiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const buttonSeeMore = document.querySelectorAll(".button");

const modal = document.querySelector(".modal");
const body = document.querySelector("body");

const middle_heading = document.querySelector(".middle-heading")

buttonSeeMore.forEach((i) => {
  i.addEventListener("click", function () {
    modal.classList.add("drop_modal");
    setTimeout(() => {
      window.scrollTo(0, 0);
      body.style.overflow = "hidden";
    }, 500);
  });
});

modal.addEventListener("click", function () {
  modal.classList.remove("drop_modal");
  body.style.overflow = "scroll";
});


const about_text = document.querySelector(".about-text");
const detail_text = document.querySelectorAll(".detail-text")
const detail__img  = document.querySelectorAll(".detail__img")

function getParameter(pName) {
  let parameter = new URLSearchParams(window.location.search);
  return parameter.get(pName);
}
const id = parseInt(getParameter("id")) || 1;

let data = gift_data[id-1]
// data.forEach((i,j) => {
//   middle_heading.innerHTML = i.pagoda;
//   about_text.innerHTML = i.intro;
//   detail_text.forEach((gift,j) => {
//     gift.innerHTML = i.about[j]['para' + (j+1)]
//     detail__img[j].src = i.about[j].img
//   })

middle_heading.innerHTML = data.pagoda;
about_text.innerHTML = data.intro;
  detail_text.forEach((gift,j) => {
    gift.innerHTML = data.about[j]['para' + (j+1)]
    detail__img[j].src = data.about[j].img
  })
  
// })
