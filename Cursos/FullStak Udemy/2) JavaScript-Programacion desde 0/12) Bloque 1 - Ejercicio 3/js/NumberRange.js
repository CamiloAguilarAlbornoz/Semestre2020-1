'use strict'

var numberOne = 0;
var numberTwo = 0;

do {
	numberOne = parseInt(prompt("Ingresar un numero"));
	numberTwo = parseInt(prompt("Ingresar otro numero"));	
} while (isNaN(numberOne) || isNaN(numberTwo));

var acomulate = "";

if (numberOne < numberTwo) {
	for (var i = numberOne; i <= numberTwo; i++) {
		acomulate += i + "\n";
	}
} else if (numberTwo < numberOne) {
	for (var i = numberTwo; i < numberOne; i++) {
		acomulate += i + "\n";
	}
}

alert(acomulate);