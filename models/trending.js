const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class trending extends Model {}

trending.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trending_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trending_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trending_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trending_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trending",
  }
);

module.exports = trending;
