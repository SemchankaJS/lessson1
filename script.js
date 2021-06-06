 'use strict'

// let isNumber = function() {
//      return !isNaN(parseFloat()) && isFinite();
// };

let randomNumber = function () {
     let whyNum,
         number = 45, 
         v;
       
     let getRandomNumber = function () {
          
               whyNum = +prompt('Угадай число от 1 до 100');
         
     
               const getGessNumber = function() {
                    if (whyNum == number) {
                         return v = true; 
                    } else { 
                         if (whyNum < number) {
                              alert ('Загаданное число больше');
                         } else if (whyNum > number) {
                              alert('Загаданное число меньше') ; 
                         } else if (!number) {
                              alert ('Введи число!');
                         } 
                    }
               }          
          getGessNumber();             
          if (v === true) {
               alert ('Поздравляю, Вы угадали!!!');
          } else {
               getRandomNumber();
          }         
     } 
     getRandomNumber();        
}      
randomNumber();