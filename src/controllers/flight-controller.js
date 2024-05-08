/** @format */

const { response } = require('express');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');
const { FlightService } = require('../services');
const AppError = require('../utils/errors/app-error');

async function createFlight(req, res) {
	try {
		const flight = await FlightService.createFlight({
			flightNumber: req.body.flightNumber,
			airplaneId: req.body.airplaneId,
			departureAirportId: req.body.departureAirportId,
			arrivalAirportId: req.body.arrivalAirportId,
			arrivalTime: req.body.arrivalTime,
			departureTime: req.body.departureTime,
			price: req.body.price,
			boardingGate: req.body.boardingGate,
			totalSeats: req.body.totalSeats,
		});
		SuccessResponse.data = flight;
		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.StatusCodes).json(ErrorResponse);
	}
}

module.exports = {
	createFlight,
};
