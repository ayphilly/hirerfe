import React, { useState } from "react";
import { post } from "../requests";
import EducationFields from "./components/EducationFields";
import ExperienceFields from "./components/ExperienceFields";
import SkillsFields from "./components/SkillsFields";
import UserProfileFields from "./components/UserProfileFields";

const formSteps = [
  {
    title: "User Profile",
  },
  {
    title: "Education",
  },
  {
    title: "Experience",
  },
  {
    title: "Skills",
  },
  {
    title: "Profile Overview",
  },
];

const CreateProfile = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const setField = (field) => {
    setFormData({ ...formData, ...field });
  };
  const previousStep = () => step > 0 && setStep(step - 1);
  const nextStep = () => step < 4 && setStep(step + 1);

  const { title } = formSteps[step];

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/v1/talent/profile", formData);
  };

  return (
    <div
      style={{ width: "95%", padding: "100px 0", margin: "auto" }}
      className="d-flex flex-column align-items-center c-850"
    >
      <div
        style={{
          paddingTop: "65px",
          paddingBottom: "65px",
          "--width": `${(step + 1) * 20}%`,
        }}
        className="plain-card progress progress-bottom d-flex flex-column mb-8"
      >
        <div className="d-flex justify-content-between">
          <div>
            <div className="f-28 fw-600">{title}</div>
            <p>Tell us about yourself.</p>
          </div>
          <div style={{ color: "gray" }} className="f-18">
            Step {step + 1} / 5
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="plain-card mb-8 align-items-stretch"
      >
        {step === 0 && <UserProfileFields setField={setField} />}
        {step === 1 && <EducationFields />}
        {step === 2 && <ExperienceFields />}
        {step === 3 && <SkillsFields />}
      </form>
      {/* Form Nav */}
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
          Continue
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
