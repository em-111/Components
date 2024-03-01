const c_img_left1 = document.querySelector(".c-img-left1");
const c_img_right1 = document.querySelector(".c-img-right1");
const img_c1 = document.querySelector(".img-c1");
let index1 = 1;

c_img_left1.addEventListener("click", () => {
    if (index1 === 1) {
        index1 = 6;
    }
    img_c1.setAttribute("src", `./assets/Images/img-${index1 - 1}.avif`);
    index1--;
});
c_img_right1.addEventListener("click", () => {
    if (index1 === 5) {
        index1 = 0;
    }
    index1++;
    img_c1.setAttribute("src", `./assets/Images/img-${index1}.avif`);
});

// --------------------------------------
const c_img_left2 = document.querySelector(".c-img-left2");
const c_img_right2 = document.querySelector(".c-img-right2");
const img_c2 = document.querySelector(".img-c2");
let index2 = 1;

c_img_left2.addEventListener("click", () => {
    if (index2 === 1) {
        c_img_left2.disabled = true;
    } else {
        c_img_right2.disabled = false;
        index2--;
        img_c2.setAttribute("src", `./assets/Images/img-${index2}.avif`);
    }
});
c_img_right2.addEventListener("click", () => {
    if (index2 === 5) {
        c_img_right2.disabled = true;
    } else {
        c_img_left2.disabled = false;
        index2++;
        img_c2.setAttribute("src", `./assets/Images/img-${index2}.avif`);
    }
});

// --------------------------------------
const img_c3 = document.querySelector(".img-c3");
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index3) => {
    dot.addEventListener("click", () => {
        img_c3.setAttribute("src", `./assets/Images/img-${index3 + 1}.avif`);
    });
});

// --------------------------------------
const img_c4 = document.querySelector(".img-c4");
let index4 = 1;
setInterval(() => {
    img_c4.setAttribute("src", `./assets/Images/img-${index4++}.avif`);
    if (index4 > 5) {
        index4 = 1;
    }
}, 10000);

// function opcityImage() {
//     let img = document.getElementById("");
//     img.style.opacity = 0;
//     setTimeout(() => {
//         img.src = newsrc;
//         img.style.opacity = 1;
//     }, 500);
// }
