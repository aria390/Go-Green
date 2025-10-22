import "./style.css";

const sliderScreenEl =
  document.querySelectorAll<HTMLDivElement>(".sliderScreen");
const leftBtnEl = document.getElementById("leftBtn") as HTMLImageElement;
const rightBtnEl = document.getElementById("rightBtn") as HTMLImageElement;
const headerEl = document.getElementById("header") as HTMLElement;
const animeHtmlEl = document.getElementById("animeHtml") as HTMLDivElement;
const animeCssEl = document.getElementById("animeCss") as HTMLDivElement;
const animeJqueryEl = document.getElementById("animeJquery") as HTMLDivElement;
const animePhpEl = document.getElementById("animePhp") as HTMLDivElement;
const counter1EL = document.getElementById("counter1") as HTMLSpanElement;
const counter2EL = document.getElementById("counter2") as HTMLSpanElement;
const counter3EL = document.getElementById("counter3") as HTMLSpanElement;
const counter4EL = document.getElementById("counter4") as HTMLSpanElement;

let count1 = 50;
let count2 = 150;
let count3 = 250;
let count4 = 350;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 300) {
    headerEl.classList.add("headerColor");
  } else {
    headerEl.classList.remove("headerColor");
  }
  console.log(window.pageYOffset);
});

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
}, 5000);

if (window.pageYOffset >= 3461) {
  animeHtmlEl.classList.add("animeHtml");
  animeCssEl.classList.add("animeCss");
  animeJqueryEl.classList.add("animeJquery");
  animePhpEl.classList.add("animePhp");

  const numberStart1 = setInterval(() => {
    counter1EL.textContent = count1.toString();
    if (count1 >= 100) {
      clearInterval(numberStart1);
    } else {
      count1++;
    }
  });
  const numberStart2 = setInterval(() => {
    counter2EL.textContent = count2.toString();
    if (count2 >= 200) {
      clearInterval(numberStart2);
    } else {
      count2++;
    }
  });
  const numberStart3 = setInterval(() => {
    counter3EL.textContent = count3.toString();
    if (count3 >= 300) {
      clearInterval(numberStart3);
    } else {
      count3++;
    }
  });
  const numberStart4 = setInterval(() => {
    counter4EL.textContent = count4.toString();
    if (count4 >= 400) {
      clearInterval(numberStart4);
    } else {
      count4++;
    }
  });
}
