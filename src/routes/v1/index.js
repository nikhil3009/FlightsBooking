/** @format */
const express = require('express');
const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const router = express.Router();
console.log('inside v1 routes');
router.use('/airplanes', airplaneRoutes);
router.use('/city', cityRoutes);
router.use('/', airplaneRoutes);
router.get('/info', InfoController.info);
module.exports = router;
