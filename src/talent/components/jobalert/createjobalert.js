import "./createjobalert.scss";
import Singleinputlabel from "../../../generals/inputs/singleinputlabel";
import { useState } from "react";
export const Creatjobalert = () => {

    const [keyword, setKeyword] = useState("")
    return (
        <div className="create-job-alert-container">
            <div className="create-job-alert-inner">
                <div className="job-alert-inner-content">
                    <p>Create Job Alert</p>
                    <p>
                        Enter a Job keyword and get alerts for the job.
                    </p>
                </div>
                
                <Singleinputlabel
                    type="text"
                    placeholder ="Enter Job Keyword"
                    label ="Job or Keyword"
                    // subtext="city or postcode"
                    name="jobkeyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    width={220}
                >
                </Singleinputlabel>

                <button type="submit" className="create-job-alert-btn" disabled={keyword === "" ? true: false}> Create Job Alert </button>

            </div>

        </div>
    )
}