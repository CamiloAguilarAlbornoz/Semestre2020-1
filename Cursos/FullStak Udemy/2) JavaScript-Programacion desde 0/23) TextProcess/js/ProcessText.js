'use strict'

var number = 444;
var textOne = "Curso de JavaScript";
var textTwo = "Cursooooooo";
var data = number.toString();
console.log(data);
var dataMayus = "holaaa";
console.log(dataMayus);

// convierte el texto a mayuscula
dataMayus = dataMayus.toUpperCase();
console.log(dataMayus);

// convierte el texto a minuscula
dataMayus = dataMayus.toLowerCase();
console.log(dataMayus);

// calcular longitud de un texto

var name = "Camilo";

console.log(name.length);

for(var i = 0; i < name.length; i++) {
	console.log(name.charAt(i));
}
var textIndexOf = "Hola debo programar bien";
console.log(textIndexOf.match("debo")); // guarda la palabra en un array
console.log(textIndexOf.substr(10,9)); // muestra un string desde la posicion ingresada hasta la longitud ingresada
console.log(textIndexOf.startsWith("programar")); // muestra true si el string si comienza con la palabra ingreada
console.log(textIndexOf.includes("programar")); // muestra true si la palabra ingresada existe en el string

var textReplace = "Un lenguaje web es JavaScript por supuesto";
console.log("cadena original : " + textReplace);
textReplace = textReplace.replace("JavaScript", "PHP");
console.log("nueva cadena : " + textReplace);
var original = "JavaScript es un buen lenguaje de programacion";
console.log(original.slice(17, 21));
var arrayOriginal = original.split(" ");
console.log("Cadena recorrida \n\n");
for (var i = 0; i < arrayOriginal.length; i++) {
	console.log(arrayOriginal[i]);
}
var finalText = "  Holaaaa   ";
console.log(finalText);
console.log(finalText.trim());