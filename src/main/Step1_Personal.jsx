import React from 'react';
import BackButton from "../components/BackButton";
import Navbar from '../components/Navbar';

const Step1_Personal = ({ nextStep, handleChange, values }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.phone || !values.email || !values.college || !values.branch || !values.address || !values.github) {
      alert("All fields are required!");
      return;
    }
    nextStep();
  };

  return (
    <div>
      <Navbar loggedIn />
      <BackButton />
      <div style={{ overflowY: 'auto', flex: 1, maxHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <div style={styles.pageContainer}>
          <div style={styles.formContainer}>
            {[
              { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Enter your full name' },
              { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
              { label: 'Email', key: 'email', type: 'email', placeholder: 'Enter your email' },
              { label: 'College', key: 'college', type: 'text', placeholder: 'Enter your college name' },
              { label: 'Branch', key: 'branch', type: 'text', placeholder: 'Enter your branch' },
              { label: 'Address', key: 'address', type: 'text', placeholder: 'Enter your address' },
              { label: 'GitHub Profile', key: 'github', type: 'url', placeholder: 'Enter your GitHub profile link' },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key} style={styles.formGroup}>
                <span style={styles.label}>
                  {label} <span style={styles.required}>*</span>
                </span>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={values[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
            ))}
            <button onClick={handleSubmit} style={styles.nextBtn}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1_Personal;
const styles = {
    pageContainer: {
      marginTop: 80,
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '800px',
      width: '100%',
      padding: '10px',
      backgroundColor: 'rgb(207, 220, 252)',
    },
    formContainer: {
      backgroundColor: 'rgb(207, 220, 252)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      width: '100%',
      maxWidth: '800px',
      borderRadius: 10,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth:'600px',
    },
    label: {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 6,
    },
    required: {
      color: 'red',
    },
    input: {
      padding: 12,
      fontSize: 14,
      borderRadius: 6,
      border: '1px solid #a0bce0',
      backgroundColor: 'white',
      color: 'black',
    },
    nextBtn: {
      alignSelf: 'flex-end',
      padding: '10px 16px',
      border: 'none',
      borderRadius: 6,
      fontWeight: 'bold',
      cursor: 'pointer',
      backgroundColor: '#3a64d8',
      color: 'white',
    },
  };
  