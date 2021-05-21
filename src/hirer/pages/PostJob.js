import React, { useState } from "react";

const PostJob = () => {
  const [step, setStep] = useState(0);
  const previousStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);
  return (
    <>
      <div className="postajob-container"></div>
    </>
  );
};

export default PostJob;
