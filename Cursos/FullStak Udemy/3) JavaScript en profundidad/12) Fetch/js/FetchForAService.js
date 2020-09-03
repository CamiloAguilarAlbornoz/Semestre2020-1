'use strict'

const EVENT_LOAD = 'load';
const URL_BACKEND = "https://reqres.in/api/users?page=2";
const ID_TABLE = "#tableUsers";
const ROW_TYPE = "tr";
const COLUMN_TYPE = "td";
const ID_LIST_ATTRIBUTE_USER = "#user";
const ELEMENT_TO_LIST = "li";
const URL_SINGLE_OBJECT = "https://reqres.in/api/users/2";
const IMAGE_TYPE = "img";
const WIDTH_IMAGE = "100";

window.addEventListener(EVENT_LOAD, () => {
	var usersList = new Array();
	var user = undefined;
	getUsers().
	then(data => data.json()).
	then(usersList => {
		listOfUsers(usersList);
		return getUserByData();
	}).
	then(data => data.json()).
	then(user => {
		showFind(user.data);
		return getInfo();
	}).
	then(data => {
		console.log(data);
	});
});

function showFind(user) {
	var list = document.querySelector(ID_LIST_ATTRIBUTE_USER);
	showInList(user.id, list);
	showInList(user.email, list);
	showInList(user.first_name, list);
	showInList(user.last_name, list);
	showInList(createImage(user), list);
}

function showInList(attribute, list) {
	var li = document.createElement(ELEMENT_TO_LIST);
	li.append(attribute);
	list.append(li);
}

function getUserByData() {
	return fetch(URL_SINGLE_OBJECT);
}

function getUsers() {
	return fetch(URL_BACKEND);
}

function listOfUsers(usersList) {
	usersList = usersList.data;
	var table = document.querySelector(ID_TABLE);
	usersList.forEach(user => {
		show(user, table);
	});
}

function show(user, table) {
	var row = document.createElement(ROW_TYPE);
	put(table, COLUMN_TYPE, user.id, row);
	put(table, COLUMN_TYPE, user.email, row);
	put(table, COLUMN_TYPE, user.first_name, row);
	put(table, COLUMN_TYPE, user.last_name, row);
	put(table, COLUMN_TYPE, createImage(user), row);
	table.append(row);
}

function put(table, typeCreate, attribute, row) {
	var column = document.createElement(typeCreate);
	column.append(attribute);
	row.append(column);
}

function createImage(user) {
	var avatarUser = document.createElement(IMAGE_TYPE);
	avatarUser.src = user.avatar;
	avatarUser.width = WIDTH_IMAGE;
	return avatarUser;
}

function getInfo() {
	var user = {
		name : "Camilo",
		country : "Colombia",
		age : 22
	};
	return new Promise((resolve, reject) => {
		var userString = JSON.stringify(user);
		if (typeof userString != 'string') return reject("error");
		return resolve(userString);
	});
}