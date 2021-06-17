import React, { useState } from "react";
import { useEffect } from "react";

const formFields = [
  {
    id: "jobTitle",
    label: "Job Title",
  },
  {
    id: "jobLocation",
    label: "Job Location",
  },
  {
    id: "jobType",
    label: "Job Type",
  },
  {
    id: "jobDescription",
    label: "Job Description",
  },
  {
    id: "jobSalary",
    label: "Job Salary",
  },
];
const PostJob = () => {
  const [step, setStep] = useState(0);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobLocation: "",
    jobType: "FT",
    jobDescription: "",
    jobSalary: 0,
  });
  const setField = (field) => {
    setError(false);
    setFormData({ ...formData, ...field });
  };
  const previousStep = () => step > 0 && setStep(step - 1);
  const nextStep = () => step < 4 && setStep(step + 1);

  useEffect(() => {}, []);

  return (
    <>
      <div
        style={{ width: "100%", padding: "100px 0" }}
        className="d-flex flex-column align-items-center"
      >
        <div
          style={{
            "--width": `${(step + 1) * 20}%`,
            width: "90%",
            maxWidth: "500px",
          }}
          className="plain-card progress d-flex flex-column "
        >
          <div className="f-24 fw-700">
            Step {step + 1} of 5 &bull; {formFields[step].label}
          </div>
          <p className="mb-8">
            Enter your details to join The #1 Mastermind On Global Communities -
            No Catch - Pay Once, get twelve months full access.
          </p>
          <label className="mb-3" htmlFor="jobTitle">
            {formFields[step].label}
            <span style={{ color: "red" }}>*</span>
          </label>
          {step === 0 && (
            <input
              value={formData[formFields[step].id]}
              onChange={(e) =>
                setField({ [formFields[step].id]: e.target.value })
              }
              className="mb-8 classic-input"
              type="text"
            />
          )}
          {step === 1 && (
            <input
              value={formData[formFields[step].id]}
              onChange={(e) =>
                setField({ [formFields[step].id]: e.target.value })
              }
              className="mb-8 classic-input"
              type="text"
            />
          )}
          {step === 2 && (
            <select
              value={formData[formFields[step].id]}
              onChange={(e) =>
                setField({ [formFields[step].id]: e.target.value })
              }
              className="mb-8 classic-input"
              type="text"
            >
              <option value="FT">Full Time</option>
              <option value="C">Contract</option>
              <option value="R">Remote</option>
            </select>
          )}
          {step === 3 && (
            <textarea
              rows={5}
              value={formData[formFields[step].id]}
              onChange={(e) =>
                setField({ [formFields[step].id]: e.target.value })
              }
              className="mb-8 classic-input"
              type="text"
            />
          )}
          {step === 4 && (
            <input
              value={formData[formFields[step].id]}
              onChange={(e) =>
                setField({ [formFields[step].id]: e.target.value })
              }
              className="mb-8 classic-input"
              type="text"
            />
          )}
          {error && (
            <div
              style={{ color: "red", marginTop: "-2rem", marginBottom: "1rem" }}
            >
              This field is required!{" "}
            </div>
          )}
          <div className="d-flex justify-content-end">
            <button
              onClick={previousStep}
              className={
                "btn btn-dark btn-secondary mr-4" + ` ${step === 0 && "d-none"}`
              }
            >
              Back
            </button>
            <button
              onClick={() =>
                formData[formFields[step].id] ? nextStep() : setError(true)
              }
              className={"btn btn-primary" + ` ${step === 0 && "w-100"}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostJob;
