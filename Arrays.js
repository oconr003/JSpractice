
// using MAP to change contents of an array that is called upon and (in this example) creats a new array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareNumbers =
	numbers.map(function(number){
		return number * number
	});
console.log(squareNumbers);


// using SUM in a function, probably best to define in an object
function sum(a, b, c, d, e, f, g){
	var n = arguments.length,
	total = 0;
	
	for (var i=0; i<n; i++){
		total += arguments[i];
	}
	return total;
	}

// can also be written like..

let squareNumbers2 =
	numbers.map(numbers => numbers *10);

//Create the secretMessage array below

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
let secretMessage = animals.map(animal => animal.charAt(0));

console.log(secretMessage.join(''));

// using FILTER

let randomNumbers = [375, 200, 3.14, 7, 13, 852];
let smallNumbers =
    randomNumbers.filter(smallNumber => smallNumber < 250);

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
let longFavoriteWords = favoriteWords.filter(word =>
  word.length > 7);

// using SOME, and EVERY

let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(function(word) {
  return word.length < 6}));

let interestingWords = words.filter(word => word.length > 5);
console.log(interestingWords.every(word =>  word.length > 5      ));
// this will just print 'true' twice..


// choosing the correct method

let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];
let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);


	