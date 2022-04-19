import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function JobApp () {

    const {currentUser} = useContext(UserContext)
    console.log("PRIVATE", currentUser);
  
    if(!currentUser) {
      return <Navigate to="/" />
    }
  
    return (
      <div className="container">
         some text
      </div>
  
    );

}