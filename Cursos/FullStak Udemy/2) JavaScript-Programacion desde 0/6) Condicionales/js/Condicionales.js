'use strict'

var age = 9;
var name = "Samuel Murcia";

if (age >= 18) {
	console.log(name, "es mayor de edad porque tiene", age);
	if (age <= 33) {
		console.log("todavia eres milenial");
	} else if (age >= 70) {
		console.log("eres anciano");
	} else {
		console.log("ya no eres milenial");
	}
} else {
	console.log(name, "es menor de edad porque tiene", age);
}

// OPERADORES LOGICOS

var year = 2029;

if (year != 2016) {
	console.log("El año no es 2016, realmente es", year);
}

if (year >= 2000 && year <= 2020 && year != 2019) {
	console.log("Estamos en la era actual");
} else {
	console.log("Estamos en la postmoderna");
}

if (year == 2008 || (year >= 2019 && year == 2029)) {
	console.log("El año acaba en 9");
} else {
	console.log("año no registrado");
}