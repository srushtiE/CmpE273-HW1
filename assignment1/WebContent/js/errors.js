/**
 * Write a code for entering date of birth and throw an error for invalid month number
 */

function checkMonth(){
	
	var date = document.getElementById("date").value;
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;
	var message = "";
	try{
		month--;
		var arrMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		if (arrMonths[month] != null){
			message = "Thanks for submission! ";
		}else{
			throw new Error("Invalid month! ");
		}
	}catch(e){
		message = e.name + ":" + e.message;
	}finally{
		document.getElementById("messageDisplay").innerHTML = message;
	}
}