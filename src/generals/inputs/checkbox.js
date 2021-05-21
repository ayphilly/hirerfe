import * as React from "react";
import PropTypes from "prop-types";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import {faSquare } from '@fortawesome/free-regular-svg-icons'
import "./checkbox.scss"

const defaultCssClasses = {
  checkBoxClass: "",
  labelClass: "label"
};

export default  class CheckBox extends React.Component {
  constructor(props) {
    super(props);
   
    this.onCheckChanged = this.onCheckChanged.bind(this);
  }

  onCheckChanged(event) {
    const { checked } = this.props;
    event.stopPropagation();

    if (this.props.onChange !== null && this.props.onChange !== undefined) {
      this.props.onChange({
        name: this.props.name,
        checkState: !checked
      });
      // this.props.onChange()
    }
  }

  render() {
    const { checked, name, label, classNames, size } = this.props;

    const icon = checked ? faCheckSquare  : faSquare;
    const classes = Object.assign({}, defaultCssClasses, classNames);

    return (
      <div className={`checkbox ${this.props.className || "padded"}`}>
        <FontAwesomeIcon
          className={classes.checkBoxClass}
          icon={icon}
          onClick={this.onCheckChanged}
          size={size}
        />
        {label && (
          <label
            className={classes.labelClass}
            onClick={this.onCheckChanged}
            dangerouslySetInnerHTML={{ __html: label }}
          />
        )}
        
        <input
          type="checkbox"
          name={name}
          checked={checked || false}
          readOnly
        />
      </div>
    );
  }
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(["", "xs", "sm", "lg", "2x", "3x", "5x", "7x", "10x"]),
  onChange: PropTypes.func.isRequired
};

CheckBox.defaultProps = {
  checked: false,
  label: null,
  size: "lg"
};
