var closex = document.querySelector(".fa-x");
var overlay = document.querySelector(".overlays");
var button = document.querySelectorAll(".place-buy");
var modal = document.querySelector(".modal");
var closebtn = document.querySelector(".modal-footer button");

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
