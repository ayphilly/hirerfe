import React, { useState } from "react";
import { useEffect } from "react";
import { get, post } from "../../requests";
import * as yup from "yup";
import { useFormik } from "formik";
import JobDetailsForm from "../components/JobDetailsForm";
import JobDescForm from "../components/JobDescForm";

const initialValues = {
  jobTitle: "",
  jobLocation: "",
  jobType: "",
  jobDescription: "",
  jobSalary: 0,
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

  const submitForm = () => {
    // Check Valid, then post
    // post("/v1/job/create", {
    //   title: formData.jobTitle,
    //   location: formData.jobLocation,
    //   latitude: "45.49494949",
    //   longitude: "33.030303",
    //   type_id: formData.jobType,
    //   salary: formData.jobSalary,
    //   description: formData.jobDescription,
    // })
    //   .then(() => alert("Job Posted Successfully"))
    //   .catch(({ response }) => {
    //     console.log(response);
    //     alert("Error, check console!");
    //   });
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
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div
      style={{ width: "100%", padding: "100px 0" }}
      className="d-flex flex-column align-items-center"
    >
      {_renderStepContent(step)}
    </div>
  );
};

export default PostJob;
