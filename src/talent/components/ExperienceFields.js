import React from "react";

const ExperienceFields = () => {
  return (
    <>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          Job Title
          <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          placeholder="Enter your job title"
          className="classic-input w-100"
        />
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          Company
          <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          placeholder="Enter the name of the company you worked at"
          className="classic-input w-100"
        />
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          Location - Nigeria
          <span style={{ color: "red" }}>*</span>
        </label>
        <select className="classic-input w-100" type="text">
          <option selected disabled hidden>
            Select the state you schooled in
          </option>
        </select>
      </div>
      <div className="fw-600 f-24 py-4">From</div>
      <div className="d-flex">
        <div className="mr-4 w-100">
          <div className="form-group mb-8">
            <label className="d-block mb-2 f-18 fw-600" htmlFor="firstName">
              Month
              <span style={{ color: "red" }}>*</span>
            </label>
            <select className="classic-input w-100" type="text">
              <option selected disabled hidden>
                Select your month
              </option>
            </select>
          </div>
        </div>
        <div className="ml-4 w-100">
          <div className="form-group mb-8">
            <label className="d-block mb-2 f-18 fw-600" htmlFor="firstName">
              Year
              <span style={{ color: "red" }}>*</span>
            </label>
            <select className="classic-input w-100" type="text">
              <option selected disabled hidden>
                Select your year
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-18 fw-600" htmlFor="firstName">
          Job Description
          <span style={{ color: "red" }}>*</span>
        </label>
        <textarea rows={10} className="mb-8 classic-input w-100" type="text" />
      </div>
    </>
  );
};

export default ExperienceFields;
