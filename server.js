const { app } = require("./app");
const { db } = require("./utils/database.utilis");

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    const PORT = 4000;
    app.listen(PORT, () => {
      console.log("server is listening");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
