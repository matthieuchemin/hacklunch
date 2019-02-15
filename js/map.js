mapboxgl.accessToken = 'pk.eyJ1IjoicGVwcGVyaGFja2x1bmNoIiwiYSI6ImNqczV5ZXkyMzBpeHIzeXNieG0xc2J0dG4ifQ.pOCQjUyCYIzE4to5kjmEqw';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/outdoors-v9', //stylesheet location
    center: [13.4020788, 52.5270968], // starting position. // 52.5270968,13.4020788,15z
    zoom: 13 // starting zoom
});

map.addControl(new mapboxgl.FullscreenControl());

map.on('load', function() {
    map.loadImage('resources/map-marker.png', function(error, image) {
        if (error) throw error;
        map.addImage('cat', image);
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [13.4020788, 52.5270968]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "cat",
                "icon-size": 1
            }
        });
    });
});

console.log("hfdfj")

var BASE_URL = "http://127.0.0.1:8000"

function fetchLocations() {
	var url = BASE_URL + "/places/getNearby"
	$.ajax({
		url: url,
		type: "GET",
		success: function(result) {
			// TODO display the result
			console.log(result);
		},
		error: function(error) {
			console.log(error);
		}
	})

}

fetchLocations()
