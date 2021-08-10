import "./changeschedule.scss"
import {Dropdown, Option} from "../../../generals/inputs/dropdown/dropdown"
import CheckBox from "../../../generals/inputs/checkbox"
import {useState, useEffect} from "react"
import {checkboxes} from "../../constants"
export const Changeschedule = (props)=> {

    const [checked, setCheck] = useState("");
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
        
        if (event.checkState) {
            props.setDate(event.id);
        }
        
        
    };

    
    const handleSelect = (e) => {
       
        setOptionValue(e.target.value);
        props.setTime(e);
       
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
                                name = "from"
                            
                                id="from"
                            >
                                <Option defaultValue value="Select Range" />
                                <Option value="9" />
                                <Option value="10" />
                                <Option value="11" />
                                <Option value="12" />
                                <Option value="1" />
                                <Option value="2" />
                                <Option value="3" />
                                <Option value="14" />
                                <Option value="5" />
                            </Dropdown>
                            
                        </div>

                        <div className="schedule-end-time">
                            <Dropdown
                                formLabel="End Time"
                                buttonText="Send form"
                                onChange={handleSelect}
                                width= {150}
                                name = "to"
                            
                                id="to"
                            >
                                <Option defaultValue value="Select Range" />
                                <Option value="9" />
                                <Option value="10" />
                                <Option value="11" />
                                <Option value="12" />
                                <Option value="1" />
                                <Option value="2" />
                                <Option value="3" />
                                <Option value="14" />
                                <Option value="5" />
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
                                    id={item.id}
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
                       <button onClick={ closeBox} > Change Schedule </button>
                   </div>    
                        
                </form>
            </div>
        </div>
    )
}