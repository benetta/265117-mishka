var cart  = document.querySelectorAll(".modal-open");
var popup = document.querySelector("#modal-order");
var footer  = document.querySelector("footer");

cart.forEach(function(item) {
  item.addEventListener("click", function(evt) {
  evt.preventDefault();

  popup.classList.remove("modal--hidden");
  footer.classList.add("overlay");
  });
});

footer.addEventListener("click", function(evt) {
  var isInside = (evt.target === popup);

  if (!isInside && !popup.classList.contains("modal--hidden")) {
    popup.classList.add("modal--hidden");
    footer.classList.remove("overlay");
  }
});

var menu = document.querySelectorAll(".main-nav__list");
var toggle = document.querySelector("#main-nav__button");

menu.forEach(function(item) {
  item.classList.add("main-nav__list--hidden");
})
toggle.classList.remove("main-nav__toggle--no-js");

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();

  toggle.classList.toggle("main-nav__toggle--close");
  menu.forEach(function(item) {
    item.classList.toggle("main-nav__list--hidden");
  })
})
