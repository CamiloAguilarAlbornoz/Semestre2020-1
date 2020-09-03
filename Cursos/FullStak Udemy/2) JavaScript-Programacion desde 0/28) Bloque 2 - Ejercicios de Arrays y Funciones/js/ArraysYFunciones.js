'use strict'

var numbersList = new Array();

getNumbers();
showNumberList("-------------Lista de numeros ingresada----------------");
sortNumberListAndShow();
reverseNumberListAndShow();
showLengthNumberList();
getIsAndPosition();

function getNumbers() {
	for (var i = 0; i < 6; i++) {
		var number = 0;
		do {
			number = parseInt(prompt("Ingrese un numero"));
		} while (isNaN(number));
		numbersList.push(number);
	}
}

function showNumberList(message) {
	var elementWrite = "";
	var elementLog = "";
	for (let index in numbersList) {
		var number = numbersList[index];
		elementWrite += number + "<br/>";
		elementLog += number + "\n";
	}
	document.write("<h3>" + message + "</h3><br/>" + elementWrite + "<br/><br/>");
	console.log(message + "\n" + elementLog + "\n\n");
}

function sortNumberListAndShow() {
	numbersList.sort((numberOne, numberTwo) => numberOne - numberTwo);
	showNumberList("----------------Lista de numeros ordenada----------------");
}

function reverseNumberListAndShow() {
	numbersList.reverse();
	showNumberList("----------------Lista de numeros al reves----------------");
}

function showLengthNumberList() {
	length = numbersList.length;
	document.write("Cantidad de elementos del array : " + length + "<br/>");
	console.log("Cantidad de elementos del array : " + length + "\n");
}

function getIsAndPosition() {
	var element = prompt("Ingrese el elemento que desea encontrar");
	if (numbersList.some(number => number == element)) {
		var elementGet = numbersList.find(number => number == element);
		var indexGet = numbersList.findIndex(number => number == element);
		document.write("El objeto si existe <br/><br/>El elemento : " + elementGet + 
			"<br/>La posicion : " + indexGet);
		console.log("El objeto si existe \n\nEl elemento : " + elementGet + "\nLa posicion : " + indexGet);
	} else {
		document.write("El objeto no existe");
		console.log("El objeto no existe");
	}
}