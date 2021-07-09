import "./footer.scss"
import footerLogo from "../talent/talentassets/hirer-footer.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faAndroid, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-inner-col">
                <div className="footer-inner-col-top">
                    <div className="top-left">
                        <img src={footerLogo} alt="footer logo"></img>
                        <div className="top-left-buttons">
                            <a href="#" className="apple-button">
                                <FontAwesomeIcon icon={faApple} className="apple-icon" size="lg" />
                                Apple
                            </a>
                            <a href="#" className="android-button">
                                <FontAwesomeIcon icon={faAndroid} className="android-icon" size="lg" />
                                Android
                            </a>

                        </div>

                    </div>
                    <div className="top-right">
                        
                        <ul className="Talents-footer-links">
                            <li> Hirer </li>
                            <li> Sign in </li>
                            <li> Register</li>
                            <li> jobs </li>
                            <li> Review </li>
                            
                        </ul>
                        <ul className="Hirer-footer-links">
                            <li> Hirer  </li>
                            <li> Sign in  </li>
                            <li> Post Jobs </li>
                            <li> Plans </li>
                        </ul>
                        <ul className="Help-footer-links">
                            <li> Help Center </li>
                            <li> Support  </li>
                            <li> Privacy Policy </li>
                            <li> Terms </li>
                        </ul>
                        <ul className="Contact-footer-links">
                            <li>Get In Touch</li>
                            <li>
                                10, Hughes Avenue, Off Herbert Macaulay Way, Yaba, Lagos State.
                                110 W Randol Mill Rd. Arlington Texas 76011
                                NG: +2347064838833 ||  US: +13042041510
                                
                            </li>
                        </ul>

                    </div>

                </div>
                <hr/>
                <div className="footer-inner-col-bottom">
                    <p> © 2020 Hirer, Inc. All rights reserved · Privacy · Terms </p>
                    <div className="socials">
                        <FontAwesomeIcon icon={faFacebook} className="facebook-icon" size="lg"/>
                        <FontAwesomeIcon icon={faInstagram} className="instagram-icon" size="lg"/>
                        <FontAwesomeIcon icon={faTwitter} className="twitter-icon" size="lg"/>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Footer;