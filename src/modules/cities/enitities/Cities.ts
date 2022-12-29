import { ICities } from "../../../models";

class Cities {
	id: number
	city: string
	country: string
	countryCode: string
	latitude: number
	longitude: number
	name: string
	population: number
	region: string
	regionCode: string
	type: string
	wikiDataId: string

	constructor(cities: ICities) {
		this.id = cities.id;
		this.city = cities.city;
		this.country = cities.country;
		this.countryCode = cities.countryCode;
		this.latitude = cities.latitude;
		this.longitude = cities.longitude;
		this.name = cities.name;
		this.population = cities.population;
		this.region = cities.region;
		this.regionCode = cities.regionCode;
		this.type = cities.type;
		this.wikiDataId = cities.wikiDataId;
	}
}


module.exports = {
	Cities,

}