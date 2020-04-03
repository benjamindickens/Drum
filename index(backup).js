"to strict";

// == sposob angeli 4eres КОНСТРУКТОР ФУНКЦИИ объекты и ключевое слово this
let currentButton;
let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
  function clicker() {
    currentButton = this.innerHTML;
    switch (currentButton) {   // сделал здесь ошибку не поместив свитч стеитмент в нутрь функции в результате чего он не активировался при на жатии на кноку .
      case "w": {
        sounds[i].play();
        break;
      }
      case "a": {
        sounds[i].play();
        break;
      }
      case "s": {
        sounds[i].play();
        break;
      }
      case "d": {
        sounds[i].play();
        break;
      }
      case "j": {
        sounds[i].play();
        break;
      }
      case "k": {
        sounds[i].play();
        break;
      }
      case "l": {
        sounds[i].play();
        break;
      }
      default : {
        console.log(currentButton)
      }
    }
  }
  drums[i].addEventListener("click", clicker);
}

let currentKey;
// ху поими как этто работает но эвент в данной функции запущеный как параментр в итоге осбирает информацию о том что активирует данный эвент о тригерах в нашем случае это клавиши клавиатуры.
document.addEventListener("keydown", function (event) { console.log(currentKey); currentKey = event
switch (currentKey.key) {
  case "w": { 
    sounds[0].play(); 
  } 
  case "a": {
    sounds[1].play();
    break;
  }
  case "s": {
    sounds[2].play();
    break;
  }
  case "d": {
    sounds[3].play();
    break;
  }
  case "j": {
    sounds[4].play();
    break;
  }
  case "k": {
    sounds[5].play();
    break;
  }
  case "l": {
    sounds[6].play();
    break;
  }
  default: {
   null;
  }
}
});
//========================= MOI SOBSTVENII SPOSOB===

let sound1 = new Audio("./sounds/crash.mp3");
let sound2 = new Audio("./sounds/kick-bass.mp3");
let sound3 = new Audio("./sounds/snare.mp3");
let sound4 = new Audio("./sounds/tom-1.mp3");
let sound5 = new Audio("./sounds/tom-2.mp3");
let sound6 = new Audio("./sounds/tom-3.mp3");
let sound7 = new Audio("./sounds/tom-4.mp3");

let sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7];

// for (let i = 0; i < 7; i++) {
//   function playSound() {
//     return sounds[i].play();
//   }
//   document.querySelectorAll(".drum")[i].addEventListener("click", playSound);

//   function currentButton() {
//     this.classList.toggle("white");
//   }
//   document
//     .querySelectorAll(".drum")
//     [i].addEventListener("click", currentButton);
// }

//===============

// METHOD 1 через лууп (цикл)

// let num = 0;
// for (
//   let index = 0;
//   index < document.querySelectorAll(".drum").length;
//   index++
// ) {
//   document.querySelectorAll(".drum")[index].addEventListener("click", name);
// }
// function name() {
//   return alert(`I am buttonn number ... I have been clicked!`);
// }

// METHOD 2 (через итератор .forEach())

// document.querySelectorAll("button")[index].forEach(element => {
//     element.addEventListener("click", function () {
//         alert(`I am drum num ${num}  have been clicked!`);
//     });
// let but1 = document.querySelector("button");

// let audio = new Audio("./sounds/crash.mp3");

// function play() {
//   return audio.play();
// }
// but1.addEventListener("click", play);
