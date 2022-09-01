const express = require("express");

const {
  getAllRegistrations,
  getOneRegistration,
  markEntryTime,
  markExitTime,
  cancelRegistration
} = require("../controllers/registration.controller");

const registrationRouter = express.Router();

registrationRouter.get("/", getAllRegistrations);

registrationRouter.get("/:id", getOneRegistration);

registrationRouter.post("/", markEntryTime);

registrationRouter.patch("/:id", markExitTime)

registrationRouter.delete('/:id', cancelRegistration)

module.exports = { registrationRouter };
