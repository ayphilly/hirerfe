import React, { useState } from "react";

const CreateProfile = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const setField = (field) => {
    setFormData({ ...formData, ...field });
  };
  const previousStep = () => step > 0 && setStep(step - 1);
  const nextStep = () => step < 1 && setStep(step + 1);
  return (
    <div
      style={{ width: "100%", padding: "100px 0", margin: "auto" }}
      className="d-flex flex-column align-items-center c-700"
    >
      <div
        style={{
          paddingTop: "65px",
          paddingBottom: "65px",
          "--width": `${(step + 1) * 33.33}%`,
        }}
        className="plain-card progress progress-bottom d-flex flex-column mb-8"
      >
        <div className="d-flex justify-content-between">
          <div>
            <div className="f-28 fw-600">User Profile</div>
            <p>Tell us about yourself.</p>
          </div>
          <div className="f-18">Step {step + 1} / 5</div>
        </div>
      </div>
      <div
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
        className="plain-card d-flex justify-content-between"
      >
        <button
          onClick={previousStep}
          className="btn btn-dark btn-secondary mr-4"
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

export default CreateProfile;
