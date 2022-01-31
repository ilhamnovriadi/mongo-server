const mongoose = require("mongoose");
const db =
  "mongodb://ilhamnovriadi:adminadmin@localhost:27017/belajarmern?authSource=belajarmern";

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("Koneksi Tersambung ke Mongoose"))
  .catch((err) => console.log(err));
