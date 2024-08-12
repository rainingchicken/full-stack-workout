import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogOutClick = () => {
    logout();
  };
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
        <span id="logoutSpan">
          {" "}
          {user && <button onClick={handleLogOutClick}>LOGOUT</button>}
        </span>{" "}
        <span id="loginSignupSpan">
          {" "}
          {!user && (
            <>
              <Link to="/login">Login</Link> <Link to="/signup">Signup</Link>
            </>
          )}
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
