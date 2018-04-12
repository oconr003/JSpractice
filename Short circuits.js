					
let a;               // undefined  (falsy value)
let b = null;        // null       (falsy value)
let c = undefined;   // undefined  (falsy value)
let d = 4;           // number     (truthy value)
let e = 'five';      // short circuits before reaching here

let f = a || b || c || d || e;


// TERNARY
// Ticket price for students are £8, or £12 for adult

let isStudent = true;
let price = isStudent ? 8 : 12
console.log(price);

// NESTED TERNARY
// Now a new option of ticket for seniors being £6

let isStudent = false;
let isSenior = true;
let price = isStudent ? 8 : isSenior ? 6 : 12;
console.log(price);

// Below the normal ticket price is already set to £12

let isStudent = true;
let price = 12;

isStudent ? (price = 8, alert('Check for student ID')) :
			alert('Enjoy the movie');











			
			