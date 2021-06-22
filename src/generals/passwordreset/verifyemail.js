import "./verifyemail.scss"
import {Resetcontainer} from "./resetcontainer"
import Singleinputlabel from "../inputs/singleinputlabel"
import {useEffect, useState} from "react"
import { validateForm, validation } from "../../helper";
import { post } from "../../requests"
import { setMail } from "../../slices/resetpasswordSlice"
import {useDispatch } from 'react-redux'
export const Verifyemail = (props) => {


    const dispatch = useDispatch();

    const [email, setEmail] = useState({
        email: '',
        errors: {
            email : ''
        }
    });

    const [response, setResponse] = useState({
        status: null,
        message: ''
    })

    const handleMailInput = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        let errors = email.errors;

        errors = validation(name,value,errors);

        setEmail({...email, [name]: value, errors});

    }

    const checkMail = (event) => {

        event.preventDefault();

       
        post('/v1/auth/forgot-password', {email: email.email})
        .then((response) => {

            if (response.status) {
                console.log(response.data.message);
                // alert(email.email);
                dispatch(setMail(email.email));
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
            // setEmail({...email, error:error.response.data.errors})
            
        });

    }

    // useEffect(() => {
    //     validate();
    // },[email]);
    
    return (
        <Resetcontainer
            step ="1"
            subtitle = "Enter the email associated with your account  and we will send an email with instructions to reset your password "
            height={400}
            response= {response}
        >
            <form onSubmit={checkMail}>
                <Singleinputlabel
                    type="text"
                    label =" Email Adddress"
                    id="email"
                    name="email"
                    value={email.email}
                    disabled= {false}
                    onChange={(event) => handleMailInput(event)}
                    error = {email.errors.email}
                />
                
                
                <button type="submit" className="next-step-btn" disabled={validateForm(email.errors) ? email.email === '' ? true: false : true} >Send Instructions</button>
            </form>
        </Resetcontainer>
    )
}