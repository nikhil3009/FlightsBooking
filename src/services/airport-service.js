/** @format */

const { StatusCodes } = require('http-status-codes');
const { AirportRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const airportRepository = new AirportRepository();
async function createAirport(data) {
	try {
		console.log('inside services');
		const airport = await airportRepository.create(data);
		return airport;
	} catch (error) {
		if ((error.name = 'SequelizeValidationError')) {
			let explanation = [];
			error.errors.forEach((err) => {
				explanation.push(err.message);
			});
			throw new AppError(explanation, StatusCodes.BAD_REQUEST);
		}
		throw new AppError(
			'Cannot create a new Airport Object',
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}
async function getAirports() {
	try {
		const airports = await airportRepository.getAll();
		return airports;
	} catch (error) {
		throw new AppError(
			'Cannot fetch data of all airports',
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}
async function getAirport(id) {
	try {
		const airport = await airportRepository.get(id);
		return airport;
	} catch (error) {
		if (error.statusCode == StatusCodes.NOT_FOUND) {
			throw new AppError(
				'airport requested is not found',
				StatusCodes.NOT_FOUND
			);
		}
		throw new AppError(
			'Cannot fetch data of airport',
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}
async function destroyAirport(id) {
	try {
		const response = await airportRepository.destroy(id);
		return response;
	} catch (error) {
		if (error.statusCode == StatusCodes.NOT_FOUND) {
			throw new AppError(
				'Airport requested to delete is not found',
				StatusCodes.NOT_FOUND
			);
		}
		throw new AppError(
			'Cannot destroy Airport',
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}
module.exports = {
	createAirport,
	getAirports,
	getAirport,
	destroyAirport,
};
