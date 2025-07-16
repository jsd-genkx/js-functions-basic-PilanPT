"use strict";

/*
Task 02: Check Even or Odd

📝 Instructions
- Create a function named checkEvenOrOdd
- It should accept one parameter: a number
- Return "Even" if the number is divisible by 2
- Return "Odd" if it is not

❌ Do not print inside the function.
✅ Only return the result.
*/

// 👨‍💻 TODO-01: Write your code below to complete the task as described above.

// Function to check if the input is Number or not , If not a number, Return 'false', If it a number return True.

function isRealNumber(Numbercheck) {
  return (typeof Numbercheck === 'number' && !Number.isNaN(Numbercheck));
}
 
// Main Function 
const checkEvenOrOdd = function(Numbercheck)   { 

        if(!isRealNumber(Numbercheck)) {return "Not a Number";} // first check if it a number or not.

        else if (Numbercheck%2===0) {return "Even" ;
                                 }    
        else  {  return "Odd";
    
            }

};


// Example Test Cases
console.log(checkEvenOrOdd(NaN));//"Even"
console.log(checkEvenOrOdd(9)); // "Odd"
console.log(checkEvenOrOdd(50)); // "Even"
console.log(checkEvenOrOdd(-3)); // "Odd"
