var bar = $('#bar'),
	$window = $(window),
	docHeight = $(document).height(),
	baseX = $window.height() / docHeight * 90;


bar.css('background', '-webkit-linear-gradient(left, #ef1b41 ' + baseX + '%, #1b1b1b ' + baseX + '%)');

$window.scroll(function (e) {
	var x = $window.scrollTop() / docHeight * 100 + baseX;

	if (x > 75) {
		bar.css('background', '-webkit-linear-gradient(left, #178808 ' + x + '%, #1b1b1b ' + x + '%)');
	} else if (x > 50) {
		bar.css('background', '-webkit-linear-gradient(left, #5271fe ' + x + '%, #1b1b1b ' + x + '%)');
	} else if (x > 25) {
		bar.css('background', '-webkit-linear-gradient(left, #f3ab1b ' + x + '%, #1b1b1b ' + x + '%)');
	} else {
		bar.css('background', '-webkit-linear-gradient(left, #ef1b41 ' + x + '%, #1b1b1b ' + x + '%)');
	}

});