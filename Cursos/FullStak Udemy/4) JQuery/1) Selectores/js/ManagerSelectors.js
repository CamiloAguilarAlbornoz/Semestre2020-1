'use strict'

const SECOND_ID = '#segundo';
const BACKGROUND = 'background';
const COLOR_RED = 'red';
const PADDING = 'padding';
const SIZE = '100px';
const COLOR = 'color';
const COLOR_WHITE = 'white';
const FIRST_ID = '#primero';
const BLUE_COLOR = 'blue';
const ORANGE_COLOR = 'orange';
const THIRD_ID = '#tercero';
const COLOR_YELLOW = 'yellow';
const COLOR_PURPLE = 'purple';
const EMPTY_CLASS = '.empty';
const EMPTY_ADD = 'empty';
const HTML_P = 'p';
const BIG_CLASS = 'big';
const CURSOR = 'cursor';
const POINTER = 'pointer';

$(document).ready(() => {
	var elementSecond = $(SECOND_ID);
	elementSecond.css(BACKGROUND, COLOR_RED).css(PADDING, SIZE).css(COLOR, COLOR_WHITE);
	$(FIRST_ID).css(BACKGROUND, BLUE_COLOR).css(PADDING, SIZE).css(COLOR, ORANGE_COLOR);
	$(THIRD_ID).css(BACKGROUND, COLOR_YELLOW).css(PADDING, SIZE).css(COLOR, COLOR_PURPLE);
	$(EMPTY_CLASS).css(PADDING, SIZE);
	elementSecond.click(function () {
		$(this).addClass(EMPTY_ADD);
	});
	$(HTML_P).css(CURSOR, POINTER).click(function () {
		var element = $(this);
		if (!element.hasClass(BIG_CLASS)) {
			element.addClass(BIG_CLASS);
		} else {
			element.removeClass(BIG_CLASS);
		}
	});
});