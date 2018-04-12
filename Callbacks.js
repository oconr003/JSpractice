/**
CALLBACKS
More complexly put: In JavaScript, functions are objects. Because of this, 
functions can take functions as arguments, and can be returned by other functions. 
Functions that do this are called higher-order functions. Any function that is 
passed as an argument is called a callback function.
*/

function first(){
  // Simulate a code delay
  setTimeout( function(){
    console.log(1);
  }, 500 );
}
function second(){
  console.log(2);
}
first();
second();

/**
 output would be 2 then 1
 it is not that JS didn't execute the function in the order we wanted
 but instead JS didn't wait for a response from first() before moving on to second()
*/