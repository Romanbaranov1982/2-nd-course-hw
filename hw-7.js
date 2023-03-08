// let str = 'js';// задание 1
// console.log(str.toUpperCase());

let arr = ['бобёр', 'Боб', 'большой', 'Борис',
'Бобби'];
let coincidence = 'боб';

let searchStart = (arr, coincidence) => {
    if (arr.toLowerCase().startsWith(coincidence.toLowerCase())){
        console.log(arr);
    }
};

 searchStart();


