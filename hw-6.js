// const numbs = [1, 5, 4, 10, 0, 3];// Задание 1

// for (let i = 0; i < numbs.length; i++) {
// 	console.log(numbs[i]);
// 	if (numbs[i] == 10) break;
	
// }
 
// const numbs = [1, 5, 4, 10, 0, 3];// Задание 2
// console.log(numbs.indexOf(4));// или
// numbs.forEach((el , index) => {
//     if (el === 4) {console.log(`${index}`);
// }
	
// });
//  let numbs = [1, 3, 5, 10, 20];// Задание 3
//  numbs = numbs.join(' ');
//  console.log(numbs);

// let arr = []; задание 4

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; 
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(1);
			
// 	}
// }
// console.log(arr);
// let arrow = [1, 1, 1]; //Задание 5
// arrow.push(2, 2, 2);
// console.log(arrow);

// let arr = [9, 8, 7, 'a', 6, 5];// задание 6
// arr = arr.sort();
// (arr.pop());//  Вопрос: Можно ли сделать так, чтобы 'a' не выводилось в консоль ???
// console.log(arr);

// let arr = [9, 8, 7, 6, 5]; // Задание 7
// let numb = prompt('Введите число от одного до десяти');
// let search = arr.includes(Number(numb));
// console.log(search);
 
// let arr = 'abcdef';// Задание 8
// arr = arr.split(''); 
// console.log(arr);
// arr = arr.reverse();
// console.log(arr);

// let order = [[1, 2, 3,],[4, 5, 6]]; // задание 9
// order.flat();
// console.log(order.flat());


let arr = [ 1, 3, 5, 7, 9];// задание 10
for (let i = 0; i < (arr.length - 1); i++) {
    let a = arr[i];
    let b = arr[i+1];
    let sum = a + b;
    console.log(sum);
   
}












