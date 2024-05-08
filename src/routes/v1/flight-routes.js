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

module.exports = router;
