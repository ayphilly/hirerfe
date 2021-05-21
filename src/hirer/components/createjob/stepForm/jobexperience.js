import "./jobexperience.scss"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {Singleexperience} from "./singleexperience"
export const Jobexperience = (props) => {

   
    return (
        <div className="job-experience-container">
            <div className="job-experience-inner">
                    <div className="job-experience-texts">
                        <div className="job-inner-texts">
                            <p> Qualifications</p>
                            <p>Step 3 / 4</p>
                        </div>
                    </div>

                    <div className="applicant-qualifications">
                        <div className="applicant-inner">
                            <div className="applicant-inner-texts">
                                <p>Applicant Qualifications</p>

                            </div>

                            <Singleexperience></Singleexperience>
                            
                            

                            <div className="add-experience">
                                <div className="add-experience-inner">
                                    <p>
                                        <FontAwesomeIcon icon={faPlusCircle}  className=""/>
                                        Add another Qualification
                                    </p>
                                </div>
                                

                            </div>
                            
                        </div>
                        

                    </div>

                    <div className="experience-btn">
                        <button type="back" className="back-btn" onClick={ () => props.navigation.previous()}> Back </button>
                        <button type="next" className="next-btn" onClick={ () => props.navigation.next()}> Next </button>
                    </div>
            </div>
        </div>
    )
}