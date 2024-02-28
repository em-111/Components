import { data } from "./data.js";

// ======================    SIDEBAR    ======================
const aside = document.querySelector("aside");
const asideContainer = document.querySelector(".aside-container");
const sidebarBtn = document.getElementById("sidebar-btn");

sidebarBtn.addEventListener("click", () => {
    if (aside.style.width === "" || aside.style.width === "250px") {
        aside.style.width = "30px";
        asideContainer.style.display = "none";
        sidebarBtn.style.rotate = "180deg";
    } else {
        aside.style.width = "250px";
        sidebarBtn.style.rotate = "0deg";
        asideContainer.style.display = "block";
    }
});

// =============================================================
// ======================    ACCORDION    ======================
const parents1 = document.querySelectorAll(".parents1");
const children1 = document.querySelectorAll(".children1");
const rotate = document.querySelectorAll(".rotate");

parents1.forEach((parent) => {
    parent.addEventListener("click", (e) => {
        const lastChild = parent.lastElementChild;
        const nextSibling = e.target.nextElementSibling;

        rotate.forEach((r) => {
            r.style.rotate = "-90deg";
        });

        children1.forEach((child) => {
            child.classList.remove("active");
        });

        lastChild.style.rotate = "90deg";
        nextSibling.classList.add("active");
    });
});

// --------------------------------------
const parents2 = document.querySelectorAll(".parents2");

parents2.forEach((parent) => {
    parent.addEventListener("click", (e) => {
        const nextSibling = e.target.nextElementSibling;

        if (!nextSibling.classList.contains("active")) {
            nextSibling.classList.add("active");
        } else {
            nextSibling.classList.remove("active");
        }
    });
});

// ============================================================
// ======================    CAROUSEL    ======================
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

// =========================================================
// ======================    MODAL    ======================
const popModal = document.querySelector(".pop-modal");
const modalContent = document.querySelector(".modal-content");
const mod = document.querySelectorAll(".mod");

mod.forEach((m, m_index) => {
    m.addEventListener("click", () => {
        let modIMG = document.createElement("img");
        let modH1 = document.createElement("h1");
        let modUL = document.createElement("ul");

        modIMG.setAttribute("src", `./assets/Images/${data[m_index].image}`);
        modIMG.style.width = "100%";
        modIMG.style.aspectRatio = "2 / 1";
        modH1.textContent = data[m_index].title;

        data[m_index].aboutTitle.forEach((d) => {
            let modLi = document.createElement("li");

            modLi.textContent = d;
            modUL.appendChild(modLi);
        });

        modalContent.appendChild(modIMG);
        modalContent.appendChild(modH1);
        modalContent.appendChild(modUL);

        popModal.classList.add("active2");

        document.body.style.overflow = "hidden";
    });
});

document.addEventListener("click", (e) => {
    if (e.target === popModal) {
        popModal.classList.remove("active2");
        modalContent.textContent = "";
        document.body.style.overflow = "visible";
    }
});
