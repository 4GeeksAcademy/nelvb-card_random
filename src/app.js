import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  const cardElement = document.getElementById("card");
  const generateButton = document.getElementById("generateButton");
  const cardWidthInput = document.getElementById("cardWidth");
  const cardHeightInput = document.getElementById("cardHeight");

  const suits = ["heart", "spade", "club", "diamond"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suitSymbols = {
    heart: "♥",
    spade: "♠",
    club: "♣",
    diamond: "♦"
  };

  function getRandomCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    return { suit, value };
  }

  function generateCard() {
    const { suit, value } = getRandomCard();

    let width = cardWidthInput.value ? parseInt(cardWidthInput.value) : 210;
    let height = cardHeightInput.value ? parseInt(cardHeightInput.value) : 300;

    // límites
    if (width < 90) width = 90;
    if (width > 300) width = 300;
    if (height < 200) height = 200;
    if (height > 500) height = 500;

    cardElement.style.width = `${width}px`;
    cardElement.style.height = `${height}px`;
    cardElement.className = `card ${suit}`;
    cardElement.innerHTML = `
      <div class="top-left">
        ${suitSymbols[suit]}
      </div>
      <div>
        ${value}
      </div>
      <div class="bottom-right">
        ${suitSymbols[suit]}
      </div>
    `;
  }

  generateButton.addEventListener("click", generateCard);

  cardWidthInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      generateCard();
    }
  });

  cardHeightInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      generateCard();
    }
  });

  generateCard();

  setInterval(generateCard, 10000);
});
