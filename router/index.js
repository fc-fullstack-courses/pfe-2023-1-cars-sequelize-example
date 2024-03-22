const router = require('express').Router();
const carsRouter = require('./carsRouter');
const dealershipsRouter = require('./dealershipsRouter');

router.use('/cars', carsRouter);
router.use('/dealerships', dealershipsRouter);

module.exports = router;