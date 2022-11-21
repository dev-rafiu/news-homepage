const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navOverlay = document.querySelector(".nav-overlay");

openBtn.addEventListener("click", () => {
  navOverlay.classList.add("show");
  document.body.classList.add("noscroll");
});

closeBtn.addEventListener("click", () => {
  navOverlay.classList.remove("show");
  document.body.classList.remove("noscroll");
});
