import "./signin.scss"
import Singleinputlabel from "../inputs/singleinputlabel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'

export const Signin =()=> {
    return (
        <div className="signin-container">

            <div className="signin-inner">
                <div className="signin-texts">
                    <p>Welcome Back</p>
                    <p>Reach top talent and find the right candidate today.</p>
                   
                </div>

                <div className="signin-options">
                    <a href="#" className="google">
                        <FontAwesomeIcon icon={faGoogle} className="brand-icon"/> 
                        Continue with Google
                    </a>
                    <a href="#" className="facebook">
                        <FontAwesomeIcon icon={faFacebookF} className="brand-icon"/> 
                        Continue with Facebook
                    </a>

                </div>
                <div className="signin-divide">
                    <hr/> Or <hr/>

                </div>
                
                
                <form>
                    <div className="form-inner">
                        <Singleinputlabel
                            type="text"
                            placeholder ="Continue with your email"
                            label ="Email"
                            name="email"
                            width= {520}
                        >

                        </Singleinputlabel>

                        <Singleinputlabel
                            type="password"
                            placeholder ="Continue with your password"
                            label ="Password"
                            name="password"
                            width= {520}
                        >

                        </Singleinputlabel>

                        <p> Forgotten password ? <a href="#"> Reset here </a> </p>
                        <button type="submit" className="signin-submit"> Sign In </button>

                        <p> New member ? <a href="#"> Create your free account now </a>  </p>

                    </div>
                    
                    

                    
                    
                </form>

            </div>

        </div>
    )
}