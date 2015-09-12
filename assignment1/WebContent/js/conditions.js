/**
 * Create a BMI calculator.
 */

// Populate the drop down on window load
	window.onload = function () {
	    var ddl = document.getElementById("age_div").getElementsByTagName("select")[0];
	    var j=0;
	    for (var i = 20; i <= 100; i++) {
	        var numOption = new Option;
	        numOption.text = i;
	        numOption.value = i;
	        ddl.options[++j] = numOption;
	    }
	};
// Get the values and calculate BMI
function calc(){	
	
	// get the gender
	var male = document.getElementById("btn_male").checked;
	var female = document.getElementById("btn_female").checked;
	
	// get the age
	var val = document.getElementById("dd_age");
	var ddtext_age = val.options[val.selectedIndex].text;
	
	// get the weight
	var weight_kg = document.getElementById("txt_wt_kg").value;
	var weight_pound = document.getElementById("txt_wt_pound").value;
	
	// get the height
	var height_m = document.getElementById("txt_ht_m").value;
	var height_in = document.getElementById("txt_ht_in").value;
	
	// check if the form is complete
	if(((male == "" ) && (female == "")) ||
			(ddtext_age == "--select age--") ||
			((weight_kg=="0") && (weight_pound=="0")) ||
			((height_m=="0") && (height_in=="0"))){
		alert("Incomplete Form");	
	}
	// process the calculation with complete form
	else{
		if(((weight_kg!="0") && (height_in!="0")) ||
				((weight_pound!="0") && (height_m!="0"))
			){
			alert("Please enter Weight in kg and Height in m OR Weight in pounds and Height in in");
		}else{
	
		var ht_m_sq = Math.pow(height_m,2);
		var ht_in_sq = Math.pow(height_in,2);
		var condition;
		
		// calculate bmi
		var bmi_metric = (weight_kg)/ (ht_m_sq);
		bmi_metric = bmi_metric.toPrecision(3);
		var bmi = ((weight_pound/ ht_in_sq)) * 703;
		bmi = bmi.toPrecision(3);
		
		// check condition related to bmi
		if(bmi_metric == "0" || isNaN(bmi_metric) ){
			
			switch(true){
				case bmi < 18.5:
					condition = "Underweight";
					break;
				case bmi >= 18.5 && bmi <= 24.9:
					condition = "Normal or Healthy Weight";
					break;
				case bmi >= 25 && bmi <= 29.9:
					condition = "Overweight";
					break;
				case bmi >= 30.0:
					condition = "Obese";
					break;
			}
			
			// display result
			alert("Your BMI is " + bmi + " and you are " + cond);
		}else{
			
			switch(true){
			case bmi_metric < 18.5:
				condition = "Underweight";
				break;
			case bmi_metric >= 18.5 && bmi_metric <= 24.9:
				condition = "Normal or Healthy Weight";
				break;
			case bmi_metric >= 25 && bmi_metric <= 29.9:
				condition = "Overweight";
				break;
			case bmi_metric >= 30.0:
				condition = "Obese";
				break;
		}
			alert("Your BMI is " + bmi_metric + " and you are " + condition );
		}
	}
	}

}