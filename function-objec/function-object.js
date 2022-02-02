var favoriteBook ="4hour work week";
// arry

var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog']
var shoeDogIndex = bookList.indexOf('hooked');
console.log(shoeDogIndex);
bookList[1]= 'Story Brand';
console.log(bookList);

bookList.push('Small Giants');
console.log(bookList);

// conditional

if(bookList[1] == 'hooked'){
    console.log('I am hooked');
}
else{
    console.log('I am not hooked');
};
 
// loop
var phonePrice = 1; //loop variable

while( phonePrice < 15){
    console.log('phone price 20000 taka')
    phonePrice++;
};

for(phonePrice = 1; phonePrice < 10; phonePrice++){
console.log('phone price 10000 taka')
}
