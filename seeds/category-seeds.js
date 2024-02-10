const { category } = require("../models");

const categoryData = [
  {
    category_name: "Computing",
  },
  {
    category_name: "Entertainment",
  },
];

const seedCategories = () => category.bulkCreate(categoryData);

module.exports = seedCategories;
