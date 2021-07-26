const JobDescForm = ({ step, previousStep }) => {
  return (
    <div
      style={{
        "--width": `${(step + 1) * 20}%`,
        width: "90%",
        maxWidth: "500px",
      }}
      className="plain-card progress d-flex flex-column "
    >
      <div className="f-24 fw-700">Step {step + 1} of 5 &bull; Description</div>
      <p className="mb-8">
        Enter your details to join The #1 Mastermind On Global Communities - No
        Catch - Pay Once, get twelve months full access.
      </p>
      <div>
        <label className="mb-3" htmlFor="salary">
          Salary
          <span style={{ color: "red" }}>*</span>
        </label>
        <input
          id="salary"
          name="salary"
          className="mb-8 classic-input w-100"
          type="number"
        />
      </div>

      <div>
        <label className="mb-3" htmlFor="jobType">
          Job Description
          <span style={{ color: "red" }}>*</span>
        </label>
        <textarea rows={5} className="mb-8 classic-input w-100" type="text" />
      </div>

      <div className="d-flex justify-content-end">
        <button onClick={()=>previousStep()} className={"btn btn-dark btn-secondary mr-4"}>Back</button>

        <button className="btn btn-primary">Next</button>
      </div>
    </div>
  );
};

export default JobDescForm;
