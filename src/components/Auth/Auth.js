import { Link } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
    return (
        <ul className="nav-menu-auth">
                <li>
                <Link to="/Signin" className='nav-link'>Sign in</Link>
                </li>
                <li>
                <Link to="/signup" className='nav-link'>Sign up</Link>
                </li>
        </ul>
    );
}