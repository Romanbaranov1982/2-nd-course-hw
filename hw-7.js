// let str = 'js';// задание 1
// console.log(str.toUpperCase());

// let arr = ['бобёр', 'Боб', 'большой', 'Борис',
// 'Бобби'];
// let str = 'боб';        // задание 2
// let newArr = arr.filter(el => el.toLowerCase().startsWith(str.toLowerCase()));
// console.log(newArr);


// let numb = 32.58884 ;// задание 3
// console.log(Math.ceil(numb));
// console.log(Math.floor(numb));
// console.log(Math.round(numb, 1));

// let numArray = [52, 53, 49, 77, 21, 32];  // задание4
// console.log(Math.max(...numArray));/// максимальное значение
// console.log(Math.min(...numArray));// минимальное
 
// function rundomNumber(min, max) {// задание 5
//     min = Math.ceil(1);
//     max = Math.floor(10);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(rundomNumber());

// let inNumb = prompt('Ведите любое число'); задача 6
// let arrayN = [];
// let getRandomArrNumbers  = (i) => {
//        do {
//         let i = Math.round((Math.random() * inNumb));
//        arrayN.push(i);
//        } while (arrayN.length <= (inNumb / 2) - 1);// почему работает только с ''-1'' ???
// };
// getRandomArrNumbers();
// console.log(arrayN);

// let min = prompt('Введите любое число');// задача 7
// let max = prompt('Введите любое число');

// let randomNumb = (min, max) => {
//     min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(randomNumb(min, max));

// let nowDate = new Date(); //задача 8
// console.log(nowDate);

// let currentDate = new Date();// задача 9
// let n = 73 ;
// currentDate.setDate(n);
// console.log(currentDate);

//задание 10
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда",  "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();
// let fullDate = "Дата :" + myDate.getDate() +  ' ' + months[myDate.getMonth()] + 'а'  + " " + myDate.getFullYear() + ' - это ' + days[myDate.getDay()] + '. ' + "Время:" +  myDate.getHours() + ' :' + myDate.getMinutes() + ' :' + myDate.getSeconds() + '.';
// console.log(fullDate);

// задание 10 пытался сделать функцией но не работает. Подскажите ???
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда",  "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();
// let message = (myDate, fullDate) => {
// fullDate = "Дата :" + myDate.getDate() + months[myDate.getMonth()] + " " + myDate.getFullYear() + ' - это ' + days[myDate.getDay()] + ' .' + "Время :" +  myDate.getHours() + ' :' + myDate.getMinutes() + ' :' + myDate.getSeconds() + '.';
// };
// console.log(message());
 
// // Задание 11
// let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
// console.log(arr);
// let newArr = arr.sort(() => Math.random() - 0.5);
// console.log(newArr);
// let userAnswer = prompt('Чему равнялся первый элемент массива?');
// let userAnswerTwo = prompt('Чему равнялся последний элемент массива?');
// let result = 'Яблоко';
// let resultTwo = 'Мандарин';
// // let result = arr[0] ;// почему не работает этот вариант ?
// // let resultTwo = arr[arr.length - 1];// почему не работает этот вариант ?
// // console.log(arr[arr.length - 1]);
// // console.log(arr[0]);
// if (userAnswer.toLowerCase === result.toLowerCase && userAnswerTwo.toLowerCase === resultTwo.toLowerCase ) {
//     console.log('Поздравляем ! Вы угадали оба элемента !!!');
// } else if (userAnswer.toLowerCase === result.toLowerCase || userAnswerTwo.toLowerCase === resultTwo.toLowerCase) {
//     console.log('Вы были близки к победе!');
// } else  {
//     console.log('Вы не угадали');
// };

// Задание 11 с фунцией



// function fruits () {
//   let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
// console.log(arr);
// let newArr = arr.sort(() => Math.random() - 0.5);
// console.log(newArr);
// let userAnswer = prompt('Чему равнялся первый элемент массива?');
// let userAnswerTwo = prompt('Чему равнялся последний элемент массива?');
// let result = 'Яблоко';
// let resultTwo = 'Мандарин';  
// if (userAnswer.toLowerCase() === result.toLowerCase() && userAnswerTwo.toLowerCase() === resultTwo.toLowerCase() ) {
//     console.log('Поздравляем ! Вы угадали оба элемента !!!');
// } else if (userAnswer.toLowerCase() === result.toLowerCase() || userAnswerTwo.toLowerCase() === resultTwo.toLowerCase()) {
//     console.log('Вы были близки к победе!');
// } else  {
//     console.log('Вы не угадали');
// };
// };




