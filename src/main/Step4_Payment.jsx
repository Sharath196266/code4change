import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { submitFormData } from "../submitForm";

// 📷 Import images properly
import QR_Hackathon from "../assets/GooglePay_QR_600.png";
import QR_Quiz from "../assets/GooglePay_QR _50.png";

const Step4_Payment = ({ values, handleChange, handleFileChange, submitForm, prevStep }) => {
  const [showPreview, setShowPreview] = useState(false);
  const isHackathon = values.event === "Hackathon";

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  
    // ⬆️ Scroll to top after state is updated
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // slight delay to let DOM update
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  const finalSubmit = async () => {
    const response = await submitFormData(values);
    if (response.success) {
      alert("✅ Form submitted successfully!");
      // You can reset form or redirect here
    } else {
      alert("❌ Submission failed: " + response.message);
    }
  };

  const paymentDetails = {
    Hackathon: {
      amount: 600,
      upiId: "skysharu68@oksbi | ₹600",
      qrCode: QR_Hackathon,
    },
    Quiz: {
      amount: 50,
      upiId: "skysharu68@oksbi | ₹50",
      qrCode: QR_Quiz,
    },
  };

  const { amount, upiId, qrCode } = paymentDetails[values.event] || {};

  return (
    <>
      <Navbar loggedIn />
      <div style={styles.container}>
        <button onClick={prevStep} style={styles.backButton}>⬅ Back</button>
        <h2 style={styles.heading}>Step 4: Payment</h2>

        {showPreview ? (
          <>
            <h3 style={styles.previewTitle}>🧾 Preview Your Submission</h3>
            <div style={styles.previewBox}>
            {Object.entries(values).map(([key, val]) => {
              if (!isHackathon && ["members", "track", "ppt", "idea", "description","teamName"].includes(key)) {
                return null;
              }
              if(key === "numMembers"){
                return(
                <div key={key} style={styles.previewRow}>
                    <strong style={styles.keyLabel}>Team Size:</strong>
                    <span style={styles.valueText}>{val+1}</span>
                  </div>)
              }
              if (key === "ppt" && val instanceof File) {
                return (
                  <div key={key} style={styles.previewRow}>
                    <strong style={styles.keyLabel}>Idea File:</strong>
                    <span style={styles.valueText}>{val.name}</span>
                  </div>
                );
              }
              if (key === "paymentProof" && val instanceof File) {
                return (
                  <div key={key} style={styles.previewRow}>
                    <strong style={styles.keyLabel}>Payment Screenshot:</strong>
                    <span style={styles.valueText}>{val.name}</span>
                  </div>
                );
              }
              if (key === "members" && Array.isArray(val)) {
                return (
                  <div key={key} style={{ marginBottom: "20px" }}>
                    <strong style={styles.keyLabel}>Team Members:</strong>
                    <div style={styles.memberCardsWrapper}>
                      {val.map((member, idx) => (
                        <div key={idx} style={styles.memberCard}>
                          <h4 style={styles.memberTitle}>👤 Member {idx + 1}</h4>
                          <p><strong>Name:</strong> {member.name || "N/A"}</p>
                          <p><strong>Phone:</strong> {member.phone || "N/A"}</p>
                          <p>
                            <strong>GitHub:</strong>{" "}
                            {member.github ? (
                              <a href={member.github} target="_blank" rel="noopener noreferrer">
                                {member.github}
                              </a>
                            ) : (
                              "N/A"
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // For everything else
              return (
                <div key={key} style={styles.previewRow}>
                  <strong style={styles.keyLabel}>{key.replace(/([A-Z])/g, " $1")}:</strong>
                  <span style={styles.valueText}>{typeof val === "string" ? val : JSON.stringify(val)}</span>
                  
                </div>
              );
            })}

          </div>

            <div style={styles.feeNote}>
              <p><strong>Entry Fee:</strong> ₹{amount}</p>
              {isHackathon ? (
                <p style={{ color: "green" }}>✅ *Refundable only if not selected*</p>
              ) : (
                <p style={{ color: "red" }}>❌ *No refund for quiz*</p>
              )}
            </div>

            <button onClick={finalSubmit} style={styles.submitButton}>✅ Confirm & Submit</button>
          </>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <p><strong>Entry Fee:</strong> ₹{amount}</p>

            <div style={styles.qrWrapper}>
              <img src={qrCode} alt="QR Code" width="250" style={styles.qrImage} />
            </div>

            <p><strong>UPI ID:</strong> {upiId}</p>

            <label style={styles.label}>Upload Payment Screenshot:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "paymentProof")}
              required
              style={styles.input}
            />

            <label style={styles.label}>Transaction ID:</label>
            <input
              type="text"
              value={values.transactionId}
              onChange={(e) => handleChange("transactionId", e.target.value)}
              required
              style={styles.input}
              placeholder="Enter transaction ID"
            />

            <button type="submit" style={styles.nextButton}>📤 Preview & Submit</button>
          </form>
        )}
      </div>
    </>
  );
};

const styles = {
  container: {
    marginTop: "100px",
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
    width: "100%",
    transition: "background-color 0.2s",
  },
  submitButton: {
    backgroundColor: "green",
    color: "#fff",
    padding: "14px 28px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "block",
    margin: "20px auto",
  },
  backButton: {
    backgroundColor: "#6c757d",
    color: "#fff",
    padding: "10px 18px",
    fontSize: "14px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "20px",
    marginLeft: "20px",
  },
  qrWrapper: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  qrImage: {
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  previewTitle: {
    fontSize: "22px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  previewBox: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.07)",
    maxWidth: "700px",
    margin: "0 auto",
  },
  previewRow: {
    marginBottom: "12px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  keyLabel: {
    color: "#333",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  valueText: {
    color: "#555",
    wordBreak: "break-word",
  },
  feeNote: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "15px",
  },
  memberCardsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "10px",
  },
  
  memberCard: {
    flex: "1 1 260px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
  },
  
  memberTitle: {
    marginBottom: "10px",
    fontSize: "16px",
    color: "#1976d2",
  },
  
};

export default Step4_Payment;
