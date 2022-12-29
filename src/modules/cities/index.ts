import { URL, X_RAPID_API_HOST, X_RAPID_API_KEY } from "../../config";

export { };
const axios = require('axios');
const { Cities } = require('./enitities/Cities.ts')


const getCities = async () => {
	let result = {
		data: []
	}
	const options = {
		method: 'GET',
		params: { minPopulation: '1000', languageCode: 'en' },
		url: URL,
		headers: {
			'X-RapidAPI-Key': X_RAPID_API_KEY,
			'X-RapidAPI-Host': X_RAPID_API_HOST
		}
	};

	await axios.request(options).then(function (response: any) {
		result = response.data
	}).catch(function (error: any) {
		console.error(error);
	});
	// console.error(result.data);
	return result.data.map((city) => new Cities(city))
}


module.exports = {
	getCities
}