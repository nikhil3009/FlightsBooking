/** @format */
const express = require('express');
const { FlightMiddlewares } = require('../../middlewares');
const { FlightController } = require('../../controllers');
const router = express.Router();

router.post(
	'/',
	FlightMiddlewares.validateCreateRequest,
	FlightController.createFlight
);
router.get('/', FlightController.getAllFlights);
router.get('/:id', FlightController.getFlight);

// /api/v1/flights/:id/seats  PATCH

router.patch(
	'/:id/seats',
	FlightMiddlewares.validateUpdateSeatsRequest,
	FlightController.updateSeats
);

module.exports = router;
