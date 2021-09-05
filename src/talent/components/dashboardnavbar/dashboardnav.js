import "./dashboardnav.scss";
import hirer from "../../talentassets/hirer.svg";
import profile from "../../talentassets/profile_image.png";
import notification from "../../talentassets/Notification.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTalentProfile, setTalentData } from "../../../slices/talentSlice";
import { post } from "../../../requests";
import { useState } from "react";
import {useHistory} from "react-router";
function Dashboardnav() {
  const data = useSelector((state) => state.auth.authData);
  const talentAvatar = useSelector((state) => state.talent.avatar);
  const talentAvi = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

  const [Response, setResponse] = useState({})

  let history = useHistory();
  const dispatch = useDispatch()

  var signOut = () => {
    
    post('/v1/auth/logout')
    .then((response) => {

      if (response.status) {

        setResponse({
            status: true,
            message: "You Just Logged Out"
        })
        window.localStorage.clear();
        dispatch(setTalentProfile({}))
        dispatch(setTalentData({}))
        history.push(`/signin`);


          
      } else {
          // setResponse({
          //     status: response.data.status,
          //     message: response.data.message
          // })
      }
      
    }, (error) => {
      setResponse({
          status: error.response.data.status,
          message: error.response.data.message
      })
    });

  }
  return (
    <div className="talent-navbar-container">
      <div className="navbar-inner">
        <div className="navbar-inner left">
          <img src={hirer} alt="Hirer Logo" />
          <Link
            className="navbar-inner-nav-link"
            to="/talent/searchjob"
            style={{ textDecoration: "none" }}
          >
            Find Jobs
          </Link>
          <Link
            className="navbar-inner-nav-link"
            to="/dashboard/talent/company"
            style={{ textDecoration: "none" }}
          >
            Company Review
          </Link>
        </div>
        <div className="navbar-inner right">
          {/* <Link className="navbar-inner-nav-link" to="/hirer" style={{textDecoration:'none'}}>For Hirers</Link>
                    <Link className="navbar-inner-nav-link" to="/signin" style={{textDecoration:'none'}}>Sign in</Link> */}
          <img src={notification} className="notification" alt="notification" />
          <div className="dashboard-profile">
            {/* <img src={profile} alt="user profile" /> */}
            {talentAvatar ? <img src={talentAvatar} alt="user profile"/> :<img src={talentAvi} alt="user profile"/>  }
            <div className="dashboard-user">
              <p> Welcome</p>
              <p>{data.name} </p>
            </div>
          </div>

          <Link
            className="navbar-inner-nav-link"
            to="/signin"
            style={{ textDecoration: "none" }}
            onClick={()=> signOut()}
          >
            Sign out
          </Link>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" size="lg" />
        </div>
      </div>
    </div>
  );
}

export default Dashboardnav;
