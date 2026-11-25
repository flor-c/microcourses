import { Link } from "react-router-dom";
import Button from "./Button";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h2>{course.title}</h2>
      <p>{course.shortDescription}</p>
      <p>{course.hours} hours</p>
      <Button to={`/courses/${course.id}`}>View Details</Button>
    </div>
  );
}

export default CourseCard;