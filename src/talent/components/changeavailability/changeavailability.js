import "./changeavailability.scss";
import { Dropdown, Option } from "../../../generals/inputs/dropdown/dropdown";
import CheckBox from "../../../generals/inputs/checkbox";
import { useState } from "react";
import { checkboxes } from "../../constants";
export const Changeavailability = (props) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [optionValue, setOptionValue] = useState("");
  console.log(optionValue);
  var closeBox = (event) => {
    event.preventDefault();
    props.close();
  };

  const handleCheckboxChange = (event) => {
    // props.formData.jobType[event.name] = event.checkState;
    setCheckedItems(
      {
        ...checkedItems,
        [event.name]: event.checkState,
      },
      [event.checkState]
    );
  };

  const handleSelect = (e) => {
    setOptionValue(e.target.value);
  };

  return (
    <div className="changeavailability-container">
      <div className="changeavailability-inner">
        <p>Change Availability</p>
        <p>Set the number of hours in which you will be available</p>
        <form>
          <div className="form-availability-time">
            <Dropdown
              formLabel="Start Time"
              buttonText="Send form"
              onChange={handleSelect}
              width={150}
              name="starttime"
              id="starttime"
            >
              <Option defaultValue value="Select Range" />
              <Option value="9" />
              <Option value="10" />
              <Option value="11" />
            </Dropdown>

            <Dropdown
              formLabel="End Time"
              buttonText="Send form"
              onChange={handleSelect}
              width={150}
              name="endtime"
              id="endtime"
            >
              <Option defaultValue value="Select Range" />
              <Option value="9" />
              <Option value="10" />
              <Option value="11" />
            </Dropdown>
          </div>

          <div className="repeat-availability">
            <p>Change Availability</p>
            <p>Set the number of hours in which you will be available</p>
            <div className="repeat-availability-inner">
              {checkboxes.map((item, key) => (
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
            <button type="cancel" onClick={closeBox}>
              {" "}
              Cancel{" "}
            </button>
            <button> Change Password </button>
          </div>
        </form>
      </div>
    </div>
  );
};
