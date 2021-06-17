import "./signin.scss"
import Singleinputlabel from "../inputs/singleinputlabel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from "react"
import apiClient from "../../api"
export const Signin =()=> {

    const [formState, setFormstate] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState({
        message : ""
    })

    const handleUserInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        
       
       setFormstate({...formState, [name]: value});
       
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formState))
        // apiClient.get('csrf-cookie').then(response =>  {
        //     console.log(response);
        // }, (error) => {
        //     console.log("errrrrr")
        //     console.log(error);
        // })
    }
    return (
        <div className="signin-container">

            <div className="signin-inner">
                <div className="signin-texts">
                    <p>Welcome Back</p>
                    <p>Reach top talent and find the right candidate today.</p>
                   
                </div>

                <div className="signin-options">
                    <a href="#" className="google">
                        <FontAwesomeIcon icon={faGoogle} className="brand-icon"/> 
                        Continue with Google
                    </a>
                    <a href="#" className="facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="brand-icon"/> 
                        Continue with Facebook
                    </a>

                </div>
                <div className="signin-divide">
                    <hr/> Or <hr/>

                </div>
                
                
                <form onSubmit={handleSubmit}>
                    <div className="form-inner">
                        <Singleinputlabel
                            type="text"
                            placeholder ="Continue with your email"
                            label ="Email"
                            name="email"
                            onChange={(event) => handleUserInput(event)}
                            // width= {520}
                        >

                        </Singleinputlabel>

                        <Singleinputlabel
                            type="password"
                            placeholder ="Continue with your password"
                            label ="Password"
                            name="password"
                            onChange={(event) => handleUserInput(event)}
                            // width= {520}
                        >

                        </Singleinputlabel>

                        <p> Forgotten password ? <a href="#"> Reset here </a> </p>
                        <button type="submit" className="signin-submit"> Sign In </button>

                        <p> New member ? <a href="#"> Create your free account now </a>  </p>

                    </div>
                    
                    

                    
                    
                </form>

            </div>

        </div>
    )
}