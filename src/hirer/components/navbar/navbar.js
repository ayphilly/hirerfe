import "./navbar.scss";
import hirer from "../../hirerassets/hirer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Hirernav() {
  return (
    <div className="hirer-navbar-container">
      <div className="navbar-inner">
        <div className="navbar-inner left">
          <img src={hirer} alt="Hirer Logo" />
          <Link
            className="navbar-inner-nav-link"
            to="/hirer/searchtalent"
            style={{ textDecoration: "none" }}
          >
            Find Talents
          </Link>
          <Link
            className="navbar-inner-nav-link"
            to="/hirer/postjob"
            style={{ textDecoration: "none" }}
          >
            Post A Job
          </Link>
          {/* <span className="navbar-inner-nav-link"> Company Reviews </span> */}
        </div>
        <div className="navbar-inner right">
          <span className="navbar-inner-nav-link"> Help Centre </span>
          <Link
            className="navbar-inner-nav-link"
            to="/"
            style={{ textDecoration: "none" }}
          >
            For Talents
          </Link>

          <Link
            className="navbar-inner-nav-link"
            to="/signin"
            style={{ textDecoration: "none" }}
          >
            Sign in
          </Link>
          <a className="navbar-inner-nav-btn creation"> Join For Free </a>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
        </div>
      </div>
    </div>
  );
}

export default Hirernav;
