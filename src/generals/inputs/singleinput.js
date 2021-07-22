import "./singleinput.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { useState} from "react"

const Singleinput = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="single-form-input">
      <label className="sing-form-label"> {props.label} </label>
      <p>{props.subtext && props.subtext}</p>
      <div
        style={{
          position: "relative",
          display: "inline-block",
          width: 100 + "%",
        }}
      >
        <input
          type={
            props.type
              ? props.type === "password"
                ? passwordShown
                  ? "text"
                  : "password"
                : "text"
              : props.type
          }
          name={props.name}
          placeholder={props.placeholder}
          style={{
            width: props.width + "px",
            marginBottom: 10,
            border: props.error ? "1px solid red" : "",
            backgroundColor: props.error ? "#FFEBEB" : "",
          }}
          onChange={props.onChange}
        />
        {props.name === "password" && (
          <FontAwesomeIcon
            icon={passwordShown ? faEyeSlash : faEye}
            className="eye"
            size="lg"
            style={{
              position: "absolute",
              right: 20,
              top: 20,
              width: 20,
              height: 20,
              color: "#8B8C8C",
            }}
            onClick={togglePasswordVisiblity}
          />
        )}
      </div>
      <p  style={{color:'red', height:5, width:100+'%'}} > {props.error ? props.error : " "}</p>

    </div>
  )
}
export default Singleinput;
