import { useState } from "react";
import CourseBox from "./CourseBox";
import CourseList from "./CourseList";

export default function Main() {
  const [message, setMessage] = useState("not loaded");

  const clickHandler = () => {
    // console.log("clickkkkkkkkkkkkkkkkk :)");
    setMessage("loading ....");
  };
  console.log(message);

  return (
    <div>
      <button onClick={clickHandler}>Click Me!</button>
      <p>{message}</p>
    </div>
  );
}
