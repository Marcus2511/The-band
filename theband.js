var closex = document.querySelector(".fa-x");
var overlay = document.querySelector(".overlays");
var button = document.querySelectorAll(".place-buy");
var modal = document.querySelector(".modal");
var closebtn = document.querySelector(".modal-footer button");
let slideIndex = 0;

const showSlides = () => {
  let a;
  let slides = document.getElementsByClassName("skeleton");
  console.log(slides);
  for (a = 0; a < slides.length; a++) {
    slides[a].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
};

const closed = () => {
  overlay.classList.add("hide");
};

const buy = () => {
  overlay.classList.remove("hide");
};

closex.addEventListener("click", closed);
closebtn.addEventListener("click", closed);
for (var i = 0; i < 3; i++) {
  button[i].addEventListener("click", buy);
}
showSlides();
