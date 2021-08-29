import "./singlejob.scss"
import profile from "../../talentassets/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faClock, faBan, faExclamationCircle, faHeart} from '@fortawesome/free-solid-svg-icons'
import {useEffect} from "react"
function Singlejob  (props) {

    // useEffect( () => {
    //     props.click()
    // },[])


    return (
        <div className="resultjob-container" >
            <div className="singlejob-inner-col">
                <div className="single-inner-top">
                    <div className="single-job-profile">
                        <img src={profile} alt="job profile"></img>
                        <div className="single-job-details" onClick={()=> props.goto(props.title, props.id)}>
                            <p >{props.title}</p>
                            <p>{props.company}</p>
                            <p> {props.location} <strong> • {props.type} </strong> </p>
                        </div>
                    </div>
                    {!props.saved ? <FontAwesomeIcon icon={faEllipsisV} className="vertical-icon" onClick={(e) => props.click()}/> :
                    <FontAwesomeIcon icon={faHeart} className="heart-icon" size="2x" onClick={(event) => props.delete(event, props.id)}/>}

                    <div className="job-action">
                        <div className="save" onClick={() => props.save(props.id)}>
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
                        {props.description}
                    </p>

                </div>
                <div className="single-inner-bottom">
                    <p>{props.type}</p>
                    <p>
                        New
                        <FontAwesomeIcon icon={faClock} className="clock-icon" />
                        {props.days}d

                    </p>
                </div>

            </div>
        </div>
    );
}

export default Singlejob;
