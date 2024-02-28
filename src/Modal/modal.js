import { data } from "../data.js";

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
