import "./changepassword.scss"
import {Resetcontainer} from "./resetcontainer"
import Singleinputlabel from "../inputs/singleinputlabel"
import {useEffect, useState} from "react"
export const Changepassword = (props) => {

    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [error, setError] = useState('');
    

    const validate = () => {
        if (password === '') {
          setError("This field is required");
        } else {
          setError('');
        }
    };

    useEffect(() => {
        validate();
    }, [password]);
    
    return (
        <Resetcontainer
            step ="1"
            title = "Email Adddress"
            subtitle = "Your new password must be different from previously used passwords. "
            
            height={650}
        >
            <form>
                <Singleinputlabel
                    type="password"
                    label ="Password"
                    id="password"
                    name="password"
                    value={password}
                    disabled= {false}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Singleinputlabel
                    type="password"
                    label ="Confirm Password"
                    id="cpassword"
                    name="cpassword"
                    value={cpassword}
                    disabled= {false}
                    onChange={(e) => setCpassword(e.target.value)}
                />
                {error ? <p className="error">{error}</p> : <p>{error}</p>}
                <p className="modify">
                    By modifying your account, you agree to Hirer's Terms of Service 
                    and consent to our Cookie Policy and Privacy Policy.
                </p>
                
                <button type="button" className="next-step-btn" onClick={ () => props.next()} disabled={error ? true : false} >Reset</button>
            </form>
        </Resetcontainer>
    )
}