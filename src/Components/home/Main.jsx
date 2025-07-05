import CourseBox from "./CourseBox";
import CourseList from "./CourseList";
export default function Main() {
  const clickHandler = () => {
    console.log("clickkkkkkkkkkkkkkkkk :)");
  };
  return (
    <div>
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
}
