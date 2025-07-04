import CourseBox from "./CourseBox";

export default function CourseList() {
  return (
    <div>
      <h2>Course List:</h2>
      <CourseBox
        course={{
          title: "course number one",
          details: "This is about the course",
        }}
      />

      {/* <h2>{course?.title}</h2>
      <p>{course?.details}</p>
      <span></span> */}
    </div>
  );
}
