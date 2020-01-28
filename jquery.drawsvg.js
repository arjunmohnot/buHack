var bar = $("#bar"),
	$window = $(window),
	docHeight = $(document).height(),
	baseX = $window.height() / docHeight * 90;
//document.getElementById("ytada").classList.add("animated","slower","infinite","tada","delay-2s");	
	
bar.css("background", "-webkit-linear-gradient(left, #ef1b41 " + baseX + "%, #1b1b1b " + baseX + "%)"), $window.scroll(function (e) {
	var t = $window.scrollTop() / docHeight * 100 + baseX;
	t > 75 ? bar.css("background", "-webkit-linear-gradient(left, #178808 " + t + "%, #1b1b1b " + t + "%)") : t > 50 ? bar.css("background", "-webkit-linear-gradient(left, #5271fe " + t + "%, #1b1b1b " + t + "%)") : t > 25 ? bar.css("background", "-webkit-linear-gradient(left, #f3ab1b " + t + "%, #1b1b1b " + t + "%)") : bar.css("background", "-webkit-linear-gradient(left, #ef1b41 " + t + "%, #1b1b1b " + t + "%)");
	let a = document.querySelectorAll(".ulc li a"),
		s = window.pageYOffset;
	for (let e of a) {
		if ("#services" == e.hash && $(e.hash).offset().top - 20 > s) {
			document.getElementById("0nav").classList.add("active"), document.getElementById("1nav").classList.remove("active1"), document.getElementById("2nav").classList.remove("active2"), document.getElementById("3nav").classList.remove("active3"), document.getElementById("4nav").classList.remove("active4"), document.getElementById("5nav").classList.remove("active5"), document.getElementById("6nav").classList.remove("active6");
			break
		}
		if ("#footer" == e.hash && $(e.hash).offset().top - 20 > s) {
			document.getElementById("0nav").classList.remove("active"), document.getElementById("1nav").classList.remove("active1"), document.getElementById("2nav").classList.remove("active2"), document.getElementById("3nav").classList.remove("active3"), document.getElementById("4nav").classList.remove("active4"), document.getElementById("5nav").classList.remove("active5"), document.getElementById("6nav").classList.add("active6");
			break
		}
		if ("#contact" == e.hash && $(e.hash).offset().top - 20 > s) {
			document.getElementById("0nav").classList.remove("active"), document.getElementById("1nav").classList.remove("active1"), document.getElementById("2nav").classList.remove("active2"), document.getElementById("3nav").classList.remove("active3"), document.getElementById("4nav").classList.remove("active4"), document.getElementById("5nav").classList.add("active5"), document.getElementById("6nav").classList.remove("active6");
			break
		}
		if ("#faq" == e.hash && $(e.hash).offset().top - 20 > s) {
			document.getElementById("0nav").classList.remove("active"), document.getElementById("1nav").classList.remove("active1"), document.getElementById("2nav").classList.remove("active2"), document.getElementById("3nav").classList.remove("active3"), document.getElementById("4nav").classList.add("active4"), document.getElementById("5nav").classList.remove("active5"), document.getElementById("6nav").classList.remove("active6");
			break
		}
		if ("#schedule" == e.hash && $(e.hash).offset().top - 20 > s) {
			document.getElementById("0nav").classList.remove("active"), document.getElementById("1nav").classList.remove("active1"), document.getElementById("2nav").classList.remove("active2"), document.getElementById("3nav").classList.add("active3"), document.getElementById("4nav").classList.remove("active4"), document.getElementById("5nav").classList.remove("active5"), document.getElementById("6nav").classList.remove("active6");
			break
		}
		if ("#prizes" == e.hash && $(e.hash).offset().top - 20 > s) {
			document.getElementById("0nav").classList.remove("active"), document.getElementById("1nav").classList.remove("active1"), document.getElementById("2nav").classList.add("active2"), document.getElementById("3nav").classList.remove("active3"), document.getElementById("4nav").classList.remove("active4"), document.getElementById("5nav").classList.remove("active5"), document.getElementById("6nav").classList.remove("active6");
			break
		}
		if ("#sponsors" == e.hash && $(e.hash).offset().top - 20 > s) {
			document.getElementById("0nav").classList.remove("active"), document.getElementById("1nav").classList.add("active1"), document.getElementById("2nav").classList.remove("active2"), document.getElementById("3nav").classList.remove("active3"), document.getElementById("4nav").classList.remove("active4"), document.getElementById("5nav").classList.remove("active5"), document.getElementById("6nav").classList.remove("active6");
			break
		}
	}
});