import { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

export default function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <>
      <nav>
        <NavLink to="/">HomePage</NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/myboards">My Boards</NavLink>
            <button onClick={logOutUser}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </nav>
    </>
  );
}
