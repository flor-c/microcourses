import { Link } from "react-router-dom";

function Button({ to, onClick, children, disabled }) {
  if (to) {
    return (
      <Link to={to} className="button">
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;