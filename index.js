require("./config/monggose.config");
const express = require("express");
const cors = require("cors");
const RouterMongoNative = require("./routes/v1.routes.js");
const RouterMongoose = require("./routes/v2.routes.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
  res.send("Welcome to Mongo Server by Ilham Novriadi");
});

app.use("/api/v1", RouterMongoNative);
app.use("/api/v2", RouterMongoose);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Berjalan di port ${ PORT }`);
});