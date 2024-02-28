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
