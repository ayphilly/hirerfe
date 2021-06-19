import "./homepage.scss"
import Jobsearch from "../../../components/jobsearch/jobsearch"
import {Recommendations} from "../../../components/recommended/jobs"
import {Scoutjobs} from "../../../components/dashboardscout/scoutjobs"
import {Dashboardalert} from "../../../components/dashboardalert/dashboardalert"
import Tryhirer from "../../../components/tryhirer/tryhirer"
import { useSelector, useDispatch } from 'react-redux'

export const Dashboardhome = ()=> {
    
    return (
        <div className="dashboard-homepage-container">
            <div className="dashboard-homepage-inner">
                <div className="dashboard-search">
                    <p>Hello, what would you like to explore today?</p>
                    <p>Search for Job Titles, Companies and Keywords</p>
                    <div className="dashboard-jobsearch">
                        <Jobsearch></Jobsearch>

                    </div>
                    
                </div>

                <div className="dashboard-recommend">
                    <p className="recommend-headline">Jobs Recommended for You</p>
                    <p>Recommendations are based on your profile, job preferences, and activity on Hirer.</p>
                    <Recommendations></Recommendations>
                </div>

                <div className="dashboard-jobalert">
                    <p className="jobalert-headline">Create Job Alert</p>
                    <p>Create Job alert now and never miss a job.</p>
                    <div className="jobalert-inner-box">
                        <Dashboardalert></Dashboardalert>
                    </div>
                    
                </div>

                <div className="dashboard-scout-jobs">
                    <p className="scout-jobs-headline">Scout other jobs in Hirer</p>
                    <p>Recommendations are based on your profile, job preferences, and activity on Hirer.</p>
                    <Scoutjobs></Scoutjobs>
                    
                </div>

                
            </div>
            <Tryhirer
                    title="Finish Up Your Profile"
                    subtitle="Add a job title to your profile to personalize your job recommendations"
            ></Tryhirer>
        </div>
    )
}