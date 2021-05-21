import "./singletalent.scss"
import profile from "../../hirerassets/profile.png"

export const Singletalent = ()=> {

    return (
        <div className="singletalent-container">
            <div className="singletalent-inner">
                <div className="single-talent-left">
                    <img src={profile} alt="talent profile"></img>
                    <div className="singletalent-texts">
                        <p>Ademola Okon Daniel</p>
                        <p>UI Designer</p>
                        <p>Lagos</p>
                    </div>
                </div>
                <a href="#" className="single-talent-btn">View</a>
            </div>
        </div>
    )
}