import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import courses from "../data/courses";
import ModuleList from "../components/ModuleList";
import Button from "../components/Button";

function CourseDetailPage() {
  const { id } = useParams();
  const [enrolled, setEnrolled] = useState(false);

  const course = courses.find((c) => c.id === id);
  if (!course) {
    return (
      <div className="course-detail">
        <h1>Course not found</h1>
        <Link to="/">Back to all courses</Link>
      </div>
    )
  }

  return (
    <div className="course-detail">
      <Link to="/" className="back-link">← Back to all courses</Link>
      <img src={course.image} alt={course.title} />
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <h2>What you'll learn</h2>
      <ModuleList modules={course.modules} />

      <Button onClick={() => setEnrolled(true)} disabled={enrolled}>
        {enrolled ? "Enrolled" : "Enrol Now"}
      </Button>
      {enrolled && <p className="enrol-message">You're enrolled in {course.title}!</p>}
    </div>
  );
}

export default CourseDetailPage;