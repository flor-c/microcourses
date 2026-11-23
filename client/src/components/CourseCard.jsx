import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h2>{course.title}</h2>
      <p>{course.shortDescription}</p>
      <p>{course.hours} hours</p>
      <Link to={`/courses/${course.id}`} >View Details</Link>
    </div>
  );
}

export default CourseCard;