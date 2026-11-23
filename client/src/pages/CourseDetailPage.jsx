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
      <h1>{course.title}</h1>
    </div>
  );
}

export default CourseDetailPage;