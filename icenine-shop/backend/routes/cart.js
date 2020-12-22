const express = require("express");

const Cart = require("../models/cart");

const router = express.Router();

router.post("", (req, res, next) => {
  console.log(req.body)
  const cart = new Cart({
    date: req.body.Date.created(),
    productName: req.body.productName,
    productCategory:req.body.productCategory,
    productDescription:req.body.productDescription,
    productImageUrl:req.body.productImageUrl,
    ProductPrice:req.body.ProductPrice
  });

  console.log(req.body)

  cart.save().then(createdCart => {
    res.status(201).json({
      message: "Cart created successfully",
      cartId: createdCart._id
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.get("", (req, res, next) => {
  Cart.find().then(carts => {
    res.status(200).json({
      message: "Carts fetched successfully!",
      carts: carts
    });
  });
});







module.exports = router;
