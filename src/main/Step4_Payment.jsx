import React from 'react';
import styles from './formStyles.module.css';

const Step4_Payment = ({ prevStep, handleChange, values }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.paymentProof) {
      alert("Payment proof is required!");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <button type="button" onClick={prevStep} className={styles.backBtn}>Back</button>

      <div className={styles.formGroup}>
        <label>Upload Payment Proof <span className={styles.required}>*</span></label>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => handleChange('paymentProof', e.target.files[0])}
          required
        />
      </div>

      <button type="submit" className={styles.nextBtn}>Submit</button>
    </form>
  );
};

export default Step4_Payment;
