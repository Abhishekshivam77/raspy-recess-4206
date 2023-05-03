const express = require("express");
const cors = require("cors");
const path = require("path");
const { connection } = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.set("views", __dirname + "/public");
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

port = process.env.PORT || 4000;

app.listen(port, async () => {
  try {
    console.log(`server is running at http://localhost:${port}`);
    await connection;
    console.log("DB is connected");
  } catch (error) {
    console.log("DB isn't connected");
    console.log(error)
  }
});
