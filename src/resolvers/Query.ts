
const { getCities } = require('../modules/cities/index.ts')
const { getWeather } = require('../modules/weather/index.ts')


async function cities(parent: any, args: any) {

	const data = await getCities(args.cityName, args.loc)


	return data
}
async function weather(parent: any, args: any) {

	const dataWeather = await getWeather(args.coord, args.loc)


	return dataWeather
}

module.exports = {
	cities,
	weather
}