'use strict'

const EVENT_LOAD = 'load';
const ID_FORM = "#formMovie";
const EVENT_SUBMIT = 'submit';
const ID_TITLE = "#titleMovie";
const ERR_MESSAGE = "Datos agregados incorrectamente";
const ID_COUNTRY = "#countryMovie";
const ID_YEAR = "#yearMovie";
const GOOD_MESSAGE = "Datos agregados satisfactoriamente";
const ID_TABLE = "#tableMovie";
const ELEMENT_ROW = "tr";
const ELEMENT_COLUMN = "td";
const LENGTH = "length";
const KEY = "key";
const GET_ITEM = "getItem";
const SET_ITEM = "setItem";
const REMOVE_ITEM = "removeItem";
const CLEAR = "clear";
const ID_BTN_SEARCH = "#buscar";
const EVENT_CLICK = 'click';
const MESSAGE_SEARCH = "Busque la pelicula por el titulo.";
const TITLE_MESSAGE = "Titulo de la pelicula = ";
const COUNTRY_MESSAGE = "\nPais de la pelicula = ";
const YEAR_MESSAGE = "\nAño de la pelicula = ";
const ERR_MOVIE = "La pelicula que desea consultar no esta registrada.";
const ERR_ADD = "La pelicula que trata de agregar ya se encuentra en la lista.";
const ID_BTN_REMOVE = "#eliminar";
const MEESAGE_REMOVE = "Pelicula removida exitosamente";

window.addEventListener(EVENT_LOAD, () => {
	restart();
	eventSubmit();
	eventClick();
});

function eventClick() {
	var btnSearch = document.querySelector(ID_BTN_SEARCH);
	btnSearch.addEventListener(EVENT_CLICK, () => {
		alert(search());
	});
	var btnRemove = document.querySelector(ID_BTN_REMOVE);
	btnRemove.addEventListener(EVENT_CLICK, () => {
		remove();
	});
}

function remove() {
	var title = prompt(MESSAGE_SEARCH);
	var message = ERR_MESSAGE;
	if (localStorage.getItem(title) != null) {
		localStorage.removeItem(title);
		message = MEESAGE_REMOVE;
		location.reload();
	}
	alert(message);
}

function search() {
	var movie = JSON.parse(localStorage.getItem(prompt(MESSAGE_SEARCH)));
	return movie != undefined ? TITLE_MESSAGE + movie.titleMovie + COUNTRY_MESSAGE
	+ movie.countryMovie + YEAR_MESSAGE + movie.yearMovie : ERR_MOVIE;
}

function restart() {
	for (var index in localStorage) {
		if (index != LENGTH && index != KEY && index != GET_ITEM && index != SET_ITEM && 
			index != REMOVE_ITEM && index != CLEAR) {
			var movie = JSON.parse(localStorage.getItem(index));
			putInTable(movie.titleMovie, movie.countryMovie, movie.yearMovie);
		}
	}
}

function eventSubmit() {
	var form = document.querySelector(ID_FORM);
	form.addEventListener(EVENT_SUBMIT, () => {
		getData();
	});
}

function getData() {
	var title = document.querySelector(ID_TITLE).value;
	var message = ERR_MESSAGE;
	if (title.length > 0) {
		var country = document.querySelector(ID_COUNTRY).value;
		if (country.length > 0) {
			var year = parseInt(document.querySelector(ID_YEAR).value);
			if (year > 0 && addData(title, country, year)) {
				message = GOOD_MESSAGE;
			}
		}
	} 
	alert(message);
}

function addData(title, country, year) {
	if (show(title, country, year)) {
		let movie = {
			titleMovie : title,
			countryMovie : country,
			yearMovie : year
		}
		localStorage.setItem(title, JSON.stringify(movie));
		return true;
	} else {
		alert(ERR_ADD);
	}
	return false;
}

function show(title, country, year) {
	if (localStorage.getItem(title) == undefined) {
		putInTable(title, country, year);
		return true;
	}
	return false;
}

function putInTable(title, country, year) {
	var table = document.querySelector(ID_TABLE);
	var row = document.createElement(ELEMENT_ROW);
	var columnTitle = document.createElement(ELEMENT_COLUMN);
	columnTitle.append(title);
	row.append(columnTitle);
	var columnCountry = document.createElement(ELEMENT_COLUMN);
	columnCountry.append(country);
	row.append(columnCountry);
	var columnYear = document.createElement(ELEMENT_COLUMN);
	columnYear.append(year);
	row.append(columnYear);
	table.append(row);
}