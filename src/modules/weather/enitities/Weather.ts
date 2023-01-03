import { ICurentWeather } from "../../../models";
interface IWeatherCurent {
	description: string
	icon: string
	id: number
	main: string
}


class Weather {
	public id: number
	public base: string
	public codi: number
	public clouds: {
		all: number
	}
	public coord: {
		lon: number
		lat: number
	}
	public dt: number
	public main: {
		feels_like: number
		grnd_level: number
		humidity: number
		pressure: number
		sea_level: number
		temp: number
		temp_max: number
		temp_min: number
	}
	public name: string
	public sys: {
		country: string
		id: number
		sunrise: number
		sunset: number
		type: number
	}
	public timezone: number
	public visibility: number
	public weather: Array<IWeatherCurent>
	public wind: {
		deg: number
		gust: number
		speed: number
	}

	constructor(weather: ICurentWeather) {
		this.id = weather.id
		this.base = weather.base
		this.clouds = weather.clouds
		this.main = weather.main
		this.weather = weather.weather.map((el) => { return new WeatherCurent(el) })
		this.coord = weather.coord
		this.name = weather.name
		this.dt = weather.dt
		this.sys = weather.sys
		this.timezone = weather.timezone
		this.visibility = weather.visibility
		this.wind = weather.wind
	}
}

class WeatherCurent {
	description: string
	icon: string
	id: number
	main: string
	constructor(weatherCurent: WeatherCurent) {
		this.description = weatherCurent.description
		this.icon = weatherCurent.icon
		this.id = weatherCurent.id
		this.main = weatherCurent.main
	}
}

module.exports = {
	Weather,
}