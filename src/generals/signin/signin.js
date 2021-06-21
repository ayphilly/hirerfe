import "./signin.scss"
import Singleinputlabel from "../inputs/singleinputlabel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from "react"
import {post} from "../../requests"
import { useSelector, useDispatch } from 'react-redux'
import { setAuthData } from "../../slices/authSlice"
import { useParams, useHistory, useLocation } from "react-router";
export const Signin =()=> {

    const dispatch = useDispatch()
    let history = useHistory();
    const [formState, setFormstate] = useState({
        email: '',
        password: ''
    })

    const [response, setResponse] = useState({
        status: null,
        message: ''
    })

    const handleUserInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

       setFormstate({...formState, [name]: value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(JSON.stringify(formState))
        post('/v1/auth/login', formState)
        .then((response) => {
            // console.log(response);

            if (response.status) {
                // console.log(response.data.status);
                // console.log(response.data.data.name);
                dispatch(setAuthData(response.data.data));
                
                setResponse({
                    status: response.data.status,
                    message: response.data.message
                })

                setTimeout(()=> {
                    response.data.data.role == "company" ? history.push("/dashboard") :history.push("/dashboard");
                }, 2000)
                
                
                

            } else {

                console.log(response);
                setResponse({
                    status: response.status,
                    message: response.message
                })
            }
            
        }, (error) => {
            // console.log(error.response.data.status)
            setResponse({
                status: error.response.data.status,
                message: error.response.data.message
            })
           
        });
    }
    return (
        <div className="signin-container">
            
            <div className="signin-inner">
                { response.message && <div className= {`signin-message ${response.status ? 'success' : 'error'}`}>
                        <p>{response.message}</p>
                </div>}
                <div className="signin-texts">
                    <p>Welcome Back</p>
                    <p>Reach top talent and find the right candidate today.</p>
                   
                </div>

                <div className="signin-options">
                    <a href="#" className="google">
                        <FontAwesomeIcon icon={faGoogle} className="sc-icon"/> 
                        Continue with Google
                    </a>
                    <a href="#" className="facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="sc-icon"/> 
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
                        <button type="submit" className="signin-submit"  disabled={formState.email && formState.password ? false : true} > Sign In </button>

                        <p> New member ? <a href="#"> Create your free account now </a>  </p>

                    </div>
                    
                    

                    
                    
                </form>

            </div>

        </div>
    )
}