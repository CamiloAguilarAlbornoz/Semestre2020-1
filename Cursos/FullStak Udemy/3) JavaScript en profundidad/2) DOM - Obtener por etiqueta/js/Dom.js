'use strict'

var allDivs = document.getElementsByTagName('div');

// Crear elementos HTML en los divs

for (var index in allDivs) {
	var segmentText = document.createElement("p");
	var textContent = allDivs[index].textContent;
	if (textContent != undefined) {
		var text = document.createTextNode(textContent);
		segmentText.append(text);
		document.querySelector("#mysection").prepend(segmentText);
	}
}