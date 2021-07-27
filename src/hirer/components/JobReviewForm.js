const JobReviewForm = ({step, submitForm, setStep}) => {
  return (
    <div
      style={{
        "--width": `${(step + 1) * 25}%`,
        width: "90%",
        maxWidth: "500px",
      }}
      className="plain-card progress d-flex flex-column "
    >
      <div className="f-24 fw-700">
        Step {step + 1} of 4 &bull; Job Details
      </div>
      <p className="mb-8">
        Enter your details to join The #1 Mastermind On Global Communities - No
        Catch - Pay Once, get twelve months full access.
      </p>
      <div>
        <label className="mb-3" htmlFor="jobTitle">
          Job Title
          <span style={{ color: "red" }}>*</span>
        </label>
      </div>

      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary w-100">Submit Form</button>
      </div>
    </div>
  );
};

export default JobReviewForm;
