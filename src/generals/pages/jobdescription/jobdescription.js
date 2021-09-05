import "./jobdescription.scss"
import Aspire from "../../../talent/talentassets/aspire.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {Companyinfo} from "../../companyinfo/companyinfo"
import {Jobapplication} from "../../jobapplication/jobapplication"
import {useEffect, useState} from "react"
import savedjobimage from "../../../talent/talentassets/Empty.svg";
import { useParams,useLocation } from "react-router";
import queryString from 'query-string'
import {closeApplication, openApplication} from "../../../helper"
import { get } from "../../../requests"
import { Emptystate } from "../../../talent/components/emptystate/emptystate"
import { Loading } from "../../loading/loading"
import {useDispatch } from 'react-redux'
import { setTalentProfile } from "../../../slices/talentSlice"
export const Jobdescription = ()=> {
    const dispatch = useDispatch()
    const { search } = useLocation()
    const values = queryString.parse(search)
    const [job, setJob] = useState({})
    const [open, setOpen] = useState(false)
    const [load, setLoad] = useState(true)
    const [error, setError] = useState({})
    const openApp = () => {
        setOpen(!open)
    }
    const img = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    const getJob = () => {
        get(`/v1/job/${values.id}`)
          .then((response) => {
  
              if (response.status) {
  
                  setJob(response.data)
                  setLoad(false)
                  
              } else {
                 setError({
                      status: response.data.status,
                      message: response.data.message
                  })
              }
              
          }, (error) => {
              setError({
                  status: error.response.data.status,
                  message: error.response.data.message
              })
              setLoad(false)
          });
 
    }

    var getTalentData = async () => {
        try {
            const {data} = await get(`/v1/talent/profile`);
            dispatch(setTalentProfile(data.data));
            return data;
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(()=> {
        getJob();
        getTalentData();
       
    }, [])



    if (load) {
        return (
            <div className="jobdescription-container">
                <div className="jobdescription-load">
                    <Loading></Loading>

                </div>
            </div>

        )
    }
    else if (job.status) {
        return(
            <div className="jobdescription-container">
                <div className="jobdescription-inner-col">
                    <div className="jobdescription-left">
                        
                        <div className="jobdescription-left-top">
                            <img src={img} className="company-img" alt="Company Profile Image"/>
                            {/* <img src={Aspire} className="company-img" alt="Company Profile Image"/> */}
                            {/* {job.data.job[0].image? <img src={job.data.job[0].image} className="company-img" alt="Company Profile Image"/> :<img src={img} className="company-img" alt="Company Profile Image"/>  } */}
                            <div className="jobdescription-top-right">
                                <p> {job.data ? job.data.job[0].title : ''} </p>
                                <p>{job.data ? job.data.job[0].company : ''}</p>
                                <p>{job.data ? job.data.job[0].location : ''} <strong>• {job.data ? job.data.job[0].type : ''}</strong></p>
                                <button className="apply-job" onClick={e=>openApp() }> Apply Now</button>
    
                            </div>
    
                        </div>
    
                        <div className="Jobdescription-left-overview">
                            <div className="Jobdescription-overview-inner">
                                <div className="job-overview">
                                    <p>Experience</p>
                                    <p>Minimum 1 Year</p>
                                </div>
                                <hr/>
                                {/* <div className="job-overview">
                                    <p>Level</p>
                                    <p>Senior Level</p>
                                </div>
                                <hr/> */}
                                <div className="job-overview">
                                    <p>Employment Type</p>
                                    <p>{job.data ? job.data.job[0].type : ''}</p>
                                </div>
                                <hr/>
                                <div className="job-overview">
                                    <p>Offer Salary</p>
                                    <p>{job.data ? job.data.job[0].salary : ''} / Month</p>
                                </div>
    
                            </div>
    
                        </div>
    
                        <div className="jobdescription-left-details">
                            <div className="details-overview">
                                <p>Overview</p>
                                <p>
                                    {job.data ? job.data.job[0].description : ''}
                                </p>
    
                            </div>
                            
    
                        </div>
    
                        <div className="jobdescription-left-bottom">
                            <p>Posted 2days Ago</p>
                            <button className="report-job">
                                <FontAwesomeIcon icon={faExclamationCircle} className="hamburger-icon" size="lg"/>
                                Report Job
                            </button>
                        </div>
                        
                    </div>
                    
                    <div className="jobdescription-right">
                        <Companyinfo
                            name = {job.data ? job.data.job[0].company : ''}
                        ></Companyinfo>
    
                    </div>
    
                </div>
    
                <div className={`overlay ${open ? ' active': ' hidden'}`}></div> 
                <Jobapplication 
                    open = {open}
                    openApp= {openApp}
                    filters = {job.data ? job.data.job[0].filters : ""}
                    job = {job}
                    id = {values.id}
                ></Jobapplication>
            </div>
        )
        
    } else {
        return (
            <div className="jobdescription-error">
                <div className="jobdescription-error-col">

                    <Emptystate
                        image= {savedjobimage}
                        title = "Nothing to show"
                        subtitle=" The job you are looking for is not available "
                    />
                </div>
            </div>
            
        )
    }
     
}