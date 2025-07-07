export default function CourseBox({ course }) {
  //   console.log(props);

  const HeadStyle = {
    backgroundColor: "red",
    paddingBottom: "5rem",
  };

  return (
    <div>
      <h2>{course?.title}</h2>
      {/* <p>{course?.details}</p> */}
      <p
        className="course-description"
        style={HeadStyle}
        onMouseEnter={() => console.log("mouse enter")}
        onMouseLeave={() => console.log("mouse leave")}
      >
        {course?.description}
      </p>
      <span>time:10</span>
      <p>-*-*-*-*-*-*-*-</p>
    </div>
  );
}
