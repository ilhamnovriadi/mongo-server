const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  nama_merek: {
    type: String,
  },
  stok: {
    type: Number,
  },
  harga: {
    type: Number,
  },
  active: {
    type: Boolean,
  },
});

Product = mongoose.model("laptop", ProductSchema);
module.exports = Product;
