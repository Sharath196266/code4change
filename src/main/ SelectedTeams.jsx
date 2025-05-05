import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const hackathonTeams = [
  "100xDevs", "A-Eye Coders", "AlgoManiax", "Algorithm_Avengers", "Bitlegion",
  "BITMINDS", "Code Chefs", "Codemania", "CodeX", "Echo Bytes", "EcoNinjas",
  "Electronauts", "Flare bits", "Group Mystic", "Hackathon_Hackers", "InnoVibe",
  "Log2-Devs", "Mega Byte Minds", "Mission Impossible", "Neural Nexus",
  "Screen warriors", "Tech savvy", "TECH TITANS", "Tech visionaries",
  "Tech Warriors", "TechTrio", "The Hackettes", "UNITY", "UNSTOPPABLES", "ZENITH"
];

const techQuizParticipants = [
  "Sanjana M H", "BINDU C S", "Lakshmi C T", "Ashrith H N", "Abhilash Hs",
  "Brunda T S", "Muskan Fayaz", "Akash C O", "Dhanush Shisanalli", "Vikas Malali"
];

const shadowColors = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(255, 206, 86, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(255, 159, 64, 0.5)',
];

const containerStyle = {
  marginTop: '60px',
  fontFamily: 'Arial, sans-serif',
  padding: '2rem',
  backgroundColor: 'rgba(207, 220, 252, 1)',
  minHeight: '100vh',
};

const sectionTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const cardContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
  gap: '1rem',
};

const getCardStyle = (index) => ({
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '0.6rem',
  fontSize: '0.85rem',
  textAlign: 'center',
  fontWeight: 500,
  wordWrap: 'break-word',
  overflowWrap: 'break-word',
  boxShadow: `0 6px 18px ${shadowColors[index % shadowColors.length]}`,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
});

const hoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
};

const Card = ({ content, index }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{
        ...getCardStyle(index),
        ...(hover ? hoverStyle : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {content}
    </div>
  );
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '1rem',
  marginBottom: '2rem',
  justifyContent: 'center',
};

const buttonStyle = (isActive) => ({
  padding: '0.6rem 1.2rem',
  fontSize: '0.7rem',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: isActive ? '#6366f1' : '#e0e7ff',
  color: isActive ? 'white' : '#1e3a8a',
  fontWeight: '600',
  transition: 'all 0.3s ease',
});

const SelectedTeams = () => {
  const [selection, setSelection] = useState('all'); 

  return (
    <div style={containerStyle}>
      <Navbar />

      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle(selection === 'all')}
          onClick={() => setSelection('all')}
        >
          Show All
        </button>
        <button
          style={buttonStyle(selection === 'hackathon')}
          onClick={() => setSelection('hackathon')}
        >
          Hackathon Only
        </button>
        <button
          style={buttonStyle(selection === 'quiz')}
          onClick={() => setSelection('quiz')}
        >
          TechQuiz Only
        </button>
      </div>

      {selection !== 'quiz' && (
        <div>
          <h1 style={{ ...sectionTitleStyle, color: '#f97316' }}>🚀 Selected Hackathon Teams</h1>
          <div style={cardContainer}>
            {hackathonTeams.map((team, idx) => (
              <Card key={idx} content={team} index={idx} />
            ))}
          </div>
        </div>
      )}

      {selection !== 'hackathon' && (
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ ...sectionTitleStyle, color: '#14b8a6' }}>🧠 Selected TechQuiz Participants</h2>
          <div style={cardContainer}>
            {techQuizParticipants.map((name, idx) => (
              <Card key={idx} content={name} index={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedTeams;
