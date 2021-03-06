let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money = +prompt('Укажите Ваш ежемесячный доход'), 
    appData = {
        budget: money,
        income: {},
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        mission: 10000,
        period: 6,
        budgetDay: 0,
        budgetMonth: 0,
        expensesMonth: 0,
        asking: function(questionAmount){

            if(confirm('Есть ли у вас дополнительный источник заробатка?')) {
                let itemIncome = 0;
                do {
                     itemIncome = prompt('Какой у вас дополнительный доход?', 'Таксую');
                }
                while(isNumber(itemIncome));
                let cashIncome= 0;
                do {
                    cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', 500);
                }
                while(!isNumber(cashIncome));
                appData.income[itemIncome] = cashIncome;
            }

            appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').toLocaleLowerCase().split(', '),
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            for (let i = 0; i < questionAmount; i++){
                let keyQuestion = prompt('Какие обязательные расходы вы планируете в месяце?');
                let valueQuestion = +prompt('Во сколько это обойдется?');
                appData.expenses[keyQuestion] = valueQuestion;
            }
        },
        getExpensesMonth: function() {
            for(let key in appData.expenses){
                appData.expensesMonth += appData.expenses[key];
            }
        },
        getBudget: function(){
            appData.budgetMonth = appData.budget - appData.expensesMonth;
            appData.budgetDay = appData.budgetMonth / 30;
        },
        getTargetMonth: function(){
            let resul = Math.floor(appData.mission / appData.budgetMonth);
            if(resul >= 0) return 'Цель будет достигнута через ' + resul + ' месяцев';
            else return 'Цель не будет достигнута';
        },
        getStatusIncome: function(){
          if(appData.budgetMonth > 1200) 
          return 'У вас высокий уровень дохода';
          else if(appData.budgetMonth > 600 && appData.budgetMonth <= 1200) 
          return 'У вас средний уровень дохода';
          else if(appData.budgetMonth > 0 && appData.budgetMonth <= 600) 
          return 'К сожалению у вас уровень дохода ниже среднего';
          else if (appData.budgetMonth < 0) 
          return 'Что то пошло не так';
          else if (appData.budgetMonth === 0) 
          return 'У Вас доход 0';
        },
        getInfoDeposit: function () {
            if (appData.deposit) {
                do {
                    appData.percentDeposit = +prompt('Какой годовой процент?', 10);    
                }
                 while(!isNumber(appData.percentDeposit));
                do {
                    appData.moneyDeposit = +prompt('Какая сумма заложена?', 1000);
                }
                while(!isNumber(appData.moneyDeposit));  
            }    
        },
        calcSavedMoney: function () {
            return appData.budgetMonth * appData.period;
        }
    };
    
appData.asking(2);
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();

const buttonStart = document.getElementById('start');
const btnPlusIncome = document.getElementsByTagName('button')[0];
const btnPlusExpenses = document.getElementsByTagName('button')[1];
const checkboxDeposit = document.querySelector('#deposit-check');
const textAdditionalIncome = document.querySelectorAll('.additional_income-item');
const totalBudgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const totalExpensesMontValue = document.getElementsByClassName('expenses_month-value')[1];
const totalAdditionIncomeValue = document.getElementsByClassName('additional_income-value')[2];
const totalAdditionExpensesValue = document.getElementsByClassName('additional_expenses-value')[3];
const totalIncomePeriodValue = document.getElementsByClassName('income_period-value')[4];
const totalTargetMonthValue = document.getElementsByClassName('target_month-value')[5];

const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositCheck = document.querySelector('.deposit-check');  
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');     
const periodSelect = document.querySelector('.period-select');  




// console.log(appData.expensesMonth);
// console.log(appData.getTargetMonth());
// console.log(appData.getStatusIncome());
// console.log('Наша программа включает в себя данные: ');

for(let key in appData){
    console.log(key + ' ' + appData[key]);
}
// console.log(appData.addExpenses(addExpenses.split(', ').map(word => { return word[2].toUpperCase() + word.slice(1)}));