"use strict";
// for the more info button
const moreInfoBtn = document.getElementById("more-info-btn");
const extraInfo = document.getElementById("extra-info");
moreInfoBtn?.addEventListener("click", () => {
    extraInfo?.classList.toggle("hidden");
});
// for the email form to check for @
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
form?.addEventListener("submit", (e) => {
    if (!emailInput.value.includes("@")) {
        e.preventDefault();
        alert("Please enter a valid email address");
    }
});
