const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const log = require("./src/logger/index");
const connect = require("./config/connect");
const cors = require("cors");
const helmet = require("helmet");
const Routes = require("./src/routes/routes");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/", Routes);

app.get("/", (req, res) => {
  res.send("Hello Express");
});
app.get("/user", (req, res) => {
  res.json({
    firstname: "Mogaji",
    lastname: "Aishah",
  });
});

app.listen(process.env.PORT, () =>
  console.log(`app listening on port ${process.env.PORT}`)
);