import "./postajob.scss"
import {useForm, useStep} from "react-hooks-helper";
import {Companydetails} from "../../components/createjob/stepForm/companydetails"
import {Jobdetails} from "../../components/createjob/stepForm/jobdetails"
import {Jobexperience} from "../../components/createjob/stepForm/jobexperience"
import {Jobreview} from "../../components/createjob/stepForm/jobreview"
import {Submit} from "../../components/createjob/stepForm/submit"
import {defaultData} from "../../components/createjob/stepForm/constant"



const steps = [
    {id: 'names'},
    {id: 'address'},
    {id: 'contact'},
    {id: 'review'},
    {id: 'submit'},
]

const Postajob = () => {

    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep: 0
    })

    

    const props = {formData, navigation, setForm};

    switch (step.id) {
        case "names":
            return <Companydetails {...props} ></Companydetails>;
        case "address":
            return <Jobdetails {...props} ></Jobdetails>;
        case "contact":
            return <Jobexperience {...props} ></Jobexperience>;
        case "review":
            return <Jobreview {...props} ></Jobreview>;
        case "submit":
            return <Submit></Submit>;
    }

    return (
        <div className="postajob-container"> 
        {
            
        }

        </div>
    )

}

export default Postajob;