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
    dynamicBullets: true,
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

// const buttonSeeMore = document.querySelectorAll(".button");

const modal = document.querySelector(".modal");
const body = document.querySelector("body");

const middle_heading = document.querySelector(".middle-heading")



const about_text = document.querySelector(".about-text");
const detail_text = document.querySelectorAll(".detail-text")
const detail__img  = document.querySelectorAll(".detail__img")

function getParameter(pName) {
  let parameter = new URLSearchParams(window.location.search);
  return parameter.get(pName);
}
const id = parseInt(getParameter("id")) || 1;

let data = gift_data[id-1]
middle_heading.innerHTML = data.pagoda;
about_text.innerHTML = '&emsp;&emsp;&emsp;' + data.intro;
  detail_text.forEach((gift,j) => {
    gift.innerHTML = data.about[j]['para' + (j+1)]
    detail__img[j].src = data.about[j].img
  })
// })

const navBtn = document.querySelector(".navigation__button");
const navList = document.querySelector(".navigation__list");
navBtn.addEventListener("click", function (e) {
  navBtn.classList.toggle("active__btn");
  navList.classList.toggle("active__navigation__list");
});
