import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return<>
        <nav>
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/myboards">My Boards</NavLink>
        </nav>
    </>
}