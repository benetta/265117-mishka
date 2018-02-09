
var cart  = document.querySelector("#modal-open");
var popup = document.querySelector("#modal-order");
var body  = document.querySelector("body");

cart.addEventListener("click", function(evt) {
  evt.preventDefault();

  body.classList.add("overlay");
  popup.classList.remove("modal--hidden");
});

// body.addEventListener("click", function(evt) {
//   if(evt.target !== popup && !popup.contains(event.target)) {
//     body.classList.remove("overlay");
//     popup.classList.add("modal--hidden");
//   }
// });
