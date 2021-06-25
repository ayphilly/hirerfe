import "./changeschedule.scss"
import {Dropdown, Option} from "../../../generals/inputs/dropdown/dropdown"
import CheckBox from "../../../generals/inputs/checkbox"
import {useState, useEffect} from "react"
import {checkboxes} from "../../constants"
export const Changeschedule = (props)=> {

    const [checked, setCheck] = useState("Talent");
    const [checkedItems, setCheckedItems] = useState({});
    const [optionValue, setOptionValue] = useState("");

    var closeBox = (event)=> {
        event.preventDefault();
        props.close();
    }

    const handleCheckboxChange = (event) => {
        
        var name = event.name
        // props.formData.jobType[event.name] = event.checkState;
        setCheckedItems( {
        ...checkedItems,
        [event.name]: event.checkState
        },[event.checkState]);
        
        
    };

    
    const handleSelect = (e) => {
       
        setOptionValue(e.target.value);
       
    };


    return (
        <div className="changeschedule-container">
            <div className="changeschedule-inner">
                <p>Change Schedule</p>
                <p>Set the number of hours in which you will be available</p>
                <form>
                    <div className="form-schedule-time">
                        <div className="schedule-start-time">
                            <Dropdown
                                formLabel="Start Time"
                                buttonText="Send form"
                                onChange={handleSelect}
                                width= {150}
                                name = "starttime"
                            
                                id="starttime"
                            >
                                <Option defaultValue value="Select Range" />
                                <Option value="9" />
                                <Option value="10" />
                                <Option value="11" />
                            </Dropdown>
                            
                        </div>

                        <div className="schedule-end-time">
                            <Dropdown
                                formLabel="End Time"
                                buttonText="Send form"
                                onChange={handleSelect}
                                width= {150}
                                name = "endtime"
                            
                                id="endtime"
                            >
                                <Option defaultValue value="Select Range" />
                                <Option value="9" />
                                <Option value="10" />
                                <Option value="11" />
                            </Dropdown>

                        </div>    
                        

                        
                    </div>

                    <div className="repeat-schedule">
                        <p>Change Availability</p>
                        <p>Set the number of hours in which you will be available</p>
                        <div className="repeat-schedule-inner">
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
                    

                   <div className="form-buttons">
                       <button type="cancel" onClick={ closeBox}> Cancel </button>
                       <button> Change Schedule </button>
                   </div>    
                        
                </form>
            </div>
        </div>
    )
}