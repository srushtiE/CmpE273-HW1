/**
 *  
 */

function doFirst(){
	
	var indigo = document.getElementById("img1");
	indigo.addEventListener("dragStart", startDrag, false);
	var div = document.getElementById("finaldiv");
	div.addEventListener("dragenter", function(e){e.preventDefault();}, false);
	div.addEventListener("dragover", function(e){e.preventDefault();}, false);
	div.addEventListener("drop", dropped, false);
}

function startDrag(e){
	var code='<img id="img1" src="Violet.png" style="width:50px;height:50px;">';
	e.dataTransfer.setData('Text',code);
}
function dropped(e){
	e.preventDefault();
	var url = e.dataTransfer.getData('Text');
	alert("The URL is " + url);
}
window.addEventListener("load", doFirst, false);
