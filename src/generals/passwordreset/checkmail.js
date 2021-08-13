import "./checkmail.scss"
import checkmail from "../../talent/talentassets/checkMail.svg"
import { useHistory } from 'react-router-dom';

export const Checkmail = (props)=> {
    const history = useHistory();
    const moveToHompage = () => {
        history.push("/");
    };

    return (
        <div className="checkmail-container" >
            <div className="progress"></div>
            <div className="checkmail-inner-col">
                    <img src={checkmail} alt="check-mail"/>
                    <p>Check your Mail</p>
                    <p>
                        {props.subtext ? props.subtext : 'We have sent a mail to your registered email address, click the link to verify your account.'}
                      
                    </p>
                    <button type="button" className="checkmail-btn" onClick={moveToHompage} >Open Email App</button>
                    <span>
                        <p>Did not receive the mail ? Check your Spam filter,</p><p> or Try resending.</p>
                    </span>
            </div>

        </div>
    )

}