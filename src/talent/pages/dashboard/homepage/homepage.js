import "./homepage.scss";
import Jobsearch from "../../../components/jobsearch/jobsearch";
import { Recommendations } from "../../../components/recommended/jobs";
import { Scoutjobs } from "../../../components/dashboardscout/scoutjobs";
import { Dashboardalert } from "../../../components/dashboardalert/dashboardalert";
import Tryhirer from "../../../components/tryhirer/tryhirer";
import { useSelector } from "react-redux";
import { useHistory} from "react-router";
import { useState} from "react";
export const Dashboardhome = () => {
  const data = useSelector((state) => state.auth.authData);

  let history = useHistory();
  var redirect = (jobtitle,location)=> {
    if (jobtitle || location) {
        history.push(`/talent/searchjob/?title=${jobtitle}&location=${location}`);
    }
    else {
        alert("type in something")
    }
    
  }
  const [formState, setForm ] = useState({
      jobtitle: '',
      location: ''
    
  })
  const handleUserInput = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
    setForm({...formState,[name]:value});
    
  }
  const handleUserLocation = (location) => {
      setForm({...formState, location:location});
  }
  console.log(data); // TODO: Use data variable
  return (
    <div className="dashboard-homepage-container">
      <div className="dashboard-homepage-inner">
        <div className="dashboard-search">
          <p className="dashboard-search search-title">Hello, what would you like to explore today?</p>
          <p className="dashboard-search search-subtext">Search for Job Titles, Companies and Keywords</p>
          <Jobsearch
            myFunction={redirect}
            handleUserInput={handleUserInput}
            formState={formState}
            handleUserLocation ={handleUserLocation }
          ></Jobsearch>
        </div>
        {/* <Jobsearch></Jobsearch> */}

        <div className="dashboard-recommend">
          <p className="recommend-headline">Jobs Recommended for You</p>
          <p>
            Recommendations are based on your profile, job preferences, and
            activity on Hirer.
          </p>
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
          <p>
            Recommendations are based on your profile, job preferences, and
            activity on Hirer.
          </p>
          <Scoutjobs></Scoutjobs>
        </div>
      </div>
      <Tryhirer
        title="Finish Up Your Profile"
        subtitle="Add a job title to your profile to personalize your job recommendations"
      ></Tryhirer>
    </div>
  );
};
