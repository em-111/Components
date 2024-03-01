const swiper1 = document.querySelector(".swiper-1");
const leftBtn = document.querySelector(".sw-btn-left");
const rightBtn = document.querySelector(".sw-btn-right");

rightBtn.addEventListener("click", () => {
    swiper1.scrollBy(200, 0);
});

leftBtn.addEventListener("click", () => {
    swiper1.scrollBy(-200, 0);
});
