const Event = require("./models/name");
const express = require("express"),
  { json } = require("express"),
  bodyParser = require("body-parser"),
  name = require("./routes/nameRoute");
const { PORT } = process.env;
require("dotenv").config();
const connect = require("./db/database");
connect();

const app = express();

app.use(json());

app.use("/api", name);
app.get("/", (req, res) => {
  res.send("Welcome");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
