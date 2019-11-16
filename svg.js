var bar = $('#bar'),
    $window = $(window),
    docHeight = $(document).height(),
    baseX = $window.height() / docHeight * 100;

bar.css('background', '-webkit-linear-gradient(left, red '+ baseX +'%, green '+ baseX +'%)');

$window.scroll(function(e) {      
    var x = $window.scrollTop() / docHeight * 100 + baseX;
    bar.css('background', '-webkit-linear-gradient(left, red '+ x +'%, green '+ x +'%)');
});