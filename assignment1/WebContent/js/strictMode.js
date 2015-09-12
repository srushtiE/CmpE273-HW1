/**
 * 
 */

function nonstrictAdd(a,b){
	var c = Number(a) + Number(b);
	document.getElementById("resultnonStrict").innerHTML = "Result : " +  c;
}

function strictAdd(a,b){
	"use strict";
	var c = Number(a) + Number(b);
	document.getElementById("resultStrict").innerHTML = "Result : " + c ;
}

function strictOff(){
	valuesStrictOff = getValues();
	nonstrictAdd(valuesStrictOff[0],valuesStrictOff[1]);
}

function strictOn(){
	"use strict";
	valuesStrictOn = getValues();
	strictAdd(valuesStrictOn[0],valuesStrictOn[1]);
}

function getValues(){
	var x = document.getElementById("num1");
	var y = document.getElementById("num2");
	
	if (x.value == "" || isNaN(x.value)){
		x.focus();
		x.value = "Invalid Entry";
		return;
	}
	
	if (y.value == "" || isNaN(y.value)){
		y.focus();
		y.value = "Invalid Entry";
		return;
	}
	return [ x.value , y.value ];
}