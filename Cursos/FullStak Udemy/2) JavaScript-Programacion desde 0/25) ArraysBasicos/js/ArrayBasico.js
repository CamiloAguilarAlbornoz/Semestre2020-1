'use strict'

var names = ["Camilo", "Andres", "Aguilar", "Albornoz", 22, true];
var languages = new Array("JavaScript", "PHP", "Java", "Python");
/*console.log(names.length);
console.log(languages.length);
var element = parseInt(prompt("Que elemento del array desea", 0));
if (element >= 0 && element < names.length) {
	alert(names[element]);
} else {
	alert("Introduzca algo que sirva!!!!!!");
}*/

/*
for (var i = 0; i < languages.length; i++) {
	console.log(languages[i]);
}*/

languages.forEach((element, index) => {
	console.log(index + ") " + element);
});
