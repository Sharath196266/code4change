import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Step3_Idea = ({ nextStep, prevStep, handleChange, values }) => {
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    handleChange("ppt")(e.target.files[0]);
  };

  const handleNext = () => {
    

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      nextStep();
    }, 2000);
  };

  return (
    <div style={styles.container}>
         <Navbar loggedIn/>
      <h2 style={styles.heading}>💡 Project Idea Details</h2>

      <label style={styles.label}>Track Selected</label>
      <select
        style={styles.input}
        value={values.track || ""}
        onChange={(e) => handleChange("track")(e.target.value)}
        required
      >
        <option value="" disabled>Select a track</option>
        <option value="HealthTech">HealthTech</option>
        <option value="EdTech">EdTech</option>
        <option value="AgriTech">AgriTech</option>
        <option value="Open Innovation">Open Innovation</option>
      </select>

      <label style={styles.label}>Project Idea Name</label>
      <input
        type="text"
        style={styles.input}
        value={values.idea || ""}
        onChange={(e) => handleChange("idea")(e.target.value)}
        required
      />

      <label style={styles.label}>Project Description</label>
      <textarea
        style={{ ...styles.input, minHeight: "120px", resize: "vertical" }}
        value={values.description || ""}
        onChange={(e) => handleChange("description")(e.target.value)}
        required
      />

      <label style={styles.label}>Upload PPT File (Optional)</label>
      <input
        type="file"
        accept=".ppt,.pptx,.pdf"
        onChange={handleFileChange}
        style={{ marginTop: "0.5rem", marginBottom: "1rem" }}
      />

      <div style={styles.buttonRow}>
        <button onClick={prevStep} style={styles.backBtn}>⬅ Back</button>
        <button onClick={handleNext} style={styles.nextBtn} disabled={loading}>
          {loading ? "Loading..." : "Next ➡"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "80px",
    backgroundColor: "rgb(207, 220, 252)",
    padding: "2rem",
    borderRadius: "12px",
    maxWidth: "600px",
    margin: "auto",
    marginBottom: "3rem",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginTop: "1rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "0.6rem",
    marginTop: "0.3rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
  },
  nextBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.7rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  backBtn: {
    backgroundColor: "#6c757d",
    color: "#fff",
    padding: "0.7rem 1.2rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Step3_Idea;
