const mongoose = require('mongoose');
const Product = require("../models/admin")

const cartSchema = mongoose.Schema({
  dateCreated: { type: Date, required: true },
  product:{type: Product, required:true}
});

module.exports = mongoose.model('Cart', CartSchema);
