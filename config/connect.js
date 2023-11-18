const mongoose = require("mongoose");

const log = require("../src/logger/index");

function connect() {
  const dbUri =
    process.env.NODE_ENV === "development"
      ? process.env.DATABASE
      : process.env.DATABASE;

      console.log("db uri",dbUri)
  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => log.info("database connected successfully"))
    .catch((error) => {
      log.error("Database Error: " + error.message);
      log.error(error);
      process.exit(1);
    });
}

module.exports = connect;
