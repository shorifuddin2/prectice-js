

function isLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }    
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);


const yourYear =2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap year',isYourYearLeapYear);

// 2018, 2121 lepap year tik kora lagbo 