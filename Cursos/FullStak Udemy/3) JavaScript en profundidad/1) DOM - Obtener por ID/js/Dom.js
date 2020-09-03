'use strict'

main();

function main() {
	var element = getElementFromIndex("#C1073385271");
	modifyText("Nuevo", element);
	changeBackground(element, "red");
	changeLetterColor(element, "white");
	changeSize("20px", element);
	showLabel("Nuevo tamaño de la etiqueta : ", element);
}

function changeSize(size, element) {
	element.style.padding = size;
}

function changeLetterColor(element, color) {
	element.style.color = color;
}

function modifyText(text, element) {
	element.innerHTML = text;
}

function getElementFromIndex(id) {
	return document.querySelector(id);
}

function changeBackground(element, color) {
	element.style.background = color;
}

function showLabel(message, dataToPrint) {
	console.log(message, dataToPrint);
}