'use strict'

mainMenu();

function mainMenu() {
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
		menu(number);
	} while(number != 5);
}

function menu(number) {
	switch (number) {
		case 1 :
		sumToSend();
		break;
		case 2 :
		restToSend();
		break;
		case 3 :
		multToSend();
		break;
		case 4 :
		divToSend();
		break;
		case 5 :
		break;
		default :
		defaultRes();
		break;
	}
}

function sumToSend() {
	var numberOne = 0;
	var numberTwo = 0;
	do {
		numberOne = parseInt(prompt("Ingresar un numero"));
		numberTwo = parseInt(prompt("Ingresar otro numero"));
	} while (isNaN(numberOne) || isNaN(numberTwo));
	sum(numberOne, numberTwo);
}

function restToSend() {
	var numberOne = 0;
	var numberTwo = 0;
	do {
		numberOne = parseInt(prompt("Ingresar un numero"));
		numberTwo = parseInt(prompt("Ingresar otro numero"));
	} while (isNaN(numberOne) || isNaN(numberTwo));
	rest(numberOne, numberTwo)
}

function multToSend() {
	var numberOne = 0;
	var numberTwo = 0;
	do {
		numberOne = parseInt(prompt("Ingresar un numero"));
		numberTwo = parseInt(prompt("Ingresar otro numero"));
	} while (isNaN(numberOne) || isNaN(numberTwo));
	mult(numberOne, numberTwo);
}

function divToSend() {
	var numberOne = 0;
	var numberTwo = 0;
	do {
		numberOne = parseInt(prompt("Ingresar un numero"));
		numberTwo = parseInt(prompt("Ingresar otro numero"));
	} while (isNaN(numberOne) || isNaN(numberTwo));
	div(numberOne, numberTwo);
}

function defaultRes() {
	document.write("Operacion no existente o en construccion." + "<br/>");
	alert("Operacion no existente o en construccion.");
	console.log("Operacion no existente o en construccion.");
}

function sum(numberOne, numberTwo) {
	var sum = numberOne + numberTwo;
	document.write("La suma de " + numberOne + " y " + numberTwo + " es " + sum + "<br/>");
	alert("La suma de " + numberOne + " y " + numberTwo + " es " + sum);
	console.log("La suma de " + numberOne + " y " + numberTwo + " es " + sum);
}

function rest(numberOne, numberTwo) {
	var rest = numberOne - numberTwo;
	document.write("La resta de " + numberOne + " y " + numberTwo + " es " + rest + "<br/>");
	alert("La resta de " + numberOne + " y " + numberTwo + " es " + rest);
	console.log("La resta de " + numberOne + " y " + numberTwo + " es " + rest);
}

function mult(numberOne, numberTwo) {
	var mult = numberOne * numberTwo;
	document.write("La multiplicacion de " + numberOne + " y " + numberTwo + " es " + mult + "<br/>");
	alert("La multiplicacion de " + numberOne + " y " + numberTwo + " es " + mult);
	console.log("La multiplicacion de " + numberOne + " y " + numberTwo + " es " + mult);
}

function div(numberOne, numberTwo) {
	var div = numberOne / numberTwo;
	document.write("La division de " + numberOne + " y " + numberTwo + " es " + div + "<br/>");
	alert("La division de " + numberOne + " y " + numberTwo + " es " + div);
	console.log("La division de " + numberOne + " y " + numberTwo + " es " + div);
}