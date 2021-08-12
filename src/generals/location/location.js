
import "./location.scss"
import { useState} from "react"
import { myStates } from "../../constants";


const Singleinputlocation = (props) => {

    const [state, setState] = useState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: ""
    })


    var onChange = e => {

        const userInput = e.currentTarget.value;
        const filteredResults = myStates.filter(
          suggestion => {
              return suggestion.name.toLowerCase().indexOf(userInput.toLowerCase() ) > -1
            }
        );

        const filteredSuggestions = filteredResults.map((result, index) => {
            return result.name
        })
        setState({
          activeSuggestion: 0,
          filteredSuggestions,
          showSuggestions: true,
          userInput: e.currentTarget.value
        });
        
        props.handleUserLocation(userInput);
        
    };
    var onClick = e => {
        setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText
        });
        props.handleUserLocation(e.currentTarget.innerText);
    };
    var onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = state;
    
        // User pressed the enter key
        if (e.keyCode === 13) {
          setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
          });
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
    
          setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
    
          setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    let suggestionsListComponent;

    if (state.showSuggestions && state.userInput) {
      if (state.filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {state.filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === state.activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

  return (
    <div className="location-input">
      <label> {props.label} Location </label>
      <p>My Location</p>
      <div
        className="location-input-inner"
        style={{
        //   position: "relative",
        //   display: "inline-block",
          width: 100 + "%",
        }}
      >
        <input
        //   type={props.type}
        //   name={props.name}
        //   placeholder={props.placeholder}
        //   style={{
        //     width: props.width + "px",
        //     marginBottom: 10,
        //     border: props.error ? "1px solid red" : "",
        //     backgroundColor: props.error ? "#FFEBEB" : "",
        //   }}
        //   onChange={props.onChange}
            type="text"
            name={props.name}
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => onKeyDown(e)}
            value={props.value}
            placeholder={props.placeholder}
        />
        {suggestionsListComponent}
        
      </div>
      <p style={{ color: "red", height: 5, width: 100 + "%" }}>
        
        {props.error ? props.error : " "}
      </p>
    </div>
  );
};
export default Singleinputlocation;
