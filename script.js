//main markt
const mainMarkt = document.querySelector(".main_markt");

function sucheMainMarkt() {
  console.log("radi");
}

mainMarkt.addEventListener("click", sucheMainMarkt);

// side navbar
const alleKategorien = document.querySelector(".alle_kategorien_btn");
const closeBtn = document.querySelector(".closebtn");
const mySidenav = document.getElementById("mySidenav");

function openNav(event) {
  event.preventDefault();
  mySidenav.style.width = "270px";
}

function closeNav(event) {
  event.preventDefault();
  mySidenav.style.width = "0";
}

alleKategorien.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

//slider

const img = document.querySelector(".img_section");
const dots = document.querySelector(".dots");
const btnLeft = document.querySelector(".prevBtn");
const btnRight = document.querySelector(".nextBtn");
const slides = document.querySelectorAll(".slide");

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDots(curSlide);
};
goToSlide(0);
//next slide
btnRight.addEventListener("click", nextSlide);

//prevSlide
const prevSlide = function () {
  if (curSlide == 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDots(curSlide);
};

//prevBtn
btnLeft.addEventListener("click", prevSlide);

//on pres left or right to kaydown chamge the photo
document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

//creating dots on slider
const dotContainer = document.querySelector(".dots");

const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDots(slide);
  }
});

//giving the active style on dots

const activateDots = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("active");
};
activateDots(0);

// watch in discount section

const watch = document.querySelector(".watch");
//
(function IIFE() {
  setInterval(() => {
    let html = "";

    let watchOnDisplay = new Date();
    let hour = watchOnDisplay.getHours();
    let minut = watchOnDisplay.getMinutes();
    let secound = watchOnDisplay.getSeconds();

    html = `${hour < 10 ? "0" + hour : hour}:${
      minut < 10 ? "0" + minut : minut
    }:${secound < 10 ? "0" + secound : secound}`;
    watch.textContent = html;
  }, 1000);
})();

// overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
