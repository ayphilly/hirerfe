import "./companyinfo.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
export const Companyinfo = () => {


    return (
        <div className="companyinfo-container">
            <div className="companyinfo-inner-col">
                <div className="companyinfo-top">
                    <p> Aspire Consulting </p>
                    <div className="company-rating">
                        <FontAwesomeIcon icon={faStar} className="star-icon" size="lg"/>
                        <p>4.5</p>
                    </div>
                    
                </div>
                <hr/>
                <div className="companyinfo-bottom">
                    <p>About</p>
                    <p>
                        XCIS excel in cross-border IT service support and network router / switch configuration,
                        installation and troubleshooting. From a sm...
                    </p>
                    <button className="follow-company">Follow</button>
                    <p>Get job updates from Aspire Consulting</p>

                </div>

            </div>

        </div>
    )
}