import React, { useState } from 'react';
import Step1_Personal from './Step1_Personal';
import Step2_Team from './Step2_Team';
import Step3_Idea from './Step3_Idea';
import Step4_Payment from './Step4_Payment';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    city: '',
    event: '',
    teamName: '',
    members: '',
    github: '',
    ideaTitle: '',
    ideaDesc: '',
    transactionId: '',
    paymentProof: null,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const goToStep = (stepNum) => setStep(stepNum);
  const skipToPayment = () => setStep(4);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [field]: file });
  };

  const submitForm = async () => {
    try {
      console.log("Submitting form data:", formData);

      // 🔁 Here you can connect with Supabase / backend upload
      // await supabase logic (if required)

      alert("🎉 Registration submitted successfully!");
      goToStep(1); // Optionally reset the form
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Step-based rendering
  switch (step) {
    case 1:
      return (
        <Step1_Personal
          nextStep={nextStep}
          skipToPayment={skipToPayment}
          handleChange={handleChange}
          values={formData}
        />
      );

    case 2:
      return (
        <Step2_Team
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );

    case 3:
      return (
        <Step3_Idea
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );

    case 4:
      return (
        <Step4_Payment
          prevStep={formData.event === 'Quiz' ? () => goToStep(1) : prevStep}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          values={formData}
          submitForm={submitForm}
        />
      );

    default:
      return null;
  }
};

export default RegistrationForm;
