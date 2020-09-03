'use strict'

$(document).ready(() => {
	var getFind = $('#box').find('.sub');
	var getSimple = $('#box .sub');
	//console.log('------------Utilizando Find------------\n');
	for(var index in getFind) {
		if (index < getFind.length) {
		//	console.log(getFind[index]);
		} else {
			break;
		}
	}
	//console.log('------------Utilizando Forma simplificada------------\n');
	for(var index in getSimple) {
		if (index < getSimple.length) {
		//	console.log(getSimple[index]);
		} else {
			break;
		}
	}
	outAndFind(getSimple);
});

function outAndFind(getSimple) {
	var find = getSimple.eq(0).parent().parent().parent().find('[title="titulo"]').addClass('sub');
	console.log(find[0]);
}