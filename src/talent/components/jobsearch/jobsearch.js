import "./jobsearch.scss"
import Singleinput from "../../../generals/inputs/singleinput"
import { useState} from "react";
import Singleinputlocation from "../../../generals/location/location";
const Jobsearch = (props)=> {
    
    const [formState, setForm ] = useState({
        jobtitle: '',
        location: ''
       
    })
    const handleUserInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
       setForm({...formState,[name]:value});
       
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.myFunction(props.formState.jobtitle, props.formState.location);
    }
    return (
            <div className="jobsearch-container">

                <div className="jobsearch-inner">
                    <form onSubmit={handleSubmit} className="job-search-form">
                        <div className="form-details-search">
                            <div className="search-title">
                                <Singleinput
                                    type="text"
                                    placeholder ="Enter Job title"
                                    label ="What ?"
                                    subtext="Job title"
                                    name="jobtitle"
                                    value={props.formState ? props.formState.jobtitle :''}
                                    onChange={ props.handleUserInput ? (event) => props.handleUserInput(event) : ''}
                                    width={400}
                                
                                ></Singleinput>
                            </div>
                            <div className="search-location">
                                {/* <Singleinput
                                    type="text"
                                    placeholder ="enter city name"
                                    label ="Where ?"
                                    subtext="city"
                                    name="location"
                                    value={props.formState ? props.formState.location :''}
                                    onChange={ props.handleUserInput ? (event) => props.handleUserInput(event) : ''}
                                
                                ></Singleinput> */}
                                <Singleinputlocation

                                    label ="Where ?"
                                    subtext="Enter State"
                                    name="location"
                                    value={props.formState ? props.formState.location :''}
                                    handleUserLocation ={props.handleUserLocation }

                                />

                            </div>
                        </div>
                        <button type="submit" className="job-search-submit" > Search {props.address} </button>
                    </form>

                </div>

        </div>
    )
}

export default Jobsearch;

//  <div className="form-job">
//                         <label> What ? </label>
//                         <p>Job title, keywords, or company</p>
//                         <input type="text" id="title" name="title"  placeholder="Job title, keywords, or company"></input>
//                     </div>

//                     <div className="form-location">
//                         <label> Where ? </label>
//                         <p>city or postcode</p>
//                         <input type="text" name="location" id="location" placeholder="city or postcode"></input>
//                     </div>
