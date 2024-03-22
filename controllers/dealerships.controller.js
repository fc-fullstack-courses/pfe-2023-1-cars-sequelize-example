const { Dealership } = require('../db/models');

module.exports.createDealership = async (req, res, next) => {
  try {
    const { body } = req;

    const dealership = await Dealership.create(body);

    res.status(201).send({ data: dealership });
  } catch (error) {
    next(error);
  }
};

module.exports.getDealerships = async (req, res, next) => {
  try {
    const dealerships = await Dealership.findAll();

    res.status(200).send({ data: dealerships });
  } catch (error) {
    next(error);
  }
};
