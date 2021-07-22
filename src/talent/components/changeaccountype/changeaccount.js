import "./changeaccount.scss";
import RadioButton from "../../../generals/inputs/radiobox";
import { useState } from "react";
export const Changeaccount = (props) => {
  const [checked, setCheck] = useState("Talent");

  var closeBox = (event) => {
    event.preventDefault();
    props.close();
  };

  var radioChangeHandler = (event) => {
    setCheck(event.target.value);
  };

  return (
    <div className="changeaccount-container">
      <div className="changeaccount-inner">
        <p>Change Account Type</p>
        <p>Set the number of hours in which you will be available</p>
        <form>
          <RadioButton
            changed={radioChangeHandler}
            id="talentraadio"
            isSelected={checked === "Talent"}
            label="Job seeker/ Talent (looking for a job)"
            value="Talent"
          />
          <RadioButton
            changed={radioChangeHandler}
            id="hirerradio"
            isSelected={checked === "Hirer"}
            label="Hirer (sourcing candidates, or advertising jobs)"
            value="Hirer"
          />

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
