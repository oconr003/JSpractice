// FUNCTION DECLARATION
function doSomething(){
  // ...do something...
};

// FUNCTION EXPRESSION
var doSomething = function(){
  // ...do something...
};


// IIFE
(function(){
  // ...do something...
})();

// Often use IIFE if a variable is declared at top and is a global variable
// If this variable is within a normal function, it will use the same variable as that declared earlier
// We may not want this, as if this code is ran, it will result in counter = 12;

var counter = 10;
counter ++;

function SomeFun(){
	counter = counter + 1;
}

// So create an annoymylous function

(function () {
	var counter = 10;
	counter++;
})(); // <--- () invoking imemditely  and only initialised once so is not global anymore

function SomeFun() {
	var counter = 0; // <-- init a new variable 
	counter = counter + 1;
}
