/**
 Closures are Isolated Stateful Functions.
 They remember their private variable data after call
 A closure is a function that has access to the parent scope, even after the scope is closed
 */

function Counter() {
	var counter = 0;
	counter++;
	alert(counter);
}

Counter();
Counter();

/** Functions create running memory (stack) and then released at the end
 * Therefore each time the method is ran, a new variable is created.
 * Sometimes we want the variables to stay in the memory.
 * We could create a global variable (above the function) but modular programming wants self contained units
 
 A closure is a function within a function:
 */

function Counter2(){
	var counter = 0;
	var Increment = function () {
		counter++;
		alert(counter)
	}
	return {
		Increment
	}
}

var x = Counter();		// First time
x.Increment(); 			// 1
x.Increment();			// 2

var x1 = Counter();		// Each call remembers local variable
x1.Increment();

/** Useful in OOP
 * 1) Abstraction : Show what is necessary
 * 2) Encapsulation : Hide complexity
 * 3) Inheritance : Parent-child
 * 4) Polymorphism : Depending on sitation diff behavioiur
 */

function Customer(){
	var _CustomerName = "";				// Top 4 var are private (Encapsulation)
	var _CustomerCode = "";
	var _Validate = function(){
		_DBConnect();
		alert("This is valid");
	}
	
	var _DBConnect = function (){
		
	}
	return {							// Abstraction as DBConnect cannot be called from outside as isnt returned
		CustomerName: _CustomerName,
		CustomerCode: _CustomerCode,
		Validate: _Validate
	}
}

var cust = new customer();
cust.CustomerCode = "1001";
cust.Validate();
Customer.prototype = new CustomerParent();





