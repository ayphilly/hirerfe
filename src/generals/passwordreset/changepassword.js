import "./changepassword.scss"
import {Resetcontainer} from "./resetcontainer"
import Singleinputlabel from "../inputs/singleinputlabel"
import {useEffect, useState} from "react"
import {validation } from "../../helper";
import { post } from "../../requests"
import { useSelector } from 'react-redux'
import {
    
    useParams
  } from "react-router-dom";

export const Changepassword = (props) => {

    const data = useSelector((state) => state.resetpassword.email)
    let { token, hash } = useParams();
    
    const [password, setPassword] = useState({
        password : '',
        errors : {
            password : '',
        }

    });

    const [response, setResponse] = useState({
        status: null,
        message: ''
    })

    

    const [cpassword, setConfirmation] = useState({
        confirm_password: '',
        error : ''

    });
   
    const handlePasswordInput = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        let errors = password.errors;

        errors = validation(name,value,errors);

        setPassword({...password, [name]: value, errors});

    }
    const handleCpasswordInput = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        let error = cpassword.error;

        // errors = validation(name,value,errors);
        if (value === password.password) {
            error = ''
        } else {
            error = "password does not match, try again"
        }

        setConfirmation({...cpassword, [name]: value, error});

    }

    const changePassword= (event) => {

        event.preventDefault();
       
       
        post('/v1/auth/reset-password', { 
                email: data,
                token:token,
                password: password.password,
                password_confirmation: cpassword.confirm_password
            })
        .then((response) => {

            if (response.status) {

                setResponse({
                    status: response.data.status,
                    message: response.data.message
                })

                props.next();
                
            } else {
                setResponse({
                    status: response.data.status,
                    message: response.data.message
                })
            }
            
        }, (error) => {
            setResponse({
                status: error.response.data.status,
                message: error.response.data.message
            })
        });

    }
    
    useEffect(()=> {
        // alert(hash, token);
    })

    
    return (
        <Resetcontainer
            step ="1"
            subtitle = "Your new password must be different from previously used passwords. "
            email={data}
            response= {response}
            height={650}
        >
            <form onSubmit={changePassword}>
                <Singleinputlabel
                    type="password"
                    label ="Password"
                    id="password"
                    name="password"
                    value={password.password}
                    disabled= {false}
                    onChange={(event) => handlePasswordInput(event)}
                    error = {password.errors.password}
                />
                <Singleinputlabel
                    type="password"
                    label ="Confirm Password"
                    id="confirm_password"
                    name="confirm_password"
                    value={cpassword.confirm_password}
                    disabled= {false}
                    onChange={(event) => handleCpasswordInput(event)}
                    error = {cpassword.error}
                />
               
                <p className="modify">
                    By modifying your account, you agree to Hirer's Terms of Service 
                    and consent to our Cookie Policy and Privacy Policy.
                </p>
                
                <button type="submit" className="next-step-btn" disabled={ (password.password === cpassword.confirm_password) ? (password.password === '' || cpassword.confirm_password === '') ? true  : false : true  }  >Reset</button>
            </form>
        </Resetcontainer>
    )
}