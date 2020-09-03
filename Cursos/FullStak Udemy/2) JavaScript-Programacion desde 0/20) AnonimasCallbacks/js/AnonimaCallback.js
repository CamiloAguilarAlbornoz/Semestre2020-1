'use strict'

sumTheNumber(5, 6, function(data) {
	console.log("la suma es " + data);
}, function (data) {
	console.log("la suma por 2 es " + (data * 2));
});

/**
Funcion anonima
*/
var movie = function (movieName) {
	return "La pelicula es " + movieName;
}

/**
CallBack
*/
function sumTheNumber(numberOne, numberTwo, sumAndShow, sumForTwo) {
	var sum = numberOne + numberTwo;
	sumAndShow(sum);
	sumForTwo(sum);
	return sum;
}