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

const all = document.getElementById("ALL") as HTMLDivElement;
const webDesign = document.getElementById("WEBDESIGN") as HTMLDivElement;
const webDevelopment = document.getElementById(
  "WEBDEVELOPMENT"
) as HTMLDivElement;
const appDesign = document.getElementById("APPDESIGN") as HTMLDivElement;
const appdevelopment = document.getElementById(
  "APPDEVELOPMENT"
) as HTMLDivElement;
const containerImgEl = document.getElementById(
  "containerImg"
) as HTMLDivElement;

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

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

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 3500) {
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
});

const allPhoto = [
  {
    title: "Lorem ipsum dolor",
    description: "WEB_DESIGN",
    image: "src/img/portfolio-1.jpg",
  },
  {
    title: "Nulla ullamcorper pharetra",
    description: "WEB_DEVELOPMENT",
    image: "src/img/portfolio-2.jpg",
  },
  {
    title: "Phasellus eget dictum",
    description: "APP_DESIGN",
    image: "src/img/portfolio-3.jpg",
  },
  {
    title: "Donec mattis vestibulum",
    description: "APP_DEVELOPMENT",
    image: "src/img/portfolio-4.jpg",
  },
  {
    title: "Pellentesque ullamcorper",
    description: "WEB_DESIGN",
    image: "src/img/portfolio-5.jpg",
  },
  {
    title: "Sed pretium sapien",
    description: "WEB_DEVELOPMENT",
    image: "src/img/portfolio-6.jpg",
  },
];

allPhoto.forEach((element) => {
  containerImgEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
  `;
});

webDesign.addEventListener("click", () => {
  let webDesigns = allPhoto.filter(
    (photo) => photo.description == "WEB_DESIGN"
  );
  containerImgEl.innerHTML = "";
  webDesigns.forEach((element) => {
    containerImgEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
  `;
  });
});

all.addEventListener("click", () => {
  containerImgEl.innerHTML = "";
  allPhoto.forEach((element) => {
    containerImgEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
  `;
  });
});

webDevelopment.addEventListener("click", () => {
  let webDevelopments = allPhoto.filter(
    (photo) => photo.description == "WEB_DEVELOPMENT"
  );
  containerImgEl.innerHTML = "";
  webDevelopments.forEach((element) => {
    containerImgEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
  `;
  });
});

appDesign.addEventListener("click", () => {
  let appDesigns = allPhoto.filter(
    (photo) => photo.description == "APP_DESIGN"
  );
  containerImgEl.innerHTML = "";
  appDesigns.forEach((element) => {
    containerImgEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
  `;
  });
});

appdevelopment.addEventListener("click", () => {
  let appdevelopments = allPhoto.filter(
    (photo) => photo.description == "APP_DEVELOPMENT"
  );
  containerImgEl.innerHTML = "";
  appdevelopments.forEach((element) => {
    containerImgEl.innerHTML += `
    <div
          class="group beforeBgPro relative w-[350px] h-[233px] bg-cover bg-[url(${element.image})] flex justify-center"
        >
          <div class=" group-hover:hidden flex flex-col justify-center items-center gap-2">
            <p class="text-white z-20 text-[18px] font-semibold">
              ${element.title}
            </p>
            <p class="block group-hover:hidden text-white z-20 text-[14px] font-light">${element.description}</p>
          </div>
          <div
            class=" hidden  group-hover:flex w-[350px] h-[233px] absolute top-0 left-0 z-30  justify-center items-center"
          >
            <div class="flex gap-3 z-40">
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg 
                  class="group-hover:fill-black"
                  fill="white"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <path
                    d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128
	        s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96
	        c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z"
                  />
                </svg>
              </button>
              <button
                class="bg-[#1dbf73] px-5 py-2 rounded-3xl group hover:bg-white"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    class="group-hover:stroke-black"
                    stroke="#ffffff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2 8-8m0 0v5m0-5h-5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
  `;
  });
});

const goUpEl = document.getElementById("goUp") as HTMLDivElement;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 300) {
    console.log("hi");
    goUpEl.classList.remove("hide");
  } else {
    goUpEl.classList.add("hide");
  }
});

goUpEl.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
