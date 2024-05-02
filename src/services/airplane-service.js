/** @format */

const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const airplaneRepository = new AirplaneRepository();
async function createAirplane(data) {
	try {
		console.log('inside services');
		const airplane = await airplaneRepository.create(data);
		return airplane;
	} catch (error) {
		if ((error.name = 'TypeError')) {
			throw new AppError(
				'cannot create a new Airplane',
				StatusCodes.INTERNAL_SERVER_ERROR
			);
		}
		throw error;
	}
}

module.exports = {
	createAirplane,
};
