/** @format */
const express = require('express');
const { AirplaneMiddlewares } = require('../../middlewares');
const { AirplaneController } = require('../../controllers');
const router = express.Router();
console.log('inside airplane routes');
router.post(
	'/',
	AirplaneMiddlewares.validateCreateRequest,
	AirplaneController.createAirplane
);
module.exports = router;
