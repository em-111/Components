const tabs = document.querySelectorAll(".tabs-list p");
const tabContent = document.querySelectorAll(".ct-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        display(index);
        tabContent[index].classList.remove("display-none");
    });
});

const display = (index) => {
    for (let i = 0; i < 3; i++) {
        if (i !== index) {
            tabContent[i].classList.add("display-none");
        }
    }
};
