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
import { faUserCheck, faUserTimes, faQuestionCircle, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'
import { Emptystate } from "../../../../talent/components/emptystate/emptystate"
import { Empty } from "../../../../generals/emptyresult/emptyresult"
import { Applicantprofile } from "../applicantprofile/applicantprofile"
import { post, get } from "../../../../requests"
import { useSelector } from "react-redux";
import { Loading } from "../../../../generals/loading/loading"
export const Fulljob = () => {

    const info = useSelector((state) => state.auth.authData);
    const { search } = useLocation()
    const values = queryString.parse(search)
    const [active, setActive] = useState({
        info: true,
        applicant: false
    })
    // const [profile, setProfile] = useState({})
    const [load, setLoad] = useState(true)
    const [viewtalent, setView] = useState(false)
    const [response, setResponse] = useState({})
    const [applicants, setApplicants] = useState({})
    const [talent, setTalent] = useState(null)
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
    var Talentview = (id)=> {
        setView (!viewtalent);
        setTalent(id)
    }

    var getJob = ()=> {

        get(`/v1/employer/dashboard/job/${values.id}`)
          .then((response) => {
              if (response.status) {
                  setResponse(response.data);
                //   setLoad(false)
              } else {
                //  setError({
                //       status: response.data.status,
                //       message: response.data.message
                //   })
              }
              
          }, (error) => {
                setResponse(error.response.data);
                setLoad(false)
              console.log("Somethign went wrong");
          });


    }

    var getApplicants = ()=> {

        get(`/v1/employer/dashboard/job/${values.id}/applicants`)
          .then((response) => {
              if (response.status) {
                  console.log(response.data)
                  setApplicants(response.data);
                  setLoad(false)
              } else {
                //  setError({
                //       status: response.data.status,
                //       message: response.data.message
                //   })
              }
              
          }, (error) => {
                setApplicants(error.response.data);
                setLoad(false)
              console.log("Somethign went wrong");
          });


    }

    useEffect(()=> {
        getJob();
        getApplicants();
        
    },[])
    // useEffect(()=> {
    //     if (values.id > 4) {
    //         setResponse({
    //             status:false,
    //             message:'Nothing to show'
    //         })
    //     } else {
    //         setResponse({
    //             status:true,
    //             message:'job available'
    //         })
    //     }
    // },[])
    
    if (load) {

        return (
            <div className="fulljob-container">
                <div className="fulljob-inner">
                    <Loading></Loading>
                </div>
            </div>
            
        )

    } 
    else if (!response.status) {
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
                                <p>{response.data ? response.data.title : ''}</p>
                                <p>{info.company_name}</p>
                                <p>{response.data ? response.data.location + ' • ' + response.data.job_type : ''}</p>
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
                                <p>{response.data  ? response.data.applied_count : '0'}</p>
                            </div>
                        </div>
                        <div className={`job-info-container ${active.info ? ' sactive' : ' hide'} `}>
                            <Jobinfo
                                data= {response ? response.data : ''}
                            />
                        </div>
                        <div className={`job-applicant-container ${active.applicant ? ' sactive' : ' hide'}`}>
                            <Applicanttable 
                                view={Talentview}
                                applicants ={applicants.data}
                            ></Applicanttable>
                        </div>
                        
                    </div>
                </div>
                <div className={`show-talent-profile ${viewtalent ? 'active': 'hidden'}`}>
                    {talent && <Applicantprofile
                        // name="Ademola Okon"
                        id={talent}
                        close = {Talentview}
                        
                    />}
                </div>
                <div className={`overlay ${viewtalent ? 'active': 'hidden'}`}></div>
                
            </div>
        )
    }
}

const Jobinfo = (props) => {
    return (
        <div className="job-info-inner">
            
            <SingleInfo
                image= {title}
                title="Job Title"
                subtitle={props.data && props.data.title}
            />
            <SingleInfo
                image= {type}
                title="Job Type"
                subtitle={props.data && props.data.job_type}
            />
            <SingleInfo
                image= {salary}
                title="Job Salary"
                subtitle={'Up to 100,000 Per Month'}
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

const Applicanttable = (props)=> {

    var myapplicants = props.applicants.length > 0?  props.applicants.map((applicant, index) => {
        return (
            <Tablerow
                key={index}
                view={props.view}
                data = {applicant}
            ></Tablerow>

        )
    }) : {}

    if (props.applicants.length < 1) {
        return (
            <div>
                <Empty
                    text="No Applicants yet"
                ></Empty>
            </div>
        )
    }
    else {
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       {myapplicants}
                    </tbody>
                </table>
    
            </div>
        )

    }

    
}
const Tablerow = (props) => {

    var mymatch = props.data ? props.data.matches.map ((match, index) => {
        return (
            <Match
                key= {index}
                match={match}
            />
        )
    }): {}
    return (
        <tr>
            <td>{props.data ? props.data.user_name : ''}</td>
            <td>{props.data ? props.data.status : ''}</td>
            <td>
                {mymatch}
            </td>
            <td> <a onClick={() => props.view(props.data.id)}>View Profile</a></td>
            <td>{props.data ? props.data.applied_on : ''}</td>
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
    )
}
const Match = (props) => {
    return (
        <span className={`table-matches ${props.match.status ? ' match' : ' no-match'}`}>
            { props.match.status ? <FontAwesomeIcon icon={faCheck} className="check-icon" size="lg"/> :
                <FontAwesomeIcon icon={faTimes} className="times-icon" size="lg"/>
            }
            <p>{props.match.filter} {props.match.users_value}  </p>
        </span>
    )
}