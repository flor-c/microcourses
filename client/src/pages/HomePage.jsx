import courses from "../data/courses";

function HomePage() {
  return (
    <div className="all-courses">
      <h1>All Courses</h1>
      {courses.map((course) => (
        <p key={course.id}>{course.title}</p>
      ))
      }
    </div>
  );
}

export default HomePage;