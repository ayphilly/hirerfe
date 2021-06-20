import "./dashboardalert.scss";
import notification from "../../talentassets/Notification.png"
import Singleinput from "../../../generals/inputs/singleinput"

export const Dashboardalert = () => {

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
                            <Singleinput
                                type="text"
                                placeholder ="city or postcode"
                                label ="Where ?"
                                subtext="city or postcode"
                                name="jobalertlocation"
                            
                            
                            ></Singleinput>
                        </div>

                    </div>
                    
                    
                    

                    <button type="submit" className="dashboard-alert-btn"> Create Job Alert </button>
                </form>

            </div>
        </div>
    )
}