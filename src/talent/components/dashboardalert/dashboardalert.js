import "./dashboardalert.scss";
import notification from "../../talentassets/Notification.png"
import Singleinput from "../../../generals/inputs/singleinput"
import Singleinputlocation from "../../../generals/location/location";
import { useState } from "react";
export const Dashboardalert = () => {

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

    return (
        <div className="dashboard-alert-container">
            <div className="dashboard-alert-inner">
                <div className="dashboard-alert-top">
                    <img src={notification} alt="Notification"/>
                    <p> <strong>Don't Miss Out!</strong> Get jobs matching your preferences as soon as they're posted.  </p>
                </div>
                <form className="dashboard-alert-form">
                    <div className="form-jobalert-inputs">
                        <div className="jobalert-title">
                            <Singleinput
                                type="text"
                                placeholder ="Job title, keywords, or company"
                                label ="What ?"
                                subtext="Job title, keywords, or company"
                                name="jobalerttitle"
                                
                            
                            ></Singleinput>

                        </div>
                        <div className="jobalert-location">
                            
                            <Singleinputlocation
                                placeholder ="Enter city name"
                                label ="Where ?"
                                subtext="Enter State"
                                name="location"
                                value={formState.location}
                                handleUserLocation ={handleUserLocation }

                            />
                        </div>

                    </div>
                    <div className="jobalert-btn-box">
                        <button type="submit" className="dashboard-alert-btn"> Create Job Alert </button>
                    </div>
                </form>

            </div>
        </div>
    )
}