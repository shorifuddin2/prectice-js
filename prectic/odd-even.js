
// const number = 4;
// const reminder = number % 2;
// console.log(reminder == 0);
// console.log(number % 2 == 0);

// kunu songka ke jodi 2 diye vag korle jodi vag ses var hoy tahole ei bejur songka ba odd songka, na  ver hole otoba 0 var hole jur va even sonka hobe...

const number = 145;
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven (myNumber);
console.log('isMyNumberEven',isMyNumberEven);

const herNumber = 1892;
const isHerNumberEvent = isEven(herNumber);
console.log('is her number even', isHerNumberEvent);


// is odd function
 function isOdd (number){
     if(number % 2 != 0){
        return true
     } 
     return false
    }

    const isMyNumberOdd = isOdd(myNumber);
    console.log('is my number odd', isMyNumberOdd);


    const isHerNumberOdd = isOdd(myNumber);
    console.log('is her number odd', isHerNumberOdd);