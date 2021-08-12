import "./jobapplication.scss"
import Singleinputlabel from "../inputs/singleinputlabel"
import Textarea from "../inputs/textarea";
import {Dropdown, Option} from "../inputs/dropdown/dropdown"
import CheckBox from "../inputs/checkbox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useSelector,useDispatch } from 'react-redux'
import {useState, useEffect} from "react"
import Singleinputlocation from "../location/location";
import { post } from "../../requests";
import { Redirect, Route } from "react-router-dom";
import { myStates } from "../../constants";
export const Jobapplication = (props) => {

    const [checked, setCheck] = useState(true);
    const [optionValue, setOptionValue] = useState("");
    const [locid, setLocId] = useState(null)
    const [formState, setFormstate] = useState({
        salary: '',
        experience: '',
        location: '',
        cv:'',
        id: ''
    })

    const [response, setResponse] = useState({
        status: null,
        message: '',
    })
    const talentProfile = useSelector((state) => state.talent.talentProfile);

    var applyJob = (event)=> {
        event.preventDefault();
        if (Object.keys(talentProfile).length < 1) {
            setResponse({
                status:false,
                message: 'You cannot apply without an Hirer Profile, kindly go create one.'
            });
            <Redirect to="/talent/createprofile" />
        } else {
            post(`/v1/talent/apply/job`, {
                job_id:props.id,
                filters : {
                    salary_expectation: String(formState.salary),
                    location: parseInt(formState.id),
                    experience: parseInt(formState.experience)
                }
            })
              .then((response) => {
                  if (response.status) {
                      setResponse(response.data);
                    //   setLoad(false)
                  } else {
                    //  setError({
                    //       status: response.data.status,
                    //       message: response.data.message
                    //   })
                  }
                  
              }, (error) => {
                    setResponse(error.response.data);
                    // setLoad(false)
                  console.log("Something went wrong");
            });

        }
        


    }

    const handleUserInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

       setFormstate({...formState, [name]: value});
    }

    const handleUserLocation = (location) => {
        // var loc = myStates[location];
        
        console.log(loc);
        setFormstate({...formState, location});
        
        const filteredResults = myStates.filter(
            suggestion => {
                return suggestion.name === location
            }
        );
        var loc = filteredResults[0].id;
        setFormstate({...formState, id:loc, location})
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
            { response.message && <div className= {`application-message ${response.status ? 'success' : 'error'}`}>
                        <p>{response.message}</p>
                </div>}
            <div className="jobapplication-inner-col">
            <div className="jobapplication-close" onClick={e=> props.openApp()}>
                <FontAwesomeIcon icon={faTimes} className="asterisk-icon"/>
            </div>
                <div className="jobapplication-inner-top">
                    <p>Application for the role of <strong>{props.job.data ? props.job.data.job[0].title: ''}</strong></p>
                    <p> for <strong>{props.job.data ? props.job.data.job[0].company : ''}</strong> </p>
                    <p><strong>{props.job.data ? props.job.data.job[0].location : ''}</strong>  • {props.job.data ? props.job.data.job[0].type : ''} </p>

                </div>
                <form onSubmit={applyJob }>
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
                        {props.filters.location > 0 && <div className="filter-input-location"><Singleinputlocation
                            label ="Where ?"
                            subtext="Enter State"
                            name="location"
                            placeholder="Enter your location"
                            value={formState.location}
                            handleUserLocation ={handleUserLocation }
                        />
                        </div>}
                        {props.filters.experience > 0 && <div className="filter-input-years"> <Singleinputlabel
                            type="number"
                            placeholder ={`How many years of ${props.job.data ? props.job.data.job[0].title: ''} working experience do you have ?`}
                            label ={`How many years of ${props.job.data ? props.job.data.job[0].title: ''} working experience do you have ?`}
                            name="experience"
                            value={formState.experience}
                            onChange={(event) => handleUserInput(event)}
                        />
                        </div>}
                        {props.filters.salary_expectation > 0 &&<div className="filter-input-salary"> <Singleinputlabel
                            type="number"
                            placeholder ="What is your Monthly Salary Expectation ?"
                            label ="What is your Monthly Salary Expectation ?"
                            name="salary"
                            value={formState.salary}
                            onChange={(event) => handleUserInput(event)}
                        /> 
                        </div>}

                    </div>
                    <div className="form-apply-button">
                        <button type="submit" className="apply-button">Apply Now!</button>
                        <p>By clicking "Apply Now", you agree to our <span>Terms & Conditions </span> and <span>Privacy Policy</span></p>

                    </div>
                </form>

            </div>
        </div>
    )
}