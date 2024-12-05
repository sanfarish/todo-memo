const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");

const api = require("./routes");

const { error, notFound } = require("./middlewares/endHandler");

app.use(logger("dev"));
app.disable("x-powered-by")
app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/favicon.ico", express.static("public/favicon.svg"));
app.use("/api", api);

app.use(error);
app.use("*", notFound);

module.exports = app;
