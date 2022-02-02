

// const business = 450;
// const minister = 550;
// if(business > minister){
//     console.log('Business person er pola is bigger')
// }
// else{
//     console.log('minister er pola is bigger')
// }

function findLargest(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}

const largest = findLargest(first, second);
console.log("largest is bigger",largest);

// Task 1 : create a function that takes three numbers as input parameter and returns you the largest number of the three.

// Task 2 : write a function to find the smallest of three numbers.


// compayar 3
// const business = 450;
// const minister = 550;
// const army = 600;

// if(business > minister && business >army ){
//     console.log('Business is bigger');
// }
// else if(minister > business && minister > army){
//     console.log('minister is bigger');
// }
// else {
//     console.log('army is bigger');
// }

const business = 450;
const minister = 550;
const army = 600;

let max = Math.max(business, minister, army);
// console.log('largest is', max);