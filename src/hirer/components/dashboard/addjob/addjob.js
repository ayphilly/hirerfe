import "./addjob.scss"
import PostJob from "../../../pages/PostJob"

export const Addjob = () => {

    return (
        <div className="add-job-container">
            <div className="add-job-inner">
                <p className="headertext"> Post Job </p>
                <div className="add-job-box">
                    <PostJob
                        box = {0}
                    >

                    </PostJob>

                </div>
                
            </div>
        </div>
    )
}