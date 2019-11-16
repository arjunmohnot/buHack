var bar = $('#bar'),
    $window = $(window),
    docHeight = $(document).height(),
    baseX = $window.height() / docHeight * 90;

bar.css('background', '-webkit-linear-gradient(left, #d3d3d3 '+ baseX +'%, #1b1b1b '+ baseX +'%)');

$window.scroll(function(e) {      
    var x = $window.scrollTop() / docHeight * 100 + baseX;
    bar.css('background', '-webkit-linear-gradient(left, #d3d3d3 '+ x +'%, #1b1b1b '+ x +'%)');
});