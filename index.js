"use strict";
alert("на компьютере можно играть с клавиатуры (англ. раскладка)");

let drums = document.querySelectorAll(".drum");
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function (event) {
    console.log(event);
    makeSound(this.innerHTML);
    animation(this.innerHTML);
  }); // я создал лупер что бы добать евент для всех эллементов одинакогового класса не записывая к каждлму одтельно. в фугкции я указывааю другую функцию которая явлеяеться своего рода проигрывателем и применяет метод ПЛАй на нужный мне объект содержащий правильный звук . эта функция в этом случае принимает аргумент от от текущей фазы лупера а именно какой эллемент обрабатываеться и показывает какой штил содержиться в нем в нашем случае это буквы . функция маке саунд являеться логической аналищирует полученый результат и сопоставляет его с условием.
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  animation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w": {
      let sound1 = new Audio("./sounds/tom-3.mp3");
      sound1.play();
      break;
    }
    case "a": {
      let sound2 = new Audio("./sounds/tom-4.mp3");
      sound2.play();
      break;
    }
    case "s": {
      let sound3 = new Audio("./sounds/tom-1.mp3");
      sound3.play();
      break;
    }
    case "d": {
      let sound4 = new Audio("./sounds/tom-2.mp3");
      sound4.play();
      break;
    }
    case "j": {
      let sound5 = new Audio("./sounds/crash.mp3");
      sound5.play();
      break;
    }
    case "k": {
      let sound6 = new Audio("./sounds/snare.mp3");
      sound6.play();
      break;
    }
    case "l": {
      let sound7 = new Audio("./sounds/kick-bass.mp3");
      sound7.play();
      break;
    }
    default: {
      null;
    }
  }
}

function animation(key) {
  let currentButton = document.querySelector("." + key);
  currentButton.classList.add("pressed");
  setTimeout(function () {
    currentButton.classList.remove("pressed");
  }),
    100;
}
