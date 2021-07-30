import "./dashboardjobs.scss"
import Hirersinglejob from "../singlejob/hirersinglejob"
import { Singlebox } from "../singlebox/singlebox"
import { dashList } from "../../../constants"
import Box from "../../../hirerassets/dashjob.svg"
import { useState, useEffect } from "react"
import { Emptystate } from "../../../../talent/components/emptystate/emptystate"
import applicationsimage from "../../../hirerassets/Archived.svg"
import { useHistory } from "react-router"
import { post, get } from "../../../../requests"
import { useSelector } from "react-redux";
export const Dashboardjobs = () => {

    const dashData = useSelector((state) => state.company.dashboard);
    const history = useHistory();
    const [data, setData] = useState({})
    const [active, setActive] = useState({
        post: true,
        draft: false
    })

    var postSelect = () => {
        setActive({
            post:true,
            draft:false
        })
    }
    var draftSelect = () => {
        
        setActive({
            post:false,
            draft:true
        })
    }

    const [postedJobs, setPostedjobs] = useState();
    const [draftJobs, setDraftjobs] = useState();
    
    var viewJob = (title,id)=> {
        // var name ='Ademola Okon';
        history.push(`/dashboard/hirer/myjob/?title=${title}&id=${id}`);
    }
    var getData = ()=> {
        get(`/v1/employer/dashboard`)
          .then((response) => {
  
              if (response.status) {
  
                  setData(response.data)
                  
              } else {
                //  setError({
                //       status: response.data.status,
                //       message: response.data.message
                //   })
              }
              
          }, (error) => {
            setData(error.response.data)
              console.log("Somethign went wrong")
          });

    }
    // var getData = ()=> {
    //     get(`/v1/employer/dashboard/jobs`)
    //       .then((response) => {
  
    //           if (response.status) {
  
    //               setData(response.data.data)
                  
    //           } else {
    //             //  setError({
    //             //       status: response.data.status,
    //             //       message: response.data.message
    //             //   })
    //           }
              
    //       }, (error) => {
    //           console.log("Somethign went wrong"+ error.reponse.data.message)
    //       });

    // }

    // useEffect(()=> {
    //     getData();
    // }, [])
    
    var postJobs = dashData.data ?  dashData.data.recent_jobs.map ((job)=> {
        return (
            <Hirersinglejob
                id={job.id}
                key ={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                type={job.type}
                days={job.days}
                view = {viewJob}
            >

            </Hirersinglejob>
        )
    }): 0;

    
    useEffect(()=> {
        setPostedjobs(dashList.length);
        setDraftjobs(0)
    }, [])

    return (
        <div className="dash-jobs-container">
            <div className="dash-jobs-inner">
                <p className="headertext"> My Jobs </p>
                <div className="dash-jobs-inner top">
                    <Singlebox
                        image = {Box}
                        title = "My Jobs"
                        subtitle = "View, edit and manage your job slots"
                        number = { dashData.data ?  dashData.data.total_jobs: 0}
                        subtext = "Total Jobs Posted"
                    ></Singlebox>
                </div>
                <div className="dash-jobs-inner bottom">
                    <div className="dash-jobs-nav-link" id="dash-jobs-nav-link">
                        <div className={`dash-jobs-single postedjob ${active.post ? ' active' : ' notactive'}`} onClick={ postSelect}>
                            <p>Posted Jobs</p>
                            <p>{dashData.data? dashData.data.total_jobs : 0}</p>
                        </div>
                        <div className={`dash-jobs-single draft ${active.draft ? ' active' : ' notactive'}`} onClick={ draftSelect}>
                            <p>Drafts</p>
                            <p>{draftJobs}</p>
                        </div>
                    </div>
                    <div className={`postedjob-container ${active.post ? ' sactive' : ' hide'} `}>
                        { postJobs == 0 ? 
                            <Emptystate
                                image= {applicationsimage}
                                title = "Nothing To Show"
                                subtitle=" Nothing to show here, folder seems empty"
                            />
                            
                        : postJobs}
                    </div>
                    <div className={`draft-container ${active.draft ? ' sactive' : ' hide'}`}>
                        <Drafts jobs={postJobs}></Drafts>

                    </div>
                    
                </div>
               
                

            </div>
        </div>
    )
}


const Drafts = (props) => {
    var dafts = 0;
    
    if (dafts === 0 ) {
        return (
            <Emptystate
                image= {applicationsimage}
                title = "Empty Drafts"
                subtitle=" Nothing to show here, folder seems empty"
            >
            </Emptystate>
        )

    } 
    else {
        return (
            <div className="draft-grid">
                {props.jobs}
            </div>
        )
    }
  
}