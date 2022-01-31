const Product = require("../../models/Product");

const getProduct = (req, res) => {
  Product.find()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const getProductDetail = (req, res) => {
  const id = req.params.id;
  Product.findOne({ _id: id })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const addProduct = (req, res) => {
  const { nama_merek, harga, stok, active } = req.body;
  Product.create({ nama_merek, harga, stok, active })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const { nama_merek, harga, stok, active } = req.body;
  Product.updateOne(
    { _id: id },
    { $set: { nama_merek, harga, stok, active } },
    { upsert: true }
  )
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.deleteOne({ _id: id })
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
