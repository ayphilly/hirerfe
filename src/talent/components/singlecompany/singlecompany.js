import "./singlecompany.scss"
import profile from "../../talentassets/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {useEffect} from "react"

function Singletopcompany (props) {

    

    return (
        <div className="singlecompany-container">
            <div className="singlecompany-inner-col">
                <div className="single-inner-top">
                    <div className="singlecompany-profile">
                        <img src={profile} alt="job profile"></img>
                        <div className="singlecompany-details">
                            <p>{props.company}</p>
                            <p> 
                                <FontAwesomeIcon icon={faStar} className="send-icon"/> 
                                <FontAwesomeIcon icon={faStar} className="send-icon"/>
                                <FontAwesomeIcon icon={faStar} className="send-icon"/>
                                <FontAwesomeIcon icon={faStar} className="send-icon"/>
                                <FontAwesomeIcon icon={faStar} className="send-icon"/>
                            <strong> • {props.reviews} </strong> </p>
                        </div>
                    </div>
                </div>
                <div className="single-inner-bottom">
                    <div className="bottom-left">
                        <p>
                            <FontAwesomeIcon icon={faTelegramPlane} className="send-icon"/>
                            Apply

                        </p>

                    </div>
                    <div className="bottom-right">
                        <p>
                            <FontAwesomeIcon icon={faStar} className="clock-icon" />
                            {props.days}days ago

                        </p>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default Singletopcompany