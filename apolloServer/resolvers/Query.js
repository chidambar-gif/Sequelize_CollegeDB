export async function getStudents(parent, args, contextValue, info) {
  const students = await contextValue.models.studentModel.findAll();
  return students;
}

export async function getStudent(parent, args, contextValue, info) {
  const student = await contextValue.models.studentModel.findByPk(
    args.studentId
  );
  return student;
}

export async function getInstructors(parent, args, contextValue, info) {
  const instructors = await contextValue.models.instructorModel.findAll();
  return instructors;
}

export async function getInstructor(parent, args, contextValue, info) {
  const instructor = await contextValue.models.instructorModel.findByPk(
    args.instructorId
  );
  return instructor;
}

export async function getCourses(parent, args, contextValue, info) {
  const courses = await contextValue.models.courseModel.findAll();
  return courses;
}

export async function getCourse(parent, args, contextValue, info) {
  const course = await contextValue.models.courseModel.findByPk(args.courseId);
  return course;
}

export async function getTakes(parent, args, contextValue, info) {
  const takes = await contextValue.models.takeModel.findAll();
  console.log(takes);
  return takes;
}

export async function getTake(parent, args, contextValue, info) {
  const take = await contextValue.models.takeModel.findByPk(
    args.studentId,
    args.courseId
  );
  return take;
}
