import createStudent from "./models/Student.js";
import createInstructor from "./models/Instructor.js";
import createCourse from "./models/Course.js";
import createTakeRelation from "./models/Take.js";

const associate = (sequelize) => {
  const studentModel = createStudent(sequelize);
  const instructorModel = createInstructor(sequelize);
  const courseModel = createCourse(sequelize);
  const takeModel = createTakeRelation(sequelize);

  instructorModel.hasOne(courseModel, {
    foreignKey: "instructorId",
  });
  // courseModel.belongsTo(instructorModel);

  studentModel.belongsToMany(courseModel, {
    through: takeModel,
    foreignKey: "studentId",
  });
  courseModel.belongsToMany(studentModel, {
    through: takeModel,
    foreignKey: "courseId",
  });

  return { studentModel, instructorModel, courseModel, takeModel };
};

export default associate;
