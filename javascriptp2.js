// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
    
}
console.log(reverseString('push'));

// Count Characters
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("push")); 

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalizeWords("grace boke"));


// Array Functions

// Find Maximum and Minimum
function findMax(array) {
    return Math.max(...array);
}

function findMin(array) {
    return Math.min(...array);
}

console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMin([1, 2, 3, 4, 5]));

// Sum of Array
function sumArray(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
// Filter Array
function filterArray(array, condition) {
    return array.filter(condition);
}
console.log(filterArray([1, 2, 3, 4, 5], num => num > 3));

// Mathematical Functions

// Factorial
function factorial(num) {
    if (num < 0) return 'Undefined for negative numbers';
    return num === 0 ? 1 : num * factorial(num - 1);
}
console.log(factorial(100));

// Prime Number 
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(86));
console.log(isPrime(9));

// Fibonacci 
function fibonacciSequence(terms) {
    if (terms <= 0) return [];
    let sequence = [0, 1];
    while (sequence.length < terms) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence.slice(0, terms);
}
console.log(fibonacciSequence(5));
