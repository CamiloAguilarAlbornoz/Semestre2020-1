'use strict'

mainMenu();

function mainMenu() {
	var menuOptions = "Obteniendo una lista de coincidencias \n"
		+ "\n\n 1) Para obtener una NodeList de todos los elementos <p> en el documento."
		+ "\n\n 2) Lista de todos los elementos <div> del documento con una clase nota o alerta."
		+ "\n\n 3) Lista de elementos <p> cuyo padre inmediato es un <div> con la clase highlighted "
			+ " y que esta ubicado dentro de un contenedor con ID test."
		+ "\n\n 4) Selector de atributos para devolver una lista de elementos iframe en el documento "
			+ " que contienen un atributo llamado data-src."
		+ "\n\n 5) Lista de elementos de una lista con ID es userlist y un atributo data-active con valor 1."
		+ "\n\n 6) Salir.";
	var option = 0;
	do {
		do {
			option = parseInt(prompt(menuOptions));
		} while (isNaN(option));
		selectOption(option);
	} while (option != 6);
}

function selectOption(option) {
	switch (option) {
		case 1 :
		AllPInDocument();
		break;
		case 2 :
		allDivWithClass();
		break;
		case 3 :
		allPFromDivClassFromID();
		break;
		case 4 :
		allIframeWIthAttribute();
		break;
		case 5 :
		allElementsWithAttributeFromList();
		break;
		case 6 :
		break;
		default :
		alert("Opcion en construccion o no existente");
		break;
	}
}

function allElementsWithAttributeFromList() {
	var container = document.querySelector("#userList");
	var matches = container.querySelectorAll("li[data-active =a1]");
	showResult(matches);
}

function allIframeWIthAttribute() {
	var matches = document.querySelectorAll("iframe[data-src]");
	showResult(matches);
}

function allPFromDivClassFromID() {
	var container = document.querySelector("#test");
	var matches = container.querySelectorAll("div.highlighted> p");
	showResult(matches);
}

function allDivWithClass() {
	var matches = document.querySelectorAll("div.nota, div.alerta");
	showResult(matches);
}

function AllPInDocument() {
	var matches = document.querySelectorAll("p");
	showResult(matches);
}

function showResult(array) {
	var acum = "";
	array.forEach(actual => {
		acum += actual.innerHTML + "\n\n";
	});
	alert(acum);
}