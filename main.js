// ======================    SIDEBAR    ======================
const aside = document.querySelector("aside");
const asideContainer = document.querySelector(".aside-container");
const sidebarBtn = document.getElementById("sidebar-btn");
const comp = document.querySelectorAll(".comp a");

sidebarBtn.addEventListener("click", () => {
    if (aside.style.width === "" || aside.style.width === "30px") {
        aside.style.width = "200px";
        sidebarBtn.style.rotate = "-180deg";
        asideContainer.style.display = "block";
    } else {
        aside.style.width = "30px";
        asideContainer.style.display = "none";
        sidebarBtn.style.rotate = "0deg";
    }
});

comp.forEach((c) => {
    c.addEventListener("click", () => {
        if (window.innerWidth < 1000) {
            aside.style.width = "30px";
            asideContainer.style.display = "none";
            sidebarBtn.style.rotate = "0deg";
        }
    });
});
