/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  const cardElement = document.getElementById("card");
  const generateButton = document.getElementById("generateButton");

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
    cardElement.className = `card ${suit}`;
    cardElement.innerHTML = `
          <div style="font-size: 4rem; position: absolute; top: -5px; left: 5px;">
              ${suitSymbols[suit]}
          </div>
          <div style="font-size: 5rem; position: relative;">
              ${value}
          </div>
          <div style="font-size: 4rem; position: absolute; bottom: -5px; right: 5px; transform: rotate(180deg);">
              ${suitSymbols[suit]}
          </div>
      `;
  }

  generateButton.addEventListener("click", generateCard);

  // Generar una carta al cargar la página
  generateCard();

  // Generar una nueva carta cada 10 segundos
  setInterval(generateCard, 10000);
});
