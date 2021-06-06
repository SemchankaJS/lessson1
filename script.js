 'use strict'

let isNumber = function(n) {
     return !isNaN(parseFloat(n)) && isFinite(n)
};

let randomNumber = function () {
     let whyNum;
     let getRandomNumber = function () {
          do {
               whyNum = prompt('Угадай число от 1 до 100');
          }
               while (!isNumber(whyNum) || whyNum === '' || whyNum === null);
     };
     getRandomNumber();
     console.log(whyNum);

     const randomNumber = function() {
          console.log('Число бота: ' + (Math.floor(100*Math.random())+1));
     };
    
     const num = randomNumber();
     
     
     const getGessNumber = function() {
          if (whyNum > num ) {
               return ('Загаданное число меньше');
                   
          } else if (whyNum < num) {
               return ('Загаданное число больше');
                  
          } else if (!isNumber(num)) {
               return ('Введи число!') ; 
               
          } else if (whyNum === null) {
               return ('Игра окончена');
          } else if (whyNum === num) {
               return ('Поздравляю, Вы угадали!!!');
          }
     };
     console.log(getGessNumber());
          
     
}
randomNumber();