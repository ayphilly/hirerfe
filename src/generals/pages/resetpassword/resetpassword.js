import "./resetpassword.scss"
import {Verifyemail} from "../../passwordreset/verifyemail"
import {Changepassword} from "../../passwordreset/changepassword"
import {useEffect, useState} from "react"
const steps = [
    {id: 'verifymail'},
    {id: 'changepassword'}
]

const Resetpassword = () => {
    

   

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
           step === 1 && <Changepassword {...props} ></Changepassword>
        }

        </div>
    )

}

export default Resetpassword;