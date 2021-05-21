import "./jobfilter.scss";
import CheckBox from "../../../generals/inputs/checkbox"
import {useState} from "react";


export const Jobfilter = (props) => {
    const [checked, setCheck] = useState(true);

    const handleCheckboxChange = (event) => {
        
        setCheck(!checked);
        
    };
    return (
        <div className="jobfilter-container">
            <div className="jobfilter-inner">
                <CheckBox
                        name="box1"
                        label={props.label}
                        checked={checked}
                        className="none"
                        onChange={handleCheckboxChange}
                        size = "lg"
                />

                <p>
                    {
                        props.result
                    }
                </p>
            </div>

        </div>
    )
}