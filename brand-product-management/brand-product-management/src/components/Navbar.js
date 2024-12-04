import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../auth";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold">
          Brand & Product Management
        </Link>
        {isAuthenticated() ? (
          <button onClick={handleLogout} className="text-white">
            Logout
          </button>
        ) : (
          <Link to="/login" className="text-white">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
