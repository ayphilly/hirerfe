import { Field } from "formik";

const JobDetailsForm = ({ step, jobTypes, nextStep, box }) => {
  return (
    <div
      style={{
        "--width": `${(step + 1) * 25}%`,
        width: "90%",
        maxWidth: "500px",
        margin: "auto",
      }}
      className= { box < 1 ? "plain-no progress d-flex flex-column " :"plain-card progress d-flex flex-column "}
    >
      <div className="f-24 fw-700">Step {step + 1} of 4 &bull; Job Details</div>
      <p className="mb-8">
        Enter your details to join The #1 Mastermind On Global Communities - No
        Catch - Pay Once, get twelve months full access.
      </p>
      <div>
        <label className="mb-3" htmlFor="jobTitle">
          Job Title
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field
          id="jobTitle"
          name="jobTitle"
          className="mb-8 classic-input w-100"
          type="text"
        />
      </div>

      <div>
        <label className="mb-3" htmlFor="jobType">
          Job Type
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field name="jobType" className="mb-8 classic-input-select w-100" as="select">
          <option value="" hidden disabled></option>
          {jobTypes.map(({ id, type }, idx) => (
            <option key={idx} value={id}>
              {type}
            </option>
          ))}
        </Field>
      </div>

      <div>
        <label className="mb-3" htmlFor="jobType">
          Job Location
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field
          name="jobLocation"
          id="jobLocation"
          className="mb-8 classic-input w-100"
          type="text"
        />
      </div>

      <div className="d-flex justify-content-end">
        <button onClick={() => nextStep()} className="btn btn-primary w-100">
          Continue
        </button>
      </div>
    </div>
  );
};

export default JobDetailsForm;
