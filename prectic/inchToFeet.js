
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches =132;
 var feet = inchToFeet(myInches);
 console.log('my feet holo', feet);


 var dadiInches = 160;
 var feet = inchToFeet(dadiInches);
 console.log('dadi feet holo', feet);

var naniInches = 200;
var feet = inchToFeet(naniInches);
console.log('nani feet holo', feet);


// mile  to kilometer

function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKilometer(26.2);
console.log('marathon in km:', marathon)