import "./fulljob.scss"
import profile from "../../../hirerassets/profile.png"
import title from "../../../hirerassets/title.svg"
import type from "../../../hirerassets/type.svg"
import description from "../../../hirerassets/description.svg"
import salary from "../../../hirerassets/salary.svg"
import experience from "../../../hirerassets/experience.svg"
import { useParams, useHistory, useLocation } from "react-router";
import { useState, useEffect } from "react"
import queryString from 'query-string'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faUserTimes, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import { Emptystate } from "../../../../talent/components/emptystate/emptystate"
import { Empty } from "../../../../generals/emptyresult/emptyresult"
export const Fulljob = () => {

    const { search } = useLocation()
    const values = queryString.parse(search)
    const [active, setActive] = useState({
        info: true,
        applicant: false
    })

    const [response, setResponse] = useState({
        status: true,
        message:'Nothing to show'
    })

    var jobSelect = () => {
        setActive({
            info: true,
            applicant: false
        })
    }
    var applicantSelect = () => {
        
        setActive({
            info: false,
            applicant: true
        })
    }

    useEffect(()=> {
        if (values.id != 1) {
            setResponse({
                status:false,
                message:'Nothing to show'
            })
        } else {
            setResponse({
                status:true,
                message:'job available'
            })
        }
    },[])

    if (!response.status) {

        return (
            <div className="fulljob-container">
                <div className="fulljob-inner">
                    <Empty
                        text="Job Id invalid"
                    ></Empty>

                </div>
                
            </div>
            
        )

    } 
    
    else {

    
        return (
            <div className="fulljob-container">
                <div className="fulljob-inner">
                    <div className="fulljob-inner top">
                        <img src={profile} alt="company-profile"/>
                        <div className="top-jobdetails">
                            <div className="top-jobdetails top">
                                <p>{values.name} {values.id}</p>
                                <p>Excis Compliance LTD</p>
                                <p>Lagos, Nigeria • Fulltime</p>
                            </div>
                            <div className="top-jobdetails bottom">
                                <button>Promote Job</button>
                                <button>More</button>
                            </div>
                        </div>
                    </div>
                
                    <div className="fulljob-inner bottom">
                        <div className="fulljob-nav-link">
                            <div className={`fulljob-single info ${active.info ? ' active' : ' notactive'}`} onClick={ jobSelect}>
                                <p>Job Info</p>
                                <p></p>
                            </div>
                            <div className={`fulljob-single applicant ${active.applicant ? ' active' : ' notactive'}`} onClick={ applicantSelect}>
                                <p>Applicants</p>
                                <p>20</p>
                            </div>
                        </div>
                        <div className={`job-info-container ${active.info ? ' sactive' : ' hide'} `}>
                            <Jobinfo></Jobinfo>
                        </div>
                        <div className={`job-applicant-container ${active.applicant ? ' sactive' : ' hide'}`}>
                            <Applicanttable></Applicanttable>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const Jobinfo = () => {
    return (
        <div className="job-info-inner">
            
            <SingleInfo
                image= {title}
                title="Job Title"
                subtitle="Front End Developer"
            />
            <SingleInfo
                image= {type}
                title="Job Type"
                subtitle="Full Time • Lagos"
            />
            <SingleInfo
                image= {salary}
                title="Job Salary"
                subtitle="Up to ₦100,000.00 per month"
            />
            <SingleInfo
                image= {description}
                title="Job Description"
                subtitle="Bad stuff will happen if you don’t follow those 3 simple Grid rules, exactly. I’ve answered countless Bootstrap questions on Stack Overflow by simply applying those rules. At first this might sound complicated, but it’s really easy once you understand how the Grid works."
            />
            <SingleInfo
                image= {experience}
                title="Job Experience"
                subtitle="working : 2 years (Preferred)"
            />

        </div>
    )
}

const SingleInfo = (props)=> {
    return (
        <div className="job-info-inner single-info">
            <img src={props.image}/>
            <div className="single-content">
                <p>{props.title}</p>
                <p>{props.subtitle}</p>
            </div>

        </div>
    )
}

const Applicanttable = ()=> {

    return (
        <div className="job-applicant-inner">
            <table class="job-applicant-inner styled-table">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Status</th>
                        <th>Matches</th>
                        <th>cv</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test Name</td>
                        <td>Awaiting review</td>
                        <td>Dom</td>
                        <td> <a>View</a></td>
                        <td>12/120/2021</td>
                        <td>
                            <div className="action-box green">
                                <FontAwesomeIcon icon={faUserCheck} className="star-icon" size="lg"/>
                            </div>
                            <div className="action-box yellow">
                                <FontAwesomeIcon icon={faQuestionCircle} className="star-icon" size="lg"/>
                            </div>
                            <div className="action-box red">
                                <FontAwesomeIcon icon={faUserTimes} className="star-icon" size="lg"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Test Name</td>
                        <td>Awaiting review</td>
                        <td>Dom</td>
                        <td> <a>View</a></td>
                        <td>12/120/2021</td>
                        <td>
                            <div className="action-box green">
                                <FontAwesomeIcon icon={faUserCheck} className="star-icon" size="lg"/>
                            </div>
                            <div className="action-box yellow">
                                <FontAwesomeIcon icon={faQuestionCircle} className="star-icon" size="lg"/>
                            </div>
                            <div className="action-box red">
                                <FontAwesomeIcon icon={faUserTimes} className="star-icon" size="lg"/>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    )
}