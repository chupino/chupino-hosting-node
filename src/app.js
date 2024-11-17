const express = require("express");
const config = require("../config/config_dotenv");
const routes = require("./routes");
const db = require("../models");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());


app.use(
  "/static/images",
  express.static(path.join(__dirname, "../static/images"))
);

app.use("/api", routes);

db.sequelize.sync({}).then(() => {
  app.listen(config.appPort, () => {
    console.log(`Servidor escuchando en http://localhost:${config.appPort}`);
  });
});