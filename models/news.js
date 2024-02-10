const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class news extends Model {}

news.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    news_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    news_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    news_date: {
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
    modelName: "news",
  }
);

module.exports = news;
