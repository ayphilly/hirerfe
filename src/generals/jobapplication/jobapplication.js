import "./jobapplication.scss"
import Singleinputlabel from "../inputs/singleinputlabel"
import Textarea from "../inputs/textarea";
import {Dropdown, Option} from "../inputs/dropdown/dropdown"
import CheckBox from "../inputs/checkbox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import {useState, useEffect} from "react"
export const Jobapplication = (props) => {

    const [checked, setCheck] = useState(true);
    const [optionValue, setOptionValue] = useState("");

    const handleSelect = (e) => {
        console.log(e.target.value);
        setOptionValue(e.target.value);
    };
    var handleCheckboxChange = (event) => {
        setCheck(event.checkState)
    }

    useEffect(()=> {
        props.closeApplication();
    })

    return (
        <div className="jobapplication-container hidden">
            <div className="jobapplication-inner-col">
            <div className="jobapplication-close">
                <FontAwesomeIcon icon={faTimes} className="asterisk-icon"/>
            </div>
                <div className="jobapplication-inner-top">
                    <p>Application for the role of <strong>Desktop Technician</strong></p>
                    <p> for <strong>Zik LTD</strong> Located in <strong> Ikeja,</strong> </p>
                    <p><strong>Lagos</strong>  • Fulltime </p>

                </div>
                <form>
                    <Singleinputlabel
                        type="text"
                        label ="Full Name"
                        name="fullname"
                        value=""
                        disabled= {false}
                        // onChange={props.setInput}
                    />
                    <Singleinputlabel
                        type="text"
                        label ="Your Personal Email Address"
                        name="email"
                        value=""
                        disabled= {false}
                        // onChange={props.setInput}
                    />
                    <div className="form-cv">
                        <p>CV</p>
                        <div className="cv-choose-file">
                            <button className="file">Choose File</button>
                            <p>No File Chosen Yet</p>
                        </div>
                        <div className="form-drag-drop">
                            <div className="drag-drop-inner">
                                <p>Drag and Drop To Attach Files</p>
                                <p>Attach additional documents</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-cover-letter">
                        <p>Cover Letter </p>
                        <Textarea
                            type="text"
                            placeholder ="Cover Letter"
                            label ="Cover Letter Optional"
                            name="description"
                        >
                        </Textarea>

                        <CheckBox
                            name="notify"
                            label="Notify me when similar jobs are available"
                            checked={checked}
                            onChange={handleCheckboxChange}
                        />
                        <p>
                            By checking this box and clicking continue, you agree to our Terms, 
                            and you agree to receive similar jobs via email. You can change your 
                            consent settings at any time by unsubscribing or as detailed in our terms.
                        </p>

                    </div>
                    
                
                    <div className="form-experience">
                        <div className="form-qualifications">
                            <Dropdown
                                formLabel="Qualification"
                                buttonText="Send form"
                                onChange={handleSelect}
                                // action="https://jsonplaceholder.typicode.com/posts"
                            >
                                <Option selected value="Click to see options" />
                                <Option value="Degree" />
                                <Option value="B-Tech" />
                                <Option value="BSC" />
                            </Dropdown>
                            <Dropdown
                                formLabel="Monthly Salary Expectation"
                                buttonText="Send form"
                                onChange={handleSelect}
                                
                            >
                                <Option selected value="Click to see options" />
                                <Option value="Degree" />
                                <Option value="B-Tech" />
                                <Option value="BSC" />
                            </Dropdown>

                        </div>
                        <Dropdown
                            formLabel="Monthly Salary Expectation"
                            buttonText="Send form"
                            onChange={handleSelect}
                            
                        >
                            <Option selected value="Click to see options" />
                            <Option value="Degree" />
                            <Option value="B-Tech" />
                            <Option value="BSC" />
                        </Dropdown>

                    </div>
                    <div className="form-apply-button">
                        <button className="apply-button">Apply Now!</button>
                        <p>By clicking "Apply Now", you agree to our <span>Terms & Conditions </span> and <span>Privacy Policy</span></p>

                    </div>
                </form>

            </div>
        </div>
    )
}