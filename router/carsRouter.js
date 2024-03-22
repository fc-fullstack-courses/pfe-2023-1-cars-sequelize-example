const carsRouter = require('express').Router();
const CarsController = require('../controllers/cars.controller');
const imageUpload = require('../utils/imageUpload');

carsRouter.post('/', imageUpload.single('pic'), CarsController.createCar);
carsRouter.get('/', CarsController.getCars);

carsRouter.get('/:carId', CarsController.getCar);
carsRouter.put('/:carId', imageUpload.single('pic'), CarsController.updateCar);
carsRouter.delete('/:carId', CarsController.deleteCar);

module.exports = carsRouter;