console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
// I feel like this is already solved as it is a function that returns
// "Hello World!" when you log to test it. Trick question?

// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName() {
  let name = 'Chris';
  return name;
}
// Remember to call the function to test
console.log( 'Test - should say "Hello, Chris"', 'Hello,' , helloName() );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
}
console.log( 'Test - running addNumbers with 2 and 3. This should log 5:' , addNumbers( 2,3 ) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2){
  let answer = num0 * num1 * num2;
  return answer;
}
console.log( 'Test - running multiplyThree with 2, 3, and 5. This should log 30:', multiplyThree ( 2, 3, 5 ) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else if ( number <= 0) {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
const array = [3, 5, 4, 9, 7];
let lastItem = array[array.length -1 ];

function getLast( array ) {
  return array[array.length -1];
  //return array.pop() --> thought of doing this as well but wasn't
  //sure because if I did array.pop(), wouldn't it remove the last item in the array?
} // Ends function

//console.log( 'Last item in array is', lastItem );
console.log( 'Last item in array is', getLast(array) );

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
//array is still -  3, 5, 4, 9, 7

function find( value, array ) {
  for (let i=0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }//End if statement
  } //End for loop
  return false;
}//End Function

console.log(find (9, array));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  //string.split() <-- Look into this Chris <3 Hunter
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
