class Student {
  constructor(public name: string, public grade: number) {}
}

function getStudentName(): string {
  const students = new Map([
    ["Jane Doe", 1],
    ["John Smith", 2],
    ["Bob Johnson", 3],
  ]);

  let student = new Student("Unknown", -1);

  if (students.has(name)) {
    student = students.get(name) as Student;
  } else {
    student = new Student(name, grade);
    students.set(name, student);
  }

  return `${student.name} is in ${student.grade}th grade`;
}
