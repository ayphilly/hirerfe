import "./dashboardnavbar.scss";
import hirer from "../../../hirerassets/hirer.svg";
import profile from "../../../hirerassets/profile.png";
import notification from "../../../hirerassets/Notification.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setDashboard } from "../../../../slices/companySlice";
import { setAuthData } from "../../../../slices/authSlice";
import { post } from "../../../../requests";
import { useState } from "react";
function Hirerdashnav() {
  const data = useSelector((state) => state.auth.authData);
  const empAvi = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    const empAvatar = useSelector((state) => state.company.dashboard);

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
        localStorage.clear();
        dispatch(setDashboard({}))
        dispatch(setAuthData({}))
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
    <div className="hirer-dash-container">
      <div className="hirer-dash-inner">
        <div className="hirer-dash-inner left">
          <img src={hirer} alt="Hirer Logo" />
          <span className="navbar-inner-nav-link"> Find Talents </span>
        </div>
        <div className="hirer-dash-inner right">
        
          <img src={notification} className="notification" alt="notification" />
          <div className="dashboard-profile">
            {/* <img src={profile} alt="user profile" /> */}
            {empAvatar.data.company_data ? <img src={empAvatar.data.company_data.avatar} alt="user profile"/> :<img src={empAvi} alt="user profile"/>  }
            {/* <img src={empAvi} alt="user profile"/> */}
            <div className="dashboard-user">
              <p> Welcome</p>
              <p>{data.name}</p>
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

export default Hirerdashnav;
