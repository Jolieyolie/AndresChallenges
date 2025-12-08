let studentName: string = "Alice";
let studentAge: number = 25;
let isEnrolled: boolean = true;
let grades: number[] = [95, 87, 92, 88];
let courses: string[] = ["Math", "Science", "History"];

interface Student {
  id: number;
  name: string;
  email: string;
  gpa: number;
}
let student: Student = {
  id: 1,
  name: "Alice",
  email: "alice@school.com",
  gpa: 3.8,
};

function displayStudent(student: Student): void {
  console.log(`${studentName} is ${studentAge} years old`);
  console.log(`Enrolled: ${isEnrolled}`);
  console.log(`Grades:`, grades);
  console.log(`Courses:`, courses);
  console.log(`Student Info:`, student);
}
displayStudent(student);
