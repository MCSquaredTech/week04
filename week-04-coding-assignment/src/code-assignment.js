
// Requirement: Code Step 1:
// create an array of ages - initial values provided by requirements 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Requirement: Code Step 1a: Programatically subtract the value of the first element in the array
// from the last - make it dynamic to work on any number value array.  
// In other-words ages[7] - ages[0] is not allowed 

// Find the last element value in the current array programmatically 
// The Plan: make a copy of the current array and pop the value 
// return it's value to the function called last 

// Working the the Array Prototype and adding function last() 
// usage arrayName.last(); in code 
Array.prototype.last = function () { 
    // Create a copy of the Array - the this keyword is a generic array
    let arr = [...this]; 
        
    // return the last array element to the function call last
    return arr.pop(); 
}

// Find the first element value in the current array programmatically 
// The Plan: Similarly to the find last - we will create a new array 
// then manipulate it to reverse the order and pop the value 
// return it's value to the function called first

// Working the the Array Prototype and adding function first() 
// usage arrayName.first(); in code
Array.prototype.first = function () { 
    // Create a new array to hold the current array in reverse
    let arr = new Array(); 
    // Calculate the index length 
    let length = this.length - 1;

    // For loop the loops from the last to first
    // (i.e. start with the last index number and countdown to zero) 
    for (let i = length; i >= 0; i--) {
        // push the value to the new array
        arr.push(this[i]);
    }

    // return the last array element to the function call first
    return arr.pop();  
}

// Requirement for Code Step 1a: subtract the value of the first element in the array 
// from the value of the last element in the array 
// Calculation: last - first  
let calculateLastFirst = (a) => {
    // Getting the first and last values from the extended array prototype
    // that we create in the code above. This process protects the current array 
    // values and maintains data integrity. 
    let lastValue = a.last();
    let firstValue = a.first();

    // Calculate the value from the last element - the first element 
    // and return the result
    return lastValue - firstValue;
}

// To complete the process we console out the value return from the funtion 
// calculateLastFirst passing in the array ages.
console.log(`Subtract the first element in the ages array from the last`);
console.log(calculateLastFirst(ages)); // output is: 90

// Check the array for data integrity: not a part of the assignment commented out 
// after verification. 
// console.log(ages);

// Requirement: Code Assignment 1b: 
// Add a new age to your and repeat to ensure that your code is dynamic
ages.push(47); 
console.log(`Subtract the first element in the ages array from the last`);
console.log(calculateLastFirst(ages)); // output is: 44 

// Requirement: Code Assignment 1b: 
// Add a new age to your and repeat to ensure that your code is dynamic
ages.push(65); 
console.log(`Subtract the first element in the ages array from the last`);
console.log(calculateLastFirst(ages)); // output is: 62

// Requirement: Code Assignment 1c: 
// Use a loop to iterate through the array and calculate the average age.

// The Plan: Create one variables to hold the sum product of all ages. 
//  To comply with the requirements a loop will sum all the ages to the second variable sum. 
// The plan will be to use a for loop to sum the ages. We will return the results sum / length

let calculateAverageAge = (a) => { 
    // Calculate the index length
    // let length = a.length; // refactored
    // Initialize sum = 0
    let sum = 0;

    // Sum the values of all array elements
    for (let e = 0; e < a.length; e++) { 
        sum += parseInt(a[e]);
    }

    // Calculate Average Age and return value with fixed two decimals
    // fixed two decimals were not in the requirements. Could be dangerous!!! 
    return (sum / a.length).toFixed(2);
}

// Show work in console.
// call function and pass in the ages array
console.log(`Shows the average age in the ages array`);
console.log(calculateAverageAge(ages));

// Requirement: Code Assignment 2 
// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// Requirement: Code Assignment 2a. 
// Use a loop to iterate through the array and calculate the average number of letters per name.

// The Plan - Create a function to calculate the average number of letters per name: Create two variables
// to calculate the array length and one to accumulate the sum of name length. Create a for loop to sum 
// add up the length of each name. Returning the average name length (sum / length) 
let averageNameLength = (a) => { 
    // Calculate the current array length 
    let length = a.length; 
    // Set the sum variable to zero 
    let sum = 0; 

    for (let e = 0; e < length; e++) { 
        // add the length of each array element 
        sum += a[e].length; 
    }
    
    // Calculate Average name length and return value with fixed two decimals
    // fixed two decimals were not in the requirements. Could be dangerous!!! 
    return (sum / length).toFixed(2);
}

// Show work in console.
// call function and pass in the names array
console.log(`The average length of the name in the names array`);
console.log(averageNameLength(names));

// Requirement: Code Assignment 2.b
// Use a loop to iterate through the array again and concatenate all 
// the names together, separated by spaces.

// The Plan: is to create a string variable to hold the concatenation 
// of all the elements in the array and return them to the calling function. 

let concatenateNamesWithSpaces = (a) => { 
    // namesString variable to concatenate the array 
    let namesString = ''; 

    for (let e = 0; e < a.length; e++) {
        // add a string literal name string without leading or trailing spaces
        let tempName = (e === 0) ? `${a[e]}` : ` ${a[e]}`; 

        //concatenate the to the name string 
        namesString += tempName; 
    }

    // all names were concatinated namesString is returned
    return namesString;
}

// Show work in console.
// call function and pass in the names array
console.log(`The concatination of the names in the names array are:`);
console.log(concatenateNamesWithSpaces(names));

// Requirement: Code Assignment 3
// How do you access the last element of any array?

// The last element can be accessed in many way here are a few 
// array[array.length - 1]; // primative 
// array.pop(); // function call from the array. Note: removes the element from the array 
// array.slice(-1); // This function can remove an element from the array if you add a second parameter 
// array.at(-1); // returns the last element. 

// Requirement: Code Assignment 4 
//  How do you access the first element of any array?

// Similarly you can return the first element in the same manner as above 
// The last element can be accessed in many way here are a few 
// array[0]; // primative 
// {
//      array.reverse(); // reverse the array first - this is how I handle my code with the limitations outlined    
//      array.pop(); // function call from the array. Note: removes the element from the array 
// }
// array.slice(0); // This function can remove an element from the array if you add a second parameter 
// array.at(0); // returns the last element. 

// Reuirement: Code Assignment 5
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// The Plan: Declare a new array variable called nameLength. 
let nameLength  = new Array(); 

// The Plan: Create a while loop to itirate of over the names array and return the length each name - variable nameLen 
// then push the length on to the stack of the nameLength's array

// Create a variables i hold the index of the element
let i = 0; 

// While loop to populate the new array.
while (i < names.length ) {

    // get the array element from names and find the length 
    let length = names.at(i).length;
    // dynamically populate the array using the push function 
    nameLength.push(length); 

    // increment the counter 
    i++;
}

// Show your work 
// Display the new Array nameLength 
console.log('this is the newly array nameLength');
console.log(nameLength);

// Requirement: Code Assignment 6. 
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// The Plan: Create a Do While loop to iterate ove the array and calculate the sum. 
// Create veriable i - holds the index of the element and a variable sum to hold the total.
i = 0; 
let sum = 0; 

// Do while loop to calculate sum 
do { 

    let value = nameLength.at(i);
    sum += value; 
    i++;
    
} while (i < nameLength.length);

// Show your work 
// Display the sum total for all name lengths 
console.log('This is the sum total for all name lengths');
console.log(sum);

// Requirement: Code Assignment 7 
// Write a function that takes two parameters, word and n, as arguments and returns the word 
// concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

// The Plan - Create a function call repeatToN(word, n) that take two parameters. create a loop that will cycle n types
// and concatinates the paramater word together. finally return the concatinated word back to the calling code. 

let repeatToN = (word, n) => {
    // Create a placehoder for the concatinated word.
    let concatWord = '';

    // Create a loop using a zero based iterator up to the value of paramater n 
    for (let i = 0; i < n; i++) { 
        concatWord += word;
    }

    // Once the loop i completed pass back concatWord
    return concatWord;
}

// Show your work 
// Call the repeatToN function 
console.log('This is the concatinated word of n')
console.log(repeatToN("MonkySoup", 5));

// Requirement: Code Assignment 8.
// Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the 
// first and the last name separated by a space. 

// The Plan - Create a function that takes two paramaters first and last and use a template literal to return the full name 

let fullName = (first, last) => { 
    // return the template literal 
    return `${first} ${last}`;
}

// Show your work 
// Call the  fullName function 
console.log('The fullName function concatinates the first and last name together');
console.log(fullName('Mark', 'Christensen'));

// Requirement: Code Assignment 9. 
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.


// *** Refactored code for Code Assignments 9, 10, 11. 
function sumArray(a) { 
    let sum = 0;

    for (let i = 0; i < a.length; i++) { 
        // sum the numbers in the array 
        sum += a[i];
    }

    return sum
}
// *** Refactored ***

// The Plan - Create a function that initiates a loop to calculate the sum total of all the number in an array
// if the array is greater than 100 return true else false. Variable sum will hold the accumlative total of the array. 
// variable flag isGreater will be initialized to false and returned at the end of the function 

function isGreaterThan100(a) { 
    // not using the isGreater flag - rather just returning the terinary expression
    // Create a variable sum to hold the sum value of the array
    // let sum = 0;

    // for (let i = 0; i < a.length; i++) { 
    //     // sum the numbers in the array 
    //     sum += a[i];
    // } - Refactored with function sumArray(array) - Hello DRY
    let sum = sumArray(a);

    // return the results
    return sum > 100 ? true: false; 
}

// show your work 
// calling the function isGreaterThan100 using the ages array
console.log('The isGreaterThan100 function returns True or False');
console.log(isGreaterThan100(ages));

// calling the function isGreaterThan100 using the nameLength array 
console.log('The isGreaterThan100 function returns True or False');
console.log(isGreaterThan100(nameLength));

// Requirement: Coding Assignment 10. 
// Write a function that takes an array of numbers and returns the average of all the elements in the array.

// The Plan - Create a function that returns the average of a number array. Utilize the loop from the Code 
// Assignment 9. return the sum divided by the array length. 

let averageOfArray = (a) => { 
    // Create a veriable to hold the sum total 
    // let sum = 0; 

    // for (let i = 0; i < a.length; i++) { 
    //     // sum the value of the array 
    //     sum += a[i];
    // } -- Refactored with function sumArray(array) Hell DRY 

    let sum = sumArray(a);

    // return the result 
    return sum / a.length;
}

// show your work 
// calling the function averageOfArray using the ages array
console.log('The averageOfArray function returns the average of the array');
console.log(averageOfArray(ages));

// calling the function averageOfArray using the nameLength array 
console.log('The averageOfArray function returns the average of the array');
console.log(averageOfArray(nameLength));

// Requirement: Code Assignment 11. 
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the 
// first array is greater than the average of the elements in the second array.

// The Plan - Create a new function called isArrayAGreater - I will call pass two arrays into the function and 
// return if Array 1 is greater than Array 2 - I am creating a helping funtion sumArray pass in the array and return 
// the sum value. Return a true if the the first array isGreaterThen or false if isLessThan - I will  
// refactor my code from the previous two functions. 

let isArrayAGreater = (a1, a2) => { 
    // Declare two variables to hole the sum returns 
    let sumOne = sumArray(a1); 
    let sumTwo = sumArray(a2); 

    return sumOne > sumTwo ? true : false;
}

// Show your work 
// calling isArrayAGreater using ages and nameLength 
console.log('The function isArrayGreater return the sum difference between two arrays');
console.log(isArrayAGreater(ages, nameLength));

// calling isArrayAGreater using nameLength and ages
console.log('The function isArrayGreater return the sum difference between two arrays');
console.log(isArrayAGreater(nameLength, ages));

// Requirement: Code Assignment 12. 
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns 
// true if it is hot outside and if moneyInPocket is greater than 10.50.

let willBuyDrink = (isHotOutside, moneyInPocket) => { 

    return isHotOutside && moneyInPocket > 10.5 ? true : false;
}

// Show your work 
// Calling te willBuyDrink and passing true condition  
console.log('calling willBuyDrink function');
console.log(willBuyDrink(true, 25));

// Calling te willBuyDrink and passing false condition  
console.log('calling willBuyDrink function');
console.log(willBuyDrink(true, 10.49));

// Calling te willBuyDrink and passing false condition  
console.log('calling willBuyDrink function');
console.log(willBuyDrink(false, 27.45));

// Requirement: Code Assignment 13. 
// Create a function of your own that solves a problem.

// The Plan - create a list of license plate number and sort them by their alphanumerical placements 
// This was a hardone to resolve and although it works well, I am was confussed why the return is needed 
// for a < b ? -1 : 1; however I have determend that it necessary with an if statement or complexe Terinary statement 
// Excellent resource - https://claritydev.net/blog/javascript-array-sorting-examples

// The Reason - I hava a large amount of software licenses in a work database that are usually return the data 
// by the purchase date; however, sometimes we look up by customer they need to be sorted by license number. 

// Create array licenseNumers 
let licenseNumbers = ["ZF1 Y1AQ", "WF3 CSIU", "NMB K4ID", "FO1 3IEP", "XYQ XXOA", "YHL J7TR", "A4I MR5T", "OIC U812", "NMC F4ID", "NMA 4KID", "NMA 4KED"];

let sortByLicenseNumber = (a) => { 
    return a.sort((a,b) => { 
        return a < b ? -1 : 1;
    })
}

console.log(sortByLicenseNumber(licenseNumbers));