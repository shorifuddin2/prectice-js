// let factorial = 1;
// for (let i = 1; i <= 5; i++){
//     factorial =factorial * i;
// }
// console.log(factorial);

function factorial (number){
    let fact = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;

    }
    return factorial;
}

var firstFactorial = gatFactorial(7);
console.log('factorial of 7 is', firstFactorial);

var secondFactorial = getFactorial(9);
console.log('Factorial of 9 is', secondFactorial);