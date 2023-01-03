import { WEATHER_API_URL, WEATHER_API_KEY } from "../../config";

export { };
const axios = require('axios');
const { Weather } = require('./enitities/Weather.ts')



const getWeather = async (coord, loc) => {
	let result = {

	}
	const [lat, lon] = coord.split(" ");

	const options = {
		method: 'GET',
		url: `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&lang=${loc}&appid=${WEATHER_API_KEY}&units=metric`,
	};

	await axios.request(options).then(function (response: any) {
		result = response.data
	}).catch(function (error: any) {
		console.error(error);
	});
	console.error(result);

	return result = new Weather(result)
}


module.exports = {
	getWeather
}