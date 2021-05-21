import "./feedback.scss"
import Singlefeed from "./singlefeedback"
function feedback() {
     return (
         <div className="feedback-container">
             <div className="feedback-inner">
                 <div className="feedback-top">
                     <p>Talents Feedback</p>
                     <p>Having spoken to some of our students, listen to what they have to say.</p>
                 </div>

                 <Singlefeed></Singlefeed>

             </div>

         </div>
     )
}

export default feedback;