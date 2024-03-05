const drawerBtn = document.querySelector(".drawer-btn");
const drawerBox = document.querySelector(".drawer-box");
const drawerClose = document.querySelector(".drawer-close");

drawerBtn.addEventListener("click", () => {
    drawerBox.style.display = "block";
    document.body.style.overflow = "hidden";
});

window.addEventListener("click", (e) => {
    if (e.target === drawerBox) {
        drawerBox.style.display = "none";
        document.body.style.overflow = "visible";
    }
});

drawerClose.addEventListener("click", () => {
    drawerBox.style.display = "none";
    document.body.style.overflow = "visible";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        drawerBox.style.display = "none";
        document.body.style.overflow = "visible";
    }
});
