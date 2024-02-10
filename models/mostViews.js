const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class mostViews extends Model {}

mostViews.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    most_views_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    most_views_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    most_views_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    most_views_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "mostViews",
  }
);

module.exports = mostViews;
