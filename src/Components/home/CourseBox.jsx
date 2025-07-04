export default function CourseBox(props) {
  console.log(props);

  return (
    <div>
      <h2>{props?.title}</h2>
      <p>{props?.detail}</p>
      <span>{props?.time}</span>
    </div>
  );
}
