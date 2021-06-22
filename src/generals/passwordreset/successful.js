import "./successful.scss"
import successful from "../../hirer/hirerassets/successful.svg"
import { useHistory } from 'react-router-dom';
export const Resetsuccessful = (props)=> {
    const history = useHistory();
    const moveToSignin = () => {
        history.push("/signin");
    };

    return (
        <div className="successful-container" >
            <div className="progress"></div>
            <div className="successful-inner-col">
                    <img src={successful} alt="successful"/>
                    <p>Password Reset SUccessful</p>
                    <p>
                        Your Password Reset Was a Successful
                    </p>
                    <button type="button" className="successful-btn" onClick={moveToSignin} >Go To Sign in</button>
            
            </div>

        </div>
    )

}