/**
 * Explain object in JavaScript and 'with' keyword
 */

// function which will work as a method
function addModel(ver){
	with(this){
		model = ver;
	}
}

function car(name, manufacturer){
	
	// referencing the properties of the object without the name of the object
	this.name = name;
	this.manufacturer  = manufacturer;
	this.model = 0;
	
	// assigning method as property
	this.addModel = addModel;
}

// initializing the object
var myCar = new car("Cooper", "Mini");

// calling function as method
myCar.addModel("Pacemam");

document.write("Car name is : " + myCar.name);
document.write("<br/>Car manufacturer is : " + myCar.manufacturer);
document.write("<br/>Car model is : " + myCar.model);