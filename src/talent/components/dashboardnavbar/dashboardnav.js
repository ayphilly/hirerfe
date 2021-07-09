import "./dashboardnav.scss"
import hirer from "../../talentassets/hirer.svg"
import profile from "../../talentassets/profile_image.png"
import notification from "../../talentassets/Notification.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Dashboardnav () {
    const data = useSelector((state) => state.auth.authData)
    return (
        <div className="talent-navbar-container">
            <div className="dashboard-navbar-inner">
                <div className="dashboard-navbar-inner left">
                    
                    <img src={hirer} alt="Hirer Logo"></img>
                    <Link className="navbar-inner-nav-link" to="/talent/searchjob" style={{textDecoration:'none'}}>Find Jobs</Link>
                    <span className="navbar-inner-nav-link"> Company Reviews </span>
                </div>
                <div className="dashboard-navbar-inner right">
                    
                    {/* <Link className="navbar-inner-nav-link" to="/hirer" style={{textDecoration:'none'}}>For Hirers</Link>
                    <Link className="navbar-inner-nav-link" to="/signin" style={{textDecoration:'none'}}>Sign in</Link> */}
                   <img src={notification} className="notification" alt="notification" />
                    <div className="dashboard-profile">
                        <Link className="" to="/dashboard/talent/account" style={{textDecoration:'none'}}>
                            <img src={profile} alt="user profile"/>
                        </Link>
                     
                        <div className="dashboard-user">
                            <p> Welcome</p>
                            <p>{data.name} </p>
                        </div>
                    </div>

                    <Link className="navbar-inner-nav-link" to="/signin" style={{textDecoration:'none'}}>Sign out</Link>
                    <FontAwesomeIcon icon={faBars} className="hamburger-con" size="4x"/>
                </div>


            </div>

        </div>
    )
}

export default Dashboardnav;