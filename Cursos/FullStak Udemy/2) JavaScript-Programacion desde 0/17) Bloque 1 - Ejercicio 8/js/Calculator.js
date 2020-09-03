'use strict'

var show = "Calculadora " + 
	"\n\n 1. Sumar" +
	"\n 2. Restar" +
	"\n 3. Multiplicar" +
	"\n 4. Dividir" +
	"\n 5. Salir" +
	"\n\n Ingrear el numero de la operacion que desea realizar";

var number = 0;

do {
	do {
		number = parseInt(prompt(show));
	} while (isNaN(number));
	switch (number) {
		case 1 : 
		do {
			var numberOne = parseInt(prompt("Ingresar un numero"));
			var numberTwo = parseInt(prompt("Ingresar otro numero"));
		} while (isNaN(numberOne) || isNaN(numberTwo));
		var sum = numberOne + numberTwo;
		document.write("La suma de " + numberOne + " y " + numberTwo + " es " + sum + "<br/>");
		alert("La suma de " + numberOne + " y " + numberTwo + " es " + sum);
		console.log("La suma de " + numberOne + " y " + numberTwo + " es " + sum);
		break;
		case 2 :
		do {
			var numberOne = parseInt(prompt("Ingresar un numero"));
			var numberTwo = parseInt(prompt("Ingresar otro numero"));
		} while (isNaN(numberOne) || isNaN(numberTwo));
		var rest = numberOne - numberTwo;
		document.write("La resta de " + numberOne + " y " + numberTwo + " es " + rest + "<br/>");
		alert("La resta de " + numberOne + " y " + numberTwo + " es " + rest);
		console.log("La resta de " + numberOne + " y " + numberTwo + " es " + rest);
		break;
		case 3 :
		do {
			var numberOne = parseInt(prompt("Ingresar un numero"));
			var numberTwo = parseInt(prompt("Ingresar otro numero"));
		} while (isNaN(numberOne) || isNaN(numberTwo));
		var mult = numberOne * numberTwo;
		document.write("La multiplicacion de " + numberOne + " y " + numberTwo + " es " + mult + "<br/>");
		alert("La multiplicacion de " + numberOne + " y " + numberTwo + " es " + mult);
		console.log("La multiplicacion de " + numberOne + " y " + numberTwo + " es " + mult);
		break;
		case 4 :
		do {
			var numberOne = parseInt(prompt("Ingresar un numero"));
			var numberTwo = parseInt(prompt("Ingresar otro numero"));
		} while (isNaN(numberOne) || isNaN(numberTwo));
		var div = numberOne / numberTwo;
		document.write("La division de " + numberOne + " y " + numberTwo + " es " + div + "<br/>");
		alert("La division de " + numberOne + " y " + numberTwo + " es " + div);
		console.log("La division de " + numberOne + " y " + numberTwo + " es " + div);
		break;
		case 5 :
		break;
		default :
		document.write("Operacion no existente o en construccion." + "<br/>");
		alert("Operacion no existente o en construccion.");
		console.log("Operacion no existente o en construccion.");
		break;
	}
} while (number != 5);