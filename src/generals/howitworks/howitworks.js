import "./howitworks.scss";
import job from "../../talent/talentassets/jobs.svg"
import review from "../../talent/talentassets/review.svg"
import boost from "../../talent/talentassets/boost.svg"
import suitcase from "../../talent/talentassets/suitcase.svg"
// import {workList} from "../../talent/constants";
import Singlework from "./singleworks";
const Howitworks = (props) => {

    
    var works = props.worklist.map((work, index) => {
        return (
            <Singlework
                key={ work.icao}
                title = {work.title}
                subtitle ={work.subtitle}
                img={props.images[index]}
            >
                                    
            </Singlework>

        )
    })
    return (
        <div className="howitworks-container">
            
            <div className="howitworks-inner">
                <div className="howitworks-headline">
                    <p>How Hirer works for you</p>
                    <p>See how our product will work for you</p>

                </div>
                <div className="howitworks-content">

                
                    {
                       works
                    }

                </div>
                
            </div>

        </div>
    )


}

export default Howitworks;