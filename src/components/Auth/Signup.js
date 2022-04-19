import React, { useRef, useState, useContext } from "react";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../../context/userContext";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
  } from "firebase/auth"
import {auth} from "../../firebase-config";

export default function Signup() {
    const signUpUser = useContext(UserContext);
    const navigate = useNavigate();
    const [validation, setValidation] = useState("");
    //Enregistrer les inputs
    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
        inputs.current.push(el)
        }
    }  

    const formRef = useRef();

    // Recuperer les valeurs entré dans le formulaire et les tester 
    const handleForm = async (e) => {
        e.preventDefault()
        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
          setValidation("6 characters min")
          return;
        }
        else if(inputs.current[1].value !== inputs.current[2].value) {
          setValidation("Passwords do not match")
          return;
        }
        try {
          createUser(inputs.current[0].value, inputs.current[1].value);
        //   navigate("/app/home");
        } catch (err) {
          if(err.code === "auth/invalid-email") {
            setValidation("Email format invalid")
          }
          if(err.code === "auth/email-already-in-use") {
            setValidation("Email already used")
          }
        }
      }

    const createUser = async (e) => {
        console.log("creer l'utilisateur : " + inputs.current[0].value);
        const cred = await createUserWithEmailAndPassword(
            auth,
            inputs.current[0].value,
            inputs.current[1].value
        ).then((userCredential) => {
            // Signed in 
            console.log(cred);
            // ...
          })
          .catch((error) => {
              setValidation(error.message)
            // ..
          });;
    
}

    return (
        <>
            <section className="body-app vh-100">
                <div className="container h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="img-fluid" alt="Phone image" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form className="text-light" onSubmit={handleForm} ref={formRef}>
                        <div className="form-outline mb-1">
                            <input type="email" ref={addInputs} id="form1Example13" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form1Example13">Email address</label>
                        </div>

                        <div className="form-outline mb-1">
                            <input type="password" ref={addInputs} id="pw1" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form1Example23">Password</label>
                        </div>

                        <div className="form-outline mb-1">
                            <input type="password" ref={addInputs} id="pwd2" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="form1Example23">Repeat Password</label>
                        </div>

                        <div className="d-flex justify-content-around align-items-center mb-1">
                            <div className="form-check">
                            <input className="form-check-input" ref={addInputs} type="checkbox" value="" id="form1Example3" />
                            <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                            </div>
                            <a href="#!">Forgot password?</a>
                        </div>
                        <div>
                            <p className="text-danger">{ validation }</p>
                        </div>
                        <button type="submit" className="btn btn-light btn-lg btn-block mb-4">Sign up <i class="bi bi-box-arrow-in-right"></i></button>

                        </form>
                        <a className="btn btn-light btn-lg btn-block" href="#!"
                            role="button">
                            <i className="fab fa-facebook-f me-2"></i>Continue with Facebook <i class="bi bi-facebook"></i> 
                        </a>
                        <a className="btn btn-light btn-lg btn-block"  href="#!"
                            role="button">
                            <i className="fab fa-twitter me-2"></i>Continue with Google <i class="bi bi-google"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </section>

        </>
    );
}