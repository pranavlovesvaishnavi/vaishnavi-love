/* =========================
   GET THE THREE SCREENS
========================= */

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");


/* =========================
   SCREEN 1 → SCREEN 2
========================= */

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", function () {

    screen1.classList.remove("active");

    screen2.classList.add("active");

});


/* =========================
   YES → SCREEN 3
========================= */

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", function () {

    screen2.classList.remove("active");

    screen3.classList.add("active");

});


/* =========================
   NO BUTTON MOVES
========================= */

const noBtn = document.getElementById("noBtn");

function moveNoButton() {

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.max(
        10,
        Math.random() * maxX
    );

    const randomY = Math.max(
        10,
        Math.random() * maxY
    );

    noBtn.style.position = "fixed";

    noBtn.style.left = randomX + "px";

    noBtn.style.top = randomY + "px";
}


/* Computer */
noBtn.addEventListener("mouseover", moveNoButton);


/* Mobile */
noBtn.addEventListener("touchstart", function (event) {

    event.preventDefault();

    moveNoButton();

});
