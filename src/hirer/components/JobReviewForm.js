import { useFormikContext } from "formik";
import React from "react";

const JobReviewForm = ({ step, setStep, box }) => {
  const { values } = useFormikContext();
  const { jobTitle, jobLocation, jobType, jobDescription, jobSalary } = values;
  console.log(values);
  return (
    <div
      style={{
        "--width": `${(step + 1) * 25}%`,
        width: "90%",
        maxWidth: "500px",
        margin: "auto",
      }}
      className={ box == false ? "plain-no progress d-flex flex-column " :"plain-card progress d-flex flex-column "}
    >
      <div className="f-24 fw-700">Step {step + 1} of 4 &bull; Job Details</div>
      <p className="mb-8">
        Enter your details to join The #1 Mastermind On Global Communities - No
        Catch - Pay Once, get twelve months full access.
      </p>
      <div className="review">
        <div className="mb-2 review-mini">Job Title</div>
        <div className="d-flex justify-content-between">
          <span>{jobTitle}</span>
          <span className="review-edit" onClick={() => setStep(0)}>
            Edit
          </span>
        </div>
      </div>
      <div className="review">
        <div className="mb-2 review-mini">Job Type</div>
        <div className="d-flex justify-content-between">
          <span>{jobType}</span>
          <span className="review-edit" onClick={() => setStep(0)}>
            Edit
          </span>
        </div>
      </div>
      <div className="review">
        <div className="mb-2 review-mini">Salary</div>
        <div className="d-flex justify-content-between">
          <span>{jobSalary}</span>
          <span className="review-edit" onClick={() => setStep(1)}>
            Edit
          </span>
        </div>
      </div>
      <div className="review">
        <div className="mb-2 review-mini">Job Description</div>
        <div className="d-flex justify-content-between">
          <div>
            {jobDescription.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="review">
        <div className="mb-2 review-mini">Job Location</div>
        <div className="d-flex justify-content-between">
          <span>{jobLocation}</span>
          <span className="review-edit" onClick={() => setStep(0)}>
            Edit
          </span>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary w-100">
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default JobReviewForm;
