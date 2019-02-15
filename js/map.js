
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
    center: [13.4020788, 52.5270968], // starting position. // 52.5270968,13.4020788,15z
    zoom: 14 // starting zoom
});

map.addControl(new mapboxgl.FullscreenControl());
                
addMarkerOnMap([13.4020788, 52.5270968], "a", "a", "map-marker.png");
addMarkerOnMap([13.3948603, 52.5276292], "b", "b", "map.png");
addMarkerOnMap([13.403601, 52.524306], "c", "c", "map.png");
addMarkerOnMap([13.411564, 52.530284], "d", "d", "map.png");
addMarkerOnMap([13.395083,52.531865], "e", "e", "map.png");

map.addSource("polygon", createGeoJSONCircle([13.4020788, 52.5270968], 0.5));

map.addLayer({
    "id": "polygon",
    "type": "fill",
    "source": "polygon",
    "layout": {},
    "paint": {
        "fill-color": "blue",
        "fill-opacity": 0.6
    }
});

function fetchLocations() {
	var url = "htpps://example.com/places/getNearby"
	$.ajax({
		url: url,
		type: "GET",
		success: function(result) {
			console.log(result);
		},
		error: function(error) {
			console.log(error);
		}
	})
}

fetchLocations()




