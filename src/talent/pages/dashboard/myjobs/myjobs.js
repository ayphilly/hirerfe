import "./myjobs.scss"
import {useEffect, useState} from "react"
import {Savedjobs} from "../../../components/savedjobs/savedjobs"
import {Applications} from "../../../components/activeapplications/applications"
import {Archived} from "../../../components/archivedjobs/archived"
import {activeList,savedList} from "../../../constants"
import {jobUnveil } from "../../../../helper"
export const Myjobs = () => {

    const [savedJobs, setSavedjobs] = useState([]);
    const [activeJobs, setActivejobs] = useState([]);

    useEffect(()=> {
        setSavedjobs(savedList.length);
        setActivejobs(activeList.length)
    }, [])

  

    useEffect(()=>{
        jobUnveil();
    })

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
                   <Savedjobs></Savedjobs>
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


