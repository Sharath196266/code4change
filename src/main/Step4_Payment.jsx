import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { submitFormData } from "../submitForm";

const Step4_Payment = ({ values, handleChange, handleFileChange, submitForm, prevStep }) => {
  const [showPreview, setShowPreview] = useState(false);
  const isHackathon = values.event === "Hackathon";

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const finalSubmit = async () => {
    const response = await submitFormData(values);
    if (response.success) {
      alert("Form submitted successfully!");
      // Optional: reset form or redirect
    } else {
      alert("Submission failed: " + response.message);
    }
  };

  // Event-specific QR code & UPI details
  const paymentDetails = {
    Hackathon: {
      amount: 600,
      upiId: "hackathon@upi",
      qrCode: "/qr-hackathon.png", // Replace with actual path
    },
    Quiz: {
      amount: 50,
      upiId: "quiz@upi",
      qrCode: "/qr-quiz.png", // Replace with actual path
    },
  };

  const { amount, upiId, qrCode } = paymentDetails[values.event] || {};

  return (
    <div style={styles.container}>
        <Navbar loggedIn/>
      <button onClick={prevStep} style={styles.backButton}>⬅ Back</button>
      <h2 style={styles.heading}>Step 4: Payment</h2>

      {showPreview ? (
        <>
          <h3 style={styles.previewTitle}>Preview Your Submission</h3>
          <div style={styles.previewBox}>
            {Object.entries(values).map(([key, val]) => (
              <div key={key} style={styles.previewRow}>
                <strong style={styles.keyLabel}>{key.replace(/([A-Z])/g, " $1")}:</strong>
                <span style={styles.valueText}>{typeof val === "string" ? val : JSON.stringify(val)}</span>
              </div>
            ))}
          </div>

          <div style={styles.feeNote}>
            <p><strong>Entry Fee:</strong> ₹{amount}</p>
            {isHackathon ? (
              <p style={{ color: "green" }}>✅ *This fee is refundable if you're not selected.*</p>
            ) : (
              <p style={{ color: "red" }}>❌ *No refund for quiz registrations.*</p>
            )}
          </div>

          <button onClick={finalSubmit} style={styles.submitButton}>✅ Confirm & Submit</button>
        </>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <p><strong>Entry Fee:</strong> ₹{amount}</p>
          <img src={qrCode} alt="QR Code" width="220" style={{ marginBottom: "1rem" }} />
          <p style={{ marginBottom: "1rem" }}><strong>UPI ID:</strong> {upiId}</p>

          <label style={styles.label}>Upload Payment Screenshot:</label>
          <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "paymentProof")} required style={styles.input} />

          <label style={styles.label}>Transaction ID:</label>
          <input
            type="text"
            value={values.transactionId}
            onChange={(e) => handleChange("transactionId", e.target.value)}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.previewButton}>📤 Preview & Submit</button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    marginTop: "80px",
    backgroundColor: "rgb(207, 220, 252)",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "600px",
  },
  label: {
    fontWeight: "600",
    display: "block",
    marginTop: "15px",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "15px",
  },
  previewTitle: {
    fontSize: "22px",
    marginBottom: "15px",
  },
  previewBox: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  previewRow: {
    marginBottom: "10px",
  },
  keyLabel: {
    color: "#333",
    textTransform: "capitalize",
    marginRight: "10px",
  },
  valueText: {
    color: "#555",
  },
  feeNote: {
    marginBottom: "20px",
  },
  backButton: {
    marginBottom: "15px",
    backgroundColor: "#fff",
    border: "1px solid #888",
    borderRadius: "5px",
    padding: "6px 12px",
    cursor: "pointer",
  },
  previewButton: {
    backgroundColor: "#1976d2",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  submitButton: {
    backgroundColor: "green",
    color: "#fff",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Step4_Payment;
