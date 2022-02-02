// variable
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

// array
var partners = ['sajid','mojid','nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop()
// array modhoyo jodi na pawa jay tahole etake return kore -1

// conditionals
if(bookPrice < 120){
    console.log('I will buy this book')
}
else{
    console.log('mama, kichu discount den na, apni na mama!');
}

// loop
var i = 1;
while(i <=17){
    // do some work
    i++;
}

for(i = 1; i>= 10; i++){
    console.log('I Love You..!!')
}

// function
function isMoonUp(time){
    if(time  >=19 && time <= 5){
        return true
    }
    return false;
}
var moonStatus = isMoonUp(21);

// let const

// value of the variable could change
let price = 27;
price =29;
price =30;

// value of the variable will not change
const name = 'lal e lal mr . Halal';
console.log('name');
    

