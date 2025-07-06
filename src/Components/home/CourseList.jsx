import CourseBox from "./CourseBox";

export default function CourseList({ children }) {
  return (
    <div>
      <h2>Course List:</h2>
      {children}

      {/* <h2>{course?.title}</h2>
      <p>{course?.details}</p>
      <span></span> */}
    </div>
  );
}
