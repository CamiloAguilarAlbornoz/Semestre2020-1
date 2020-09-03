'use strict'

$(document).ready(() => {
	var box = $('#box');
	var hide = $('#hide');
	var show = $('#show');
	show.hide();
	hide.click(function() {
		box.slideUp('slow');
		hide.hide();
		show.show();
	});
	show.click(function () {
		box.slideDown('slow');
		show.hide();
		hide.show();
	});
	$('#toggle').click(function() {
		box.toggle('slow');
	});
	$('#fadetoggle').click(function() {
		box.fadeToggle('slow');
	});
	$('#slidetoggle').click(function() {
		box.slideToggle('slow');
	});
	$('#animate').click(function() {
		box.
		animate(
		{
			marginLeft: '500px',
			fontSize : '40px',
			height : '110px'
		}, 'slow').
		animate(
		{
			borderRadius : '900px',
			marginTop : '80px'
		}, 'slow').
		animate(
		{
			borderRadius : 'opx',
			marginLeft : '0px'
		}, 'slow').
		animate(
		{
			borderRadius: '0px',
			marginTop: '0px'
		}, 'slow', function() {
			alert("HEE HEE");
		});
	});
});