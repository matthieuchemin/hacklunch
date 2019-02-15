
function addMarkerOnMap(position, name, id, img) {
    map.on('load', function() {
    map.loadImage('resources/'+img, function(error, image) {
        if (error) throw error;
        map.addImage(name, image);
        map.addLayer({
            "id": id,
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": position
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": name,
                "icon-size": 1
            }
        });
    });
});
}

mapboxgl.accessToken = 'pk.eyJ1IjoicGVwcGVyaGFja2x1bmNoIiwiYSI6ImNqczV5ZXkyMzBpeHIzeXNieG0xc2J0dG4ifQ.pOCQjUyCYIzE4to5kjmEqw';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/outdoors-v9', //stylesheet location
    center: [13.396003, 52.528878], // starting position. // 52.5270968,13.4020788,15z
    zoom: 14 // starting zoom
});

map.addControl(new mapboxgl.FullscreenControl());

addMarkerOnMap([13.4020788, 52.5270968], "a", "a", "map-marker.png");

var BASE_URL = "http://127.0.0.1:8000"

function fetchLocations() {
	// var url = BASE_URL + "/places/getNearby"
	// $.ajax({
	// 	url: url,
	// 	type: "GET",
	// 	success: function(result) {
	// 		// TODO display the result
	// 		console.log(result);
	// 	},
	// 	error: function(error) {
	// 		console.log(error);
	// 	}
	// })

	var locations = {"nearbyPlaces":[{"name":"ASMAN","address":"Ackerstra\u00dfe 20, 10115 Berlin","lat":"52.531489","long":"13.396613","website":"https:\/\/pages.resmio.com\/indisches-restaurant-asman\/en","hasOnlineBooking":true},{"name":"Supetto","address":"Krausnickstra\u00dfe 11, 10115 Berlin","lat":"52.525326","long":"13.398407","website":"http:\/\/www.suppeto.de\/","hasOnlineBooking":true},{"name":"Shiso Burger","address":"Krausnickstra\u00dfe 11, 10115 Berlin","lat":"52.527251","long":"13.398761","website":"http:\/\/www.shisoburger.com\/","hasOnlineBooking":true},{"name":"German restaurant","address":"Auguststra\u00dfe 24, 10117 Berlin","lat":"52.526700","long":"13.396777","website":"http:\/\/www.ballhaus.de\/","hasOnlineBooking":false},{"name":"La Galleria Italiana","address":"Torstra\u00dfe 182, 10115 Berlin","lat":"52.528290","long":"13.393619","website":"https:\/\/lagalleriaitaliana.eatbu.com","hasOnlineBooking":true}],"success":true}
	console.log(locations);
	displayLocations(locations.nearbyPlaces)
}

function displayLocations(locations) {
	var list = document.getElementById("result_list");
	var i;
	for (i = 0; i < locations.length; i++) {
		var location = locations[i];
		var li = document.createElement("li")
		var a = document.createElement("a")
		a.href = location.website
		a.target = "_blank"
		var div = document.createElement("div")
		div.className = "element"
		var title = document.createElement("h5")
		var text = document.createTextNode(location.name)
		var image = document.createElement("img")
		image.src = "https://media-cdn.tripadvisor.com/media/photo-s/0a/6a/02/c6/innenraum-refugium.jpg"
		title.appendChild(text)
		div.appendChild(title)
		div.appendChild(image)
		a.appendChild(div)
		li.appendChild(a)
		list.appendChild(li)


		addMarkerOnMap([location.long, location.lat], i.toString(), i.toString(), "map.png");
	}
}

//var location = {"name":"ASMAN","address":"Ackerstra\u00dfe 20, 10115 Berlin","lat":"52.531489","long":"13.396613","website":"https:\/\/pages.resmio.com\/indisches-restaurant-asman\/en","hasOnlineBooking":true}
//var locations = [location]

//displayLocations(locations)
fetchLocations()
