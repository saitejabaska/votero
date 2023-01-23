"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      Question.hasMany(models.Answer, {
        foreignKey: "questionId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Question.belongsTo(models.Election, {
        foreignKey: "electionId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Question.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
