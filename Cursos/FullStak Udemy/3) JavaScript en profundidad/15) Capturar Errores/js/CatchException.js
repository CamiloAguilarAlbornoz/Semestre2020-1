'use strict'

const EVENT_LOAD = 'load';

window.addEventListener(EVENT_LOAD, () => {
	try {
		var year = 2020;
		alert(year);
		var list = new Array(100000000000);
	} catch (error) {
		alert("ha ocurrido un error en el codigo \n" + error);
	}
});