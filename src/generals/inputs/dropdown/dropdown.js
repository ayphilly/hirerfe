import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
  
} from "./styles.js";

export function Dropdown(props) {
  return (
      <DropdownWrapper>
          <StyledLabel htmlFor="services">{props.formLabel}</StyledLabel>
            <StyledSelect id={props.id} name={props.name} value={props.value} action={props.action} onChange={props.onChange} style={{width: props.width +'px'}}>
                {props.children}
            </StyledSelect>

      </DropdownWrapper>
    
  );
}

export function Option(props) {
  return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
}
