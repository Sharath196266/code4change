import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

const Step2_Team = ({ nextStep, prevStep, handleChange, values }) => {
  const [loading, setLoading] = useState(false);
  const [numMembers, setNumMembers] = useState(values.numMembers || 2);
  const formRef = useRef(null); // ⬅️ For form validation

  useEffect(() => {
    const updatedMembers = Array.from({ length: numMembers }, (_, i) => values.members?.[i] || {});
    handleChange("members", updatedMembers);
  }, [numMembers]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  

  const handleInputChange = (index, field, value) => {
    const updatedMembers = [...(values.members || [])];
    updatedMembers[index] = { ...(updatedMembers[index] || {}), [field]: value };
    handleChange("members", updatedMembers);
  };

  const handleNumMembersChange = (e) => {
    const num = Math.min(Math.max(parseInt(e.target.value), 1), 4);
    setNumMembers(num);
    handleChange("numMembers", num);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formRef.current.checkValidity()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        nextStep();
      }, 1000);
    } else {
      formRef.current.reportValidity();
    }
  };

  return (
    <>
      <Navbar loggedIn />
      <div style={styles.container}>
        <h2 style={styles.heading}>Step 2: Team Information</h2>

        <form ref={formRef} style={styles.form} onSubmit={handleNext}>
          <label style={styles.label}>Team Name</label>
          <input
            type="text"
            style={styles.input}
            value={values.teamName || ""}
            onChange={(e) => handleChange("teamName", e.target.value)}
            placeholder="Enter your team name"
            required
          />

          <label style={styles.label}>Number of Members (1–4)</label>
          <select
            style={{ ...styles.input, height: 50 }}
            value={numMembers}
            onChange={(e) => handleNumMembersChange({ target: { value: e.target.value } })}
            required
          >{console.log("no"+values.numMembers)}
            {[1, 2, 3].map((num) => (
              <option key={num} value={num}>
                {num+1} Members
              </option>
            ))}
          </select>

          {[...Array(numMembers)].map((_, i) => (
            <div key={i} style={styles.memberBox}>
              <h4 style={styles.memberHeading}>👤 Member {i + 2}</h4>

              <label style={styles.label}>Name</label>
              <input
                type="text"
                style={styles.input}
                value={values.members?.[i]?.name || ""}
                onChange={(e) => handleInputChange(i, "name", e.target.value)}
                placeholder="Full name"
                required
              />

              <label style={styles.label}>Phone Number</label>
              <input
                type="tel"
                style={styles.input}
                value={values.members?.[i]?.phone || ""}
                onChange={(e) => handleInputChange(i, "phone", e.target.value)}
                placeholder="10-digit phone number"
                pattern="[0-9]{10}"
                required
              />

              <label style={styles.label}>GitHub Profile</label>
              <input
                type="url"
                style={styles.input}
                value={values.members?.[i]?.github || ""}
                onChange={(e) => handleInputChange(i, "github", e.target.value)}
                placeholder="https://github.com/username"
                required
              />{console.log(values.members)}

            </div>
          ))}

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
    marginTop: "100px",
    padding: 30,
    backgroundColor: "rgb(207, 220, 252)",
    minHeight: "100vh",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
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
  },
  memberBox: {
    backgroundColor: "#f5faff",
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
  },
  memberHeading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "600",
    color: "#333",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 30,
  },
  nextBtn: {
    backgroundColor: "#1976d2",
    color: "#fff",
    padding: "14px 28px",
    fontSize: 16,
    border: "none",
    borderRadius: 8,
    fontWeight: "bold",
    cursor: "pointer",
  },
  backBtn: {
    backgroundColor: "#6c757d",
    color: "#fff",
    padding: "14px 20px",
    fontSize: 16,
    border: "none",
    borderRadius: 8,
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Step2_Team;
