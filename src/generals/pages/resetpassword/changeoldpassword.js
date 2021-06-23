import "./forgotpassword.scss"
import {Changepassword} from "../../passwordreset/changepassword"
import {Resetsuccessful} from "../../passwordreset/successful"
import {useState} from "react"

const Changeoldpassword = () => {
    

   

    const [step, navigation] = useState(0)

    var next = ()=> {
        navigation(step => step +1 );
    }
    

    const props = {next};
    
    return (
        <div className="resetpassword-container"> 
        {
           step === 0 &&<Changepassword {...props} ></Changepassword>
        }
        {
           step === 1 && <Resetsuccessful {...props} ></Resetsuccessful>
        }

        </div>
    )

}

export default Changeoldpassword;