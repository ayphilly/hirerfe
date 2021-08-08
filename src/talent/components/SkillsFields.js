import { Field } from "formik";
import React from "react";

const SkillsFields = () => {
  return (
    <>
      <div className="fw-600 f-24 mb-2">Add Your Skills</div>
      <div className="fw-300 f-16 pb-10">
        Add skills that you are pro-efficient in to help you stand out when you
        apply for jobs.
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          Add Skill
        </label>
        <Field
          type="text"
          placeholder="e.g. Microsoft Word"
          className="classic-input w-100"
        />
      </div>
      <div>
        <button
          style={{ width: "auto", height: "auto" }}
          className="btn btn-primary"
        >
          Add Skill
        </button>
      </div>
      <p style={{ color: "gray" }}>
        <span style={{ color: "black" }} className="fw-600 ">
          Tip:
        </span>{" "}
        Recommendation: include 3-5 of your top skills to help you stand out.
      </p>
    </>
  );
};

export default SkillsFields;
