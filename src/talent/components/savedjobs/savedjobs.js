import "./savedjobs.scss"
import {useEffect, useState} from "react"
import savedjobimage from "../../talentassets/Empty.svg";
import {Emptystate} from "../emptystate/emptystate"
import Singlejob from "../singlejob/singlejob"
import {savedList} from "../../constants"
import {openAction} from "../../../helper"
import {useHistory} from "react-router-dom";
import { Loading } from "../../../generals/loading/loading";
export const Savedjobs = (props) => {

    var history = useHistory();
    const saved = true;
    
    var goToJob = (name,id)=> {
        history.push(`/talent/jobdescription?name=${name}&id=${id}`);
    }

  
    var jobs = props.savedJobs.data ? props.savedJobs.data.saved_jobs.map ((job, index)=> {
        return (

            <Singlejob
                // id={job.job.id}
                key={index}
                title={job.title}
                title={job.description.substr(0, 50)}
                click ={openAction}
                saved = {saved}
                goto = {goToJob}
                delete={props.delete}

            >

            </Singlejob>
        )
    }):'    NOthing to show '


    if (props.load) {
        return(
            <div className="saved-jobs-container">
                <div className="saved-jobs-inner">
                    <Loading></Loading>
                </div>
            </div>
        )
    }
    else if (jobs.length < 1 ) {
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
