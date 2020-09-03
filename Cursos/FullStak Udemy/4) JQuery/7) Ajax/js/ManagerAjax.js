$(document).ready(() => {

	// Obtiene el html
	$('#data').load('https://reqres.in/');

	// Obtiene todos los JSON de una ruta
	var divJson = $('#json');
	$.get('https://reqres.in/api/users', {page : 2}, response => {
		response.data.forEach(actual => {
			divJson.append('<tr><td>' + actual.id + '</td><td>' + actual.email + 
				'</td><td>' + actual.first_name + '</td><td>' + actual.last_name + 
				'</td><td><img src = "' + actual.avatar + '" width = "' + 100 + 
				'"/></td></tr>');
		});
	});

	// Envia al backend un data JSON
	$('#form').submit(function(e) {
		e.preventDefault();
		var user = {
			name : $('input[name="name"]').val(),
			lastName : $('input[name="lastName"]').val(),
			email : $('input[name="email"]').val()
		};
		sendUser($(this).attr('action'), user);
		return false;
	});
});

function sendUser(route, user) {
	$.ajax(
		{
			type: 'POST',
			url: route,
			data: user,
			beforeSend: function() {
				console.log('Enviando...');
			},
			success: function(userJson) {
				console.log(userJson);
			},
			error: function() {
				console.log('Ha ocurrido un error');
			},
			timeout: 2000
		});
	/*$.post(route, user, userJson => {
		console.log(userJson);
	}).done(function() {
		alert("Usuario añadido correctamente");
	});*/

}