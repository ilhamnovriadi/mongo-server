const db = require("../../config/mongodb.config");
const { ObjectId } = require("mongodb");

const getProduct = (req, res) => {
  db.collection("laptops")
    .find()
    .toArray()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const getProductDetail = (req, res) => {
  const id = req.params.id;
  db.collection("laptops")
    .findOne({ _id: ObjectId(id) })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const { nama_merek, harga, stok, active } = req.body;
  db.collection("laptops")
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { nama_merek, harga, stok, active } },
      { upsert: true }
    )
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const addProduct = (req, res) => {
  const { nama_merek, harga, stok, active } = req.body;
  db.collection("laptops")
    .insertOne({ nama_merek, harga, stok, active })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  db.collection("laptops")
    .deleteOne({ _id: ObjectId(id) })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

module.exports = {
  getProduct,
  getProductDetail,
  addProduct,
  deleteProduct,
  updateProduct,
};
