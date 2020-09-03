'use strict'

listadoFrutas("manzana", "pera", "sandia", "Naranja", "Melon", "Coco");

/**
Parametros de tipo rest
*/
function listadoFrutas(frutaUno, frutaDos, ...todasLasFrutas) {
	console.log("Fruta 1 : ", frutaUno);
	console.log("Fruta 2 : ", frutaDos);
	console.log("Las demas : ", todasLasFrutas);
}

/**
Parametros de tipo Spread
*/
var frutasList = ["manzana", "pera"];
listadoFrutas(...frutasList, "sandia", "Naranja", "Melon", "Coco");