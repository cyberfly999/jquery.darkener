/*!
 * jQuery Darkener Plugin v0.9.0
 * https://github.com/cyberfly999/jquery.darkener
 *
 * Copyright 2018 by Vince Hehlen
 * Released under the MIT license
 */


(function ($) {

	$.fn.darkener = function (options) {

		var settings = $.extend({
			align: 'top', // eq. the css property top|left|right|bottom. defines from what side the overlay stretches. any other value defaults to 'top'
			size: '50%', // css value for width|height - defines how much of the area is covered by the overlay in total
			colorStart: 'rgba(0,0,0,0)', // the color on the strechted side
			colorEnd: 'rgba(0,0,0,0.8)', // the color on the border (of the image)
			opacity: '1', // overall opacity
			mixBlendMode: 'normal'
		}, options);

		settings.alignPrecision = '-1px';

		var template = '<div class="darkener" style="position:absolute">';

		return this.each(function () {

			var elem = $(this);
			var css = {};

			switch (settings.align) {
				case 'top':
				default:
					css = {
						top: settings.alignPrecision,
						left: settings.alignPrecision,
						right: settings.alignPrecision,
						height: settings.size
					};
					break;
				case 'left':
					css = {
						top: settings.alignPrecision,
						left: settings.alignPrecision,
						bottom: settings.alignPrecision,
						width: settings.size
					};
					break;
				case 'right':
					css = {
						top: settings.alignPrecision,
						right: settings.alignPrecision,
						bottom: settings.alignPrecision,
						width: settings.size
					};
					break;
				case 'bottom':
					css = {
						left: settings.alignPrecision,
						right: settings.alignPrecision,
						bottom: settings.alignPrecision,
						height: settings.size
					};
			}

			if (settings.colorStart === settings.colorEnd) {
				css.backgroundColor = settings.colorStart;
			} else {
				css.background = 'linear-gradient(to ' + settings.align + ', ' + settings.colorStart + ' 0%,' + settings.colorEnd + ' 100%)';
			}
			
			css.mixBlendMode = settings.mixBlendMode;
			css.opacity = settings.opacity;

			elem.css('overflow','hidden');
			elem.prepend($(template).css(css));

		});
	}

})(jQuery);
