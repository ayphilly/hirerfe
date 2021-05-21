import Singleinput from "../inputs/singleinput"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import "./hirercreate.scss"

const Hirercreate = () => {

    return (
        <div className="hirer-account-container hirer active">
            <div className="hirer-account-inner">
                <div className="create-account-texts">
                    <p>Create Your Hirer Account</p>
                    <p>Reach top talent and find the right candidate today.</p>
                    <div className="create-account-note">
                        <FontAwesomeIcon icon={faAsterisk} className="asterisk-icon" size="xs"/>
                        <p> Denotes Mandatory Fields </p>
                    </div>
                </div>
                
                <form>
                    <div className="company-details">
                        <Singleinput
                            type="text"
                            placeholder ="Company Name"
                            label ="Company Name"
                            subtext="Enter your company name"
                            name="company"
                            width= {285}
                        >

                        </Singleinput>

                        <Singleinput
                            type="text"
                            placeholder ="Contact Person"
                            label ="Contact Person"
                            subtext="Enter your name"
                            name="person"
                            width= {285}

                        >

                        </Singleinput>

                    </div>
                    <Singleinput
                            type="text"
                            placeholder ="Company Email"
                            label ="Company Email"
                            subtext="Enter your company email"
                            name="email"
                            width= {585}
                        >

                    </Singleinput>

                    <Singleinput
                            type="password"
                            placeholder ="Create your password"
                            label ="Company Password"
                            subtext="Enter your company email"
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

export default Hirercreate