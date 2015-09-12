/**
 * 
 */

function vehicle(wheel,speed,size){
	this.setWheel(wheel);
	this.setSpeed(speed);
	this.setSize(size);
}

vehicle.prototype.setWheel = function(wheel){
	this.wheel = wheel;
};

vehicle.prototype.setSpeed = function(speed){
	this.speed = speed;
};

vehicle.prototype.setSize = function(size){
	this.size = size;
};

vehicle.prototype.getWheel = function(){
	return this.wheel;
};

vehicle.prototype.getSpeed = function(){
	return this.speed;
};

vehicle.prototype.getSize = function(){
	return this.size;
};
vehicle.prototype.displayDetails = function (){
	return "NA";
};


function bike(){
	var vehicleObj = new vehicle(2, "Slow", "Very Light");
	this.wheel = vehicleObj.getWheel();
	this.speed = vehicleObj.getSpeed();
	this.size = vehicleObj.getSize();
	this.display = function(){
		
		return vehicleObj.displayDetails();
	};
}

bike.prototype.getWheel = function(){
	return this.wheel;
};

bike.prototype.getSpeed = function(){
	return this.speed;
};

bike.prototype.getSize = function(){
	return this.size;
};
bike.prototype.displayDetails = function(){
	str = "Bike is : " + this.speed + ", " + this.size +" and has " + this.wheel + " wheels!";
	return str;
};


function car(){
	var vehicleObj = new vehicle(4, "Fast", "Light");
	this.wheel = vehicleObj.getWheel();
	this.speed = vehicleObj.getSpeed();
	this.size = vehicleObj.getSize();
	this.display = function(){
		return vehicleObj.displayDetails();
	};
}

car.prototype.getWheel = function(){
	return this.wheel;
};

car.prototype.getSpeed = function(){
	return this.speed;
};

car.prototype.getSize = function(){
	return this.size;
};
car.prototype.displayDetails = function(){
	str = "Car is : " + this.speed + ", " + this.size +" and has " + this.wheel + " wheels!";
	return str;
};


function truck(){
	var vehicleObj = new vehicle(10, "Fast", "Heavy");
	this.wheel = vehicleObj.getWheel();
	this.speed = vehicleObj.getSpeed();
	this.size = vehicleObj.getSize();
	this.display = function(){
		return vehicleObj.displayDetails();
	};
}

truck.prototype.getWheel = function(){
	return this.wheel;
};
truck.prototype.getSpeed = function(){
	return this.speed;
};
truck.prototype.getSize = function(){
	return this.size;
};
truck.prototype.displayDetails = function(){
	str = "Truck is : " + this.speed + ", " + this.size +" and has " + this.wheel + " wheels!";
	return str;
};


function getVehicleDetails(){
	var bikeObj = document.getElementById("bike");
	var carObj = document.getElementById("car");
	var truckObj = document.getElementById("truck");

	if(bikeObj.checked == true){
		var vehBike = new bike();
		document.getElementById("display").innerHTML = vehBike.displayDetails();
	}

	if(carObj.checked == true){
		var vehCar = new car();
		document.getElementById("display").innerHTML = vehCar.displayDetails();
	}

	if(truckObj.checked == true){
		var vehTruck = new truck();
		document.getElementById("display").innerHTML = vehTruck.displayDetails();
	}
}