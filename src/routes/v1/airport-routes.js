/** @format */
const express = require('express');
const { AirportMiddlewares } = require('../../middlewares');
const { AirportController } = require('../../controllers');
const router = express.Router();
console.log('inside airplane routes');
router.post(
	'/',
	AirportMiddlewares.validateCreateRequest,
	AirportController.createAirport
);
router.get('/', AirportController.getAirports);
router.get('/:id', AirportController.getAirport);
router.delete('/:id', AirportController.destroyAirport);
module.exports = router;
