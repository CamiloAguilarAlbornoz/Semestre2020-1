'use strict'

window.addEventListener('load', () => {
	controllBtn();
});

function controllBtn() {
	var btnStart = getComponent("#empezar");
	var interval = undefined;
	btnStart.addEventListener('click', () => {
		interval = myInterval();
	});
	var btnStop = getComponent("#parar");
	btnStop.addEventListener('click', () => {
		if (interval != undefined) {
			clearInterval(interval);
			interval = undefined;
		} else {
			alert("Aun no empieza el proceso");
		}
	});
}

function myInterval() {
	var text = getComponent("#encabezado");
	var interval = setInterval(() => {
		text.style.fontSize = text.style.fontSize == "50px" ? "30px" : "50px";
	}, 1000)
	return interval;
}

function getComponent(argumentQuery) {
	return document.querySelector(argumentQuery);
}