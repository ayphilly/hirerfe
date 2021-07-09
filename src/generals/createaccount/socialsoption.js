import "./socialsoption.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export const Socialoption = (props) => {
    return (
        <div className="socialoption-container">
            <div className="socialoption-inner-container">
                <a href="" className="google" onClick={(e)=> props.glink(e)}>
                    <FontAwesomeIcon icon={faGoogle} className="sc-icon"/> 
                    {props.title} with Google
                </a>
                <a href="#" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} className="sc-icon"/> 
                    {props.title} with Facebook
                </a>
            </div>
            <div className="socialoption-divide">
                <hr/> Or <hr/>
            </div>
        </div>
    )
}