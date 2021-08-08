import { Field } from "formik";
import React from "react";

const EducationFields = () => {
  return (
    <>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          Level of Education
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field
          as="select"
          name="education.level"
          className="classic-input w-100"
          type="text"
        >
          <option value="" selected disabled hidden>
            Select your level of Education
          </option>
          <option value="BEL">Basic Education Level</option>
        </Field>
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          Field of Study
          <span style={{ color: "red" }}>*</span>
        </label>
        <select
          name="education.field"
          className="classic-input w-100"
          type="text"
        >
          <option value="" selected disabled hidden>
            Select your field of study
          </option>
        </select>
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          School
          <span style={{ color: "red" }}>*</span>
        </label>
        <input
          name="education.school"
          type="text"
          placeholder="Enter the name of your school"
          className="classic-input w-100"
        />
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          Location - Nigeria
          <span style={{ color: "red" }}>*</span>
        </label>
        <select
          name="education.location"
          className="classic-input w-100"
          type="text"
        >
          <option selected disabled hidden>
            Select the state you schooled in
          </option>
        </select>
      </div>
      <div className="fw-600 f-24 py-4">From</div>
      <div className="d-flex">
        <div className="mr-4 w-100">
          <div className="form-group mb-8">
            <label className="d-block mb-2 f-18 fw-600">
              Month
              <span style={{ color: "red" }}>*</span>
            </label>
            <select
              name="education.from_month"
              className="classic-input w-100"
              type="text"
            >
              <option selected disabled hidden>
                Select your month
              </option>
            </select>
          </div>
        </div>
        <div className="ml-4 w-100">
          <div className="form-group mb-8">
            <label className="d-block mb-2 f-18 fw-600">
              Year
              <span style={{ color: "red" }}>*</span>
            </label>
            <select
              name="education.from_year"
              className="classic-input w-100"
              type="text"
            >
              <option selected disabled hidden>
                Select your year
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="fw-600 f-24 py-4">To</div>
      <div className="d-flex">
        <div className="mr-4 w-100">
          <div className="form-group mb-8">
            <label className="d-block mb-2 f-18 fw-600">
              Month
              <span style={{ color: "red" }}>*</span>
            </label>
            <select
              name="education.to_month"
              className="classic-input w-100"
              type="text"
            >
              <option selected disabled hidden>
                Select your month
              </option>
            </select>
          </div>
        </div>
        <div className="ml-4 w-100">
          <div className="form-group mb-8">
            <label className="d-block mb-2 f-18 fw-600">
              Year
              <span style={{ color: "red" }}>*</span>
            </label>
            <select
              name="education.to_year"
              className="classic-input w-100"
              type="text"
            >
              <option selected disabled hidden>
                Select your year
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationFields;
