import React, { useEffect, useState } from "react";

const DeadlineBanner = ({ deadline }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!deadline) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = new Date(deadline).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft("⏳ Deadline reached!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${days}d ${hours}h ${minutes}m left`);
    };

    updateCountdown(); // initial call
    const intervalId = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [deadline]);

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div style={styles.banner}>
        <span>⏰ Deadline Countdown: {timeLeft}</span>
        <button style={styles.closeBtn} onClick={handleClose}>X
        </button>
      </div>
    )
  );
};

const styles = {
  banner: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#f44336",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 9999,
  },
  closeBtn: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default DeadlineBanner;
