import "./createjobalert.scss";
import Singleinputlabel from "../../../generals/inputs/singleinputlabel";
export const Creatjobalert = () => {
    return (
        <div className="create-job-alert-container">
            <div className="create-job-alert-inner">
                <p>Create Job Alert</p>
                <p>
                    Create Job alert now and
                    never miss a job.
                </p>
                <Singleinputlabel
                    type="text"
                    placeholder ="Enter Job Keyword"
                    // label ="Where ?"
                    // subtext="city or postcode"
                    name="jobkeyword"
                    width={220}
                >
                </Singleinputlabel>

                <button type="submit" className="create-job-alert-btn"> Create Job Alert </button>

            </div>

        </div>
    )
}