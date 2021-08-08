import { Field } from "formik";
import React from "react";

const ExperienceFields = () => {
  return (
    <>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          Job Title
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field
          type="text"
          placeholder="Enter your job title"
          className="classic-input w-100"
          name="experience.title"
        />
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          Company
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field
          type="text"
          placeholder="Enter the name of the company you worked at"
          className="classic-input w-100"
          name="experience.company"
        />
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          Location - Nigeria
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field as="select" className="classic-input w-100" type="text">
          <option selected disabled hidden>
            Select the state you schooled in
          </option>
          <option value="Lagos">Lagos</option>
        </Field>
      </div>
      <div className="fw-600 f-24 py-4">From</div>
      <div className="d-flex">
        <div className="mr-4 w-100">
          <div className="form-group mb-8">
            <label className="d-block mb-2 f-18 fw-600" htmlFor="firstName">
              Month
              <span style={{ color: "red" }}>*</span>
            </label>
            <Field as="select" className="classic-input w-100" type="text" name="experience.from_month">
              <option selected disabled hidden>
                Select your month
              </option>
              <option value="January">January</option>
            </Field>
          </div>
        </div>
        <div className="ml-4 w-100">
          <div className="form-group mb-8">
            <label className="d-block mb-2 f-18 fw-600" htmlFor="firstName">
              Year
              <span style={{ color: "red" }}>*</span>
            </label>
            <Field as="select" className="classic-input w-100" type="text" name="experience.from_year">
              <option selected disabled hidden>
                Select your year
              </option>
              <option value="2019">2019</option>
            </Field>
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
            <Field
              as="select"
              name="experience.to_month"
              className="classic-input w-100"
              type="text"
            >
              <option selected disabled hidden>
                Select your month
              </option>
              <option value="January">January</option>
            </Field>
          </div>
        </div>
        <div className="ml-4 w-100">
          <div className="form-group mb-8">
            <label className="d-block mb-2 f-18 fw-600">
              Year
              <span style={{ color: "red" }}>*</span>
            </label>
            <Field
              as="select"
              name="experience.to_year"
              className="classic-input w-100"
              type="text"
            >
              <option selected disabled hidden>
                Select your year
              </option>
              <option value="2019">2019</option>
            </Field>
          </div>
        </div>
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-18 fw-600" htmlFor="firstName">
          Job Description
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field
          as="textarea"
          rows={10}
          className="mb-8 classic-input w-100"
          type="text"
          name="experience.description"
        />
      </div>
    </>
  );
};

export default ExperienceFields;
