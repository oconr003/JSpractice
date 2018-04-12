/**
 1) Termination Condition
 Acts as a brake
 2) Base Case
 Also stops the recursion but is more of a goal. 
 These are usually within an if statement
 3) The Recursion
 Function is calling itself. We return a variable 
 with an action to the value of whatever the recursion equates to
 */

function factorial(x){
	if (x<0) return;
	if (x===0) return 1;
	return x * factorial(x-1);
}

factorial(3);
/**
 * Pass in 3, both IFs fail and so return the integer 3
 * multiplied by the value of factorial(3-1)
 * return 3 * factorial(2);
 * When factorial(2) is run, both IFS faile and now return
 * the integer 2 multiplied by the value of factorial(2-1)
 * return 2 * factorial(1)
 * When factorial(1) is run, both IFs fail and we return
 * integer 1 multiplied by the value of factorial(1-1)
 * return 1 * factorial(0);
 * When factorial(0) is run, Base statement IF passes and our function returns 1
 * Now factorial(0) returns 1
 * Now the function has finally returned something, everything 'unwinds'
 * This is because recursion is simple a group of nested function calls
 * The most inner nested function will return first
 * factorial(1) returns 1 * factorial(0)  (1*1)
 * factorial(2) returns 2 * factorial(1)  (2*1*1)
 * factorial(3) returns 3 * factorial(2)  (3*2*1*1)
 */

/**
 * REVERSING A STRING
 * 
 * str === "" is our base case. When we have no characters in it, we have succeeded
 * There is no termination case as we cant get a string with -ve characters
 * 'cat'.substr(1) === 'at' as returning a substring starting at position 1
 * str[0] === 'c'
 * now we do this again and return 't' as at position 1 of 'at' and the value of [0] which is 'a'
 * last time it runs we return '' at position 1 of 't' and the value of [0] which is 't'
 * function has returned, everything will unwind and return in order
 * return '' + 't' + 'a' + 'c'
 */

function revStr(str){
	if (str === '') return '';
	return revStr(str.substr(1))+ str[0];
}
