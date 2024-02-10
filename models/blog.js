const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class blog extends Model {}

blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blog_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blog_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    writer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "writerDetail",
        key: "id",
      },
    },
    sub_category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "subCategory",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
  }
);

module.exports = blog;
