'use strict';


function setPicture() {
  const img1= document.getElementById("dice-select");
  var value = img1.options[img1.selectedIndex].value;
  alert(selectedValue);
}


////// ROLL 20
document.getElementById('buttonRolld20').addEventListener('click', roll20);
function roll20() {
  
  const randomDice = getRandomNumbers20();
  document.getElementById("putHere").innerHTML = randomDice;

  let imageTag = document.getElementById('dicePic');


  imageTag.src = `d20/d20-${randomDice}.png`
  return randomDice
  
}

////// ROLL 12
document.getElementById('buttonRolld12').addEventListener('click', roll12);
function roll12() {
  
  const randomDice = getRandomNumbers12();
  document.getElementById("putHere").innerHTML = randomDice;

  let imageTag = document.getElementById('dicePic');


  imageTag.src = `d12/d12-${randomDice}.png`
  return randomDice
  
}
////// ROLL 10
document.getElementById('buttonRolld10').addEventListener('click', roll10);
function roll10() {
  
  const randomDice = getRandomNumbers10();
  document.getElementById("putHere").innerHTML = randomDice;

  let imageTag = document.getElementById('dicePic');


  imageTag.src = `d10/d10-${randomDice}.png`
  return randomDice
  
}
////// ROLL 8
document.getElementById('buttonRolld8').addEventListener('click', roll8);
function roll8() {
  
  const randomDice = getRandomNumbers8();
  document.getElementById("putHere").innerHTML = randomDice;

  let imageTag = document.getElementById('dicePic');


  imageTag.src = `d8/d8-${randomDice}.png`
  return randomDice
  
}
////// ROLL 6
document.getElementById('buttonRolld6').addEventListener('click', roll6);
function roll6() {
  
  const randomDice = getRandomNumbers6();
  document.getElementById("putHere").innerHTML = randomDice;

  let imageTag = document.getElementById('dicePic');


  imageTag.src = `d6/d6-${randomDice}.png`
  return randomDice
  
}
////// ROLL 8
document.getElementById('buttonRolld4').addEventListener('click', roll4);
function roll4() {
  
  const randomDice = getRandomNumbers4();
  document.getElementById("putHere").innerHTML = randomDice;

  let imageTag = document.getElementById('dicePic');


  imageTag.src = `d4/d4-${randomDice}.png`
  return randomDice
  
}


// Logs to console, but doesn't start from 20?

// console.log(gameStart(getRandomNumbers20));

function getRandomNumbers20() {
  return Math.ceil(Math.random()*20)
}
function getRandomNumbers12() {
  return Math.ceil(Math.random()*12)
}
function getRandomNumbers10() {
  return Math.ceil(Math.random()*10)
}
function getRandomNumbers8() {
  return Math.ceil(Math.random()*8)
}
function getRandomNumbers6() {
  return Math.ceil(Math.random()*6)
}
function getRandomNumbers4() {
  return Math.ceil(Math.random()*4)
}

/* Attempt at making a JSON object


const result = '{"final": randomDice}';
const obj = JSON.parse(text, function (final, randomdice);
document.getElementById("rolledResult").innerHTML = result;


*/ 
/*  Session Storage 

sessionStorage.setItem('randomDice', )
*/ 


// const diceEl = document.querySelector(".dice");


// const dice4 = {
//   sides: 4,
//   roll: function () {
//     let randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// // }
// const dice6 = {
//   sides: 6,
//   roll: function () {
//     let randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }
// const dice8 = {
//   sides: 8,
//   roll: function () {
//     let randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }
// const dice10 = {
//   sides: 10,
//   roll: function () {
//     let randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }
// const dice12 = {
//   sides: 12,
//   roll: function () {
//     let randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }
// const dice20 = {
//   sides: 20,
//   roll: function () {
//     let randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// }







// // Prints dice roll to this page

// function printNumber(number) {
//   let placeholder = document.getElementById('placeholder');
//   placeholder.innerHTML = number; 
// }

// let button = document.getElementById('button');

// buttonRoll.addEventListener('click', function gameStart() {
//   let result = dice.roll();
//   printNumber(result)
//   diceEl.src = `dice-${dice}.png`;
// })

// console.log('hello')
