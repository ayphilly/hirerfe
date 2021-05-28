import "./tryhirer.scss";
import { Link } from "react-router-dom";

const Tryhirer = (props) => {
  return (
    <div className="tryhirer-container">
      <div className="tryhirer-innner-col">
        <p> {props.title} </p>
        <p> {props.subtitle} </p>
        <Link className="tryhirer-inner-btn" to="/talent/createprofile">
          Create A Profile
        </Link>
      </div>
    </div>
  );
};

export default Tryhirer;
