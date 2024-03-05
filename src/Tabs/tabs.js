const tabs = document.querySelectorAll(".tabs-list p");
const tabContent = document.querySelectorAll(".ct-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        display(index);
        tabs[index].classList.add("active-tab");
        tabContent[index].classList.remove("display-none");
    });
});

const display = (index) => {
    for (let i = 0; i < 3; i++) {
        if (i !== index) {
            tabContent[i].classList.add("display-none");
            tabs[i].classList.add("inactive-tab");
            tabs[i].classList.remove("active-tab");
        }
    }
};
