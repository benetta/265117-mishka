// модальное окно

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

// браузер проверяет это условие, когда читает скрипт - 1 раз, после загрузки всего тела. поскольку ответом на if будет false, этот кусок кода никогда не запускается.

// нужно сделать так, чтобы это условие запускалось каждый раз при открытии окна. Но, если вешать обработчик события на документ, и потом проверять условие, то он перебивает обработчик корзины.

footer.addEventListener("click", function(evt) {
  var isInside = (evt.target === popup);

  if (!isInside && !popup.classList.contains("modal--hidden")) {
    popup.classList.add("modal--hidden");
    footer.classList.remove("overlay");
  }
});

// if (!popup.classList.contains("modal--hidden")) {
// }

// меню на JS

var menu = document.querySelectorAll(".main-nav__list");
var toggle = document.querySelector("#main-nav__button");

menu.forEach(function(item) {
  item.classList.add("main-nav__list--hidden");
})
toggle.classList.remove("main-nav__toggle--no-js");

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();

  toggle.classList.toggle("main-nav__toggle--open");
  menu.forEach(function(item) {
    item.classList.toggle("main-nav__list--hidden");
  })
})
