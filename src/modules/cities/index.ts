import { URL, X_RAPID_API_HOST, X_RAPID_API_KEY } from "../../config";

export { };
const axios = require('axios');
const { Cities } = require('./enitities/Cities.ts')

interface ISearchInputdata {
	cityName: string
	loc: string
}

const getCities = async (cityName, loc) => {
	let result = {
		data: []
	}


	const options = {
		method: 'GET',
		params: { minPopulation: '1000', languageCode: loc },
		url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityName}`,
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

	return result.data.map((city) => new Cities(city))
}


module.exports = {
	getCities
}