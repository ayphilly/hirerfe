import "./topjobs.scss"
import Singletopjobs from "./singletopjobs";
import {jobList} from "../../constants"
import  {openAction }from "../.././../helper"
const Topjobs = ()=> {
    var topjobs = jobList.map (job=> {
        return (
            <Singletopjobs
                key={job.icao}
                title={job.title}
                company={job.company}
                days={job.days}
                location={job.location}
                type={job.type}
                click ={openAction}
            >

            </Singletopjobs>
        )
    })
    return (
        <div className="topjobs-container">
            <div className="topjobs-inner">
                 <div className="topjobs-top">
                     <p>Top Jobs Near By</p>
                     <p>Popular searches nearby</p>
                 </div>

                 <div className="singlejob-list">
                    {
                        topjobs
                    }

                 </div>
             </div>
             

        </div>
    )

}

export default Topjobs;