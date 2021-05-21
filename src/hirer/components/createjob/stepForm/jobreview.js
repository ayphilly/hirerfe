import "./jobreview.scss"
import setting from "../../../hirerassets/settings.svg"

export const Jobreview = (props) => {
    return (
        <div className="job-review-container">
            <div className="job-review-inner">
                <div className="job-review-texts">
                    <div className="job-inner-texts">
                        <p> Review Post</p>
                        <p>Step 4 / 4</p>
                    </div>
                </div>

                <div className="job-final">
                    <div className="job-final-inner">
                        <div className="job-title">
                            <div className="job-title-inner">
                                <div className="job-title-top">
                                    <div className="job-title-left">
                                        <p>{props.formData.jobTitle}</p>
                                        <p> {props.formData.companyName} - {props.formData.location} </p>
                                        <a href="#" className="job-title-btn">Apply Now </a>
                                    </div>
                                    <a href="" onClick={()=> props.navigation.go('names')}>Edit</a>

                                </div>
                                <hr/>

                                <div className="job-desc">
                                    <div className="job-desc-inner">
                                        <p>
                                            Bad stuff will happen if you don’t follow those 3 simple Grid rules, exactly.
                                            I’ve answered countless Bootstrap questions on Stack Overflow by simply applying those rules. 
                                            At first this might sound complicated, but it’s really easy once you understand how the Grid works.
                                        </p>
                                        <p>
                                            <strong>Job Type : </strong>
                                            {props.formData.jobType.contract && "contract    "}
                                            {props.formData.jobType.permanent && "permanent    "}
                                            {props.formData.jobType.temporary && "temporary     "}
                                            {props.formData.jobType.commission && "commission    "}
                                            {props.formData.jobType.fulltime && "fulltime    "}
                                            {props.formData.jobType.internship && "internship   "}
                                        </p>
                                        <ul>
                                            <li> Experience</li>
                                            <li> - Two Years Adobe Illustrator</li>
                                            <li> - Two Years Adobe Photoshop</li>
                                            <li> - Two Years Figma</li>
                                        </ul>

                                    </div>
                                
                                </div>
                                
                            </div>
                            
                            
                            
                        </div>

                        <div className="application-container">
                            <div className="application-inner">
                                <div className="application-top">
                                    <div className="application-top-inner">
                                        <p>Application Settings</p>
                                    </div>
                                    <img src={setting} alt="money"></img>

                                </div>
                                <div className="application-details">
                                    <div className="application-details-inner">
                                        <div className="apps">
                                            <div className="apps-left">
                                                <p>Send applications to the following account</p>
                                                <p> Blanco@gmail.com </p>
                                            </div>
                                            <a onClick={()=> props.navigation.go('address')}>Edit</a>
                                        </div>
                                        <hr/>
                                        <div className="apps">
                                            <div className="apps-left">
                                                <p>Resumee</p>
                                                <p> Required </p>
                                            </div>
                                            <a href="" onClick={()=> props.navigation.go('names')}>Edit</a>
                                        </div>
                                        <hr/>
                                        <div className="apps">
                                            <div className="apps-left">
                                                <p>Application Deadline</p>
                                                <p> 10 days </p>
                                            </div>
                                            <a href="#">Edit</a>
                                        </div>
                                        <hr/>

                                    </div>
                                </div>

                                    
                            </div>

                        </div>
                        

                    </div>

                </div>

            </div>
        </div>
    )
}