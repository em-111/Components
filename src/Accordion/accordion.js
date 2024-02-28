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