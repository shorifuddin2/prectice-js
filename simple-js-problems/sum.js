

const numbers = [11, 22, 66, 33, 55, 88, 99,44,];
let sum = 0;
for ( let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    sum = sum + element;
    
}
console.log(sum);

// functional add
function arrayTotal (numbers){
    let sum = 0;
    for(let i = 0; i< numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
        return sum;
    }
}
const total = arrayTotal([12, 25,35,,62,45]);
console.log('array total', total)