import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} style={styles.button}>
      <span style={styles.iconContainer}>
        <IoArrowBack size={18} color="white" />
      </span>
      <span style={styles.text}>Back</span>
    </button>
  );
};

// Using a JavaScript object for styles
const styles = {
  button: {
    position: 'fixed',
    top: 100,
    left: 30,
    zIndex: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#3b82f6',
    borderRadius: '9999px', // fully rounded
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 200ms',
    cursor: 'pointer',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '600',
    display: 'none', // Hidden by default for smaller screens
  },
  // Show text on larger screens
  '@media (min-width: 640px)': {
    text: {
      display: 'inline', // Show text on screens larger than 640px
    },
  },
};

export default BackButton;
