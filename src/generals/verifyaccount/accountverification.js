import "./accountverification.scss"
import Check from "../../talent/talentassets/check.svg";
import { useParams, useHistory, useLocation } from "react-router";
import { useState, useEffect } from "react";
import queryString from 'query-string'

import apiClient from "../../api";
const Accountverification = () => {

    let history = useHistory();

    const { search } = useLocation()
    const values = queryString.parse(search)
    // alert(JSON.stringify(values))
    
    const [message, setMessage] = useState({
        status: true,
        text: "account verification complete, you can now log in "
    })

    const [resend, setResend] = useState({
        error: false,
        message : " "
    })

    const goToSignin = () => {
        history.push("/signin");
    }

    const resendVerification = () => {
        apiClient.get('v1/email/resend-verify')
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

        apiClient.get(`v1/email/verify/${values.id}/${values.hash}?${values.expires}&${values.signature}`)
        .then((response) => {
            console.log(response.status);
            setMessage({
                status: response.status,
                text: response.message
            })
            
        }, (error) => {
            setMessage({
                status: false,
                text: "Your email could not be verified, Verification token is expired/invalid"
            })
            console.log(error);
            
        });

    }

    useEffect(()=>{
        setMessage({
            status: true,
            text: "Your email has been verified, You Can Now Log In"
        })

    }, [message.status])

    

    
    return (
        <div className="account-verification-container">
           
            <div className="account-verification-box">
                <div className="account-verification-rect"></div>
                
                <div className="box-inner">
                    <img src={Check} alt="Check-icon"/>

                    <p>
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