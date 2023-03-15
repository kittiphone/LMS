import React, { useState } from "react";
import { useParams } from "react-router-dom";
const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plan, setPlan] = useState("");

  const handleStepChange = (step) => setCurrentStep(step);
  const handleNext = () => setCurrentStep(currentStep + 1);
  const handlePrevious = () => setCurrentStep(currentStep - 1);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handlePlanChange = (event) => setPlan(event.target.value);
  const handleOptionChange = (event) => console.log(event.target.value);

  const Course = () => {
    const { courseId } = useParams();
    const courseMessage =
      courseId === "10days"
        ? "10 Days Course"
        : courseId === "30days"
        ? "30 Days Course"
        : "Please enter a valid course";
    return <p>{courseMessage}</p>;
  };

  const disabled = () => {
    const { courseId } = useParams();
    return courseId !== "10days" && courseId !== "30days";
  };

  const renderStep = (stepNumber) => {
    const stepLabels = ["Register", "Choose plan", "Payment"];
    const stepOptions = ["Basic", "Pro", "Premium"];

    return (
      <div className="mt-6">
        <label className="block">
          <span className="text-gray-700">{stepLabels[stepNumber - 1]}</span>
          {stepNumber === 1 && (
            <>
              <div class="grid md:grid-cols-2 gap-4 w-full">
                <div>
                  <label
                    htmlFor="email"
                    class="block text-sm font-medium text-gray-700">
                   Email
                  </label>
                  <input
                    type="email"
                    class="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
            </>
          )}
          {stepNumber === 2 && (
            <select
              className="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              value={plan}
              onChange={handlePlanChange}
            >
              {stepOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          )}
          {stepNumber === 3 && (
            <select
              className="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
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
            <h1 className="card-title">
              <Course />
            </h1>
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
                <div className="ml-auto">
                  <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    disabled={disabled()}
                  >
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
