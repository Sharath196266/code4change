import React, { useState } from "react";
import Navbar from '../components/Navbar'; // Adjust path as per your folder structure


const Step2_Team = ({ nextStep, prevStep, handleChange, values }) => {
  const [loading, setLoading] = useState(false);
  const [numMembers, setNumMembers] = useState(values.numMembers || 2);

  const handleInputChange = (index, field, value) => {
    const updatedMembers = [...(values.members || [])];
    updatedMembers[index] = {
      ...(updatedMembers[index] || {}),
      [field]: value,
    };
    handleChange("members")(updatedMembers);
  };

  const handleNumMembersChange = (e) => {
    const num = Math.min(Math.max(parseInt(e.target.value), 2), 4);
    setNumMembers(num);
    const updatedMembers = Array.from({ length: num }, (_, i) => values.members?.[i] || {});
    handleChange("numMembers")(num);
    handleChange("members")(updatedMembers);
  };

  const handleNext = () => {
    

    for (let i = 0; i < numMembers; i++) {
      const member = values.members?.[i];
      
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      nextStep();
    }, 2000);
  };

  return (
    <div style={styles.container}>
        <Navbar loggedIn/>
      <h2 style={styles.heading}>👥 Team Information</h2>

      <label style={styles.label}>Team Name</label>
      <input
        type="text"
        style={styles.input}
        value={values.teamName || ""}
        onChange={(e) => handleChange("teamName")(e.target.value)}
        required
      />

      <label style={styles.label}>Number of Members (2–4)</label>
      <input
        type="number"
        style={styles.input}
        value={numMembers}
        min={2}
        max={4}
        onChange={handleNumMembersChange}
      />

      {[...Array(numMembers)].map((_, i) => (
        <div key={i} style={styles.memberBox}>
          <h4 style={styles.memberHeading}>👤 Member {i + 1}</h4>

          <label style={styles.label}>Name</label>
          <input
            type="text"
            style={styles.input}
            value={values.members?.[i]?.name || ""}
            onChange={(e) => handleInputChange(i, "name", e.target.value)}
            required
          />

          <label style={styles.label}>Phone Number</label>
          <input
            type="tel"
            style={styles.input}
            value={values.members?.[i]?.phone || ""}
            onChange={(e) => handleInputChange(i, "phone", e.target.value)}
            required
          />

          <label style={styles.label}>GitHub Profile Link</label>
          <input
            type="url"
            style={styles.input}
            value={values.members?.[i]?.github || ""}
            onChange={(e) => handleInputChange(i, "github", e.target.value)}
            required
          />
        </div>
      ))}

      <div style={styles.buttonRow}>
        <button onClick={prevStep} style={styles.backBtn}>
          ⬅ Back
        </button>
        <button onClick={handleNext} style={styles.nextBtn} disabled={loading}>
          {loading ? "Loading..." : "Next ➡"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop:"80px",
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
  memberBox: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "10px",
    marginTop: "1.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  memberHeading: {
    fontSize: "18px",
    marginBottom: "0.5rem",
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

export default Step2_Team;
