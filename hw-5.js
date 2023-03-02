// function comparison(a, b) { // задание 1
//     if (a > b) {
//        alert(a); 
//     } else if (b > a) {
//         alert(b);
//     }
//     else if (a === b) {
//         alert(a);
//     }
// }
// comparison(7, 2);

// function evenOdd(n) {  //задание 2
//     if (n % 2 == 0) {
//         alert('Число четное')
//     } else {
//         alert('Число нечетное')
//     }
    
// }
// evenOdd(2);

// let enyNumb = function degree(n) { // задание 3.1
//     return n**2;
//     console.log(n);    
// }
// enyNumb(5);

// let enyNumb = function degree(n) {// задание 3.2
//     return n**2;
        
// }
// console.log(enyNumb(7));

// let age =prompt('Сколько тебе лет ?'); // задание 4
//    function yourAge(age)  {
//     if (age < 0) {
//         alert('Вы ввели неправильное значение');
//     } else if(age <=12 ) {
//         alert ('Привет, друг!');    
//     } else if (age > 13) {
//         alert ('Добро пожаловать !');
//     }
    
// }
// yourAge(age);

// let a = prompt('Введите любое число'); // задание 5
// let b = prompt('Введите любое число');
// function split (a, b) {
//     if (isNaN (a) || isNaN(b)) {
//         console.log('Одно или оба значения не являются числом');
//     } else {
//         console.log(a * b);
//     }
    
// }
// split(a, b);

// let num = prompt('Введите любое число');// задание 6
// let degree = num**3;
// function somethinck(num) {
//    if (isNaN (num)) {
//     console.log('Переданный параметр не является числом');
//    } else {  
//    console.log(`${num} в кубе равняется ${degree} `); 
//    } 
// }
// somethinck(num);

let monthNumber = prompt('Введите номер месяца');
function season(monthNumber) {
    if (isNaN(monthNumber)) {
        alert('Введено некорректное значение')
    } else if  (monthNumber === 12 || monthNumber <= 2) {
        alert ('Зима');
    } else if (monthNumber >=3 && monthNumber <= 5) {
        alert('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert('Лето');
    } else if  (monthNumber >=9 && monthNumber <= 11) {
        alert('Осень');
    }
}
season(monthNumber);