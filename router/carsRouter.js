const carsRouter = require('express').Router();
const CarsController = require('../controllers/cars.controller');

carsRouter.post('/', CarsController.createCar);
carsRouter.get('/', CarsController.getCars);

carsRouter.get('/:carId', CarsController.getCar);
carsRouter.put('/:carId', CarsController.updateCar);
carsRouter.delete('/:carId', CarsController.deleteCar);

module.exports = carsRouter;