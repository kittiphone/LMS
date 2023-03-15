import React, { useState } from 'react';

const steps = [
  { title: 'Register' },
  { title: 'Choose plan' },
  { title: 'Purchase' },
  { title: 'Receive product' }
];

const FormWithSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="max-w-md mx-auto">
      <ul className="steps steps-vertical lg:steps-horizontal">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`step ${currentStep === index ? 'step-primary' : ''}`}
          >
            {step.title}
          </li>
        ))}
      </ul>

      <form>
        {/* Render form inputs based on the current step */}
        {currentStep === 0 && (
          <>
            <label htmlFor="name">Name:</label>
            <input type="text" className='input input-bordered input-primary w-full max-w-xs' name="name" id="name" />
          </>
        )}
        {currentStep === 1 && (
          <>
            <label htmlFor="plan">Choose a plan:</label>
            <select name="plan" id="plan">
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
            </select>
          </>
        )}
        {currentStep === 2 && (
          <>
            <label htmlFor="credit-card">Credit card number:</label>
            <input type="text" name="credit-card" id="credit-card" />
          </>
        )}
        {currentStep === 3 && (
          <>
            <p>Thank you for your purchase!</p>
          </>
        )}

        {/* Render previous and next buttons based on the current step */}
        <div className="mt-8 flex justify-between">
          {currentStep > 0 && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handlePreviousStep}
            >
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNextStep}
            >
              Next
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormWithSteps;
