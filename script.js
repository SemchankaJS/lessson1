'use strict'

let isNumber = function(n) {
     return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    start = function() {
        do {
          money = prompt('Ваш месячный доход?');
        } 
          while(!isNumber(money)); 
     };
     start();

let  appData = {
     income: {},
     addIncome: [],
     expenses: {},
     addExpenses: [],
     deposit: false,
     mission: 10000,
     period: 6,
     budget:  money,
     budgetDay:  0,
     budgetMonth:  0,
     asking: function() {
          let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
          appData.addExpenses = addExpenses.toLowerCase().split(',');
          appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
     },

     getExpensesMonth: function() {
          let sum = 0;
          let amount;
               for(let i = 0; i <2 ; i++){
                    if (i === 0) {
                         expenses1 = prompt('Какие обязательные расходы вы планируете в месяце?');
                    } else {
                         expenses2 = prompt('Какие еще расходы вы планируете в месяце?');
                    } 
                    do {
                         amount = +prompt('Во сколько это обойдется?');
                    }     
                    while(!isNumber(amount)) 
                    sum += amount;
               }
          return sum;
          
     },
     getAccumulatedMonth: function () {
          return money - appData.getExpensesMonth;
     },
     getTargetMonth: function () {
          return appData.mission / appData.getAccumulatedMonth;
     },
     getStatusIncome: function() {
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
     },     
};
appData.asking();


console.log(appData);

let expenses1, 
    expenses2;
const expensesMonth = appData.getExpensesMonth();


// console.log (' appData.expensesMonth ',  appData.expensesMonth);
// console.log('getAccumulatedMonth(): ', appData.getAccumulatedMonth);

const budgetDay = appData.getAccumulatedMonth() / 30;
console.log('budgetDay: ', budgetDay);

if (appData.getTargetMonth() > 0) {
     console.log ('достигнута цель через ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
} else {
     console.log ('Цель не будет достигнута');
}   

console.log(appData.getStatusIncome()); 