$(document).ready(() => {

	//--------------------------- Slider ----------------------------------
	$(function(){
		$('.bxslider').bxSlider({
	    	mode: 'fade',
	    	captions: true,
	    	slideWidth: 1200
	  	});
	});

	//--------------------------- Posts ---------------------------------------------
	var postList = [
		{
			title: 'Prueba de titulo 1',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur volutpat lobortis. Vivamus dolor felis, hendrerit vel ex ut, sollicitudin laoreet ante. In pharetra suscipit lectus, vitae malesuada arcu. Aenean consectetur lacus vitae lobortis molestie. Fusce vestibulum arcu nec augue sodales, a pretium neque elementum. Proin at nulla in dui varius porta. Etiam feugiat leo ligula, in vestibulum enim pretium a. Sed molestie eros vitae dignissim imperdiet. Duis sed nulla semper, imperdiet urna quis, convallis leo. Nullam eleifend ornare commodo. Duis sed risus in turpis malesuada ullamcorper a sed purus. Phasellus quis suscipit odio. Sed scelerisque sagittis sodales. Quisque dictum, nisl at tempus suscipit, velit eros fringilla felis, a tincidunt odio velit quis mauris. Donec vel nunc quis magna interdum vulputate et vel diam.',
		},
		{
			title: 'Prueba de titulo 2',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur volutpat lobortis. Vivamus dolor felis, hendrerit vel ex ut, sollicitudin laoreet ante. In pharetra suscipit lectus, vitae malesuada arcu. Aenean consectetur lacus vitae lobortis molestie. Fusce vestibulum arcu nec augue sodales, a pretium neque elementum. Proin at nulla in dui varius porta. Etiam feugiat leo ligula, in vestibulum enim pretium a. Sed molestie eros vitae dignissim imperdiet. Duis sed nulla semper, imperdiet urna quis, convallis leo. Nullam eleifend ornare commodo. Duis sed risus in turpis malesuada ullamcorper a sed purus. Phasellus quis suscipit odio. Sed scelerisque sagittis sodales. Quisque dictum, nisl at tempus suscipit, velit eros fringilla felis, a tincidunt odio velit quis mauris. Donec vel nunc quis magna interdum vulputate et vel diam.',
		},
		{
			title: 'Prueba de titulo 3',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur volutpat lobortis. Vivamus dolor felis, hendrerit vel ex ut, sollicitudin laoreet ante. In pharetra suscipit lectus, vitae malesuada arcu. Aenean consectetur lacus vitae lobortis molestie. Fusce vestibulum arcu nec augue sodales, a pretium neque elementum. Proin at nulla in dui varius porta. Etiam feugiat leo ligula, in vestibulum enim pretium a. Sed molestie eros vitae dignissim imperdiet. Duis sed nulla semper, imperdiet urna quis, convallis leo. Nullam eleifend ornare commodo. Duis sed risus in turpis malesuada ullamcorper a sed purus. Phasellus quis suscipit odio. Sed scelerisque sagittis sodales. Quisque dictum, nisl at tempus suscipit, velit eros fringilla felis, a tincidunt odio velit quis mauris. Donec vel nunc quis magna interdum vulputate et vel diam.',
		},
		{
			title: 'Prueba de titulo 4',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur volutpat lobortis. Vivamus dolor felis, hendrerit vel ex ut, sollicitudin laoreet ante. In pharetra suscipit lectus, vitae malesuada arcu. Aenean consectetur lacus vitae lobortis molestie. Fusce vestibulum arcu nec augue sodales, a pretium neque elementum. Proin at nulla in dui varius porta. Etiam feugiat leo ligula, in vestibulum enim pretium a. Sed molestie eros vitae dignissim imperdiet. Duis sed nulla semper, imperdiet urna quis, convallis leo. Nullam eleifend ornare commodo. Duis sed risus in turpis malesuada ullamcorper a sed purus. Phasellus quis suscipit odio. Sed scelerisque sagittis sodales. Quisque dictum, nisl at tempus suscipit, velit eros fringilla felis, a tincidunt odio velit quis mauris. Donec vel nunc quis magna interdum vulputate et vel diam.',
		},
		{
			title: 'Prueba de titulo 5',
			date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('YYYY'),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur volutpat lobortis. Vivamus dolor felis, hendrerit vel ex ut, sollicitudin laoreet ante. In pharetra suscipit lectus, vitae malesuada arcu. Aenean consectetur lacus vitae lobortis molestie. Fusce vestibulum arcu nec augue sodales, a pretium neque elementum. Proin at nulla in dui varius porta. Etiam feugiat leo ligula, in vestibulum enim pretium a. Sed molestie eros vitae dignissim imperdiet. Duis sed nulla semper, imperdiet urna quis, convallis leo. Nullam eleifend ornare commodo. Duis sed risus in turpis malesuada ullamcorper a sed purus. Phasellus quis suscipit odio. Sed scelerisque sagittis sodales. Quisque dictum, nisl at tempus suscipit, velit eros fringilla felis, a tincidunt odio velit quis mauris. Donec vel nunc quis magna interdum vulputate et vel diam.',
		}
	];
	postList.forEach(item => {
		var post =`
		<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p> 
					${item.content}
				</p>
				<a href="#" class="button-more">Leer Mas</a>
				</article>
		`;
		$('#post').append(post);
	});

	//----------------------- Selector de tema ------------------------------
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

	// ------------------------- Scroll ariba de la web ------------------
	$('.up').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	// ------------------------ Login falso ------------------------------
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
});