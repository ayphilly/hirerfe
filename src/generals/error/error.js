import "./error.scss"
import Errorsvg from "../../talent/talentassets/errorsvg.svg"
import { Link } from 'react-router-dom';
export const Error = ()=> {


    return (
        <div className="error-404-container">
            <div className="error-404-inner">
                <div className="error-404-inner-main">
                    <img src={Errorsvg} alt="Error-404-svg"/>
                    <p>It’s Empty Here</p>
                    <p>
                        Looks like this page can’t be found, 
                        maybe it was removed or renamed.
                    </p>
                    <Link className="error-404-btn" to="/" style={{textDecoration:'none'}}> Back To Homepage </Link>
                    {/* <button className="error-404-btn" > Sign In </button> */}

                </div>

            </div>

        </div>
    )
}