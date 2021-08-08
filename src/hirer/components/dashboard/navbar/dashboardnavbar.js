import "./dashboardnavbar.scss";
import hirer from "../../../hirerassets/hirer.svg";
import profile from "../../../hirerassets/profile.png";
import notification from "../../../hirerassets/Notification.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Hirerdashnav() {
  const data = useSelector((state) => state.auth.authData);
  return (
    <div className="hirer-dash-container">
      <div className="hirer-dash-inner">
        <div className="hirer-dash-inner left">
          <img src={hirer} alt="Hirer Logo" />
          <span className="navbar-inner-nav-link"> Find Talents </span>
        </div>
        <div className="hirer-dash-inner right">
        
          <img src={notification} className="notification" alt="notification" />
          <div className="dashboard-profile">
            <img src={profile} alt="user profile" />
            <div className="dashboard-user">
              <p> Welcome</p>
              <p>{data.name}</p>
            </div>
          </div>

          <Link
            className="navbar-inner-nav-link"
            to="/signin"
            style={{ textDecoration: "none" }}
          >
            Sign out
          </Link>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" size="lg" />
        </div>
      </div>
    </div>
  );
}

export default Hirerdashnav;
