import "./dashboardhome.scss"
import { Singlebox } from "../singlebox/singlebox";
import Hirersinglejob from "../singlejob/hirersinglejob";
import Box from "../../../hirerassets/dashjob.svg"
import {dashList} from "../../../constants"
import { useHistory } from "react-router"
import {useState, useEffect} from "react"
import { post, get } from "../../../../requests";
import { Empty } from "../../../../generals/emptyresult/emptyresult";
const DashboardHome= (props) => {

    const history = useHistory();

    const [data, setData] = useState({})

    var viewJob = (id)=> {
        var name ='Ademola Okon';
        history.push(`/dashboard/hirer/myjob/?name=${name}&id=${id}`);
    }
    var viewBox = (link)=> {
       
        history.push(`/dashboard/hirer/${link}`);
    }
    var postedJobs = data.status ? data.data.recent_jobs.map ((job)=> {
        return (
            <Hirersinglejob
                key ={job.id}
                id={job.id}
                title={job.jobtitle}
                company={job.company}
                location={job.location}
                type={job.type}
                days={job.id}
                view={viewJob}
            />
        )
    }): 0;

    var getDashboardData = ()=> {
        get(`/v1/employer/dashboard`)
          .then((response) => {
  
              if (response.status) {
  
                  setData(response.data)
                  
              } else {
                //  setError({
                //       status: response.data.status,
                //       message: response.data.message
                //   })
              }
              
          }, (error) => {
                setData(error.response.data)
              console.log("Something went wrong")
          });

    }

    useEffect(()=> {
        getDashboardData();
    }, [])

    return (
      <div className="dashboard-home-container">
          <div className="dashboard-home-inner">
            <div className="dashboard-home-inner top">
                <p className="headertext">Dashboard</p>
                <div className="dashboard-home-inner top top-reports">
                    <Singlebox
                        image = {Box}
                        link = 'myjobs'
                        title = "My Jobs"
                        subtitle = "View, edit and manage your job slots"
                        number = {data.data ? data.data.total_jobs: 0 }
                        subtext = "Total Jobs Posted"
                        view = {viewBox}
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
                        number = {data.data ? data.data.applicants_count: 0 }
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
                    {postedJobs == 0 ?
                        <Empty
                            text="You are yet to create a job Post"
                        />
                    : postedJobs}
                </div>

            </div>
          </div>
      </div>
    );
  };
  
  export default DashboardHome;
  