'use strict'

$(document).ready(() => {
	var box = $('#box');
	/*box.mouseover(function() {
		$(this).css("background","red").css('color', 'green');
	});
	box.mouseout(function() {
		$(this).css("background", "green").css('color', 'red');
	});*/
	
	box.hover(controllMouseOver, controllMouseOut);
	box.click(function() {
		$(this).css('background', 'blue').css('color', 'white');
	});
	box.dblclick(function() {
		$(this).css('background', 'purple').css('color', 'orange');
	});

	//----------------------------------------------------------------------
	var input = $('#name');
	input.focus(function() {
		$(this).css('border', '2px dashed green');
	});
	var data = $('#data');
	input.blur(function() {
		$(this).css('border', '2px solid green');
		data.text($(this).val()).show();
	});
	data.mousedown(function() {
		$(this).css('border-color', 'orange');
	});
	data.mouseup(function() {
		$(this).css('border-color', 'green');
	});
	var ball = $('#catchMe');
	$(document).mousemove(function() {
		$('body').css('cursor', 'none');
		ball.css('left', event.clientX).css('top', event.clientY);
	});
});

function controllMouseOver() {
	$(this).css("background","red").css('color', 'green');
}

function controllMouseOut() {
	$(this).css("background", "green").css('color', 'red');
}