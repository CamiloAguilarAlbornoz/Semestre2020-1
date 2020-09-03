'use strict'

/**
Funcion que se encarga de enviar la suma
de 2 numeros a la funcion callback para mostrar
el resultado
*/
function sum(numberOne, numberTwo, showSum) {
	showSum(numberOne + numberTwo);
}

/**
Invocacion de la funcion sum, resive
los 2 numeros para realizar la suma y crea
la funcion callback, guardando en result
el resultado de los 2 numeros para mostrarlo
en la consola del navegador
*/
sum(7, 6, result => {
	console.log(result);
});