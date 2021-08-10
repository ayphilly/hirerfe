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
    const [load, setLoad] = useState(true)
    const [savedJobs, setSavedJobs] = useState({});
    const [activeJobs, setActiveJobs] = useState([]);

    useEffect(()=>{
        jobUnveil();
    })

    var delSavedjob = (event, id)=> {
        event.preventDefault();
       
       
        del(`/v1/talent/jobs/${id}`)
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
       
        get('/v1/talent/jobs')
        .then((response) => {

            if (response.status) {
                setSavedJobs(response.data)
                console.log(response.data)
                setLoad(false)
                
            } else {
                setResponse({
                    status: response.data.status,
                    message: response.data.message
                })
            }
            
        }, (error) => {
            setResponse({
                status: error.response ? error.response.data.status : '',
                message: error.response ?  error.response.data.message: ''
            })
            setLoad(false)
        });

    }

    useEffect(()=> {
        getSavedJobs()
    }, [])


    return (
        <div className="myjobs-container">
            <div className="myjobs-inner" id="myjobs-inner">
                { response.message && <div className= {`saved-job-message ${response.status ? 'success' : 'error'}`}>
                        <p>{response.message}</p>
                </div>}

                <div className="myjobs-inner-top">
                    <p>My Jobs</p>
                    <div className="myjobs-nav-link" id="myjobs-nav-link">
                        <div className="myjobs-single savedjob active">
                            <p>Saved</p>
                            <p>{savedJobs.links ? savedJobs.links.total : 0}</p>
                        </div>
                        <div className="myjobs-single application">
                            <p>Active</p>
                            <p>{0}</p>
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
                        savedJobs={savedJobs}
                        load={load}
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


