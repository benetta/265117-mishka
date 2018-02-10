
var cart  = document.querySelectorAll(".modal-open");
var popup = document.querySelector("#modal-order");
var body  = document.querySelector("body");

cart.forEach(function(item) {
  item.addEventListener("click", function(evt) {
  evt.preventDefault();

  body.classList.add("overlay");
  popup.classList.remove("modal--hidden");
  });
});


// body.addEventListener("click", function(evt) {
//   if(popup.classList.contains("modal--hidden") === false) {
//     if(evt.target !== popup && !popup.contains(event.target)) {
//       body.classList.remove("overlay");
//       popup.classList.add("modal--hidden");
//     }
//   }
// });
