
// 1. Print 1 - 255

function print1To255case1() {
    var number = 1;
    while (number < 256) {
        console.log(number);
        number += 1;
    }
}
print1To255case1()

console.log('=======================');

function print1To255case2() {
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
}

print1To255case2()
console.log('=======================');

// 2. Print Ints and Sum 0 - 255

function print0To255Sum1() {
    var sum = 0;
    for (var i = 0; i < 256; i++) {
        console.log('Number : ', i, ' and Sum : ', sum += i); // Updates var sum even within console.log
    }
}

print0To255Sum1()

console.log('=======================');

// 3. Print the largest element in a given array

function printLargestElemInArr(arr) {
    var larg = arr[0];
    if (arr.length === 0) {
        return 'Array is empty';
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > larg) { // checking which is lager element
            larg = arr[i];
        }
    }
    return larg;
}
console.log(printLargestElemInArr([1, 2, 3, 10]));

console.log('=======================');

// 4. Print Odds 1-255
function printOdds1To255() {
    for (var i = 1; i < 256; i += 2) {
        if(i%2 !=0)
        console.log(i);

    }

}

printOdds1To255()

console.log('=======================');

// 5. Array with Odds

function arrayWithOdds1To255() {
    var array = [];
    for (var i = 1; i < 256; i += 2) {
        array.push(i);
    }
    return array;
}

console.log(arrayWithOdds1To255());
console.log('=======================');

// 6. Get and Print Average

function arrayAverage(arr) {
    if (arr.length === 0) {
        return 'Array is empty'
    }
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum += arr[i]
    }
    return (sum / arr.length);
}
console.log(arrayAverage([5, 10, 15, 20, 60]));

console.log('=======================');



// 7. Greater than Y



function greaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    return count;
}
q = [1, 2, 3, 4, 5]

console.log(greaterThanY(q, 1));
console.log('=======================');

// 8. Max, Min, Average

function minMaxAvg(arr) {
    if (arr.length === 0) {  return 'Array is empty'   }
    var Avg= arr[0]; 
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
        sum += arr[i]

    }
    // return [ max, min, sum / arr.length ]

    console.log('Max: ', max);

    console.log('Min: ', min);

    console.log('Avg:', sum / arr.length);

}

minMaxAvg([10, 20, 30, 40])

// console.log(minMaxAvg([1, 2, 3, 4]));
console.log('=======================');

// 9. Square the Values

function squareValues(arr) {

    if (arr.length === 0) {

        return 'Array is empty'

    }

    for (var i = 0; i < arr.length; i++) {

        arr[i] *= arr[i]; // Array passed in is mutable

    }

    return arr;

}

n = [2, 3, 4, 5]

console.log(squareValues(n));



console.log('=======================');



// 10. Zero Out Negative Numbers



function zeroOutNegs(arr) {

    if (arr.length === 0) {

        return 'Array is empty'

    }

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {

            arr[i] = 0;

        }

    }

    return arr;

}

h = [1, -2, 3, -4, 5, -6]

console.log(zeroOutNegs(h));



console.log('=======================');



// 11. Shift Array Values



function shiftArrayVals(arr) {

    if (arr.length === 0) {

        return 'Array is empty'

    }

   

    for (var i = 1; i < arr.length; i++) {

        arr[i - 1] = arr[i];

    }

    arr[arr.length - 1] = 0;

    return arr;

}

o = [4, 3, 7, 8, 4]

console.log(shiftArrayVals(o));


console.log('=======================');



// 12. Swap String for Array Negative Values



function swapNegsWithString(arr) {

    if (arr.length === 0) {

        return 'Array is empty'

    }

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {

            arr[i] = 'Dojo'

        }

    }

    return arr;

}

r = [1, 2, -4, 4, 5, -6]

console.log(swapNegsWithString(r));



console.log('=======================');



// Defining Array class Push method



function push(arr, value) {

    if (arr.length === 0) {

        return 'Array is empty'

    }

    arr[arr.length] = value

    return arr;

    // return value;

    // * By method definition return value is inserted value

}

p = [1, 2, 3, 4]

console.log(push(p, 5));



console.log('=======================');



// Defining Array class Pop method



function pop(arr) {

    if (arr.length === 0) {

        return 'Array is empty'

    }

    temp = arr[arr.length - 1];

    arr.length = arr.length - 1; // Arrays so mutable that you can modify length like this

    return arr;

    // return temp;

    // * By method definition return value is popped value

}

b = [1, 2, 3, 4, 5]

console.log(pop(b));



console.log('=======================');



// Array Bubble Sort (Ascending)



function bubbleSort(arr) {
    if (arr.length === 0) {    return 'Array is empty'     }

    let unsorted = true;
    while (unsorted === true) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) { 
                let temp = 0;
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
            else { count++;  }

        }

        if (count === arr.length) {  unsorted = false;   }
    }
    return arr;
}

var d= [9, -3, 6, -1, 3, 6]

console.log(bubbleSort(d));



console.log('=======================');



// Array Bubble Sort Recursively (Ascending)


function bubbleSortRec(arr) {

    if (arr.length === 0) { return 'Array is empty'   }
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = 0;
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
            
        }

    }
    
    return arr;
}

var d = [9, -3, 6, -1, 3, 6]

console.log(bubbleSortRec(d));

console.log('=======================');

// Array Selection Sort (Ascending)

function selectionSort(arr) {
    if (arr.length === 0) {
        return 'Array is empty'
    }
    for (var i = 0; i < arr.length; i++) {
        for (var y = i + 1; y < arr.length; y++) {
            if (arr[y] < arr[i]) { // Flip sign for descending
                let temp = 0;
                temp = arr[y];
                arr[y] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

s = [-5, 3, -98, 4, 2, 7, 4]
console.log(selectionSort(s));



// Array Insertion Sort (Ascending)