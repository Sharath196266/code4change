import React, { useState } from 'react';
import Step1_Personal from './Step1_Personal';
import Step2_Team from './Step2_Team';
import Step3_Idea from './Step3_Idea';
import Step4_Payment from './Step4_Payment';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    teamName: '',
    members: '',
    ideaTitle: '',
    ideaDesc: '',
    paymentProof: null,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  switch (step) {
    case 1:
      return <Step1_Personal nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Step2_Team nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <Step3_Idea nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 4:
      return <Step4_Payment prevStep={prevStep} handleChange={handleChange} values={formData} />;
    default:
      return null;
  }
};

export default RegistrationForm;
