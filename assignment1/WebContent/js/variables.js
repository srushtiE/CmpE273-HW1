/**
 * Depict different forms of data type in JavaScript using a single variable
 */

// declared variable holds value undefined
var variableJS;

document.write("Trivial Data Types");
document.write("<br/>Value of variableJS : " + variableJS);

// initialized variable with value null;
variableJS = null;

document.write("<br/>Value of variableJS after initialization : " + variableJS);

document.write("<br/><br/>Primitive Data Types");
// changing the value to integer
variableJS = 123;

document.write("<br/>Value of variableJS after assigning an integer value : " + variableJS);

// changing the value to character
variableJS = "a";

document.write("<br/>Value of variableJS after assigning a character value : " + variableJS);

//changing the value to a string
variableJS = "This is a string";

document.write("<br/>Value of variableJS after assigning a string value : " + variableJS);

document.write("<br/><br/>Composite Data Types");
// changing the value to an object
variableJS = new Object(); // create the object
variableJS.name = "Jane Doe"; // assign properties to the object
variableJS.value = "A string";

document.write("<br/>The value of variableJS after assigning an object value:");
document.write("<br/>The name of the variable is : " + variableJS.name + "<br/>");
document.write("The value of the variable is : " + variableJS.value + "<br/>");