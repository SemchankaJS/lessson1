const num = 266219;
const strNum = num.toString();


// Вывести в консоль произведение (умножение) цифр этого числа
let sum = 1;
for (let i = 0; i < strNum.length; i++) {
     sum *= strNum[i];  
}
console.log(sum);

// Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
 const st = sum **3;
 console.log(st);

//  Вывести в консоль первые 2 цифры полученного числа
 console.log(st.toString().substring(0,2));
 



