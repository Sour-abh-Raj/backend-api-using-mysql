const admin = require("./admin");
const blog = require("./blog");
const category = require("./category");
const news = require("./news");
const subCategory = require("./subCategory");
const subscription = require("./subscription");
const writerDetail = require("./writerDetail");
const mostViews = require("./mostViews");
const reviews = require("./reviews");
const trending = require("./trending");
const settings = require("./settings");

writerDetail.hasMany(blog, {
  foreignKey: "writer_id",
});

writerDetail.hasMany(news, {
  foreignKey: "writer_id",
});

subCategory.hasMany(blog, {
  foreignKey: "sub_category_id",
});

subCategory.hasMany(news, {
  foreignKey: "sub_category_id",
});

category.hasMany(subCategory, {
  foreignKey: "category_id",
});

blog.belongsTo(writerDetail, {
  foreignKey: "writer_id",
});

news.belongsTo(writerDetail, {
  foreignKey: "writer_id",
});

blog.belongsTo(subCategory, {
  foreignKey: "sub_category_id",
});

news.belongsTo(subCategory, {
  foreignKey: "sub_category_id",
});

subCategory.belongsTo(category, {
  foreignKey: "category_id",
});

module.exports = {
  blog,
  admin,
  category,
  news,
  subCategory,
  subscription,
  writerDetail,
  mostViews,
  reviews,
  trending,
  settings,
};
