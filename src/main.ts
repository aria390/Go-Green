import "./style.css";

const sliderScreenEl =
  document.querySelectorAll<HTMLDivElement>(".sliderScreen");
const leftBtnEl = document.getElementById("leftBtn") as HTMLImageElement;
const rightBtnEl = document.getElementById("rightBtn") as HTMLImageElement;

rightBtnEl?.addEventListener("click", () => {
  const currentEl = document.querySelector(".current");
  currentEl?.classList.remove("current");
  if (currentEl?.nextElementSibling) {
    currentEl.nextElementSibling.classList.add("current");
  } else {
    sliderScreenEl[0].classList.add("current");
  }
  console.log(currentEl);
});

leftBtnEl?.addEventListener("click", () => {
  const currentEl = document.querySelector(".current");
  currentEl?.classList.remove("current");
  if (currentEl?.previousElementSibling) {
    currentEl.previousElementSibling.classList.add("current");
  } else {
    sliderScreenEl[sliderScreenEl.length - 1].classList.add("current");
  }
});

setInterval(() => {
  const currentEl = document.querySelector(".current");
  currentEl?.classList.remove("current");
  if (currentEl?.nextElementSibling) {
    currentEl.nextElementSibling.classList.add("current");
  } else {
    sliderScreenEl[0].classList.add("current");
  }
},5000);
