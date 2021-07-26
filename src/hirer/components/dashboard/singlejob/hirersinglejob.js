import "./hirersinglejob.scss"
import profile from "../../../hirerassets/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faClock, faBan, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {useEffect} from "react"
function Hirersinglejob  (props) {

    useEffect( () => {
        // props.click()
    },[])


    return (
        <div className="hirer-job-container" onClick={() => props.view && props.view(props.id)}>
            <div className="hirer-job-inner-col">
                <div className="hirer-job-inner-top">
                    <div className="hirer-job-profile">
                        <img src={profile} alt="job profile"></img>
                        <div className="hirer-job-details">
                            <p>{props.title}</p>
                            <p>{props.company}</p>
                            <p> {props.location} <strong> • {props.type} </strong> </p>
                        </div>
                    </div>
                    
                </div>
                
                <div className="hirer-job-inner-bottom">
                    <div className="bottom-left-details">
                        <p>{props.type}</p>
                        {/* <p className="level">{props.level ? "Senior" : "Junior" } </p> */}

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

export default Hirersinglejob ;
