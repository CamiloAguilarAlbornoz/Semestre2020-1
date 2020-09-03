'use strict'

window.addEventListener('load', () => {
	controllBtn();
});

function controllBtn() {
	var button = document.querySelector("#botonId");
	button.addEventListener('click', function() {
		changeColor(this);
	});
	button.addEventListener('mouseover', function() {
		resize(this);
	});
	button.addEventListener('mouseout', function() {
		resize(this);
	});
	var input = document.querySelector("#campoNombre");
	input.addEventListener('focus', function() {
		console.log("Esta dentro del input.");
	});
	input.addEventListener('blur', function() {
		console.log("Esta fuera del input.");
	});
	input.addEventListener('keydown', function(event) {
		console.log("Empezo a presionar la tecla " + String.fromCharCode(event.keyCode));
	});
	input.addEventListener('keypress', function(event) {
		console.log("Esta presionando la tecla " + String.fromCharCode(event.keyCode));
	});
	input.addEventListener('keyup', function(event) {
		console.log("Dejo de presionar la tecla " + String.fromCharCode(event.keyCode));
	});
}

function resize(button) {
	var size = button.style.padding;
	button.style.padding = size == "30px" ? "50px" : "30px";
}

function changeColor(button) {
	var bg = button.style.background;
	button.style.background = bg == "green" ? "red" : "green";
}