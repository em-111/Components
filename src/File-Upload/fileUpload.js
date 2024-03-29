const form = document.getElementById("form");
const u = document.querySelector(".u");
const input = document.getElementById("file");
const cancelBtn = document.querySelector(".cancel-btn");
const submitBtn = document.querySelector(".submit-btn");
const ul = document.querySelector("ul");
const img = document.createElement("img");
img.setAttribute("src", "../../assets/Icons/file-text.svg");

cancelBtn.disabled = true;
submitBtn.disabled = true;

form.addEventListener("click", () => {
    input.click();
});

form.addEventListener("dragover", (e) => {
    e.preventDefault();
    form.style.backgroundColor = "#f0f7fe";
    form.style.scale = "1.1";
});

form.addEventListener("dragleave", (e) => {
    e.preventDefault();
    form.style.backgroundColor = "#fff";
    form.style.scale = "1";
});

form.addEventListener("drop", (e) => {
    e.preventDefault();
    const dropedFile = e.dataTransfer.files[0];
    const fileName = dropedFile.name;
    uploadFile(fileName)

    form.style.backgroundColor = "#fff";
    form.style.scale = "1";
});

input.onchange = ({ target }) => {
    const file = target.files[0];

    if (file) {
        uploadFile(file.name);
    }
};

const uploadFile = (file) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span1 = document.createElement("span");

    img.setAttribute("src", "../../assets/Icons/file-text.svg");
    span1.textContent = file;

    li.appendChild(img);
    li.appendChild(span1);

    ul.appendChild(li);

    cancelBtn.disabled = false;
    submitBtn.disabled = false;
};

cancelBtn.addEventListener("click", () => {
    ul.textContent = "";

    const p = document.createElement("p");
    p.textContent = "You removed the uploaded files.";
    p.style.position = "absolute";
    p.style.bottom = "10px";
    p.style.color = "red";

    setTimeout(() => {
        p.style.display = "none";
    }, 1000);

    u.appendChild(p);

    cancelBtn.disabled = true;
    submitBtn.disabled = true;
});

submitBtn.addEventListener("click", () => {
    ul.textContent = "";

    const p = document.createElement("p");
    p.textContent = "You submited your files";
    p.style.position = "absolute";
    p.style.bottom = "10px";
    p.style.color = "green";

    setTimeout(() => {
        p.style.display = "none";
    }, 1500);

    u.appendChild(p);

    cancelBtn.disabled = true;
    submitBtn.disabled = true;
});
