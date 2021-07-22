import "./singlejob.scss"
import profile from "../../talentassets/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faClock, faBan, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {useEffect} from "react"
function Singlejob  (props) {

    useEffect( () => {
        props.click()
    },[])


    return (
        <div className="resultjob-container">
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
                        <div className="save" onClick={(event) => props.save(event, props.id)}>
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
                <div className="single-job-description">
                    <p className="description">
                        Desktop Technician will provide day to day local \ 
                        remote desktop support, receive inbound calls, answer
                        questions, troubleshoot and document steps performed to,
                        Desktop Technician will provide...
                    </p>

                </div>
                <div className="single-inner-bottom">
                    <div className="bottom-left-details">
                        <p>{props.type}</p>
                        <p className="level">{props.level ? "Senior" : "Junior" } </p>

                    </div>
                    <div className="bottom-right">
                        <p>
                            New
                            <FontAwesomeIcon icon={faClock} className="clock-icon" />
                            {props.days}d

                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Singlejob;
