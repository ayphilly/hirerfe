import "./navbar.scss";
import hirer from "../talentassets/hirer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Talentnav() {
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
          <span className="navbar-inner-nav-link"> Company Reviews </span>
        </div>
        <div className="navbar-inner right">
          <span className="navbar-inner-nav-link"> Help Centre </span>
          <Link
            className="navbar-inner-nav-link"
            to="/hirer"
            style={{ textDecoration: "none" }}
          >
            For Hirers
          </Link>
          <Link
            className="navbar-inner-nav-link"
            to="/signin"
            style={{ textDecoration: "none" }}
          >
            Sign in
          </Link>
          <a href={() => false} className="navbar-inner-nav-btn creation">
            Join For Free
          </a>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" size="lg" />
        </div>
      </div>
    </div>
  );
}

export default Talentnav;
