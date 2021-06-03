'use strict'

let isNumber = function(n) {
     return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    income = 'услуги', 
    addExpenses = 'квартира, коммунальные, интернет',
    mission = 10000,
    period = 6;

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

let expenses = [];

let getExpensesMonth1 = function() {
     let sum = 0;
     for (let i= 0; i<2; i++) {
          expenses[i] = prompt('Введите обязательную статью расходов:');
          sum += +prompt('Во сколько это обойдется?');
     }
     console.log(expenses);
     return sum;
};

const expenses1 = prompt('Введите обязательную статью расходов 1');
console.log(expenses1);
const expenses2 = prompt('Введите обязательную статью расходов 2');
console.log(expenses2);

// 2) Добавить проверку что введённые данные являются числом,
//  которые мы получаем на вопрос 'Во сколько это обойдется?’
//   в функции  getExpensesMonth
let amount1;
const getExpenses = function() {
     amount1 = prompt('Во сколько это обойдется? 1', 20);
     while(!isNumber(amount1)) {
          amount1 = prompt('Во сколько это обойдется? 1', 20);
     }
};
getExpenses();

console.log(amount1);

let amount2;
const getExpenses2 = function() {
     amount2 = prompt('Во сколько это обойдется? 2', 20);
     while(!isNumber(amount2)) {
          amount2 = prompt('Во сколько это обойдется? 2', 30);
     }
};
getExpenses2();
console.log(amount2);



const getExpensesMonth = function(sumOne, sumTwo) {
     return sumOne + sumTwo;
};

console.log('сумму всех обязательных расходов за месяц ' + getExpensesMonth(amount1, amount2));




const accum = getExpensesMonth(amount1, amount2);
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
     console.log ('достигнута цель через ' + getTargetMonth(mission, accumulatedMonth) + ' месяца');
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
 