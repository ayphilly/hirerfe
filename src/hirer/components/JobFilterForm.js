import { Field, useFormikContext } from "formik";

const JobFilterForm = ({ step, previousStep, nextStep }) => {
  const {
    values: {
      filters: { experience, location, salary_expectation },
    },
  } = useFormikContext();
  return (
    <div
      style={{
        "--width": `${(step + 1) * 25}%`,
        width: "90%",
        maxWidth: "500px",
        margin: "auto",
      }}
      className="plain-card progress d-flex flex-column "
    >
      <div className="f-24 fw-700">Step {step + 1} of 4 &bull; Job Filter</div>
      <p className="mb-8">
        Would you like to ask applicants to give responses to any criteria
        selected below when they apply for your job ? <br />
        <span className="fw-700"> Note :</span> You can only select not more
        than three (3).
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: ".5rem",
        }}
      >
        <div
          onClick={(e) => e.target.firstChild && e.target.firstChild.click()}
          style={{
            padding: ".75rem",
            marginBottom: ".75rem",
            cursor: "pointer",
            backgroundColor: "#F0F8FF",
            border: "1px #70B8FF solid",
            borderRadius: "10px",
          }}
        >
          <Field name="filters.experience" type="checkbox" /> Experience
        </div>
        <div
          onClick={(e) => e.target.firstChild && e.target.firstChild.click()}
          style={{
            padding: ".75rem",
            marginBottom: ".75rem",
            cursor: "pointer",
            backgroundColor: "#F0F8FF",
            border: "1px #70B8FF solid",
            borderRadius: "10px",
          }}
        >
          <Field name="filters.location" type="checkbox" /> Location
        </div>
        <div
          onClick={(e) => e.target.firstChild && e.target.firstChild.click()}
          style={{
            padding: ".75rem",
            marginBottom: ".75rem",
            cursor: "pointer",
            backgroundColor: "#F0F8FF",
            border: "1px #70B8FF solid",
            borderRadius: "10px",
          }}
        >
          <Field name="filters.salary_expectation" type="checkbox" /> Salary
        </div>
      </div>
      {experience && (
        <div>
          <label className="mb-3" htmlFor="yearsExperience">
            How many years experience in{" "}
            <span style={{ color: "#4385c6" }}>Accounting</span>?
          </label>
          <Field
            id="yearsExperience"
            name="filter_values.experience"
            className="mb-8 classic-input w-100"
            type="text"
          />
        </div>
      )}

      {location && (
        <div>
          <label className="mb-3" htmlFor="preferredLocation">
            Preferrably located in ?
          </label>
          <Field
            id="preferredLocation"
            name="filter_values.location"
            className="mb-8 classic-input w-100"
            type="text"
          />
        </div>
      )}
      {salary_expectation && (
        <div>
          <label className="mb-3" htmlFor="salary_expectation">
            Salary Expectation ?
          </label>
          <Field
            id="salary_expectation"
            name="filter_values.salary_expectation"
            className="mb-8 classic-input w-100"
            type="text"
          />
        </div>
      )}

      <div className="d-flex justify-content-end">
        <button
          onClick={() => previousStep()}
          className={"btn btn-dark btn-secondary mr-4"}
        >
          Back
        </button>

        <button onClick={() => nextStep()} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default JobFilterForm;
