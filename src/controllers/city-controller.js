/** @format */

const { response } = require('express');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');
const { AirplaneService, CityService } = require('../services');
async function createCity(req, res) {
	try {
		console.log(req.body);
		console.log('inside controller');
		const city = await CityService.createCity({
			name: req.body.name,
		});
		SuccessResponse.data = city;
		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.StatusCodes).json(ErrorResponse);
	}
}

module.exports = {
	createCity,
};
