import "./hirersinglejob.scss"
import profile from "../../../hirerassets/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faClock, faBan, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {useEffect} from "react"
import { useSelector,useDispatch } from 'react-redux'
function Hirersinglejob  (props) {

    const empAvi = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    const empAvatar = useSelector((state) => state.company.dashboard);

    useEffect( () => {
        // props.click()
    },[])


    return (
        <div className="hirer-job-container" onClick={() => props.view && props.view(props.title,props.id)}>
            <div className="hirer-job-inner-col">
                <div className="hirer-job-inner-top">
                    <div className="hirer-job-profile">
                        
                        {empAvatar.data.company_data.avatar ? <img src={empAvatar.data.company_data.avatar} alt="job profile"/> :<img src={empAvi} alt="job profile"/>  }
                        {/* <img src={empAvi} alt="user profile"/>   */}
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
                            1d

                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Hirersinglejob ;
