const { subCategory } = require("../models");

const subCategoryData = [
  {
    sub_category_name: "Quantum Computing",
    category_id: 1,
  },
  {
    sub_category_name: "Artificial Intelligence",
    category_id: 1,
  },
  {
    sub_category_name: "Bollywood",
    category_id: 2,
  },
  {
    sub_category_name: "Hollywood",
    category_id: 2,
  },
  {
    sub_category_name: "Korean Drama",
    category_id: 2,
  },
];

const seedSubCategory = () => subCategory.bulkCreate(subCategoryData);

module.exports = seedSubCategory;
