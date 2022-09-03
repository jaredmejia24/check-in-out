const express = require("express");
const { body } = require("express-validator");

//import controllers
const {
  getAllRegistrations,
  getOneRegistration,
  markEntryTime,
  markExitTime,
  cancelRegistration,
} = require("../controllers/registration.controller");

//import middlewares
const {
  userExist,
  checkErrors,
} = require("../middleware/registration.middleware");

const registrationRouter = express.Router();

registrationRouter.get("/", getAllRegistrations);

registrationRouter.get("/:id", userExist, getOneRegistration);

registrationRouter.post(
  "/",
  body("entranceTime").isDate().notEmpty(),
  checkErrors,
  markEntryTime
);

registrationRouter.patch(
  "/:id",
  body("exitTime").isDate().notEmpty(),
  checkErrors,
  userExist,
  markExitTime
);

registrationRouter.delete("/:id", userExist, cancelRegistration);

module.exports = { registrationRouter };
