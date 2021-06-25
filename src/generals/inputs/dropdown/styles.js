import styled from "styled-components";

export const DropdownWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items:flex-start;
  justify-content: flex-start;
  backgroundColor: black;
  // width:fit-content;
  text-align: left;
  // margin:0;
  height: fit-content;
  width:100%;

  @media screen and (max-width: 600px) {
    width: 95%!important;
    // margin-left: 10px !important;
    // background-color: black !important;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%!important;
    // margin-left: 10px !important;

  }
  @media (min-width: 64em) { 

    width: 95%!important;
    // margin-left: 10px !important;

  }
`;

export const StyledSelect = styled.select`

  backgroundColor: red;
  // width:100%;
  margin-bottom: 1rem;
  height: 60px;
  background-color: #F9F8F9;
  border: 1px solid #EAEAEA;
  // box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  display:inline;
  padding-left:1em;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 15px;
  -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;  

  @media screen and (max-width: 1200px) {
    width: 100% !important;
    // background-color: black !important; 
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%!important;

  }
  @media screen and (max-width: 800px) {
    width: 100% !important;
    // background-color: black !important;
    
  }
  @media (min-width: 64em) { 

    width: 100% !important;

  }
  @media screen and (max-width: 600px) {
    width: 100% !important;
    
    
  }
  @media screen and (max-width: 450px) {
    width: 100% !important;
    // background-color: black !important;
    
  }
  
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  // margin-bottom: .6rem;
  height: 30px;
`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  border: solid 2px blue;
  padding: 0.5rem;
`;
