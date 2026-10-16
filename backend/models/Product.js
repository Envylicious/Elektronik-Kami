const mongoose = require('mongoose');

// Skema untuk data produk
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);