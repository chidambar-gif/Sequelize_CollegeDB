import { DataTypes } from "sequelize";

const createCourse = (sequelize) => {
  const Course = sequelize.define("Course", {
    courseId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    courseHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
  });

  return Course;
};

export default createCourse;
