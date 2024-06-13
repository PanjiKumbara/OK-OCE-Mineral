const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".popup-dismiss");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
  }, 2000); //popup screen 2 detik
});

closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("active");
});
