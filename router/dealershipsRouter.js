const dealershipsRouter = require('express').Router();
const DealershipsController = require('../controllers/dealerships.controller');

dealershipsRouter.post('/', DealershipsController.createDealership);
dealershipsRouter.get('/', DealershipsController.getDealerships);

module.exports = dealershipsRouter;
