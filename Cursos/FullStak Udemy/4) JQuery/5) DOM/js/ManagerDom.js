'use strict'

$(document).ready(() => {
	reloadLinks();
	$('#addButton')
	.removeAttr('disabled')
	.click(function() {
		var link = $('#addLink');
		$('#menu').append('<li><a href = "' + link.val() + '"></a></li>');
		reloadLinks();
		link.val('');
	});
});

function reloadLinks() {
	$('a').each(function() {
		var actual = $(this);
		var hostName = actual.attr('href');
		actual.attr('target', 'blank');
		actual.text(hostName);
	});
}