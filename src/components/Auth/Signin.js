import "./Signin.css";
import { useRef, useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";


export default function Signin() {
    const { signIn } = useContext(UserContext);
    const [validation, setValidation] = useState("");  
    const navigate = useNavigate();  
    const formRef = useRef();
     //Enregistrer les inputs
     const inputs = useRef([])
     const addInputs = el => {
         if(el && !inputs.current.includes(el)){
         inputs.current.push(el)
         }
         console.log(inputs);
     }  

     // Recuperer les valeurs entré dans le formulaire et les tester 
     const handleForm = async (e) => {
        e.preventDefault();
        console.log(inputs);
        try {
          const cred = await signIn(
            inputs.current[0].value,
            inputs.current[1].value
          );
          
          
          // à tester
          // formRef.current.reset();
          setValidation("");
          // console.log(cred);
          navigate("/app/jobs").then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        } catch {
          setValidation("Wopsy, email and/or password incorrect")
        }
      };

    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                    <form ref={formRef} onSubmit={handleForm}>
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" ref={addInputs} id="typeEmailX" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="password" ref={addInputs} id="typePasswordX" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            <p className="text-danger mt-1">{validation}</p>
                                        </div>
                                        <p className="small mb-5 pb-lg-2"><a href="#!">Forgot password?</a></p>
                                        <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                <p className="mb-0">Don't have an account? <a href="/signup" >Sign Up</a>
                                </p>
                                </div>

                            </div>  
                    </div>
                
                </div>
                </div>
                </div>
            </section>

        </>
    );
}