'use strict';




// console.log(100);



// function calculateTotal(price, amount, rate = 1.2) {
//     return price * amount * rate;
// }


// console.log(calculateTotal(100, 10, 1.1));
// console.log(calculateTotal(100, 10));

const double = num => num * 2;

const calc = (num, func) => {
    console.log(func)
    return func(num);
};

console.log(calc(20, double));