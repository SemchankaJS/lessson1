'use strict'

let money = 1000;
let income = 'услуги'; 
let addExpenses = 'квартира, коммунальные, интернет';
// let deposit = true;
// let mission = 10000;
let period = 6;

// Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
money = prompt('Ваш месячный доход?');
console.log(money);

/*  Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период 
через запятую” сохранить в переменную addExpenses (пример: "Квартплата, проездной, кредит") */
addExpenses =  prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(', '));

/* Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной 
deposit (булево значение true/false) */
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
// “Введите обязательную статью расходов?” (например expenses1, expenses2)
// “Во сколько это обойдется?” (например amount1, amount2)
// в итоге 4 вопроса и 4 разные переменных

const expenses1 = prompt('Введите обязательную статью расходов 1');
console.log(expenses1);
const expenses2 = prompt('Введите обязательную статью расходов 2');
console.log(expenses2);

const amount1 = prompt('Во сколько это обойдется? 1');
console.log(amount1);
const amount2 = prompt('Во сколько это обойдется? 2');
console.log(amount2);

/* Вычислить бюджет на месяц, учитывая обязательные расходы, сохранить в новую 
переменную budgetMonth и вывести результат в консоль */
let budgetMonth = money - Number(expenses1) - Number(expenses2);
console.log(budgetMonth);

// Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission,
//  вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)

let mission = budgetMonth / period;
console.log(Math.ceil(mission));

// Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. 
// Вывести в консоль  округлив в меньшую сторону 
let budgetDay = money - budgetMonth;
console.log(Math.round(budgetDay));

// Написать конструкцию условий (расчеты приведены в рублях)	
// Если budgetDay больше 1200, то “У вас высокий уровень дохода”
// Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
// Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
// Если отрицательное значение то вывести “Что то пошло не так”
// Учесть варианты 0, 600 и 1200 (к какому уровню не важно)
 
if (budgetDay > 1200) {
     console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay <= 1200) {
     console.log('У вас средний уровень дохода');
} else if (budgetDay > 0 && budgetDay <= 600) {
     console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) { 
     console.log('Что то пошло не так'); 
} else if (budgetDay === 0  ) {
     console.log('У Вас доход 0 ');
}
 
