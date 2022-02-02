
// It is a Functional marks sheet Bd.

const { signal } = require("nodemon/lib/config/defaults")

function marksNumber(number){
    if (number >= 80 && number <= 100) {
        console.log('A+')
    }
    else if (number >= 70 && number <= 79) {
        console.log('A')
    }

    else if (number >= 60 && number <= 69) {
        console.log('A-')
    }
    else if (number >= 50 && number <= 59) {
        console.log('B')
    }
    else if (number >= 40 && number <= 49) {
        console.log('C')
    }
    else if (number >= 33 && number <= 39) {
        console.log('D')
    }
    else {
        console.log('You are  fail..!!')
    }
    return number;

}
var number = 30;
var marks = marksNumber(number);
console.log( marks);


// functional signal light

function SignalLight(light){
    if(light == "green"){
        console.log('Run Now....')
    }
    else if(light == "yellow"){
        console.log('wite Now Please')
    }
    else if(light == "red"){
        console.log('Stop right Now')
    }
    else{
        console.log("Go Now....")
    }
    return light ;
    
}

var light = "yellow";
var trafficLight = SignalLight(light);
console.log(trafficLight);


// Functional LeapYear 

function leapYear(year){
    if( year % 4 == 0){
        console.log("It is a leapYear...")
    }
    else{
        console.log("It is a not leapYear...")
    }
    return year;
}

const year = 2024;
const isLeapYear = leapYear(year);
console.log(isLeapYear);

// Functional Odd & event 
function isOdd(odd){
    if(odd % 2== !0){
        console.log('it is a odd number')
    }
    else{
        console.log('it is a not odd number')
    }
    return odd;
}
const odd = 555
const oddNumber = isOdd(odd);
console.log(oddNumber);


// event number
function eventNumber(event){
    if(event % 2 == 1){
        console.log('it is a not event number...')
    }
    else{
        console.log('it is event number...')
    }
    return event;
}
const event = 880;
const isEventNumber = eventNumber(event);
console.log(isEventNumber);