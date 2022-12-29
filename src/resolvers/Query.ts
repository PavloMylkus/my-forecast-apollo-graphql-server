
const { getCities } = require('../modules/cities/index.ts')


async function cities(parent: any, args: any) {

	const data = await getCities()


	return data
}

module.exports = {
	cities
}