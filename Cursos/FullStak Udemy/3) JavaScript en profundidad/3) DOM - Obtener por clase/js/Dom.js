'use strict'

// --------- Usando getElementsByClassName ------------

var allDivsByClass = document.getElementsByClassName("Rojo");

for (var div in allDivsByClass) {
	var actualDiv = allDivsByClass[div];
	if (actualDiv.className == "Rojo") {
		actualDiv.style.background = "red";
	}
}

// --------- Usando querySelector ---------------------

/*var allDivsByClass = document.querySelector(".Rojo");
console.log(allDivsByClass);*/