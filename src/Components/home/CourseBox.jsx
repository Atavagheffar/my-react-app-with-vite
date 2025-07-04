export default function CourseBox({ course }) {
  //   console.log(props);

  return (
    <div>
      <h2>{course?.title}</h2>
      <p>{course?.details}</p>
      <span>time:10</span>
    </div>
  );
}
