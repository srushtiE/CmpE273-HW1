/**
 * Perform European Date Validation using regular expression
 */

function dateCheck(){
	var fromDate = document.getElementById("fromDate").value;
	var toDate = document.getElementById("toDate").value;
	
	var reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
	
	var minYear = 1990;
	var maxYear = 2023;
	var msg="Success!";
	
	
	if(fromDate != ''){
		if(regexp = fromDate.match(reg)){
			if(regexp[1]<minYear || regexp[1]>maxYear){
				msg = "Invalid Year " +  regexp[1];
			}else if(regexp[2]<1 || regexp[2]>12){
				msg = "Invalid Month " + regexp[2];
			}else if (regexp[3]<1 || regexp[3]>31) {
				msg = "Invalid Date " + regexp[3];
			}
		}else{
			msg = "Invalid Date Format!";
		}
	}else{
		msg = "Field cannot be empty!";
	}
	
	if(toDate != ''){
		if(regexpto = toDate.match(reg)){
			if(regexpto[1]<regexp[1] || regexpto[1]>maxYear){
				msg = "Invalid Year : Should be greater than from year" +  regexpto[1];
			}else if(regexpto[2]<1 || regexpto[2]>12){
				msg = "Invalid Month " + regexpto[2];
			}else if (regexpto[3]<1 || regexpto[3]>31) {
				msg = "Invalid Date " + regexpto[3];
			}
		}else{
			msg = "Invalid Date Format!";
		}
	}else{
		msg = "Field cannot be empty!";
	}
	
	alert(msg);
	return true;
}