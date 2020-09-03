'use strict'

var numberOne = 0;
var numberTwo = 0;

do {
	numberOne = parseInt(prompt("Ingresar por favor el primer numero.", 0));
	numberTwo = parseInt(prompt("Ingresar por favor el segundo numero.", 0));
}while (numberOne <= 0 || numberTwo <= 0 || isNaN(numberOne) || isNaN(numberTwo));

if (numberOne > numberTwo) {
	alert("El primer numero que ingreso es el mayor, " + numberOne + " es mayor que " + numberTwo);
} else if (numberTwo > numberOne) {
	alert("El segundo numero que ingreso es el mayor, " + numberTwo + " es mayor que " + numberOne);
} else {
	alert("Los numeros son iguales, " + numberOne + " es igual que " + numberTwo);
}