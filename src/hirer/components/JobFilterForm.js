import { Field } from "formik";

const JobFilterForm = ({ step, previousStep, nextStep }) => {
    return (
      <div
        style={{
          "--width": `${(step + 1) * 25}%`,
          width: "90%",
          maxWidth: "500px",
        }}
        className="plain-card progress d-flex flex-column "
      >
        <div className="f-24 fw-700">Step {step + 1} of 4 &bull; Job Filter</div>
        <p className="mb-8">
            Would you like to ask applicants to give responses to any criteria 
            selected below when they apply for your job ? <br/>
           <span className="fw-700"> Note :</span> You can only select not more than three (3).
        </p>
        <div>
          <label className="mb-3" htmlFor="salary">
            How many years experience in <span style={{ color: "#4385c6" }}>Accounting</span>?
          </label>
          <Field
            id="yearsExperience"
            name="yearsExperience"
            className="mb-8 classic-input w-100"
            type="number"
          />
        </div>
  
        <div>
          <label className="mb-3" htmlFor="preferredLocation">
            Preferrably located in ?
          </label>
          <Field id="preferredLocation" name="preferredLocation" className="mb-8 classic-input w-100" type="text" />
        </div>
  
        <div className="d-flex justify-content-end">
          <button onClick={()=>previousStep()} className={"btn btn-dark btn-secondary mr-4"}>Back</button>
  
          <button onClick={()=>nextStep()} className="btn btn-primary">Next</button>
        </div>
      </div>
    );
  };
  
  export default JobFilterForm;
  