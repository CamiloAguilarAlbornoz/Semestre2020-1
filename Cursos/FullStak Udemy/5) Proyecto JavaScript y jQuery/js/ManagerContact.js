$(document).ready(() => {

	// ----------------- Update Color -------------------
	var theme = $('#theme');
	var color = localStorage.getItem('href');
	$('div[id=toGreen]').click(function() {
		localStorage.setItem('href', 'css/green.css');
		theme.attr('href', 'css/green.css');
	});
	$('div[id=toRed]').click(function() {
		localStorage.setItem('href', 'css/red.css');
		theme.attr('href', 'css/red.css');
	});
	$('div[id=toBlue]').click(function() {
		localStorage.setItem('href', 'css/blue.css');
		theme.attr('href', 'css/blue.css');
	});
	switch(color) {
		case 'css/green.css':
		theme.attr('href', 'css/green.css');
		break;
		case 'css/red.css':
		theme.attr('href', 'css/red.css');
		break;
		case 'css/blue.css':
		theme.attr('href', 'css/blue.css');
		break;
	}

	// ---------------- Login falso --------------------------------------
	$('#login form').submit(function() {
		var inputName = $('#name').val();
		localStorage.setItem('nameForm', inputName);
	});

	var nameForm = localStorage.getItem('nameForm');
	if (nameForm != null && nameForm != undefined) {
		var aboutP = $('#about p');
		aboutP.html('<br><strong>Bienvenido, ' + nameForm + '</strong>');
		aboutP.append('<a href="#" id="logout">Cerrar sesion</a>');
		$('#login').hide();
		$('#logout').click(function(e) {
			localStorage.removeItem('nameForm');
			location.reload();
		});
	}

	// ------------------ Validacion ------------------------------------
	$('form input[name="birthdate"]').datepicker({
		dateFormat : 'dd-mm-yyyy'
	});

	$.validate({
    	lang: 'es',
  	});
});