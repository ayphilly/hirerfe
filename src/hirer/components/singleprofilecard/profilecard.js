import "./profilecard.scss";
import aspire from "../../../talent/talentassets/aspire.png"

export const Profilecard = (props)=> {

    return (
        <div className="profile-card-contaner">
            <img src={aspire} alt="Aspire Image"/>
            <div className="profile-card-top-right">
                <p>{ props.company || props.school}</p>
                <p>{ props.company || props.degree} <strong>• {props.type}</strong></p>
                <p>{props.date} <strong>• 2 Mos</strong> </p>
                <p>{props.state} </p>
            </div>

        </div>
    )
}