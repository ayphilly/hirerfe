import "./notification.scss";
import {Emptystate} from "../../components/emptystate/emptystate"
import Empty from "../../talentassets/Empty.svg"

export const Notification = ()=> {

    return (
        <div className="notification-container">
            <div className="notification-inner-col">
                <div className="notification-inner-left">
                    <div className="left-inner-col">
                        <p>Notifications</p>
                        <p>You’re all caught up! Check back later for new notifications</p>
                    </div>
                </div>
                <div className="notificaton-inner-right">
                    <div className="right-alert">
                        <p>Notification</p>
                        <p>{0}</p>
                    </div>
                    
                    <div className="right-inner-col">
                        <Emptystate
                            image= {Empty}
                            title = "No Notifications"
                            subtitle=" Once you begin a job search, we'll notify you here about matching jobs, the application status. "
                        />
                    

                    </div>
                        
                    
                </div>

            </div>
        </div>
    )
}