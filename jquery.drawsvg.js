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
	
	
  let navigationLinks = document.querySelectorAll('.ulc li a');
  let fromTop = window.pageYOffset;
  
  //console.log(navigationLinks);
  
  for(let i of navigationLinks){
	  
	  //console.log(document.querySelector(i.hash));
	  
	  //home, services,sponsors,prizes,schedule,faq,contact
	  

	  
	  
	  if(i.hash=="#services" && ((($(i.hash).offset().top)-20)>fromTop)){
		
		
			  console.log( fromTop);
			  	  console.log(1);
	  console.log($(i.hash).offset().top);
		  document.getElementById("0nav").classList.add("active");
		   document.getElementById("1nav").classList.remove("active1");
		    document.getElementById("2nav").classList.remove("active2");
			 document.getElementById("3nav").classList.remove("active3");
			  document.getElementById("4nav").classList.remove("active4");
			   document.getElementById("5nav").classList.remove("active5");
			    document.getElementById("6nav").classList.remove("active6");
				break;
	  }
	  
	  
	  if(i.hash=="#footer" && ((($(i.hash).offset().top)-20)>fromTop)){
		
			  console.log( fromTop);
			  	  console.log(7);
	  console.log($(i.hash).offset().top);
		  document.getElementById("0nav").classList.remove("active");
		   document.getElementById("1nav").classList.remove("active1");
		    document.getElementById("2nav").classList.remove("active2");
			 document.getElementById("3nav").classList.remove("active3");
			  document.getElementById("4nav").classList.remove("active4");
			   document.getElementById("5nav").classList.remove("active5");
			    document.getElementById("6nav").classList.add("active6");
				break;
	  }
	  
	  if(i.hash=="#contact" && ((($(i.hash).offset().top)-20)>fromTop)){
			  console.log( fromTop);
			  	  console.log(6);
	  console.log($(i.hash).offset().top);
		  document.getElementById("0nav").classList.remove("active");
		   document.getElementById("1nav").classList.remove("active1");
		    document.getElementById("2nav").classList.remove("active2");
			 document.getElementById("3nav").classList.remove("active3");
			  document.getElementById("4nav").classList.remove("active4");
			   document.getElementById("5nav").classList.add("active5");
			    document.getElementById("6nav").classList.remove("active6");
				break;
	  }
	 if(i.hash=="#faq" && ((($(i.hash).offset().top)-20)>fromTop)){
			  console.log( fromTop);
			  	  console.log(5);
	  console.log($(i.hash).offset().top);
		  document.getElementById("0nav").classList.remove("active");
		   document.getElementById("1nav").classList.remove("active1");
		    document.getElementById("2nav").classList.remove("active2");
			 document.getElementById("3nav").classList.remove("active3");
			  document.getElementById("4nav").classList.add("active4");
			   document.getElementById("5nav").classList.remove("active5");
			    document.getElementById("6nav").classList.remove("active6");
				break;
	  }
	  
	 if(i.hash=="#schedule" && ((($(i.hash).offset().top)-20)>fromTop)){
			  console.log( fromTop);
			  	  console.log(4);
	  console.log($(i.hash).offset().top);
		  document.getElementById("0nav").classList.remove("active");
		   document.getElementById("1nav").classList.remove("active1");
		    document.getElementById("2nav").classList.remove("active2");
			 document.getElementById("3nav").classList.add("active3");
			  document.getElementById("4nav").classList.remove("active4");
			   document.getElementById("5nav").classList.remove("active5");
			    document.getElementById("6nav").classList.remove("active6");
				break;
	  }
	  
	 if(i.hash=="#prizes" && ((($(i.hash).offset().top)-20)>fromTop)){
			  console.log( fromTop);
			  	  console.log(3);
	  console.log($(i.hash).offset().top);
		  document.getElementById("0nav").classList.remove("active");
		   document.getElementById("1nav").classList.remove("active1");
		    document.getElementById("2nav").classList.add("active2");
			 document.getElementById("3nav").classList.remove("active3");
			  document.getElementById("4nav").classList.remove("active4");
			   document.getElementById("5nav").classList.remove("active5");
			    document.getElementById("6nav").classList.remove("active6");
				break;
	  }
	  
	 if(i.hash=="#sponsors" && ((($(i.hash).offset().top)-20)>fromTop)){
			
				  console.log( fromTop);
				  console.log(2);
	  console.log($(i.hash).offset().top);
		  document.getElementById("0nav").classList.remove("active");
		   document.getElementById("1nav").classList.add("active1");
		    document.getElementById("2nav").classList.remove("active2");
			 document.getElementById("3nav").classList.remove("active3");
			  document.getElementById("4nav").classList.remove("active4");
			   document.getElementById("5nav").classList.remove("active5");
			    document.getElementById("6nav").classList.remove("active6");
				break;
	  }
	  
	  
	  
  }

});