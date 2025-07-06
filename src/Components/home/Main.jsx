import { useState } from "react";
import CourseBox from "./CourseBox";
import CourseList from "./CourseList";

export default function Main() {
  let headings = ["hello roocket", "the weather is blue", "from Ata-Vfr"];

  let courses = [
    {
      title: "php course",
      description: "this is about php course",
    },
    {
      title: "js course",
      description: "this is about js course",
    },
  ];

  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("not loaded");

  const clickHandler = () => {
    // console.log("clickkkkkkkkkkkkkkkkk :)");
    setMessage("loading ....");
    setClickCount(clickCount + 1);
  };
  console.log(message);
  console.log(clickCount);

  return (
    <div>
      <button onClick={clickHandler}>Click Me!</button>
      <p>{message}</p>
      <p>{clickCount}</p>
      <CourseBox
        course={{
          title: "javascript Course",
          details: "loooooooooooooooooorem",
        }}
      />
      <p>********************************</p>
      {courses.map((course) => (
        // <div>
        //   <h2>{course?.title}</h2>
        //   <p>{course?.description}</p>
        // </div>
        // ***********or use coursebox
        <CourseBox course={course} />
      ))}
      <p>********************************</p>

      {headings.map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
}
