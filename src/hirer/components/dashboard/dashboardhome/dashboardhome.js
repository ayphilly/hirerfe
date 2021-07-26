import "./dashboardhome.scss"
import { Singlebox } from "../singlebox/singlebox";
import Hirersinglejob from "../singlejob/hirersinglejob";
import Box from "../../../hirerassets/dashjob.svg"
import {dashList} from "../../../constants"
const DashboardHome= (props) => {

    var postedJobs = dashList.map ((job)=> {
        return (
            <Hirersinglejob
                key ={job.id}
                title={job.jobtitle}
                company={job.company}
                location={job.location}
                type={job.type}
                days={job.days}
            >

            </Hirersinglejob>
        )
    })
    return (
      <div className="dashboard-home-container">
          <div className="dashboard-home-inner">
            <div className="dashboard-home-inner top">
                <p className="headertext">Dashboard</p>
                <div className="dashboard-home-inner top top-reports">
                    <Singlebox
                        image = {Box}
                        title = "My Jobs"
                        subtitle = "View, edit and manage your job slots"
                        number = "15"
                        subtext = "Total Jobs Posted"
                    ></Singlebox>
                    <Singlebox
                        image = {Box}
                        title = "Weekly job views"
                        subtitle = "See how your posted jobs are fairing"
                        number = "10"
                        subtext = "Job clicks (Last Week)"
                    ></Singlebox>
                    <Singlebox
                        image = {Box}
                        title = "Community Reviews"
                        subtitle = "View, respond to and manage your reviews"
                        number = "15"
                        subtext = "New Reviews (Last Month)"
                    ></Singlebox>
                    <Singlebox
                        image = {Box}
                        title = "Candidates"
                        subtitle = "Check the total amount of talents received"
                        number = "15"
                        subtext = "Total Number of Candidates"
                    ></Singlebox>

                </div>

               
            </div>

            <div className="dashboard-home-inner bottom">
                <div className="bottom-text">
                    <p>Recently Posted Jobs</p>
                    <p>You can view the list of your most recent job adverts.</p>
                </div>
                <div className="bottom-content">
                    {postedJobs}
                </div>

            </div>
          </div>
      </div>
    );
  };
  
  export default DashboardHome;
  