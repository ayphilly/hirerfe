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
          <option value="BEL">B-tech</option>
        </Field>
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          Field of Study
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field
          as="select"
          name="education.field"
          className="classic-input w-100"
          type="text"
        >
          <option value="" selected disabled hidden>
            Select your field of study
          </option>
          <option value="B">Computer Science</option>
        </Field>
      </div>
      <div className="form-group mb-8">
        <label className="d-block mb-2 f-16" htmlFor="firstName">
          School
          <span style={{ color: "red" }}>*</span>
        </label>
        <Field
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
        <Field
          as="select"
          name="education.location"
          className="classic-input w-100"
          type="text"
        >
          <option selected disabled hidden>
            Select the state you schooled in
          </option>
          <option value="B">Akure</option>
        </Field>
      </div>
      <div className="fw-600 f-24 py-4">From</div>
      <div className="d-flex">
        <div className="mr-4 w-100">
          <div className="form-group mb-8">
            <label className="d-block mb-2 f-18 fw-600">
              Month
              <span style={{ color: "red" }}>*</span>
            </label>
            <Field
              as="select"
              name="education.from_month"
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
              name="education.from_year"
              className="classic-input w-100"
              type="text"
            >
              <option selected disabled hidden>
                Select your year
              </option>
              <option value="2014">2014</option>
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
              name="education.to_month"
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
              name="education.to_year"
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
    </>
  );
};

export default EducationFields;
