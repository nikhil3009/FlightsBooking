/** @format */

const { response } = require('express');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');

async function createAirplane(req, res) {
	try {
		console.log(req.body);
		console.log('inside controller');
		const airplane = await AirplaneService.createAirplane({
			modelNumber: req.body.modelNumber,
			capacity: req.body.capacity,
		});
		SuccessResponse.data = airplane;
		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.StatusCodes).json(ErrorResponse);
	}
}
async function getAirplanes(req, res) {
	try {
		const airplanes = await AirplaneService.getAirplanes();
		SuccessResponse.data = airplanes;
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.StatusCodes).json(ErrorResponse);
	}
}
async function getAirplane(req, res) {
	try {
		const airplane = await AirplaneService.getAirplane(req.params.id);
		SuccessResponse.data = airplane;
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.StatusCodes).json(ErrorResponse);
	}
}
module.exports = {
	createAirplane,
	getAirplanes,
	getAirplane,
};
