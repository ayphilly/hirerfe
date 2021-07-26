const JobDetailsForm = ({step, jobTypes, nextStep}) => {
  return (
    <div
      style={{
        "--width": `${(step + 1) * 20}%`,
        width: "90%",
        maxWidth: "500px",
      }}
      className="plain-card progress d-flex flex-column "
    >
      <div className="f-24 fw-700">
        Step {step + 1} of 5 &bull; Job Details
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
        <input
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
        <select className="mb-8 classic-input w-100" type="text">
          <option value="" hidden disabled></option>
          {jobTypes.map(({ id, type }, idx) => (
            <option key={idx} value={id}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-3" htmlFor="jobType">
          Job Type
          <span style={{ color: "red" }}>*</span>
        </label>
        <input className="mb-8 classic-input w-100" type="text" />
      </div>

      <div className="d-flex justify-content-end">
        <button onClick={()=>nextStep()} className="btn btn-primary w-100">Continue</button>
      </div>
    </div>
  );
};

export default JobDetailsForm;
