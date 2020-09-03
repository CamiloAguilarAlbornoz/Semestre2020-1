'use strict'

window.addEventListener('load', () => {
	var user = {
		name : "Camilo",
		email : "camiloaaguilara@gmail.com",
		phoneNumber : "3125097765"
	};
	localStorage.setItem("User", JSON.stringify(user));
	var userGet = JSON.parse(localStorage.getItem("User"));
	var table = document.querySelector("#objetoRecuperado");
	var row = document.createElement("tr");
	var columnName = document.createElement("td");
	var columnEmail = document.createElement("td");
	var columnNumber = document.createElement("td");
	columnName.append(userGet.name);
	columnEmail.append(userGet.email);
	columnNumber.append(userGet.phoneNumber);
	row.append(columnName);
	row.append(columnEmail);
	row.append(columnNumber);
	table.append(row);
	setInterval(() => {
		localStorage.removeItem("User");
	}, 10000);
});