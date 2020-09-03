'use strict'

const ATTRIBUTE_SONG = '[title = "Song"]';
const ATTRIBUTE_BORDER = '[title="titulo1"]';
const PADDING = 'padding';
const BACKGROUND = 'background';
const COLOR_RED = 'red';
const SIZE_PADDING = '30px';
const COLOR = 'color';
const COLOR_WHITE = 'white';
const HTML_P = 'p';
const FONT_SIZE = 'font-size';
const CLASS_BOR = '.bor';
const BOR = 'bor';
const TABLE = 'table';
const CLASS_MARGIN_TOP = 'marginTop';
const P_TABLE = 'p, table';

$(document).ready(() => {
	$(ATTRIBUTE_SONG).css(BACKGROUND, COLOR_RED).css(COLOR, COLOR_WHITE);
	$(ATTRIBUTE_BORDER).css(PADDING, SIZE_PADDING).css(COLOR, COLOR_RED);
	$(HTML_P).click(function() {
		var actualP = $(this);
		if (!actualP.hasClass(BOR)) {
			actualP.addClass(BOR);
		} else {
			actualP.removeClass(BOR);
		}
	});
	$(P_TABLE).addClass(CLASS_MARGIN_TOP); // Encuentras el parrafo y la tabla y les agrega la clase
	var search = $('#box').parent(ATTRIBUTE_BORDER);
	console.log(search);
});