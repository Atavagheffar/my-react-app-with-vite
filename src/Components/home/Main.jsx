import CourseBox from "./CourseBox";
export default function Main() {
  return (
    <div>
      <h2>Course List:</h2>
      <CourseBox title="html course" detail="html course detail" time="100" />
      <CourseBox title="css course" detail="css course detail" time="110" />
      <CourseBox title="js course" detail="js course detail" time="120" />
    </div>
  );
}
