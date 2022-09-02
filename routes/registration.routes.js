const express = require("express");

//import controllers
const {
  getAllRegistrations,
  getOneRegistration,
  markEntryTime,
  markExitTime,
  cancelRegistration,
} = require("../controllers/registration.controller");

//import middlewares
const { userExist } = require("../middleware/registration.middleware");

const registrationRouter = express.Router();

registrationRouter.get("/", getAllRegistrations);

registrationRouter.get("/:id", userExist, getOneRegistration);

registrationRouter.post("/", markEntryTime);

registrationRouter.patch("/:id", userExist, markExitTime);

registrationRouter.delete("/:id", userExist, cancelRegistration);

module.exports = { registrationRouter };
