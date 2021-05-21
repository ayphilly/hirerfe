import React, { useState } from "react";

const PostJob = () => {
  const [step, setStep] = useState(0);
  const previousStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);
  return (
    <>
      <div
        style={{ width: "100%", padding: "100px 0" }}
        className="d-flex flex-column align-items-center"
      >
        <div
          style={{
            backgroundColor: "#fff",
            width: "90%",
            maxWidth: "500px",
            boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          }}
          className="plain-card d-flex flex-column "
        >
          <div className="f-24 fw-700">Step 1 of 4 &bull; Job Title</div>
          <p className="mb-8">
            Enter your details to join The #1 Mastermind On Global Communities -
            No Catch - Pay Once, get twelve months full access.
          </p>
          <label className="mb-3" htmlFor="jobTitle">
            Job Title
            <span style={{ color: "red" }}>*</span>
          </label>
          <input className="mb-8 classic-input" type="text" />
          <button onClick={nextStep} className="btn btn-primary w-100">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PostJob;
