import { ICities } from "../../../models";

class Cities {
	public id: number
	public city: string
	public country: string
	public countryCode: string
	public latitude: number
	public longitude: number
	public name: string
	public population: number
	public region: string
	public regionCode: string
	public type: string
	public wikiDataId: string

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