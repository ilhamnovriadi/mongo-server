require("./config/monggose.config");
const express = require("express");
const cors = require("cors");
const RouterMongoNative = require("./routes/v1.routes.js");
const RouterMongoose = require("./routes/v2.routes.js");
// const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1", RouterMongoNative);
app.use("/api/v2", RouterMongoose);

app.listen(8080, () => console.log("Server Berjalan di http://localhost:8080"));
