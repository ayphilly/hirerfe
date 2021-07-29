import { Field } from "formik";

const JobDescForm = ({ step, previousStep, nextStep }) => {
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
      <div className="f-24 fw-700">
        Step {step + 1} of 4 &bull; Job Description
      </div>
      <p className="mb-8">
        Enter your details to join The #1 Mastermind On Global Communities - No
        Catch - Pay Once, get twelve months full access.
      </p>
      <div>
        <label className="mb-3" htmlFor="salary">
          Salary
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field
          id="salary"
          name="jobSalary"
          className="mb-8 classic-input w-100"
          type="number"
        />
      </div>

      <div>
        <label className="mb-3" htmlFor="jobType">
          Job Description
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field
          as="textarea"
          name="jobDescription"
          rows={5}
          className="mb-8 classic-input w-100"
          type="text"
        />
      </div>

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

export default JobDescForm;
