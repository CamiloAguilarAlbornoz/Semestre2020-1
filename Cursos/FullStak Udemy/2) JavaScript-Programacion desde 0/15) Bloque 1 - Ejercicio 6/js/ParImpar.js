'use strict'

var number = 0;

do {
	number = parseInt(prompt("Ingresar un numero ", 0));
} while (isNaN(number));

if (number % 2 == 0) {
	alert("El numero ingresado fue " + number + ", por lo tanto es par");
} else {
	alert("El numero ingresado fue " + number + ", por lo tanto es impar");
}