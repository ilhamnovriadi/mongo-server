const { MongoClient } = require("mongodb");
const url =
  "mongodb://ilhamnovriadi:adminadmin@localhost:27017/?authSource=belajarmern";
const client = new MongoClient(url);

const dbName = "belajarmern";

(async () => {
  try {
    await client.connect();
    console.log("Koneksi Tersambung ke MongoDB Native");
  } catch (error) {
    console.log(error);
  }
})();

const db = client.db(dbName);
module.exports = db;
