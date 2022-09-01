const { Registration } = require("../model/registration.model");

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.findAll();

    res.status(200).json({
      status: "success",
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getOneRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: "error",
        message: "Registration not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        registration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const markEntryTime = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegistration = await Registration.create({ entranceTime });

    res.status(201).json({
      status: "success",
      data: {
        newRegistration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const markExitTime = async (req, res) => {
  try {
    const { id } = req.params;
    const { exitTime } = req.body;

    const updatedRegistration = await Registration.findOne({ where: { id } });

    if (!updatedRegistration) {
      return res.status(404).json({
        status: "error",
        message: "registration not found",
      });
    }

    await updatedRegistration.update({ exitTime, status: "out" });

    res.status(200).json({
      status: "success",
      data: {
        updatedRegistration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const cancelRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRegistration = await Registration.findOne({ where: { id } });

    if (!deletedRegistration) {
      return res.status(404).json({
        status: "error",
        message: "Registration not found",
      });
    }

    await deletedRegistration.update({ status: "cancelled" });

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegistrations,
  getOneRegistration,
  markEntryTime,
  markExitTime,
  cancelRegistration,
};
