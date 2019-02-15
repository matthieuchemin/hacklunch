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

map.getSource('polygon').setData(createGeoJSONCircle([-93.6248586, 41.58527859], 1).data);

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

console.log("hfdfj")