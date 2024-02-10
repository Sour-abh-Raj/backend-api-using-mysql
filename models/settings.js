const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class settings extends Model {}

settings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    site_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    site_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site_logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "settings",
  }
);

module.exports = settings;
