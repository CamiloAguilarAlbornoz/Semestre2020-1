'use strict'

var age = 18;
var print = "";

switch(age) {
	case 18:
		print = "Acabas de cumplir la mayoria de edad.";
	break;
	case 25:
		print = "Ya eres un adulto.";
	break;
	case 40:
		print = "Crisis de los 40.";
	break;
	case 70:
		print = "Eres un anciano.";
	break;
	default:
		print = "Tu edad es neutra.";
	break;
}
console.log(print);