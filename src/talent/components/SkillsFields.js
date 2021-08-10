import { useFormikContext } from "formik";
import React, { useRef, useState, useEffect } from "react";

const SkillsFields = () => {
  const [skills, setSkills] = useState([]);
  const addSkill = (skill) => setSkills([...skills, skill]);
  const removeSkill = (index) =>
    setSkills(skills.filter((skill, idx) => idx !== index));
  const { setFieldValue } = useFormikContext();
  useEffect(() => setFieldValue("skills", skills), [skills]);

  const ref = useRef();
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
        <div className="d-flex flex-wrap py-2">
          {skills.map((skill, idx) => (
            <span
              style={{
                padding: ".75rem",
                marginBottom: ".75rem",
                marginRight: ".75rem",

                backgroundColor: "#F0F8FF",
                border: "1px #70B8FF solid",
                borderRadius: "10px",
              }}
              key={idx}
            >
              <span className="mr-3">{skill}</span>
              <span
                onClick={() => removeSkill(idx)}
                style={{ cursor: "pointer", color: "gray", userSelect: "none" }}
              >
                X
              </span>
            </span>
          ))}
        </div>
        <input
          ref={ref}
          name="skills"
          type="text"
          placeholder="e.g. Microsoft Word"
          className="classic-input w-100"
        />
      </div>
      <div>
        <button
          onClick={() => {
            const tag = ref.current;
            if (tag.value.length === 0) {
              alert("Enter Something");
              return;
            }
            addSkill(tag.value);
            tag.value = "";
          }}
          style={{ width: "auto", height: "auto" }}
          type="button"
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
