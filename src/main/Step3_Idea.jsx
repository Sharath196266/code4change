import React from 'react';
import styles from './formStyles.module.css';

const Step3_Idea = ({ nextStep, prevStep, handleChange, values }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.ideaTitle || !values.ideaDesc) {
      alert("All fields are required!");
      return;
    }
    nextStep();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <button type="button" onClick={prevStep} className={styles.backBtn}>Back</button>

      <div className={styles.formGroup}>
        <label>Idea Title <span className={styles.required}>*</span></label>
        <input
          type="text"
          placeholder="Enter your idea title"
          value={values.ideaTitle}
          onChange={(e) => handleChange('ideaTitle', e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Idea Description <span className={styles.required}>*</span></label>
        <textarea
          placeholder="Describe your idea"
          value={values.ideaDesc}
          onChange={(e) => handleChange('ideaDesc', e.target.value)}
          required
        />
      </div>

      <button type="submit" className={styles.nextBtn}>Next</button>
    </form>
  );
};

export default Step3_Idea;
