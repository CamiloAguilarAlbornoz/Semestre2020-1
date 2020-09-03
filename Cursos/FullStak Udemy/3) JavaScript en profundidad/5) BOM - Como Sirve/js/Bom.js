'use strict'

mainMenu();

function mainMenu() {
	var options = "Seleccione una opcion"
					+ "\n\n 1) Obtener el tamanio de la ventana usando window."
					+ "\n\n 2) Obtener el tamanio de la ventana usando screen."
					+ "\n\n 3) Obtener la URL de la ventana."
					+ "\n\n 4) Cambiar de ventana."
					+ "\n\n 5) Salir";
	var optionGet = 0;
	do {
		do {
			optionGet = parseInt(prompt(options));
		} while (isNaN(optionGet))
		optionsMenu(optionGet);
	} while (optionGet != 5);
}

function optionsMenu(optionGet) {
	switch (optionGet) {
		case 1 :
		getBom();
		break;
		case 2 :
		sizeWithScreen();
		break;
		case 3 :
		getLocation();
		break;
		case 4 :
		goToAnotherDirection();
		break;
		case 5 :
		break;
		default :
		alert("La opcion ingresada esta en construccion o no existe");
		break;
	}
}

function getBom() {
	var show = "Usando window, la altura es de " + window.innerHeight 
	+ " y la anchura es de " + window.innerWidth;
	alert(show);
}

function sizeWithScreen() {
	var show = "Usando screen, la altura es de " + screen.height 
	+ " y la anchura es de " + screen.width;
	alert(show);		
}

function getLocation() {
	alert(window.location.href);
}

function goToAnotherDirection() {
	var url = prompt("Ingrese la direccion a donde quiere ir");
	window.open(url);
}