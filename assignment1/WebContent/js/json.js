/**
 * Create a code to explain how data is read in form of a JSON
 */

function downloadJSON(){
	
	var num = document.getElementsByTagName("input");
	var pairArray = new Array();
	for(var i=1;i<6;i++){
		var pair = new Object();
		pair.state= document.getElementById("state" +i).value;
		pair.capital= document.getElementById("capital" +i).value;
		pairArray.push(pair);
	}
	
	var jsonArray = JSON.parse(JSON.stringify(pairArray));
	
	document.getElementById("link").onclick = function(json){
		this.href = 'data:text/plain;charset=utf-8,'+encodeURIComponent(JSON.stringify(jsonArray));
	};
}