center = [28.4500, 77.5843];
var mymap = L.map("map").setView(center, 10);
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: "pk.eyJ1IjoiYXJqdW4wMDkiLCJhIjoiY2sxYnc5MnY4MGR0dTNucGdvaG5ua3hsMCJ9.poKC0VmKs2fAPwugNM8uQw"
}).addTo(mymap);
var marker = L.marker(center).addTo(mymap);
marker.bindPopup("<b>BU'Hack</b> 2020 <br>Bennett University, Greater Noida").openPopup();

var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 1250,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 2009 + 50 * i;
    }
  });
