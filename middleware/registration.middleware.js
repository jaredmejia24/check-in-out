const { Registration } = require("../model/registration.model");

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

module.exports = { userExist };
