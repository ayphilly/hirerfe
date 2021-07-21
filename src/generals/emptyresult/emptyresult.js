import "./emptyresult.scss"
import Emptysvg from "../../talent/talentassets/Empty.svg"
import { Link } from 'react-router-dom';
export const Empty = ()=> {


    return (
        <div className="empty-container">
            <div className="empty-inner">
                <div className="empty-inner-main">
                    <img src={Emptysvg} alt="Empty-svg"/>
                    <p>Nothing to show</p>
                    <p>
                        Try changing your search names.
                    </p>
                    {/* <Link className="empty-btn" to="/" style={{textDecoration:'none'}}> Back To Homepage </Link> */}
                    {/* <button className="error-404-btn" > Sign In </button> */}

                </div>

            </div>

        </div>
    )
}