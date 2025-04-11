import React from "react";
import Navbar from "../components/Navbar";

const Step1_Personal = ({ values, handleChange, nextStep, skipToPayment }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.event === "Quiz") {
      skipToPayment(); // Go directly to payment if Quiz
    } else {
      nextStep(); // Continue to team details (Step 2)
    }
  };

  return (
    <>
      <Navbar loggedIn />
      <div style={styles.container}>
        <h2 style={styles.heading}>Step 1: Personal Details</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Full Name */}
          <label style={styles.label}>Full Name:</label>
          <input
            type="text"
            value={values.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            required
            style={styles.input}
            placeholder="Enter your full name"
          />

          {/* Email */}
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            style={styles.input}
            placeholder="example@email.com"
          />

          {/* Phone */}
          <label style={styles.label}>Phone Number:</label>
          <input
            type="tel"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            style={styles.input}
            placeholder="10-digit phone number"
          />

          {/* College */}
          <label style={styles.label}>College Name:</label>
          <input
            type="text"
            value={values.college}
            onChange={(e) => handleChange("college", e.target.value)}
            required
            style={styles.input}
            placeholder="Your college name"
          />

          {/* City */}
          <label style={styles.label}>City:</label>
          <input
            type="text"
            value={values.city}
            onChange={(e) => handleChange("city", e.target.value)}
            required
            style={styles.input}
            placeholder="City you are from"
          />

          {/* GitHub Profile */}
          <label style={styles.label}>GitHub Profile (optional):</label>
          <input
            type="url"
            value={values.github}
            onChange={(e) => handleChange("github", e.target.value)}
            style={styles.input}
            placeholder="https://github.com/your-username"
          />

          {/* Event Selection */}
          <label style={styles.label}>Event:</label>
          <select
            value={values.event}
            onChange={(e) => handleChange("event", e.target.value)}
            required
            style={{ ...styles.input, backgroundColor: "#f9f9f9", cursor: "pointer" }}
          >
            <option value="">-- Select an Event --</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Quiz">Quiz</option>
          </select>

          {/* Submit Button */}
          <button type="submit" style={styles.nextButton}>
            Next ➡
          </button>
        </form>
      </div>
    </>
  );
};

// 💅 Styles
const styles = {
  container: {
    marginTop: "80px",
    padding: "30px",
    backgroundColor: "rgb(207, 220, 252)",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    textAlign: "center",
    color: "#333",
  },
  form: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  label: {
    fontWeight: "600",
    display: "block",
    marginBottom: "6px",
    marginTop: "20px",
    fontSize: "15px",
    color: "#444",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "5px",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  nextButton: {
    backgroundColor: "#1976d2",
    color: "#fff",
    padding: "14px 28px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "30px",
    display: "block",
    marginLeft: "auto",
    transition: "background-color 0.2s",
  },
};

export default Step1_Personal;
