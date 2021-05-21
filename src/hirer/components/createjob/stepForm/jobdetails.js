import "./jobdetails.scss"
import Singleinputlabel from "../../../../generals/inputs/singleinputlabel"
import CheckBox from "../../../../generals/inputs/checkbox"
import Textarea from "../../../../generals/inputs/textarea"
import RadioButton from "../../../../generals/inputs/radiobox"
import { Dropdown, Option }  from "../../../../generals/inputs/dropdown/dropdown"
import {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import money from "../../../hirerassets/money.svg"



export const Jobdetails = (props) => {

    // const [checked, setCheck] = useState(true);
    const [cv, setCV] = useState(props.formData.cv);
    const [checkedItems, setCheckedItems] = useState(props.formData.jobType);
    const [checked, setCheck] = useState(true);

    var radioChangeHandler = (event) => {

        props.formData.cv= event.target.value;
        setCV(event.target.value);
        
    }


    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => {
        console.log(e.target.value);
        setOptionValue(e.target.value);
        props.formData.salary.range = e.target.value;
    };

    // var handleCheckboxChange = (event) => {
        
    //     setCheck(event.checkState)
    // }


    

    const handleCheckboxChange = (event) => {
        
        var name = event.name
        props.formData.jobType[event.name] = event.checkState;
        setCheckedItems( {
        ...checkedItems,
        [event.name]: event.checkState
        },[event.checkState]);
        console.log(props.formData);
        
    };

    const checkboxes = [
        {
            name: "temporary",
            key: "temorary",
            label: "Temporary"
        },
        {
            name: "permanent",
            key: "permanent",
            label: "Permanent"
        },
        {
            name: "contract",
            key: "contract",
            label: "Contract"
        },
        {
            name: "internship",
            key: "internship",
            label: "Internship"
        },
        {
            name: "new grad",
            key: "new grad",
            label: "New Grad"
        },
        {
            name: "commission",
            key: "commission",
            label: "Commission"
        },
    ];

    console.log(props.formData)

    
    return (

        
        
        <div className="job-details-container">
            
            <div className="job-details-inner">
                <div className="job-details-texts">
                    <div className="job-inner-texts">
                        <p> Job Details</p>
                        <p>Step 2 / 4</p>
                    </div>
                    
                </div>
                
                <div className= "job-details-form">
                   <div className="employment-container">
                       <div className="employment-inner">
                           <p>Employment Details</p>
                            <p> What type contract is it ?</p>
                            <div className =" employment-grid">
                                {checkboxes.map((item, key )=> (
                                    <CheckBox
                                        key={key}
                                        name={item.name}
                                        label={item.label}
                                        checked={checkedItems[item.name]}
                                        onChange={handleCheckboxChange}
                                        value={item.name}
                                    />
                                ))}

                            </div>
                       </div>

                   </div>

                   <div className="compensation-container">
                       <div className="compensation-inner">
                           <div className="compensation-top">
                               <div className="compensation-top-inner">
                                   <p>Good Compensation is key for Seekers</p>
                                   <p>Salary is key to helping Hirer find the right fit</p>
                               </div>
                               <img src={money} alt="money"></img>
                           </div>
                           <div className="compensation-form">
                               <div className="compensation-form-inner">
                                <Singleinputlabel
                                        type="text"
                                        placeholder ="e.g 5,000"
                                        label ="From"
                                        name="salary.from"
                                        width= {200}
                                        onChange={props.setForm}
                                        value={props.formData.salary.from}
                                    >
                                
                                    
                                    </Singleinputlabel>
                                    
                                    <Singleinputlabel
                                        type="text"
                                        placeholder ="e.g 20,000"
                                        label ="To"
                                        name="salary.to"
                                        width= {200}
                                        onChange={props.setForm}
                                        value={props.formData.salary.to}
                                    >

                                    </Singleinputlabel>

                                    

                                    
                                    <Dropdown
                                        formLabel="Per /"
                                        buttonText="Send form"
                                        onChange={handleSelect}
                                        width= {150}
                                        name = "salary.range"
                                        value={props.formData.salary.range}
                                    >
                                        <Option selected value="Select Range" />
                                        <Option value="Per week" />
                                        <Option value="Per Month" />
                                        <Option value="Per Annum" />
                                    </Dropdown>

                               </div>
                               <p> {parseInt(props.formData.salary.from) >= parseInt(props.formData.salary.to) && "From Cannot be More than To"} </p>
                               
                           </div>

                            
                       </div>

                   </div>

                   <div className="appication-container">
                       <div className="application-inner">
                           <p>Application Settings</p>
                           <div className="application-email">
                                <Singleinputlabel
                                    type="text"
                                    placeholder ="Enter your email address"
                                    label ="Daily updates about this job to be sent to :"
                                    name="emailOne"
                                    width= {585}
                                >
                                </Singleinputlabel>
                                <p>
                                    <FontAwesomeIcon icon={faPlusCircle}  className=""/>
                                    Add another email
                                </p>
                                <CheckBox
                                    name="alert"
                                    label="Also send an individual email update every application."
                                    checked={checked}
                                    onChange={handleCheckboxChange}
                                />

                           </div>
                            

                            <div className="radio-btn-inner">
                                <p> Do you want applicants to submit CV ? </p>
                                <RadioButton 
                                    changed={ radioChangeHandler } 
                                    id="1" 
                                    isSelected={ props.formData.cv === "Yes" } 
                                    label="Yes" 
                                    value="Yes" 
                                />

                                <RadioButton 
                                    changed={ radioChangeHandler } 
                                    id="2" 
                                    isSelected={ props.formData.cv === "No" } 
                                    label="No" 
                                    value="No" 
                                />
                                <RadioButton 
                                    changed={ radioChangeHandler } 
                                    id="3" 
                                    isSelected={ props.formData.cv === "Optional" } 
                                    label="Optional" 
                                    value="Optional" 
                                />
                            </div>

                            <Singleinputlabel
                                type="text"
                                placeholder ="Enter your email address"
                                label ="Daily updates about this job to be sent to :"
                                name="updates"
                                width= {585}
                            >
                            </Singleinputlabel>

                        </div>
                    </div>
                    {/* <button type="submit" className="create-submit"> Create </button> */}
                    
                   <div className="job-description">
                       <div className="job-description-inner">
                           <p>Job description</p>
                           <p>Describe the responsibilities of this job, required work experience, skills, or education.</p>

                            <Textarea
                                type="text"
                                placeholder ="Write job description"
                                // label ="From"
                                name="description"
                                width= {585}
                            >
                            </Textarea>

                       </div>
                   </div>
                </div>

                <div className="details-btn">
                        <button type="back" className="back-btn" onClick={ () => props.navigation.previous()}> Back </button>
                        <button type="next" className="next-btn" onClick={ () => props.navigation.next()}> Next </button>
                </div>

            </div>

        </div>
            
        
    )
}