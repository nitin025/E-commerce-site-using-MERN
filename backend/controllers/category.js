const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Category not fount in db",
      });
    }
    req.category = category;
    next();
  });
};

exports.createCategory = (req, res) => {
  const category = new Category(req.body);

  category.save((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Not able to save category",
      });
    }
    return res.json({ category });
  });
};

exports.getCategory = (req, res) => {
  return res.json(req.category);
};

exports.getAllCategory = (req, res) => {
  Category.find().exec((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "No Categories found",
      });
    }
    return res.json(categories);
  });
};

exports.updateCategory = (req, res) => {
  const category = req.category; //It comes from middleware
  category.name = req.body.name; //It comes from postman

  category.save((err, updatedCategory) => {
    if (err) {
      return res.status(400).json({
        error: "Failed  to Updated Category",
      });
    }

    return res.json(updatedCategory);
  });
};

exports.removeCategory = (req, res) => {
  const category = req.category;

  category.remove((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to Delete Category",
      });
    }
    return res.json({
      message: "Successfully Deleted",
    });
  });
};
