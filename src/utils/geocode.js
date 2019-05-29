const request = require('request');

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWF0dGlhc21hbnNzb24iLCJhIjoiY2p3NmMxanEyMWFyajQ5bzZ5aW91OWUzdiJ9.dV4sBKBZAwx0fv-TjkPQvw&limit=1'

	request({ url, json: true }, (error, { body: { features } }) => {
		if (error) {
			callback('Unable to connect to location services!', undefined);
		} else if (features.length === 0) {
			callback('Unable to find location. Try another search.', undefined);
		} else {
			callback(undefined, {
				longitude: features[0].center[0],
				latitude: features[0].center[1],
				location: features[0].place_name
			})
		}
	});
};

module.exports = geocode;