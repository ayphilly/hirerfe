import "./dashboardjobs.scss"
import Hirersinglejob from "../singlejob/hirersinglejob"
import { Singlebox } from "../singlebox/singlebox"
import { dashList } from "../../../constants"
import Box from "../../../hirerassets/dashjob.svg"
import { useState, useEffect } from "react"
import { Emptystate } from "../../../../talent/components/emptystate/emptystate"
import applicationsimage from "../../../hirerassets/Archived.svg"
import { useHistory } from "react-router"
export const Dashboardjobs = () => {

    const history = useHistory();
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
    
    var viewJob = (id)=> {
        var name ='Ademola Okon';
        history.push(`/dashboard/hirer/myjob/?name=${name}&id=${id}`);
    }

    useEffect(()=> {
        
    })
    
    var postJobs = dashList.map ((job)=> {
        return (
            <Hirersinglejob
                id={job.id}
                key ={job.id}
                title={job.jobtitle}
                company={job.company}
                location={job.location}
                type={job.type}
                days={job.days}
                view = {viewJob}
            >

            </Hirersinglejob>
        )
    })

    
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
                        number = "15"
                        subtext = "Total Jobs Posted"
                    ></Singlebox>
                </div>
                <div className="dash-jobs-inner bottom">
                    <div className="dash-jobs-nav-link" id="dash-jobs-nav-link">
                        <div className={`dash-jobs-single postedjob ${active.post ? ' active' : ' notactive'}`} onClick={ postSelect}>
                            <p>Posted Jobs</p>
                            <p>{postedJobs}</p>
                        </div>
                        <div className={`dash-jobs-single draft ${active.draft ? ' active' : ' notactive'}`} onClick={ draftSelect}>
                            <p>Drafts</p>
                            <p>{draftJobs}</p>
                        </div>
                    </div>
                    <div className={`postedjob-container ${active.post ? ' sactive' : ' hide'} `}>
                    {postJobs}
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