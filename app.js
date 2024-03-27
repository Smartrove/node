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

const allowedOrigins = [
  "http://localhost:4000",
  "https://node-j7z3.onrender.com",
];

var corsOptions = {
  origin: function (origin, callback) {
    log.info(`<<<<< Request Origin: ${origin} -->>>>>`);
    // log.info(origin)
    if (!origin && dev) {
      // if (true) {
      //for bypassing postman req with  no origin
      return callback(null, true);
    }
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
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
