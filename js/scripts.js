// Create variable to hold map element, give initial settings to map
    	var map = L.map('mapcontainer').setView([40.853202, -73.904920], 13);
		//added carto light basemap
    	
    	// Add OpenStreetMap tile layer to map element
		L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      	}).addTo(map);
		
		// Create point feature for Office of Fernando Cabrera
		var myDataPoint = L.marker([40.853202, -73.904920]).addTo(map);
		
		// Create line feature for Jerome Ave rezoning corridor, style and add to map
		var myDataLine = L.polyline([[40.860598, -73.902564], [40.834177, -73.922192]],
    	{color: 'orange', weight: 8}).addTo(map);

		// Bind popup to data point object
		myDataPoint.bindPopup("<h3>Office of Fernando Cabrera</h3><p>Bronx, NY<br>New York City Council District 14.</p>");

		// Bind popup to line object
		myDataLine.bindPopup("Jerome Ave proposed rezoning corridor");

		// load GeoJSON from an external file
		$.getJSON("cc_14.geojson",function(data){
   
   		// add GeoJSON layer to the map once the file is loaded
   		L.geoJson(data).addTo(map);
});


		console.log("hello");