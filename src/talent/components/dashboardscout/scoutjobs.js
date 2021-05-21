import "./scoutjobs.scss"
import {scoutList } from "../../constants"
import Singlejob from "../singlejob/singlejob"
import {openAction} from "../../../helper"
export const Scoutjobs = () => {


    var jobs = scoutList.map (job=> {
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
        <div className="scout-jobs-container">
            <div className="scout-jobs-inner">
                {
                    jobs
                }

            </div>
        </div>
    )
}