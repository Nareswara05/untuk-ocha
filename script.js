"use strict";

const titleElement = document.querySelector(".title");
const titleElement2 = document.querySelector(".title2");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  titleElement2.innerHTML = "LOVE U OCHAAA";
  
  // Sembunyikan kelas buttons
  buttonsContainer.classList.add("hidden");

  changeImage("yes");

  // Tampilkan tombol baru
  const newButton = document.querySelector(".btn--new");
  newButton.classList.remove("hidden");

  // Ubah teks pada tombol "Yes"
}


function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;
  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "ihhhh",
    "beneran gamauu?",
    "kogituuuu sih",
    "pliss mau yaaa",
    "hiks sedih bgt",
    "yaudade klo gmw",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

function handleNewButtonClick() {
  console.log("Tombol baru ditekan!");
}
