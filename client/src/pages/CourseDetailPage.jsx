import { useParams } from "react-router-dom";
import courses from "../data/courses";

function CourseDetailPage() {
  const { id } = useParams();

  const course = courses.find((c) => c.id === id);
  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
    <div className="course-detail">
      <img src={course.image} alt={course.title} />
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseDetailPage;