import "./accountverification.scss"
import Check from "../../talent/talentassets/check.svg";
import Errorclose from "../../talent/talentassets/errorclose.svg";
import { useParams, useHistory, useLocation } from "react-router";
import { useState, useEffect } from "react";
import queryString from 'query-string'
import apiClient from "../../api"
import {post, get} from "../../requests"
const Accountverification = () => {

    let history = useHistory();

    const { search } = useLocation()
    const values = queryString.parse(search)
    // alert(JSON.stringify(values))
    
    const [message, setMessage] = useState({
        status: '',
        text: ""
    })

    const [resend, setResend] = useState({
        error: false,
        message : " "
    })

    const goToSignin = () => {
        history.push("/signin");
    }

    const resendVerification = () => {
        get('/v1/email/resend-verify')
        .then((response) => {
            setResend({
                error: false,
                message: "Check your email for new verification link"
            })
        }, (error) => {
            setResend({
                error: true,
                message: "Something Went wrong, try again."
            })
            console.log(error);
        });
    }
    

    const verifyAccount = () => {

        get(`/v1/email/verify/${values.id}/${values.hash}?expires=${values.expires}&signature=${values.signature}`)
        .then((response) => {
            console.log(response);
            setMessage({
                status: true,
                text: "Your email has been successfully verified"
            })
            
        }, (error) => {
            console.log(values)
            setMessage({
                status: false,
                text: "Your email could not be verified, Verification token is expired/invalid"
            })
            console.log(error);
            
        });

    }

    useEffect(()=>{
        // verifyAccount();
        setMessage({
            status: false,
            text: "Your email has been verified, You Can Now Log In"
        })

    }, [])

    

    
    return (
        <div className="account-verification-container">
           
            <div className="account-verification-box">
                <div className={` account-verification-rect  + ${message.status ? '' : ' error'} ` }></div>
                
                <div className="box-inner">

                    { message.status ? <img src={Check} alt="Check-icon"/> : <img src={Errorclose} alt="error-icon"/>}

                    <p className={`${message.status ? '' : ' error'} ` }>
                        {message.text}
                    </p>
                    <button className="verify-btn" onClick={ message.status ? goToSignin : resendVerification }> 
                        {message.status ? "Go To Sign In" : "Resend Verification "}
                    </button>

                </div>
                

            </div>

        </div>
    )

}

export default Accountverification