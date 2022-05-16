/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  let numeroCreado = document.querySelector(".numero");
  let numeroCarta = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let numeroRandom = Math.floor(Math.random() * 13);
  console.log(numeroCarta[numeroRandom]);
  console.log(numeroRandom);

  let paloUp = document.querySelector(".paloArriba");
  let paloDown = document.querySelector(".paloAbajo");

  let paloCarta = ["♦", "♥", "♠", "♣"];
  let numeroRandomPalo = Math.floor(Math.random() * 4);
  console.log(paloCarta[numeroRandomPalo]);

  if (paloCarta[numeroRandomPalo] === "♦") {
    paloUp.classList.add("diamond");
    paloDown.classList.add("diamond");
    numeroCreado.classList.add("diamond");
  } else if (paloCarta[numeroRandomPalo] === "♥") {
    paloUp.classList.add("heart");
    paloDown.classList.add("heart");
    numeroCreado.classList.add("heart");
  } else if (paloCarta[numeroRandomPalo] === "♠") {
    paloUp.classList.add("spade");
    paloDown.classList.add("spade");
    numeroCreado.classList.add("spade");
  } else if (paloCarta[numeroRandomPalo] === "♣") {
    paloUp.classList.add("club");
    paloDown.classList.add("club");
    numeroCreado.classList.add("club");
  }

  paloUp.innerText = paloCarta[numeroRandomPalo];
  paloDown.innerText = paloCarta[numeroRandomPalo];
  numeroCreado.innerText = numeroCarta[numeroRandom];
};
