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

let data = hotel_data[id-1];

const service_heading = document.querySelector(".service_heading");
service_heading.innerHTML = `Welcome ${data.pagoda}`;
const service_paragraph = document.querySelector(".service_paragraph");
service_paragraph.innerHTML = data.begin;

const intro1 = document.querySelector(".intro1");
intro1.innerHTML = data.intro[0].content;


const intro2 = document.querySelector(".intro2");
intro2.innerHTML = data.intro[1].content;

const intro1Img = document.querySelector(".intro1-img")

intro1Img.src = data.img + "/intro/intro1.jpg"

const intro2Img = document.querySelector(".intro2-img")

intro2Img.src = data.img + "/intro/intro2.jpg"

const room_slide = document.querySelector(".roomslide").children;

for(let i=0; i<8; i++) {
  room_slide[i].children[0].src = data.img + `/Room/room${i+1}.jpg`;
 
}



const food_slide = document.querySelector(".foodslide").children;

for(let i=0; i<8; i++) {
    food_slide[i].children[0].src = data.img + `/Food/food${i+1}.jpg`;
 
}