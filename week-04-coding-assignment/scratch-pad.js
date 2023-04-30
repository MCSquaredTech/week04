let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let length = ages.length -1;
let agesRevers = new Array(); 

for (let i = length; i >= 0; i--) {
    agesRevers.push(ages[i])
}
console.log(agesRevers);

// let last = '12'; 
// let first = 24; 

// // Check for Errors - Verify that both variables are numbers 
// if (typeof(last) !== 'number' || typeof(first) !== 'number') {
//     console.log('Error: One or more of the data elements are not a number');
// }

let calculateAverageAge = (a) => { 
    let length = a.length - 1; 
    let sum = 0;
    for (let e in a) { 
        sum += a[e];
    }
    console.log(sum);
    console.log(length);
    return (sum / length).toFixed(2);
}

console.log(calculateAverageAge(ages));

let calculateAverageAge1 = (a) => { 
    let length = a.length - 1; 
    let sum = 0;
    for (let e = 0; e < a.length; e++) { 
        sum += a[e];
    }
    console.log(sum);
    console.log(length);
    return (sum / length).toFixed(2);
}

console.log(calculateAverageAge1(ages));

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

let concatenateNamesWithSpaces = (a) => { 
    // namesString variable to concatenate the array 
    let namesString = ''; 

    for (let e = 0; e < a.length; e++) {
        // add a string literal name string 
        let tempName = (e === 0) ? `${a[e]}` : ` ${a[e]}`; 
        namesString += tempName; 
    }
    return namesString;
}

console.log(concatenateNamesWithSpaces(names));  

let last = names.slice(-1);
console.log(names);