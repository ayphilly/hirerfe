import "./companydetails.scss"
import Singleinputlabel from "../../../../generals/inputs/singleinputlabel"
import CheckBox from "../../../../generals/inputs/checkbox"
import RadioButton from "../../../../generals/inputs/radiobox"
import { Dropdown, Option }  from "../../../../generals/inputs/dropdown/dropdown"
import {useState} from "react"

export const Companydetails = (props) => {

    const [checked, setCheck] = useState(true);
    const [remote, setRadio] = useState(props.formData.remote);
    

    var radioChangeHandler = (event) => {
        props.formData.remote= event.target.value;
        setRadio(event.target.value);
        
    }


    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => {
        console.log(e.target.value);
        setOptionValue(e.target.value);
    };


    var handleCheckboxChange = (event) => {
        
        setCheck(event.checkState)
        // props.setForm(event.checkState)
    }
    // console.log(props.formData)
    
    return (

        
        
        <div className="company-details-container">
            
            <div className="company-details-inner">
                <div className="company-details-texts">
                    <div className="company-inner-texts">
                        <p>Company Details</p>
                        <p>Step 1 / 4</p>
                    </div>
                    
                </div>
                
                <div className="company-details-form">
                    <div className="company-details-form-inner">
                        <Singleinputlabel
                            type="text"
                            // placeholder ="Company Name"
                            label ="Company Name"
                            name="companyName"
                            value={props.formData.companyName}
                            onChange={props.setForm}
                            width= {585}
                        >

                        </Singleinputlabel>
                    
                        <Singleinputlabel
                                type="text"
                                placeholder ="Job Title"
                                label ="Job Title"
                                name="jobTitle"
                                value={props.formData.jobTitle}
                                width= {585}
                                onChange={props.setForm}
                            >

                        </Singleinputlabel>

                        <Singleinputlabel
                                type="text"
                                placeholder ="Job Location"
                                label ="Location"
                                name="location"
                                width= {585}
                                value={props.formData.location}
                                onChange={props.setForm}
                            >

                        </Singleinputlabel>

                    </div>
                    

                    <div className="radio-btn-container">
                        <div className="radio-btn-inner">
                            <p> Can this job be performed remotely ? </p>
                            <RadioButton 
                                changed={ 
                                   radioChangeHandler
                                    
                                } 
                                id="1" 
                                isSelected={ props.formData.remote === "Yes" } 
                                label="Yes" 
                                value="Yes" 
                            />

                            <RadioButton 
                                changed={  radioChangeHandler } 
                                id="2" 
                                isSelected={ props.formData.remote === "No" } 
                                label="No" 
                                value="No" 
                            />
                            

                        </div>

                       

                    </div>

                    <div className="form-dropdown-container">
                        <div className="dropdown-inner">
                            
                            <Dropdown
                                formLabel="Number of hirers"
                                buttonText="Send form"
                                onChange={handleSelect}
                                // action="https://jsonplaceholder.typicode.com/posts"
                            >
                                <Option selected value="Click to see options" />
                                <Option value="1-5" />
                                <Option value="6-10" />
                                <Option value="10-20" />
                            </Dropdown>

                        </div>
                        
                        
                        {/* <p>You selected {optionValue} </p> */}
                    </div>

                    {/* <CheckBox
                            name="box1"
                            label="Click me"
                            checked={checked}
                        onChange={handleCheckboxChange}
                    /> */}
                </div>

                <div className="company-btn">
                        <button type="next" className="next-btn" onClick={ () => props.navigation.next()}> Next </button>
                </div>
            </div>

        </div>
            
        
    )
}