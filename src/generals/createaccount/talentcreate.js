import Singleinput from "../inputs/singleinput"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import "./talentcreate.scss";

const Talentcreate = () => {

    return (
        <div className="talent-account-container talent hide">
            <div className="talent-account-inner">
                <div className="create-account-texts">
                    <p>Create Your Talent Account</p>
                    <p>Reach top talent and find the right candidate today.</p>
                    <div className="create-account-note">
                        <FontAwesomeIcon icon={faAsterisk} className="asterisk-icon" size="xs"/>
                        <p> Denotes Mandatory Fields </p>
                    </div>
                </div>
                
                <form>
                    <div className="talent-details">
                        <Singleinput
                            type="text"
                            placeholder ="Full Name"
                            label ="Full Name"
                            subtext="Enter your full name"
                            name="name"
                            width= {285}
                        >

                        </Singleinput>

                        <Singleinput
                            type="text"
                            placeholder ="Phone Number"
                            label ="Phone Number"
                            subtext="Enter your phone number"
                            name="number"
                            width= {285}

                        >

                        </Singleinput>

                    </div>
                    <Singleinput
                            type="text"
                            placeholder ="Email Address"
                            label ="Your Email"
                            subtext="Enter your email address"
                            name="email"
                            width= {585}
                        >

                    </Singleinput>

                    <Singleinput
                            type="password"
                            placeholder ="Create your password"
                            label ="Company Password"
                            subtext="Enter your 8 digits password"
                            name="password"
                            width= {585}
                        >

                    </Singleinput>

                    <button type="submit" className="create-submit"> Create </button>

                    
                    
                </form>

            </div>

        </div>

    )
    

}

export default Talentcreate;