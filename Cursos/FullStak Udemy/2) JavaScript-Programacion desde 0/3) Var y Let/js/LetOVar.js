'use strict'

// Prueba con var
var number = 40;
console.log(number);
if (true) {
	var number = 50;
	console.log(number);
}
console.log(number);

// Prueba con let
var text = "Cursoooooo";
console.log(text);
if (true) {
	let text = "bla bla bla bla";
	console.log(text);
}
console.log(text);