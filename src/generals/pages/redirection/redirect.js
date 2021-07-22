import "./redirect.scss"
import redirect from "../../../hirer/hirerassets/redirecting.svg"
export const Redirect = () => {
    return (
        <div className="redirect-container">
        <div className="redirect-inner">
            <div className="redirect-inner-main">
                <img src={redirect} alt="redirect-svg"/>
                <span><p>Redirecting</p> <p>...</p></span>
                {/* <Link className="error-404-btn" to="/" style={{textDecoration:'none'}}> Back To Homepage </Link> */}
                
            </div>

        </div>

    </div>
    )
}