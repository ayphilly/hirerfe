import "./jobdescription.scss"
import Aspire from "../../../talent/talentassets/aspire.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {Companyinfo} from "../../companyinfo/companyinfo"
import {Jobapplication} from "../../jobapplication/jobapplication"
import {useEffect, useState} from "react"
// import {useParams} from "react-router-dom";
import { useParams,useLocation } from "react-router";
import queryString from 'query-string'
import {closeApplication, openApplication} from "../../../helper"
import { get } from "../../../requests"
export const Jobdescription = ()=> {

    const { search } = useLocation()
    const values = queryString.parse(search)
    const [job, setJob] = useState()
    const [error, setError] = useState({})
    
    const getJob = () => {
        get(`/v1/job/${values.id}`)
          .then((response) => {
  
              if (response.status) {
  
                  setJob(response.data.data.job)
                  
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
          });
 
    }

    useEffect(()=> {
        openApplication();
        // closeApplication();
        
    })

    useEffect(()=> {

    }, [])

     return(
        <div className="jobdescription-container">
            <div className="jobdescription-inner-col">
                <div className="jobdescription-left">
                    
                    <div className="jobdescription-left-top">

                        <img src={Aspire} className="company-img" alt="Company Profile Image"/>
                        <div className="jobdescription-top-right">
                            <p>Administrative Officer</p>
                            <p>Aspire Consulting</p>
                            <p>Lagos <strong>• Fulltime</strong></p>
                            <button className="apply-job"> Apply Now {values.id} </button>

                        </div>

                    </div>

                    <div className="Jobdescription-left-overview">
                        <div className="Jobdescription-overview-inner">
                            <div className="job-overview">
                                <p>Experience</p>
                                <p>Minimum 1 Year</p>
                            </div>
                            <hr/>
                            <div className="job-overview">
                                <p>Level</p>
                                <p>Senior Level</p>
                            </div>
                            <hr/>
                            <div className="job-overview">
                                <p>Employment Type</p>
                                <p>Full Time</p>
                            </div>
                            <hr/>
                            <div className="job-overview">
                                <p>Offer Salary</p>
                                <p>$2,500 / Month</p>
                            </div>

                        </div>

                    </div>

                    <div className="jobdescription-left-details">
                        <div className="details-overview">
                            <p>Overview</p>
                            <p>
                                Desktop Technician will provide day to day local\remote desktop support, 
                                receive inbound calls, answer questions, troubleshoot and document steps 
                                performed to resolve challenges with hardware, software and application 
                                issues in a ticketing system. The candidate will also need to facilitate 
                                customer resolution for calls and engage their supervisors and managers 
                                to ensure operational consistency across all shifts within the IT Support Center. 
                                Desktop Support Engineer provides Break Fix, fault diagnosis and resolution. 
                                Providing fault analysis to customer’s various core operating systems and platforms, 
                                Ideal candidate should have 2-3 years’ experience.
                            </p>

                        </div>
                        <div className="details-functions">
                            <p>Functions & Responsibilities</p>
                            <ul>
                                <li>Provide first/second level contact and problem resolution for customer issues.</li>
                                <li>Work with Third Party Vendors to remediate complex AV issues as needed.</li>
                                <li>Provide timely communication on issue status and resolution.</li>
                                <li>Maintain ticket updates for all reported incidents.</li>
                                <li>Install, upgrade, support and troubleshoot XP, Windows 7, Windows 8.1, Windows 10 
                                    and Microsoft Office 2010, Cisco Jabber, another authorized desktop application.
                                </li>
                            </ul>
                            

                        </div>

                        <div className="details-requirements">
                            <p>Candidate Required Mininmum Qualifications</p>
                            <ul>
                                <li>Bachelor’s Degree or equivalent in Computer Science or related field.</li>
                                <li>CompTIA A+, Microsoft Certified Professional (MCP) or better.</li>
                                <li>Minimum of 18 months years of IT experience.</li>
                                <li>Mobile device management including IOS and Android devices, Enterprise encryption solutions, Windows PC/laptop management via Active Directory.</li>
                                <li>
                                    Proven analytical, troubleshooting and problem- solving skills.
                                </li>
                            </ul>
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
                    <Companyinfo></Companyinfo>

                </div>

            </div>

            <div className="overlay hidden"></div> 
            <Jobapplication closeApplication = {closeApplication}></Jobapplication>
        </div>
    )
}