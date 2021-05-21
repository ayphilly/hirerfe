import "./singletopjobs.scss"
import profile from "../../talentassets/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faClock, faBan, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {useEffect} from "react"

function Singletopjobs  (props) {

    

    useEffect( () => {
        props.click()
    })


    return (
        <div className="singlejob-container">
            <div className="singlejob-inner-col">
                <div className="single-inner-top">
                    <div className="single-job-profile">
                        <img src={profile} alt="job profile"></img>
                        <div className="single-job-details">
                            <p>{props.title}</p>
                            <p>{props.company}</p>
                            <p> {props.location} <strong> • {props.type} </strong> </p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faEllipsisV} className="vertical-icon" />

                    <div className="job-action">
                        <div className="save">
                            <FontAwesomeIcon icon={faHeart} className="send-icon" />
                            <p> Save Job </p>
                        </div>
                        <div className="not-interested">
                            <FontAwesomeIcon icon={faBan} className="send-icon" />
                            <p> Not Interested </p>
                        </div>
                        <div className="report">
                            <FontAwesomeIcon icon={faExclamationCircle} className="send-icon" />
                            <p> Report Job</p>
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
                            <FontAwesomeIcon icon={faClock} className="clock-icon" />
                            {props.days}days ago

                        </p>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default Singletopjobs