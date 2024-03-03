const styleElement = document.createElement("style");

/* =============== REGISTER FORM =============== */
const register = document.querySelector(".register-box");
const registerUsername = document.getElementById("register-username");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const registerBtn = document.querySelector(".register-btn");
registerBtn.addEventListener("click", () => {
    if (
        registerEmail.value &&
        registerUsername.value &&
        registerPassword.value
    ) {
        register.style.display = "none";
        choosePlan.style.display = "flex";

        const styles = `
        .step li:nth-child(2)::before {
            color: #fff;
            background-color: #8a2be2;
        }
        .step li:first-child::after {
            background-color: #8a2be2;
        }`;
        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);
    }
});
registerEmail.addEventListener("focusout", () => {
    if (!registerEmail.value) {
        registerEmail.style.border = "2px solid #ff5757";
    } else {
        registerEmail.style.border = "2px solid #000";
    }
});
registerUsername.addEventListener("focusout", () => {
    if (!registerUsername.value) {
        registerUsername.style.border = "2px solid #ff5757";
    } else {
        registerUsername.style.border = "2px solid #000";
    }
});
registerPassword.addEventListener("focusout", () => {
    if (!registerPassword.value) {
        registerPassword.style.border = "2px solid #ff5757";
    } else {
        registerPassword.style.border = "2px solid #000";
    }
});

/* =============== CHOOSE PLAN FORM =============== */
const choosePlan = document.querySelector(".choose-plan");
const choosePlanBtn = document.querySelectorAll(".order-plan-btn");
let parent;
let child;
choosePlanBtn.forEach((planBtn) => {
    planBtn.addEventListener("click", (e) => {
        choosePlan.style.display = "none";
        purchaseBox.style.display = "flex";

        const styles = `
        .step li:nth-child(2)::before {
            color: #fff;
            background-color: #8a2be2;
        }
        .step li:first-child::after {
            background-color: #8a2be2;
        }
        .step li:nth-child(3)::before {
            color: #fff;
            background-color: #8a2be2;
        }
        .step li:nth-child(2)::after {
            background-color: #8a2be2;
        }`;
        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);

        //
        parent = e.target.parentElement;
        const classname = parent.classList.item(1);
        child = document.querySelector(`.${classname} .price`);
        purchaseTotal.forEach((ptotal) => {
            ptotal.textContent = child.textContent;
        });
    });
});

/* =============== PURCHASE =============== */
const purchaseBox = document.querySelector(".purchase-box");

const purchaseEmail = document.querySelector("#purchase-email");
const cardNumber = document.querySelector("#cardnumber");
const expiration = document.querySelector("#expiration");
const cvc = document.querySelector("#cvc");
const cardHolder = document.querySelector("#card-holder");
const address = document.querySelector("#address");

const purchaseTotal = document.querySelectorAll(".purchase-total");
const purchaseBtn = document.querySelector(".purchase-btn");

purchaseBtn.addEventListener("click", () => {
    if (
        purchaseEmail.value &&
        cardNumber.value &&
        expiration.value &&
        cvc.value &&
        cardHolder.value &&
        address.value
    ) {
        setTimeout(() => {
            purchaseBox.style.display = "none";
            successfulPurchase.style.display = "flex";
            finish();
        }, 1000);
    }
});

purchaseEmail.addEventListener("focusout", () => {
    if (!purchaseEmail.value) {
        purchaseEmail.style.border = "2px solid #ff5757";
    } else {
        purchaseEmail.style.border = "2px solid #000";
    }
});
cardNumber.addEventListener("focusout", () => {
    if (!cardNumber.value) {
        cardNumber.style.border = "2px solid #ff5757";
    } else {
        cardNumber.style.border = "2px solid #000";
    }
});
expiration.addEventListener("focusout", () => {
    if (!expiration.value) {
        expiration.style.border = "2px solid #ff5757";
    } else {
        expiration.style.border = "2px solid #000";
    }
});
cvc.addEventListener("focusout", () => {
    if (!cvc.value) {
        cvc.style.border = "2px solid #ff5757";
    } else {
        cvc.style.border = "2px solid #000";
    }
});
cardHolder.addEventListener("focusout", () => {
    if (!cardHolder.value) {
        cardHolder.style.border = "2px solid #ff5757";
    } else {
        cardHolder.style.border = "2px solid #000";
    }
});
address.addEventListener("focusout", () => {
    if (!address.value) {
        address.style.border = "2px solid #ff5757";
    } else {
        address.style.border = "2px solid #000";
    }
});

/* =============== SUCCESSFUL PURCHASE =============== */
const successfulPurchase = document.querySelector(".success-purchase");

const finish = () => {
    setTimeout(() => {
        successfulPurchase.style.display = "none";
        register.style.display = "flex";
    }, 2500);

    registerUsername.value = "";
    registerEmail.value = "";
    registerPassword.value = "";

    parent = "";
    child = "";

    purchaseEmail.value = "";
    cardNumber.value = "";
    expiration.value = "";
    cvc.value = "";
    cardHolder.value = "";
    address.value = "";
    purchaseTotal.value = "";
};
