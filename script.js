'use strict'

let isNumber = function(n) {
     return !isNaN(parseFloat(n)) && isFinite(n)
};

const numberX = Math.floor(100*Math.random())+1;
console.log('Число бота: ' + numberX);
const gess = +prompt('Угадай число от 1 до 100');
console.log(gess); 

const getGessNumber = function() {
     if (gess > numberX ) {
          return ('Загаданное число меньше');
              
     } else if (gess < numberX) {
          return ('Загаданное число больше');
             
     } else if (!isNumber(gess)) {
          return ('Введи число!') ; 
          
     } else if (gess === null) {
          return ('Игра окончена');
     } else if (gess === numberX) {
          return ('Поздравляю, Вы угадали!!!');
     }
};
console.log(getGessNumber());