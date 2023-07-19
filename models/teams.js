const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class team extends Model {}
//Sequelize will create this table if it doesn't exist on startup
team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false, required: true },
    logo: { type: DataTypes.STRING, allowNull: false, required: true },
    abbrev: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    debut: { type: DataTypes.INTEGER, allowNull: false, required: true },
    retirement: { type: DataTypes.INTEGER, allowNull: false, required: true },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "team",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = team;
