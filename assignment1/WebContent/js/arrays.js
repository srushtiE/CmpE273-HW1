/**
 * Implement binary search algorithm on an array of numbers
 */

function arrays(){
	// defining the array
	var arrayOfNumbers = new Array();
	var num = document.getElementsByTagName("input");
	for (var i=0;i<5;i++){
		arrayOfNumbers[i] = num[i].value;
	}
	var value = document.getElementById("searchNum").value;
	
	// call binary search function
	var mid = binarySearch(arrayOfNumbers,value);
	if(Number(mid) != 0){
		document.getElementById("displayindex").innerHTML = "The value is present at : " +  Number(mid);
	}else{
		document.getElementById("displayindex").innerHTML = "The value could not be found in the given set of numbers ! ";
	}
	
	// function to sort the array
	function sort(a){
		a.sort(function(a,b){
			return Number(a-b);
		});
		return a;
	}
	
	// function for binary search
	function binarySearch(arr,val){
		var startIndex = 0;
		var stopIndex = arr.length - 1;
		var middle = Math.floor((startIndex + stopIndex)/2);
		
		// call for sort
		arr = sort(arr);
		document.getElementById("displayarray").innerHTML = "The sorted array is : " + arr;
		
		// loop for search 
		while((arr[middle] != val) && startIndex < stopIndex){
			if(val < arr[middle]){
				stopIndex = middle - 1;
			}else{
				startIndex = middle + 1;
			}
			
			// recalculating middle 
			middle = Math.floor((startIndex + stopIndex)/2);
		}
		
		// returning index
		return middle+1;
	}
}