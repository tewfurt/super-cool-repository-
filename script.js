"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".bieb");

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
  titleElement.innerHTML = "heh......... i knew you'd say yes [on some nonchalant jayson gainza shi] <br> libre ka ba this friday or saturday?";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "NO",
    "sure ka ba??",
    "lilibre kita promise",
    "sige na pls",
    "ok di na kita pipilitin",
    "joke lang hehe PLEASEEEE PLEASEPLEASEPLEASPEALPLE",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  let imageFileName;
  if (image === "yes") {
    imageFileName = "YES.jpg";
    catImg.classList.add("smaller");
  } else {
    imageFileName = `NO-${image}.jpg`;
    catImg.classList.remove("smaller");
  }
  catImg.src = imageFileName;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
