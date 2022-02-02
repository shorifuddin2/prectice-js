let numbers = [2, 3, 4, 6,5]

function largestElement(numbers){
    let max = numbers[0];
    for(let i = 0; i< numbers.length; i++){
        const element = numbers[i];
        if(element < max){
            max = element;
        }
    }
}

function smallestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min ){
            min = element;
        }
    }
}