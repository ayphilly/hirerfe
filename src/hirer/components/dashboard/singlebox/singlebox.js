import "./singlebox.scss"
import Box from "../../../hirerassets/dashjob.svg"
export const Singlebox = (props) => {

    return (
        <div className="singlebox-container">
            <div className="singlebox-inner">
                <div className="singlebox-inner top">
                    <img src={props.image} alt="Box dashboard"></img>
                    <div className="top content">
                        <p>{props.title}</p>
                        <p>{props.subtitle}</p>
                    </div>
                </div>
                <div className="singlebox-inner bottom">
                    <p>{props.number}</p>
                    <p>{props.subtext}</p>
                </div>
            </div>
        </div>
    )
}