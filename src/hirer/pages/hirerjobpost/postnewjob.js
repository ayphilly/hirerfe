import "./postnewjob.scss"

import {useForm, useStep} from "react-hooks-helper";
import {Jobtitle} from "../../components/createjob/createjobstep/jobtitle/jobtitle"
import {Joblocation} from "../../components/createjob/createjobstep/joblocation/joblocation"
import {Jobtype} from "../../components/createjob/createjobstep/jobtype/jobtype"
import {Jobdescription} from "../../components/createjob/createjobstep/jobdescription/jobdescription"
import {defaultData} from "../../constants"




const steps = [
    {id: 'title'},
    {id: 'location'},
    {id: 'type'},
    {id: 'description'},
    {id: 'submit'},
]

const Postnewjob = () => {
    

    const [formData, setForm] = useForm(defaultData);

    const {step, navigation} = useStep({
        steps,
        initialStep: 0
    })

    

    const props = {formData, navigation, setForm};

    switch (step.id) {
        case "title":
            return <Jobtitle {...props} ></Jobtitle>;
        case "location":
            return <Joblocation {...props} ></Joblocation>;
        case "type":
            return <Jobtype {...props} ></Jobtype>;
        case "description":
            return <Jobdescription {...props} ></Jobdescription>;
        case "submit":
            return <Jobtitle {...props} ></Jobtitle>;
    }

    return (
        <div className=""> 
        {
            
        }

        </div>
    )

}

export default Postnewjob;