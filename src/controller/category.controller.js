const express = require("express");
const Category = require("../../models/Category");

//create a category
const createCategoryHandler = async (req, res, next) => {
  const { title, userId } = req.body;
  try {
    const category = await Category.create({
      title,
      user: userId,
    });
    res.json({
      status: "success",
      message: category,
    });
  } catch (err) {
    return log.info(err.message);
  }
};

//view all categories
const viewAllCategoryHandler = async (req, res, next) => {
  try {
    const category = await Category.find();
    res.json({
      status: "success",
      message: category,
    });
  } catch (err) {
    return log.error(err.message);
  }
};

//view a single category
const viewSingleCategoryHandler = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    res.json({
      status: "success",
      message: category,
    });
  } catch (err) {
    return log.error(err.message);
  }
};

//update category
const updateCategoryHandler = async (req, res, next) => {
  const { title } = req.body;
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { title },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json({
      status: "success",
      message: category,
    });
  } catch (err) {
    return log.error(err.message);
  }
};

//delete category
const deleteCategoryHandler = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id, {
      new: true,
      runValidators: true,
    });
    res.json({
      status: "success",
      data: "category deleted successfully",
    });
  } catch (err) {
    return log.error(err.message);
  }
};
module.exports = {
  viewSingleCategoryHandler,
  createCategoryHandler,
  viewAllCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
};
