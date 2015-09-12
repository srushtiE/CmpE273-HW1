/**
 * Illustrate the scope of variables, using window and this, in JavaScript 
 */

// initializing variable globally
var myname = "Jane Doe";

// accessing the global variable outside the function
document.write("<br/> Initial Value of myname variable is " + myname);

function scopeJS(){
	document.write("<br/> Inside function");
	
	// accessing the global variable inside the function
	document.write("<br/>Value of global myname variable is " + myname); // gives undefined
	
	// initializing same variable in the function 
	var myname = "Jenny Doe";
	
	// accessing the locally defined variable
	document.write("<br/>Value of local variable myname is " + myname);
	
	// accessing the global variable inside the function using window and this
	document.write("<br/>Value of variable (using window) myname is " + window.myname);
	document.write("<br/> Value of variable (using this) myname is " + this.myname);
}