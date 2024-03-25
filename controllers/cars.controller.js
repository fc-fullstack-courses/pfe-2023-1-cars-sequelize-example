const createHttpError = require('http-errors');
const { Car, Dealership } = require('../db/models');

module.exports.createCar = async (req, res, next) => {
  try {
    const { body, file: { filename } = {} } = req;

    const carData = {
      ...body,
      imagePath: filename,
    };

    const car = await Car.create(carData);

    res.status(201).send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.getCars = async (req, res, next) => {
  try {
    const cars = await Car.findAll();

    res.status(200).send({ data: cars });
  } catch (error) {
    next(error);
  }
};

module.exports.getCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const car = await Car.findByPk(carId);

    if (!car) {
      throw createHttpError(404, 'Car not found');
    }

    const dealerships = await car.getDealerships({
      attributes: ['name', 'imagePath'],
      joinTableAttributes: []
    });

    res.status(200).send({ data: { car, dealerships } });
  } catch (error) {
    next(error);
  }
};

module.exports.updateCar = async (req, res, next) => {
  try {
    const {
      body,
      params: { carId },
      file: { filename } = {},
    } = req;

    const carData = {
      ...body,
      imagePath: filename,
    };

    const [updatedRows, [car]] = await Car.update(carData, {
      where: {
        id: carId,
      },
      returning: true,
    });

    if (updatedRows === 0) {
      throw createHttpError(404, 'Car not found');
    }

    res.status(200).send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCar = async (req, res, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const car = await Car.findByPk(carId);

    if (!car) {
      throw createHttpError(404, 'Car not found');
    }

    await car.destroy();

    res.status(200).send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.addCarToDealership = async (req, res, next) => {
  try {
    const {
      params: { carId, dealershipId },
    } = req;

    const car = await Car.findByPk(carId);

    if (!car) {
      throw createHttpError(404, 'Car not found');
    }

    const dealership = await Dealership.findByPk(dealershipId);

    if (!dealership) {
      throw createHttpError(404, 'Dealership not found');
    }

    await car.addDealership(dealership);

    res.status(200).send({ data: car });
  } catch (error) {
    next(error);
  }
};
