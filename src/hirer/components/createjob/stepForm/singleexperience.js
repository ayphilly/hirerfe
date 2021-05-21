import "./singleexperience.scss"

import Singleinputlabel from "../../../../generals/inputs/singleinputlabel"
import CheckBox from "../../../../generals/inputs/checkbox"
import Textarea from "../../../../generals/inputs/textarea"
import RadioButton from "../../../../generals/inputs/radiobox"
import { Dropdown, Option }  from "../../../../generals/inputs/dropdown/dropdown"
import {useState} from "react"

export const Singleexperience = () => {
    const [experience, setRadio] = useState("Preffered");
    const [checked, setCheck] = useState(true);

    var radioChangeHandler = (event) => {

        setRadio(event.target.value);
    }


    const [optionValue, setOptionValue] = useState("");

    const handleSelect = (e) => {
        console.log(e.target.value);
        setOptionValue(e.target.value);
    };

    var handleCheckboxChange = (event) => {
        
        setCheck(event.checkState)
    }
    return (
        <div className="single-experience">
            <div className="single-experience-inner">
                <div className="single-experience-text">
                    <p>Experience</p>
                    <p>
                        Specify requirements that you want applicants to meet below. 
                        Jobseekers will be asked to confirm these when they apply for your job.
                    </p>
                </div>
                
                <hr/>

                <div className="experience-form">

                    <div className="experience-input">
                        <Dropdown
                            formLabel="Minimum Of"
                            buttonText="Send form"
                            onChange={handleSelect}
                            width= {150}
                        >
                            <Option selected value="Select Number" />
                            <Option value="One Year" />
                            <Option value="Two Years" />
                            <Option value="> Two Years" />
                        </Dropdown>

                        <Singleinputlabel
                            type="text"
                            placeholder ="E.g Adobe Illustrator"
                            label ="Of"
                            name="experience"
                            width= {200}
                        >

                        </Singleinputlabel>
                        Experience

                    </div>
                </div>

            </div>
        </div>

    )
}