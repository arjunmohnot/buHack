center = [28.4500, 77.5843];
var mymap = L.map("map").setView(center, 11);
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: "pk.eyJ1IjoiYXJqdW4wMDkiLCJhIjoiY2sxYnc5MnY4MGR0dTNucGdvaG5ua3hsMCJ9.poKC0VmKs2fAPwugNM8uQw"
}).addTo(mymap);
var marker = L.marker(center).addTo(mymap);
marker.bindPopup("<b>buHack</b> 2020 <br>Bennett University, Greater Noida").openPopup();
