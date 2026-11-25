import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sire-header">
      <Link to="/" className="logo">
        MicroCourses
      </Link>
    </header>
  );
}

export default Header;