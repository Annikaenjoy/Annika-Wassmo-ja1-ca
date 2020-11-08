const form = document.querySelector(".form-container")

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function checkIfValidForm() {
    if (checkLength(name.value, 1) && checkLength(subject.value, 9) && validateEmail(email.value) && checkLength(address.value, 24)) {
        message.innerHTML = `Your form has successfully been submitted!`
    } else {
        message.innerHTML = `ERROR! Your form has not been filled in properly`;
    }
}

button.addEventListener("click", checkIfValidForm);

function validateForm(event) {
    event.preventDefault();

    if (checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }
    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
    if (checkLength(address.value, 24) === true) {
        addressError.style.display = "none";
    }
    else {
        addressError.style.display = "block";
    }
    console.dir("Check");

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEX = /\S+@\S+\.\S+/;
    const patternMatches = regEX.test(email);
    return patternMatches;
}

