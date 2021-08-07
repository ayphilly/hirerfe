import "./jobapplication.scss"
import Singleinputlabel from "../inputs/singleinputlabel"
import Textarea from "../inputs/textarea";
import {Dropdown, Option} from "../inputs/dropdown/dropdown"
import CheckBox from "../inputs/checkbox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import {useState, useEffect} from "react"
import Singleinputlocation from "../location/location";
export const Jobapplication = (props) => {

    const [checked, setCheck] = useState(true);
    const [optionValue, setOptionValue] = useState("");

    const [formState, setFormstate] = useState({
        salary: null,
        experience: null,
        location: '',
        cv:''
    })

    const [response, setResponse] = useState({
        status: null,
        message: '',
    })

    const handleUserInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

       setFormstate({...formState, [name]: value});
    }

    const handleUserLocation = (location) => {
        setFormstate({...formState, location});
    }

    const handleSelect = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setOptionValue(e.target.value);
    };
    var handleCheckboxChange = (event) => {
        // event.preventDefault();
        setCheck(event.checkState)
    }

    // useEffect(()=> {
    //     props.closeApplication();
    // },[])

    return (
        <div className={`jobapplication-container ${props.open ?' ' : ' hidden'  }`}>
            <div className="jobapplication-inner-col">
            <div className="jobapplication-close" onClick={e=> props.openApp()}>
                <FontAwesomeIcon icon={faTimes} className="asterisk-icon"/>
            </div>
                <div className="jobapplication-inner-top">
                    <p>Application for the role of <strong>{props.job.data ? props.job.data.job[0].title: ''}</strong></p>
                    <p> for <strong>{props.job.data ? props.job.data.job[0].company : ''}</strong> </p>
                    <p><strong>{props.job.data ? props.job.data.job[0].location : ''}</strong>  • {props.job.data ? props.job.data.job[0].type : ''} </p>

                </div>
                <form>
                    {/* <Singleinputlabel
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
                    /> */}
                    <div className="form-cv">
                        <p>CV</p>
                        {/* <div className="cv-choose-file">
                            <button className="file">Choose File</button>
                            <p>No File Chosen Yet</p>
                        </div> */}
                        <Singleinputlabel
                            type="text"
                            placeholder ="Link to your CV"
                            label ="Link to CV"
                            name="cv"
                            value={formState.cv}
                            onChange={(event) => handleUserInput(event)}
                        />
                        {/* <div className="form-drag-drop">
                            <div className="drag-drop-inner">
                                <p>Drag and Drop To Attach Files</p>
                                <p>Attach additional documents</p>
                            </div>
                        </div> */}
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
                        {/* <div className="form-qualifications">
                            <Singleinputlocation
                                label ="Where ?"
                                subtext="Enter State"
                                name="location"
                                value={props.formState ? props.formState.location :''}
                                handleUserLocation ={props.handleUserLocation }
                            ></Singleinputlocation>
                            <Singleinputlabel></Singleinputlabel>
                            <Singleinputlabel></Singleinputlabel>
                        </div> */}
                        {props.filters.location > 0 && <Singleinputlocation
                            label ="Where ?"
                            subtext="Enter State"
                            name="location"
                            value={formState.location}
                            handleUserLocation ={handleUserLocation }
                        />}
                        {props.filters.experience > 0 && <Singleinputlabel
                            type="integer"
                            placeholder ="How many years of Desktop support experience do you have"
                            label ="How many years of Desktop support experience do you have"
                            name="experience"
                            value={formState.experience}
                            onChange={(event) => handleUserInput(event)}
                        />}
                        {props.filters.salary_expectation > 0 && <Singleinputlabel
                            type="integer"
                            placeholder ="What is your Monthly Salary Expectation ?"
                            label ="What is your Monthly Salary Expectation ?"
                            name="salary"
                            value={formState.salary}
                            onChange={(event) => handleUserInput(event)}
                        />}

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