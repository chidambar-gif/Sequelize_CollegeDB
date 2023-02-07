import { DataTypes } from "sequelize";

const createInstructor = (sequelize) => {
  const Instructor = sequelize.define("Instructor", {
    instructorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    rank: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Instructor;
};

export default createInstructor;
