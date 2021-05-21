import "./feedback.scss"
import Singlefeed from "./singlefeedback"
function feedback() {
     return (
         <div className="feedback-container">
             <div className="feedback-inner">
                 <div className="feedback-top">
                     <p>Hirers Feedback</p>
                     <p>Having spoken to some of some Employers, listen to what they have to say.</p>
                 </div>

                 <Singlefeed></Singlefeed>

             </div>

         </div>
     )
}

export default feedback;