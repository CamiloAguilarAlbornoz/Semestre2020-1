'use strict'

const LOAD_EVENT = 'load';

window.addEventListenner(LOAD_EVENT, () => {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDate();
	var hour = date.getHours();
	var textHour = `
		El año es = ${year}
		El mes es = ${month + 1}
		El dia es = ${day}
		La Hora es = ${hour}
	`;
	console.log(textHour);
	console.log("Numero aleatorio", Math.ceil(Math.random()));
});