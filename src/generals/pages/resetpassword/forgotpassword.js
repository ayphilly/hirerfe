import "./forgotpassword.scss"
import {Verifyemail} from "../../passwordreset/verifyemail"
import {Checkmail} from "../../passwordreset/checkmail"
import {useState} from "react"


const Forgotpassword = () => {
    

   

    const [step, navigation] = useState(0)

    var next = ()=> {
        navigation(step => step +1 );
    }
    

    const props = {next};
    
    return (
        <div className="resetpassword-container"> 
        {
           step === 0 &&<Verifyemail {...props} ></Verifyemail>
        }
        {
           step === 1 && <Checkmail 
                            {...props} 
                            subtext =" We have sent a password recovery 
                            instructions to your registered
                            email address."
            ></Checkmail>
        }

        </div>
    )

}

export default Forgotpassword;