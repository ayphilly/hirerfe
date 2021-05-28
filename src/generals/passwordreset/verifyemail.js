import "./verifyemail.scss"
import {Resetcontainer} from "./resetcontainer"
import Singleinputlabel from "../inputs/singleinputlabel"
import {useEffect, useState} from "react"
export const Verifyemail = (props) => {

    const [email, setEmail] = useState();
    const [error, setError] = useState(false);

    const validate = () => {
        if (email === "") {
          setError(true);
        } else {
          setError(false);
        }
    };

    useEffect(() => {
        validate();
    },[email]);
    
    return (
        <Resetcontainer
            step ="1"
            title = "Email Adddress"
            subtitle = "Enter the email associated with your account  and we will send an email with instructions to reset your password "
            height={400}
        >
            <form>
                <Singleinputlabel
                    type="text"
                    label =" Email Adddress"
                    id="verifyemail"
                    name="verifyemail"
                    value={email}
                    disabled= {false}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error ? <p> This field is required </p> : <p></p>}
                
                <button type="button" className="next-step-btn" onClick={ () => props.next()} disabled={email ? false : true} >Send Instructions</button>
            </form>
        </Resetcontainer>
    )
}