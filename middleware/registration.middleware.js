const { Registration } = require("../model/registration.model");
const { validationResult } = require("express-validator");

const userExist = async (req, res, next) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: "error",
        message: "Registration not found",
      });
    }

    req.registration = registration;
    next();
  } catch (error) {
    console.log(error);
  }
};

const checkErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "Error",
      errors: errors.array(),
    });
  }

  next();
};

module.exports = { userExist, checkErrors };
