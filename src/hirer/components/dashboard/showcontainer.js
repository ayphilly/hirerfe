import "./showcontainer.scss"
import { Redirect, Route } from "react-router-dom";
import DashboardHome from "./dashboardhome/dashboardhome"
import { Dashboardjobs } from "./dashboardjobs/dashboardjobs";
import { Fulljob } from "./fulljob/fulljob";
import { Applicantprofile } from "./applicantprofile/applicantprofile";
import PostJob from "../../pages/PostJob";
import { Account } from "./account/account";
import { Addjob } from "./addjob/addjob";
const steps = [
    {id: 'dashboard'},
    {id: 'jobposts'},
    {id: 'talent'}
]

export const Showcontainer = (props) => {
    return (
        <div className="show-container"> 
        {/* {
           props.page === "home" &&<DashboardHome {...props} ></DashboardHome>
        }
        {
        //    step === 1 && <Checkmail {...props} ></Checkmail>
        } */}
        <Show {...props}></Show>

        </div>
    )
}

const Show = (props) => {
   
        switch (props.page) {
            case "home":
                return <DashboardHome  {...props} ></DashboardHome>;
            case "postjob":
                return <Addjob  {...props} ></Addjob>;
            case "myjobs":
                return <Dashboardjobs {...props} ></Dashboardjobs>;
            case `myjob`:
                return <Fulljob {...props} ></Fulljob>;
            case "talents":
                return <DashboardHome  {...props} ></DashboardHome>;
            case "account":
                return <Account {...props} ></Account>;
            default:
                return <Redirect to={`/dashboard/hirer/${props.page}/notfound`}/>;
        }
    
   
}