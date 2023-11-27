const mongoose = require('mongoose');
const Product = require('../models/products.models.js');

const create_product = (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    image: req.body.image,
  });

  newProduct.save((err, product) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(201).send({ product });
    }
  });
};

const get_all_products = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(200).send({ products });
    }
  });
};

const get_product_by_id = (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      if (err.kind === 'ObjectId') {
        res.status(404).send({ message: 'Product not found' });
      } else {
        res.status(500).send({ error: err.message });
      }
    } else {
      res.status(200).send({ product });
    }
  });
};

const update_product = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, product) => {
    if (err) {
      if (err.kind === 'ObjectId') {
        res.status(404).send({ message: 'Product not found' });
      } else {
        res.status(500).send({ error: err.message });
      }
    } else {
      res.status(200).send({ product });
    }
  });
};

const delete_product = (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err, product) => {
    if (err) {
      if (err.kind === 'ObjectId') {
        res.status(404).send({ message: 'Product not found' });
      } else {
        res.status(500).send({ error: err.message });
      }
    } else {
      res.status(200).send({ message: 'Product deleted successfully' });
    }
  });
};

module.exports = {
  create_product,
  get_all_products,
  get_product_by_id,
  update_product,
  delete_product,
};
