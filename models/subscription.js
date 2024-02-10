const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class subscription extends Model {}

subscription.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subscription_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subscription_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "subscription",
  }
);

module.exports = subscription;
