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
    const { registration } = req;

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
    const { exitTime } = req.body;

    const { registration: updatedRegistration } = req;

    if (updatedRegistration.status === "cancelled") {
      return res.status(400).json({
        status: "error",
        message: "registration is cancelled",
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
    const { registration: deletedRegistration } = req;

    if (deletedRegistration.status === "out") {
      return res.status(400).json({
        status: "error",
        message: "registration is out",
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
