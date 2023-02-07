import { DataTypes } from "sequelize";

const createTakeRelation = (sequelize) => {
  const Take = sequelize.define("Take", {
    grade: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
  });
  return Take;
};

export default createTakeRelation;
