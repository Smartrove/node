// post.routes.js

const express = require("express");
const {
  createCategoryHandler,
  viewAllCategoryHandler,
  viewSingleCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
} = require("../../controller/category.controller");

const CategoryRouter = express.Router();

CategoryRouter.post("/create", createCategoryHandler);
CategoryRouter.get("/get", viewAllCategoryHandler);
CategoryRouter.get("/get/:id", viewSingleCategoryHandler);
CategoryRouter.put("/update/:id", updateCategoryHandler);
CategoryRouter.delete("/delete/:id", deleteCategoryHandler);

module.exports = CategoryRouter;
