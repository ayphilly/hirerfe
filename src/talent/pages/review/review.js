import "./review.scss";
import search from "../../talentassets/revieww.svg"
import {useEffect} from "react"
import {slideUp} from "../../../helper.js"
import Singleinputlabel from "../../../generals/inputs/singleinputlabel";
import Popular from "../../components/popular";
import Singletopcompany from "../../components/singlecompany/singlecompany";
import { companyList } from "../../constants";
export const Review = () => {

    

    useEffect(()=>{
        slideUp();
    }, [])

    var topjobs = companyList.map (company=> {
        return (
            <Singletopcompany
                key={company.icao}
                title={company.title}
                company={company.company}
                days={company.reviews}
                location={company.location}
            >

            </Singletopcompany>
        )
    })
    return (
        <div className="review-container">
            <div className="review-inner">
                <div className="review-top">
                
                    <div className="review-top left">
                        <div className="left-top">
                            <span className="top-title slide-up" > Let Find You Great Places to <strong> Work </strong> </span>
                            <p> Discover millions of company reviews. </p>

                        </div>
                        <div className="left-bottom">
                            <div className="bottom-form">
                                <form>
                                    <Singleinputlabel
                                        type="text"
                                        placeholder ="Full Name"
                                        label ="Company Name"
                                        subtext="Enter your full name"
                                        name="name"
                                        // value={formState.name}
                                        // onChange={(event) => handleUserInput(event)}
                                        // error = {formState.errors.name}
                                    />
                                    <button type="submit" className="review-submit" > Search </button>
                                </form>

                            </div>

                        </div>

                    </div>

                    <div className="review-top right">
                        <img src={search} alt="Job Search"></img>

                    </div>
                </div>
                <Popular></Popular>
                <div className="companies-container">
                    <div className="singlecompany-list">
                        {
                            topjobs
                        }

                    </div>

                </div>
                
            </div>
            

        </div>
    )
}

export default Review;