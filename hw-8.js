// let arr = [1, 3, 5, 7, 9]; // задание 1
// let mult = arr.reduce((a, b) => a * b );
// let sum = arr.reduce((a, b) => a + b );
// let callback;
// function result(callback) {  
//     if (callback === mult) {
//         console.log(mult);
//     }  else if (callback === sum) {
// console.log(sum);
//     }

// } ;
// result(mult, arr); 

// задание 2
// function compareUser(a, b) { 
// 	if (a.age > b.age) return 1;
// 	if (a.age < b.age) return -1;
// 	return 0;
// }
// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];
//  let getSortedArrayObj =  users.sort(compareUser);
// console.log(getSortedArrayObj);

// let arr = [1, '4', false, 9, 'two'];
// // console.log(arr);
// // const reversArr = arr.reverse();
// let filterArr = arr.map((el) => (+el) != NaN);
// // let filterArr = Number(arr);
// // let numberArr = [];
// // for (let el of arr){
// //    for (let el = 0; el < arr.length; el++) {
// //      Number(el); 
// //      if (Number(el) !== NaN) {
// //         numberArr.push(el);
// //      }
// // }
    
// // }

// // console.log(numberArr);
// console.log(filterArr);

setTimeout(() => { clearInterval(timerId); alert(endMessage); }, 5000);
let date = new Date();
let endMessage = "30 секунд прошло";
let time = () => {
    console.log(date);
}
let timerId = setInterval((time), 1000);
