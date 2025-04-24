import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";

const Step3_Idea = ({ nextStep, prevStep, handleChange, handleFileChange, values }) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null); 


  const handleNext = (e) => {
    e.preventDefault();
    if (formRef.current.checkValidity()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        nextStep();
      }, 2000);
    } else {
      formRef.current.reportValidity(); 
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  

  return (
    <>
      <Navbar loggedIn />
      <div style={styles.container}>
        <h2 style={styles.heading}>💡 Step 3: Project Idea Details</h2>

        <form ref={formRef} style={styles.form} onSubmit={handleNext}>
          {/* Track */}
          <label style={styles.label}>Track Selected:</label>
          <select
            style={{ ...styles.input, color: "black", backgroundColor: "#f9f9f9", height: 50, cursor: "pointer" }}
            value={values.track || ""}
            onChange={(e) => handleChange("track",e.target.value)}
            required
          >
            <option value="" disabled>Select a track</option>
            <option value="HealthTech">🏥 HealthTech</option>
            <option value="EdTech">📚 EdTech</option>
            <option value="AgriTech">🌾 AgriTech</option>
            <option value="FinTech">💸 FinTech</option>
            <option value="Robotics/Iot & Mobility">🤖 Robotics/IoT & Mobility</option>
            <option value="Sustainability">🌱 Sustainability</option>
          </select>

          {/* Project Name */}
          <label style={styles.label}>Project Idea Name:</label>
          <input
            type="text"
            style={styles.input}
            value={values.idea || ""}
            onChange={(e) => handleChange("idea", e.target.value)}
            required
            placeholder="Enter project name"
          />

          {/* Description */}
          <label style={styles.label}>Project Description:</label>
          <textarea
            style={{ ...styles.input, minHeight: "120px", resize: "vertical" }}
            value={values.description || ""}
            onChange={(e) => handleChange("description", e.target.value)}
            required
            placeholder="Briefly describe your idea..."
          />

          {/* File Upload */}
          <label style={styles.label}>Upload PPT File (Optional, but submitting it increases your chances of being selected):</label>
          <input
              type="file"
              accept=".ppt,.pptx,.pdf"
              onChange={(e) => handleFileChange(e, "ppt")}
              style={styles.input}
            />
          {/* accept=".ppt,.pptx,.pdf" */}
          {/* Buttons */}
          <div style={styles.buttonRow}>
            <button type="button" onClick={prevStep} style={styles.backBtn}>⬅ Back</button>
            <button type="submit" style={styles.nextBtn} disabled={loading}>
              {loading ? "Loading..." : "Next ➡"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

const styles = {
  container: {
    marginTop: "120px",
    padding: "30px",
    backgroundColor: "rgb(207, 220, 252)",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  form: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 14,
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    maxWidth: 700,
    margin: "0 auto",
  },
  label: {
    fontWeight: "600",
    display: "block",
    marginBottom: 6,
    marginTop: 20,
    fontSize: 15,
    color: "#444",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 8,
    border: "1px solid #ccc",
    marginBottom: 5,
    fontSize: 16,
    outline: "none",
    transition: "border-color 0.2s",
  },
  nextBtn: {
    backgroundColor: "#1976d2",
    color: "#fff",
    padding: "14px 28px",
    border: "none",
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "30px",
    display: "inline-block",
    transition: "background-color 0.2s",
  },
  backBtn: {
    backgroundColor: "#6c757d",
    color: "#fff",
    padding: "14px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "30px",
    display: "inline-block",
    transition: "background-color 0.2s",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },
};

export default Step3_Idea;
