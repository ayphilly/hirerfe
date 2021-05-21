import "./savedjobs.scss"
import {useEffect, useState} from "react"
import savedjobimage from "../../talentassets/savedjobs.svg";
import {Emptystate} from "../emptystate/emptystate"
import Singlejob from "../singlejob/singlejob"
import {savedList} from "../../constants"
import {openAction} from "../../../helper"

export const Savedjobs = () => {

    const [savedjobs, setSavedjobs] = useState([]);

    useEffect(()=> {
        setSavedjobs(savedList);
    },[])

    var jobs = savedjobs.map (job=> {
        return (

            <Singlejob
                key={job.icao}
                title={job.title}
                company={job.company}
                days={job.days}
                location={job.location}
                type={job.type}
                click ={openAction}
            >

            </Singlejob>
        )
    })

    if (savedjobs.length < 1 ) {
        return (
            <Emptystate
                image= {savedjobimage}
                title = "No saved jobs yet"
                subtitle=" Jobs you choose to save during a  job search will be shown here. "
            >
            </Emptystate>
            
        )
    } else {

        return (
            <div className="saved-jobs-container">
                <div className="saved-jobs-inner">
                    {
                        jobs
                    }
                </div>
            </div>
        )
    }


}
