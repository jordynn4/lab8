function initMap() {
	// add your code here
	L.mapquest.key = 'kgNvPGDuKtpD4zZHJ46GoLjR6ApSgGd5';

	// "map" refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.878973, -117.235925],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.878973, -117.235925]).addTo(map);
}