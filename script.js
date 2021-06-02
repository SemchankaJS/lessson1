'use strict'

let money = 1000;
let income = 'услуги'; 
let addExpenses = 'квартира, коммунальные, интернет';
// let deposit = true;
let mission = 10000;
let period = 6;


money = prompt('Ваш месячный доход?', 1100);
console.log(money);


addExpenses =  prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(', '));


let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);



const expenses1 = prompt('Введите обязательную статью расходов 1');
console.log(expenses1);
const expenses2 = prompt('Введите обязательную статью расходов 2');
console.log(expenses2);

const amount1 = +prompt('Во сколько это обойдется? 1', 20);
console.log(amount1);
const amount2 = +prompt('Во сколько это обойдется? 2', 30);
console.log(amount2);

// Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных 
// расходов за месяц
const getExpensesMonth = function() {
     return amount1 + amount2;
};

// Объявить функцию getAccumulatedMonth. Функция возвращает
//  Накопления за месяц (Доходы минус расходы)
const getAccumulatedMonth = function() {
     return money - getExpensesMonth();
};

// Объявить переменную accumulatedMonth и присвоить ей результат
//  вызова функции getAccumulatedMonth 
const accumulatedMonth = getAccumulatedMonth();
 
// Объявить функцию getTargetMonth. Подсчитывает за какой период будет 
// достигнута цель, зная результат месячного накопления (accumulatedMonth) 
// и возвращает результат
const getTargetMonth = function() {
     return mission / accumulatedMonth;
};

// budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
const budgetDay = accumulatedMonth / 30;
console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяца');

// вызов функции getStatusIncome
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
 
