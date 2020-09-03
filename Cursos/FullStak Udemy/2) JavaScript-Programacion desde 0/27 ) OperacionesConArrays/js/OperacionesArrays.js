'use strict'

var nameList = ["JavaScript", "PHP", "Java EE", "Python"];
menu();

function menu() {
	var option = 0;
	nameList.sort();
	var menu = "Operaciones con arreglos\n\n" +
			"1. Agregar \n" +
			"2. Mostrar \n" +
			"3. Eliminar \n" +
			"4. Convertir a texto \n" +
			"5. Mostrar en reversa \n" +
			"6. Buscar \n" +
			"7. Otener indice o pocision \n" +
			"8. Saber si un elemento esta en la lista \n" + 
			"9. Salir\n\n" +
			"Ingrese el dato de la operacion a realizar";
	do {
		option = getOption(menu);
		managerMenu(option);
	} while(option != 9);
}

function managerMenu(option) {
	switch (option) {
		case 1 :
		add();
		break;
		case 2 :
		alert(show());
		break;
		case 3 :
		remove();
		break;
		case 4 :
		alert(nameList.join());
		break;
		case 5 :
		showInRevers();
		break;
		case 6 :
		alert(get());
		break;
		case 7 :
		alert(index());
		break;
		case 8 :
		alert(isInTheArray());
		break;
		case 9 :
		break;
		default : alert("Opcion no existente o en desarrollo");
		break;
	}
}

function isInTheArray() {
	var dataToFind = prompt("Ingrese el dato que desea encontrar");
	var dataGet = nameList.some(name => name == dataToFind);
	if (dataGet) {
		return "El elemento existe ;).";
	} else {
		return "busque algo que exista.";
	}
}

function get() {
	var dataToFind = prompt("Ingrese el dato que desea encontrar");
	var dataGet = nameList.find(name => name == dataToFind);
	if (dataGet != undefined) {
		return dataGet;
	} else {
		return "busque algo que exista.";
	}
}

function index() {
	var dataToFind = prompt("Ingrese el dato que desea encontrar");
	var dataGet = nameList.findIndex(name => name == dataToFind);
	if (dataGet != undefined) {
		return dataGet;
	} else {
		return "busque algo que exista."
	}
}

function showInRevers() {
	var auxArray = nameList;
	auxArray.reverse();
	var show = "";
	auxArray.forEach(aux => {
		show += aux + "\n";
	});
	alert(show);
}

function add() {
	nameList.push(prompt("Ingresar un elemento"));
	nameList.sort();
}

function remove() {
	var option = 0;
	var menu = "Eliminar\n\n" +
			"1. Eliminar el primero \n" +
			"2. Eliminar un elemento de preferencia \n" +
			"3. Volver\n\n" +
			"Ingrese el dato de la operacion a realizar";
	do {
		option = getOption(menu);
		managerRemove(option);
	} while(option != 3);
}

function managerRemove(option) {
	switch (option) {
		case 1 :
		nameList.pop();
		break;
		case 2 :
		removeOneElement();
		break;
		case 3 :
		break;
		default : alert("Opcion no existente o en desarrollo");
		break;
	}
}

function removeOneElement() {
	var index = nameList.indexOf(prompt(show() + "\n\nIngrese el elemento que desea eliminar"));
	if (index > -1) {
		alert(index);
		nameList.splice(index, 1);
	} else {
		alert("Elimine algo que exista");
	}
}

function show() {
	var show = "";
	var index = 1;
	for (let name in nameList) {
		show += (index++) + ") " + nameList[name] + "\n";
	}
	return show;
}

function getOption(menu) {
	var option = 0;
	do {
		option = parseInt(prompt(menu));
	} while (isNaN(option));
	return option;
}