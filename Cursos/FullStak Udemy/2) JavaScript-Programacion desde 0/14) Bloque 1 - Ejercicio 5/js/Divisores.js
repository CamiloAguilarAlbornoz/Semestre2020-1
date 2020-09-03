'use strict'

var number = 0;

do {
	number = parseInt(prompt("Ingrese un numero mayor o igual a 0 " , 0));
} while (isNaN(number) || number < 0);

var accumlate = "";

for (var i = 1; i <= number; i++) {
	if (number % i == 0) {
		accumlate += i + "\n";
	}
}

alert(accumlate);