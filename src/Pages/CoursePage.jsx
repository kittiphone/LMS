import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plan, setPlan] = useState("");
  const [formData, setFormData] = useState({});
  const [option1, setoption1] = useState("");

  const handleStepChange = (step) => setCurrentStep(step);
  const handleNext = () => setCurrentStep(currentStep + 1);
  const handlePrevious = () => setCurrentStep(currentStep - 1);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handlePlanChange = (event) => setPlan(event.target.value);
  const handleoption1Change = (event) => setoption1(event.target.value);


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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      plan: plan,
      option1: option1,
    };
    axios.post("http://localhost:3000/user/test", data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  

  const renderStep = (stepNumber) => {
    const stepoption1s = ["Basic", "Pro", "Premium"];
    useEffect(() => {
      console.log(formData);
    }, [formData]);

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mt-6">
            <label className="block">
              <span className="text-gray-700">
           
              </span>
              {stepNumber === 1 && (
                <div class="grid md:grid-cols-2 gap-4 w-full">
                  <div>
                    <label
                      htmlFor="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      FirstName And Lastname
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
                      Village
                    </label>
                    <input
                      type="password"
                      class="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Data of birth
                    </label>
                    <input
                      type="password"
                      class="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="password"
                      class="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <input
                      type="password"
                      class="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Province
                    </label>
                    <input
                      type="password"
                      class="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Tel
                    </label>
                    <input
                      type="password"
                      class="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="password"
                      class="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
              )}
              {stepNumber === 2 && (
                <select
                  className="input mt-1 block w-full border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  value={plan}
                  onChange={handlePlanChange}
                >
                  {stepoption1s.map((option1) => (
                    <option1 key={option1}>{option1}</option1>
                  ))}
                </select>
              )}
              {stepNumber === 3 && (
                <div class="flex justify-between">
                  <select
                    className="input w-4/5 border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 mr-4"
                    onChange={handleoption1Change}
                  >
                    {stepoption1s.map((option1) => (
                      <option1 key={option1}>{option1}</option1>
                    ))}
                  </select>
                  <button
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              )}
            </label>
          </div>
        </div>
      </form>
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
