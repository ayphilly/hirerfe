import "./jobsearch.scss"
import Singleinput from "../../../generals/inputs/singleinput"
const Jobsearch = ()=> {

    return (
        <div className="jobsearch-container">

            <div className="jobsearch-inner">
                <form>
                    <div className="form-details-search">
                        <div className="search-title">
                            <Singleinput
                                type="text"
                                placeholder ="Job title, keywords, or company"
                                label ="What ?"
                                subtext="Job title, keywords, or company"
                                name="jobtitle"
                                width={400}
                            
                            ></Singleinput>
                        </div>
                        

                        <div className="search-location">
                            <Singleinput
                                type="text"
                                placeholder ="city or postcode"
                                label ="Where ?"
                                subtext="city or postcode"
                                name="joblocation"
                                width={400}
                            
                            ></Singleinput>

                        </div>

                    </div>
                    <button type="submit" className="job-search-submit"> Search </button>
                </form>

            </div>



        </div>
    )
}

export default Jobsearch;

{/* <div className="form-job">
                        <label> What ? </label>
                        <p>Job title, keywords, or company</p>
                        <input type="text" id="title" name="title"  placeholder="Job title, keywords, or company"></input>
                    </div>

                    <div className="form-location">
                        <label> Where ? </label>
                        <p>city or postcode</p>
                        <input type="text" name="location" id="location" placeholder="city or postcode"></input>
                    </div> */}