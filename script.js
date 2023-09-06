`use strict`;

//Choose buttons:
const btnLeft = document.querySelector(`.btn-options-Larrow`);
const btnRight = document.querySelector(`.btn-options-Rarrow`);
//Switch to next order:

//------------------------------TEST-------------
//create a slide var:
let slideIndex = 1;
//perform show slides with first slide:
showSlides(slideIndex);
//next/previous buttons function:
function plusSlide(n) {
  showSlides((slideIndex += n));
}

//Main function:
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName(`image-test`);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = `none`;
  }
  slides[slideIndex - 1].style.display = `flex`;
}

//Menu Fade animation:
const nav = document.querySelector(".header");
//Check if hover if where we need it:
const handleHover = function (e, opacity) {
  if (e.target.classList.contains(`nav-el`)) {
    //then we make it our variable:
    const hoverLink = e.target;
    //colect siblings:
    const siblings = hoverLink.closest(".header").querySelectorAll(".nav-el");
    //also pick logo out:
    const logo = hoverLink.closest(`.header`).querySelector(".header-logo");
    //change the opacity of every nav-el:
    siblings.forEach((el) => {
      //check if it a link:
      if (el !== hoverLink && el !== logo) {
        el.style.opacity = this;
        // logo.style.opacity = this;
      }
    });
  }
};
//attach the listener to nav bar:
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

//Lazy Loading
const lazyImg = document.querySelectorAll(".lazy");
console.log(lazyImg);
lazyImg.forEach((image) => image.classList.add("lazy-img"));
//Lazy load function
const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
//Image observer:
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

lazyImg.forEach((image) => imgObserver.observe(image));

//Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
