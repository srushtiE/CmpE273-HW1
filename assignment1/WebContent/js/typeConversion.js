/**
 * Illustrate various type conversions in JavaScript
 */

function typeConversion(){

	var num = Number(document.getElementById("num").value);
	var str = String(document.getElementById("string").value);
	var bool = Boolean(document.getElementById("bool").value);

	var numString = String(num);
	var numBool = Boolean(num);

	var strNum = Number(str);
	var strBool = Boolean(str);

	var boolNum = Number(bool);
	var boolString = String(bool);

	var typeOfTable = '<table border="1"><tr><td>Initial Data Type</td><td>Initial Value</td><td>Converted Data Type</td><td>Converted Value</td>';
	
	typeOfTable += '<tr><td>'+ typeof num +'</td><td>' + num + '<td>' + typeof numString + '</td><td>' + numString + '</td></tr>';
	typeOfTable += '<tr><td>'+ typeof num +'</td><td>' + num + '<td>' + typeof numBool + '</td><td>' + numBool + '</td></tr>';
	
	typeOfTable += '<tr><td>'+ typeof str +'</td><td>' + str + '<td>' + typeof strNum + '</td><td>' + strNum + '</td></tr>';
	typeOfTable += '<tr><td>'+ typeof str +'</td><td>' + str + '<td>' + typeof strBool + '</td><td>' + strBool + '</td></tr>';
	
	typeOfTable += '<tr><td>'+ typeof bool +'</td><td>' + bool + '<td>' + typeof boolNum + '</td><td>' + boolNum + '</td></tr>';
	typeOfTable += '<tr><td>'+ typeof bool +'</td><td>' + bool + '<td>' + typeof boolString + '</td><td>' + boolString + '</td></tr>';
	
	document.getElementById("typeOfTable").innerHTML = typeOfTable;
}