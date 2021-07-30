import React, { useState } from "react";
import { useEffect } from "react";
import { get, post } from "../../requests";
import * as yup from "yup";
import { Formik, Form } from "formik";
import JobDetailsForm from "../components/JobDetailsForm";
import JobDescForm from "../components/JobDescForm";
import JobFilterForm from "../components/JobFilterForm";
import JobReviewForm from "../components/JobReviewForm";
import { setDashboard } from "../../slices/companySlice"
const initialValues = {
  jobTitle: "",
  jobLocation: "",
  jobType: "",
  jobDescription: "",
  jobSalary: 0,
  filters: {
    experience: false,
    location: false,
    salary_expectation: false,
  },
  filter_values: {
    experience: "",
    location: "",
    salary_expectation: "",
  },
};

let schema = yup.object().shape({
  jobTitle: yup.string().required(),
  jobLocation: yup.string().required(),
  jobType: yup.string().required(),
  jobDescription: yup.string().required(),
  jobSalary: yup.number().required(),
});

const PostJob = () => {
  const [step, setStep] = useState(0);
  const [jobTypes, setJobTypes] = useState([]);

  var getEmpData = async () => {
    try {
        const {data} = await get(`/v1/employer/dashboard`);
        dispatch(setDashboard(data));
        return data;
    } catch (err) {
        console.log(err.message);
    }
  }

  const submitForm = (formData) => {
    console.log(formData);
    const {
      filters,
      filter_values: { experience, location, salary_expectation },
    } = formData;
    // Check Valid, then post
    post("/v1/job/create", {
      title: formData.jobTitle,
      location: formData.jobLocation,
      latitude: "45.49494949",
      longitude: "33.030303",
      type_id: parseInt(formData.jobType),
      salary: "" + formData.jobSalary,
      description: formData.jobDescription,
      filters: {
        ...filters,
      },
      filter_values: {
        ...(filters.experience && { experience }),
        ...(filters.location && { location }),
        ...(filters.salary_expectation && {
          salary_expectation: "" + salary_expectation,
        }),
      },
    })
      .then(() => 
        {
          alert("Job Posted Successfully")
          getEmpData();
        })
      .catch(({ response }) => {
        console.log(response);
        alert("Error, check console!");
      });
  };

  
  

  const previousStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);

  useEffect(() => {
    // Fetch job types
    (async () => {
      const { data: responseData } = await get("/v1/job/types");
      setJobTypes(responseData.data.job_types);
    })();
  }, []);

  const _renderStepContent = (step) => {
    const stepProps = () => ({ step, nextStep, previousStep });
    switch (step) {
      case 0:
        return <JobDetailsForm {...stepProps()} jobTypes={jobTypes} />;
      case 1:
        return <JobDescForm {...stepProps()} />;
      case 2:
        return <JobFilterForm {...stepProps()} />;
      case 3:
        return <JobReviewForm {...stepProps()} setStep={setStep} />;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div
      style={{ width: "100%", padding: "100px 0" }}
      className="d-flex flex-column align-items-center"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => submitForm(values)}
      >
        <Form>{_renderStepContent(step)}</Form>
      </Formik>
    </div>
  );
};

export default PostJob;
