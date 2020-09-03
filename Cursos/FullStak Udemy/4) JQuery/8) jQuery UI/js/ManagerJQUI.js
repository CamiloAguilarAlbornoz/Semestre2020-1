$(document).ready(() => {
	var element = $('.element');
	element.draggable();
	element.resizable();
	var topSeasons = $('.topTemporadas');
	//topSeasons.selectable();
	topSeasons.sortable({
		update:function(event, ui) {
			console.log('se ha realizado un cambio');
		}
	});
	$('#elementHasMoved').draggable();
	$('#area').droppable({
		drop: function() {
			alert('Soltaste un elemento');
		}
	});

	$('#show').click(function() {
		$('.efectBox').toggle('fade');
	});
});