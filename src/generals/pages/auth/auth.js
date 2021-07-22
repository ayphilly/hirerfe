import "./auth.scss"
import redirect from "../../../hirer/hirerassets/redirecting.svg"
import { useSelector } from 'react-redux'
import {useEffect, useState} from "react"
import { useParams, useHistory, useLocation } from "react-router";
import queryString from 'query-string'
import { post } from "../../../requests";
import {useDispatch } from 'react-redux'

import { setToken, setAuthData } from "../../../slices/authSlice"
export const Auth = () => {
    const { search } = useLocation()
    const values = queryString.parse(search)
    let history = useHistory();
    const [message, setMessage] = useState({
        status: '',
        text: ""
    })

    const dispatch = useDispatch()
    
    const socialAuth = ()=> {
        

        post('/v1/auth/login/in/google/callback', {
            state: values.state,
            code: values.code
        })
        .then((response) => {
            console.log(response);
            dispatch(setAuthData(response.data.data));
            setMessage({
                status: true,
                text: response.data.message
            })
            setTimeout(()=> {
                response.data.data.role == "company" ? history.push("/dashboard/hirer") :history.push("/dashboard/talent");
            }, 2000)
            
            
        }, (error) => {
            console.log(values)
            setMessage({
                status: false,
                text: error.response.data.message
            })
            console.log(error);
            
        });

        
    }

    useEffect(()=> {
        socialAuth();
    },[])
    return (
        <div className="auth-container">
           
        <div className="auth-inner">
            { message.text && <div className= {`auth-message ${message.status ? 'success' : 'error'}`}>
                        <p>{message.text}</p>
                </div>}
            <div className="auth-inner-main">
                <img src={redirect} alt="auth-svg"/>
                <span><p>Authenticating</p> <p>...</p></span>
                {/* <Link className="error-404-btn" to="/" style={{textDecoration:'none'}}> Back To Homepage </Link> */}
                
            </div>

        </div>

    </div>
    )
}