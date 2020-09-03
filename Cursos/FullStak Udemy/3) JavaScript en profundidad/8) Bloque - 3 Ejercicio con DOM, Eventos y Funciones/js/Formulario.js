'use strict'

window.addEventListener('load', () => {
	gettingFromFrom();
});

function gettingFromFrom() {
	var form = getValue("#form");
	var box = getValue("#dashed");
	box.style.display = "none";
	form.addEventListener('submit', () => {
		getData(box);
	});
}

function reasgin(err) {
	err.style.display = "none";
	return document.querySelector("#errLastName");
}

function getData(box) {
	var name = getValue("#name").value;
	var err = getValue("#errName");
	if (name.trim().length > 0) {
		err = reasgin(err);
		var lastName = getValue("#lastName").value;
		if (lastName.trim().length > 0) {
			err = reasgin(err);
			err = getValue("#errAge");
			var age = parseInt(getValue("#age").value);
			if (!isNaN(age) && age >= 0) {
				err.style.display = "none";
				var dataUser = [name, lastName, age];
				sendToPage(box, dataUser);
				box.style.display = "block";
			} else {
				putTextCase("#errAge", "red", "Edad ingresado es invalida", err);	
			}
		} else {
			putTextCase("#errLastName", "red", "Apellido ingresado es invalido", err);
		}
	} else {
		putTextCase("#errName", "red", "Nombre ingresado es invalido", err);
	}
}

function putTextCase(id, color, message, err) {
	err.style.display = "block";
	err.style.background = color;
	err.innerHTML = message;
}

function sendToPage(box, dataUser) {
	var row = document.createElement("tr");
	for (var index in dataUser) {
		var column = document.createElement("td");
		column.append(dataUser[index]);
		row.append(column);
	}
	box.append(row);
}

function getValue(value) {
	return document.querySelector(value);
}