const express = require("express");

//import registration routes
const { registrationRouter } = require("./routes/registration.routes");

const app = express();

app.use(express.json());

//define endpoints
app.use("/v1/registrations", registrationRouter);

//define case if endpoint doesnt exist
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
