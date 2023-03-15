import React, { useState } from "react";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = (stepNumber) => {
    const stepLabels = ["Register", "Choose plan", "Payment"];
    const stepOptions = ["Basic", "Pro", "Premium"];

    const handleOptionChange = (event) => {
      console.log(event.target.value);
    };
    return (
      <div className="mt-6">
        <label className="block">
          <span className="text-gray-700">{stepLabels[stepNumber - 1]}</span>
          {stepNumber === 1 && (
            <>
              <input
                type="email"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              />
              <input
                type="password"
                className="mt-4 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              />
            </>
          )}
          {stepNumber === 2 && (
            <select
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              onChange={handleOptionChange}
            >
              {stepOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          )}
          {stepNumber === 3 && (
            <select
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              onChange={handleOptionChange}
            >
              {stepOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          )}
        </label>
      </div>
    );
  };

  return (
    <div className="bg-white px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="card lg:card-side bg-base-100 shadow-xl">

          <div className="card-body">
          <h1 className="card-title">Card title!</h1>
            <div className="steps">
              {["Register", "Choose plan", "Payment"].map((label, index) => (
                <div
                  key={label}
                  className={`step ${
                    currentStep >= index + 1 ? "step-primary" : "step"
                  }`}
                  onClick={() => handleStepChange(index + 1)}
                >
                  {label}
                </div>
              ))}
            </div>

            {renderStep(currentStep)}
            <div className="flex justify-between">
              {currentStep > 1 && (
                <div>
                  <button className="btn btn-primary" onClick={handlePrevious}>
                    Previous
                  </button>
                </div>
              )}
              {currentStep < 3 && (
                <div>
                  <button className="btn btn-primary" onClick={handleNext}>
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
