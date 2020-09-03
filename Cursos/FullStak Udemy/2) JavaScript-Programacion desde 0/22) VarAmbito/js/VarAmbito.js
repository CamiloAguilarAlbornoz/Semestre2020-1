'use strict'

var text = "Hola Mundo";
var number = 50;

function helloWorld(text) {
	console.log(text);
	console.log(number.toString());
	var hello_world = "Dentro de funcion";
	console.log(hello_world);
}

helloWorld(text);

/**
Trata de mostrar una variable local
de la funcion helloWorld, lo cual es imposible
porque dicha variable solo sirve en dicha funcion
*/
//console.log(hello_world);