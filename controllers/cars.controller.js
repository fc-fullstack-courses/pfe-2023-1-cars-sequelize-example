const createHttpError = require('http-errors');
const { Car } = require('../db/models');

module.exports.createCar = async (req, res, next) => {
  try {
    const { body } = req;

    const car = await Car.create(body);

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

    if(!car) {
      throw createHttpError(404, 'Car not found');
    }

    res.status(200).send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.updateCar = async (req, res, next) => {
  try {
    const {
      body,
      params: { carId },
    } = req;

    const [updatedRows, [car]] = await Car.update(body, {
      where: {
        id: carId,
      },
      returning: true,
    });

    if(updatedRows === 0) {
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

    if(!car) {
      throw createHttpError(404, 'Car not found');
    }

    await car.destroy();

    res.status(200).send({ data: car });
  } catch (error) {
    next(error);
  }
};
