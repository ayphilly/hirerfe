import "./myjobs.scss"
import {useEffect, useState} from "react"
import {Savedjobs} from "../../../components/savedjobs/savedjobs"
import {Applications} from "../../../components/activeapplications/applications"
import {Archived} from "../../../components/archivedjobs/archived"
import {activeList,savedList} from "../../../constants"
import {jobUnveil } from "../../../../helper"
import { del, get} from "../../../../requests"
export const Myjobs = (props) => {

    const [response, setResponse] = useState({
        status: null,
        message: ''
    })
    const [savedJobs, setSavedjobs] = useState([]);
    const [activeJobs, setActivejobs] = useState([]);

    useEffect(()=> {
        setSavedjobs(savedList.length);
        setActivejobs(activeList.length)
    }, [])

  

    useEffect(()=>{
        jobUnveil();
    })

    var delSavedjob = (event, id)=> {
        event.preventDefault();
       
       
        del('/v1/talent/jobs/', { data: { id: id} })
        .then((response) => {

            if (response.status) {

                setResponse({
                    status: response.data.status,
                    message: response.data.message
                })
                
            } else {
                setResponse({
                    status: response.data.status,
                    message: response.data.message
                })
            }
            
        }, (error) => {
            setResponse({
                status: error.response.data.status,
                message: error.response.data.message
            })
        });

    }

    var getSavedJobs = ()=> {
       
        get('/v1/talent/jobs/')
        .then((response) => {

            if (response.status) {
                setSavedjobs(response.data.data.saved_jobs)
                
            } else {
                setResponse({
                    status: response.data.status,
                    message: response.data.message
                })
            }
            
        }, (error) => {
            setResponse({
                status: error.response.data.status,
                message: error.response.data.message
            })
        });

    }


    return (
        <div className="myjobs-container">
            <div className="myjobs-inner" id="myjobs-inner">

                <div className="myjobs-inner-top">
                    <p>My Jobs</p>
                    <div className="myjobs-nav-link" id="myjobs-nav-link">
                        <div className="myjobs-single savedjob active">
                            <p>Saved</p>
                            <p>{savedJobs}</p>
                        </div>
                        <div className="myjobs-single application">
                            <p>Active</p>
                            <p>{activeJobs}</p>
                        </div>
                        <div className="myjobs-single archive">
                            <p>Archive</p>
                            <p>0</p>
                        </div>

                    </div>
                </div>

                <div className="savedjobss sactive">
                   <Savedjobs
                        delete = {delSavedjob}
                   ></Savedjobs>
                </div>

                <div className="applicationss hidelement">
                   <Applications></Applications>
                </div>

                <div className="archivess hidelement">
                   <Archived></Archived>
                </div>

            </div>

        </div>
    )
}


