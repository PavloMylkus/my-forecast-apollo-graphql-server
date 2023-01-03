export interface ICities {
	id: number,
	city: string,
	country: string,
	countryCode: string,
	latitude: number,
	longitude: number,
	name: string,
	population: number,
	region: string,
	regionCode: string,
	type: string,
	wikiDataId: string,
}
export interface ICurentWeather {
	id: number
	base: string
	city: string
	codi: number
	clouds: {
		all: number
	}
	coord: {
		lon: number
		lat: number
	}
	dt: number
	main: IMain
	name: string
	snow: {
		'1h': number
	}
	sys: {
		country: string
		id: number
		sunrise: number
		sunset: number
		type: number
	}
	timezone: number
	visibility: number
	weather: IWeather[]
	wind: {
		deg: number
		gust: number
		speed: number
	}

}

interface IMain {
	feels_like: number
	grnd_level: number
	humidity: number
	pressure: number
	sea_level: number
	temp: number
	temp_max: number
	temp_min: number
}



interface IWeather {
	description: string
	icon: string
	id: number
	main: string
}
