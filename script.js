'use strict'

let isNumber = function(n) {
     return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    income = 'услуги', 
    addExpenses = 'квартира, коммунальные, интернет',
    mission = 10000,
    period = 6,
    amount,
    expenses1,
    expenses2;

//     1) Переписать функцию start циклом do while
const start = function() {
     let n = 0;
     do {
          money = prompt('Ваш месячный доход?');
          n++;
     } 
     while(!isNumber(money)); 
}
start();


addExpenses =  prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(', '));

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);


// 2) Добавить проверку что введённые данные являются числом,
//  которые мы получаем на вопрос 'Во сколько это обойдется?’
//   в функции  getExpensesMonth

function getExpensesMonth (){
     let sum = 0;
     for(let i = 0; i < 1; i++){
             if (i==0) expenses1 = prompt('Какие обязательные расходы вы планируете в месяце?');
             else expenses2 = prompt('Какие еще расходы вы планируете в месяце?');
         do amount = +prompt('Во сколько это обойдется?');
         while(!isNumber(amount)) sum += amount;
     }
     return sum;
};
 getExpensesMonth ();



const accum = getExpensesMonth(amount);
const getAccumulatedMonth = function(sum,ras) {
     return sum - ras;
};
console.log('Накопления за месяц  ' + (getAccumulatedMonth(money, accum)));


const accumulatedMonth = getAccumulatedMonth(money, accum);


// 3) Если getTargetMonth возвращает нам отрицательное значение, то вместо
//  “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”

const getTargetMonth = function(summ, acc) {
          return summ / acc;
 
};
if (getTargetMonth(mission, accumulatedMonth) >= 0) {
     console.log ('достигнута цель через ' + Math.floor(getTargetMonth(mission, accumulatedMonth)) + ' месяца');
} else {
     console.log ('Цель не будет достигнута');
}   

const budgetDay = accumulatedMonth / 30;
console.log('Цель будет достигнута за ' + Math.ceil(budgetDay) + ' месяца');


const getStatusIncome = function() {
     if (budgetDay > 1200) {
          return('У вас высокий уровень дохода');
     } else if (budgetDay > 600 && budgetDay <= 1200) {
          return('У вас средний уровень дохода');
     } else if (budgetDay > 0 && budgetDay <= 600) {
          return('К сожалению у вас уровень дохода ниже среднего');
     } else if (budgetDay < 0) { 
          return('Что то пошло не так'); 
     } else if (budgetDay === 0  ) {
          return('У Вас доход 0 ');
     }
}
console.log(getStatusIncome());