import "./banner.scss";
import netflix from "../../hirerassets/logo-netflix.svg";
import target from "../../hirerassets/logo-target.svg";
import verizon from "../../hirerassets/logo-verizon.svg";
import hr from "../../hirerassets/hr.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { slideUp } from "../../../helper";

function Banner() {
  useEffect(() => {
    slideUp();
  }, []);

  return (
    <div className="hirer-banner-container">
      <div className="banner-inner">
        <div className="banner-inner left">
          <div className="left-top">
            <span className="top-title slide-up">
              {" "}
              Let's hire your next great <strong> candidate </strong>{" "}
            </span>

            <p> You know who you're looking for. We will help you find them.</p>
            <Link
              className="banner-inner-nav-link"
              to="/hirer/postjob"
              style={{ textDecoration: "none" }}
            >
              Post A Job
            </Link>
          </div>
          <div className="left-bottom">
            <p>We are trusted by companies of all sizes.</p>
            <div className="bottom-brands">
              <img src={netflix} alt="Netflix" />
              <img src={verizon} alt="Verizon" />
              <img src={target} alt="target" />
              <img src={netflix} alt="Netflix" />
              <img src={verizon} alt="verizon" />
            </div>
          </div>
        </div>

        <div className="banner-inner right">
          <img src={hr} alt="hr svg" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
