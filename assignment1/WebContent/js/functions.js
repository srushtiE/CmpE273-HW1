/**
 * Calculate  factorial of a number using recursive functions 
 */

function calcFactorial(){

	// get the number 
	var n = document.getElementById("num").value;
	
	// define the function
	var factorial = function fac(n){
		if(n>1){
			n = n * fac(n-1);
			return n;
		}else{
			return 1;
		}	
	}
	
	// check for valid number
	if (isNaN(n)){
		
		// return false if non a number
		alert("Enter a number");
		return false;
	}else{
		
		// call the function
		document.write("The factorial is " + factorial(n));
	}
}