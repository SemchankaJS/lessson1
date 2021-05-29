const money = 1000;
const income = 'услуги'; 
const addExpenses = 'квартира, коммунальные, интернет';
const deposit = true;
const mission = 10000;
const period = 6;

// Вывести в консоль тип данных значений переменных money, income, deposit;
console.log(typeof money, income, deposit); 

// Вывести в консоль длину строки addExpenses
console.log(addExpenses.length);

/* Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission)
 рублей/долларов/гривен/юани” */
 console.log ('Период равен ' + period + ' месяцев');
 console.log ('Цель заработать ' + mission + ' долларов');

/* Привести строку addExpenses к нижнему регистру и разбить 
 строку на массив, вывести массив в консоль */
 console.log (addExpenses.split(', '));

 // Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
 const budgetDay = 80;

 // Вывести в консоль budgetDay
 console.log(budgetDay);
 
 



