const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const log = require("./src/logger/index");
const connect = require("./config/connect");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const Routes = require("./src/routes/routes");

app.use(cors());
app.use(morgan("tiny"));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/", Routes);

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(process.env.PORT, process.env.HOST, () => {
  log.info(
    `Server listening at http://${process.env.HOST}:${process.env.PORT}/api/v1`
  );
  connect();
});
