'use strict'

var numberToSum = 0;
var totalSum = 0;
var account = 0;

do {
	numberToSum = parseInt(prompt("Ingesar un numero mayor o igual que 0 " , 0));
	if (!isNaN(numberToSum)) {
		if (numberToSum >= 0) {
			totalSum = totalSum + numberToSum;
			console.log(totalSum);
			account++;
		} else {
			break;
		}
	}
}while(true);
var media = totalSum / account;
alert("La suma total es de " + totalSum + ", y la media de la suma es " + media);