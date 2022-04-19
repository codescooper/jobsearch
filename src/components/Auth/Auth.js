import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";
import {signOut} from "firebase/auth";
import { useNavigate as navigate } from "react-router-dom";
import "./Auth.css";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Auth() {

    const {currentUser} = useContext(UserContext)
    console.log("PRIVATE", currentUser);

    const logOut = async () => {
        try {
          await signOut(auth)
          navigate("/")
        } catch {
          alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
        }
    }

    if(!currentUser) {
        return (
            <ul className="nav-menu-auth">
                <>
                    <li>
                    <Link to="/Signin" className='nav-link'>Sign in</Link>
                    </li>
                    <li>
                    <Link to="/signup" className='nav-link'>Sign up</Link>
                    </li>
                </>
            </ul>
        );
    } else {
        return (
            <ul className="nav-menu-auth">
                <>
                    <li>
                        <button onClick={logOut} className="btn btn-danger ms-2 "> Log Out </button>
                    </li>
                </>
            </ul>
        );
    }
}