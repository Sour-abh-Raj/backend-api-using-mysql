const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class writerDetail extends Model {}

writerDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    writer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    writer_bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "writerDetail",
  }
);

module.exports = writerDetail;
