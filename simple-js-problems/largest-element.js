

function largestElement(numbers){
    const largest = numbers[0];
    for (let i = 0; i< numbers.length; i++){
        let element = numbers[i];
        if(element > largest){
            largest= element;
        }

    }
    return largest;
}

const ages = [21, 23, 25, 12, 65, 45, 85, 56];
const oldest = largestElement(ages);
const oldest2 = largest([-13, -4, -5, -6]);
console.log('oldest', oldest2);



// task: find the lowest element of an array.