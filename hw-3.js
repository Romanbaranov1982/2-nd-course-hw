/*
let password = 'Michael_Jordan';//  Задание 1
let enter = prompt('Введите пароль');
if (password === enter) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}
*/
/*
let c = prompt('Введите любое число'); // Задание 2
if (c>0 && c<10) {
  alert('Верно')  ;
} else {
    alert('Неверно');
}
*/
/*
let d = Number(prompt('Введите первое число'));// задание 3
let e = Number(prompt('Введите второе число'));
if (d>100 || e>100) {
    alert('Верно');
} else {
    alert('Неверно');
}
*/
/*
let a = 2;// задание 4
let b = 3;
alert(a + b);
*/
/*
let monthNumber = Number(prompt('Введите номер месяца')) ;//задание 5
switch (monthNumber) {
    case 1  :
        alert('Зима');
        break;
        case 2  :
        alert('Зима');
        break;
        case 3  :
        alert('Весна');
        break;
        case 4  :
        alert('Весна');
        break;
        case 5  :
        alert('Весна');
        break;
        case 6  :
        alert('Лето');
        break;
       case 7  :
                alert('Лето');
                break;
                case 8  :
        alert('Лето');
        break;
        case 9  :
        alert('Осень');
        break;
        case 10  :
        alert('Осень');
        break;
        case 11  :
        alert('Осень');
        break;
        case 12  :
        alert('Зима');
        break;                    

    default:
        break;
}
*/
/*
let element = prompt("Пожалуйста, введите любое число");// задание 7
console.log( !isNaN(element));
if (element%2>0) {
    alert('нечетное');
} else {
    alert('четное');
}
*/
/*
let clientOS = prompt('Введите используемую опреационную систему: 0 -  для iOS 1 - для Android');// задание 8
if (clientOS == false) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS == true) {
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('Ошибка');
}
*/

let clientOS = prompt('Введите используемую опреационную систему: 0 -  для iOS 1 - для Android');// задание 9
let clientDeviceYear = prompt('Год выпуска телефона');

if (!clientOS) {   
   console.log('Установите версию приложения для iOS по ссылке');
   if (clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');

   }
} else if (clientOS) {    
    console.log('Установите версию приложения для Android по ссылке');
    if (clientDeviceYear < 2015) {
        console.log('Установите облегченную версию приложения для Android по ссылке');
}
    }     

      
else {
    console.log('Ошибка');
}
