'use strict'

var numberOne = 0;
var numberTwo = 0;

do {
	numberOne = parseInt(prompt("Ingresar un numero", 0));
	numberTwo = parseInt(prompt("Ingresar otro numero", 0));	
} while (isNaN(numberOne) || isNaN(numberTwo));

var acomulate = "";

if (numberOne < numberTwo) {
	for (var i = numberOne; i <= numberTwo; i++) {
		if (i % 2 != 0) {
			acomulate += i + "\n";	
		}
	}
} else if (numberTwo < numberOne) {
	for (var i = numberTwo; i < numberOne; i++) {
		if (i % 2 != 0) {
			acomulate += i + "\n";	
		}
	}
}

alert(acomulate);