import "./applications.scss"
import {useEffect, useState} from "react"
import applicationsimage from "../../talentassets/applications.svg";
import {Emptystate} from "../emptystate/emptystate"
import Singlejob from "../singlejob/singlejob"
import {activeList} from "../../constants"
import {openAction} from "../../../helper"

export const Applications = () => {

    const [activejobs, setActivejobs] = useState([]);

    useEffect(()=> {
        setActivejobs(activeList);
    },[])

    var jobs = activejobs.map (job=> {
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

    if (activejobs.length < 1 ) {
        return (
            <Emptystate
                image= {applicationsimage}
                title = "No Active Applications yet"
                subtitle=" Once you apply to jobs, you can track the status of the applications here."
            >
            </Emptystate>
            
        )
    } else {

        return (
            <div className="active-applications-container">
                <div className="active-applications-inner">
                    {
                        jobs
                    }
                </div>
            </div>
        )
    }


}
