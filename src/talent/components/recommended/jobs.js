import "./jobs.scss"
import {jobList } from "../../constants"
import Singlejob from "../singlejob/singlejob"
import {openAction} from "../../../helper"
export const Recommendations = () => {


    var jobs = jobList.map (job=> {
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

    return (
        <div className="recommended-container">
            <div className="recommended-inner">
                {
                    jobs
                }

            </div>
        </div>
    )
}