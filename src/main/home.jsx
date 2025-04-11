import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import mainImg from '../assets/code4changelogomain.png';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location]);

  const getImageHeight = () => {
    if (windowWidth <= 480) return 250;
    if (windowWidth <= 768) return 350;
    if (windowWidth <= 1024) return 500;
    return 600;
  };

  const styles = {
    page: {
      backgroundColor: 'rgb(207, 220, 252)',
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden',
    },
    scrollContent: {
      margin: '0 auto',
      paddingTop: '100px',
      paddingBottom: '60px',
      paddingLeft: windowWidth < 768 ? '1rem' : '2rem',
      paddingRight: windowWidth < 768 ? '1rem' : '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3rem',
      maxWidth: 1200,
    },
    mainimg: {
      width: '100%',
      maxWidth: windowWidth < 480 ? 320 : windowWidth < 768 ? 480 : 850,
      height: getImageHeight(),
      objectFit: 'contain',
    },
    sectionBox: {
      backgroundColor: '#ffffff',
      padding: windowWidth <= 480 ? '1rem' : '2rem',
      borderRadius: 18,
      width: '100%',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.07)',
      transition: 'all 0.3s ease-in-out',
    },
    heading: {
      fontSize: windowWidth <= 480 ? 20 : windowWidth <= 768 ? 24 : 28,
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    text: {
      fontSize: windowWidth <= 480 ? 14 : 16,
      lineHeight: 1.7,
      color: '#333333',
      textAlign: 'center',
    },
    sponsorRow: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1.2rem',
    },
    sponsorImg: {
      width: windowWidth <= 480 ? 90 : 130,
      height: 80,
      objectFit: 'contain',
      backgroundColor: '#f4f4f4',
      borderRadius: 10,
      padding: 10,
    },
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.scrollContent}>
        <img src={mainImg} alt="CODE4CHANGE Logo" style={styles.mainimg} />

        <div style={styles.sectionBox} id="sponsors">
          <h2 style={styles.heading}>Sponsored By</h2>
          <div style={styles.sponsorRow}>
            <img src="https://via.placeholder.com/150x80?text=Sponsor+1" alt="Sponsor 1" style={styles.sponsorImg} />
            <img src="https://via.placeholder.com/150x80?text=Sponsor+2" alt="Sponsor 2" style={styles.sponsorImg} />
          </div>

          <h2 style={{ ...styles.heading, marginTop: 40 }}>Powered By</h2>
          <div style={styles.sponsorRow}>
            <img src="https://via.placeholder.com/150x80?text=Powered+1" alt="Powered 1" style={styles.sponsorImg} />
            <img src="https://via.placeholder.com/150x80?text=Powered+2" alt="Powered 2" style={styles.sponsorImg} />
          </div>
        </div>

        <div style={styles.sectionBox} id="about">
          <h3 style={styles.heading}>🚀 What is Code4Change?</h3>
          <p style={styles.text}>
            Code4Change is the flagship tech fest of Government Engineering College, Hassan, featuring a national-level Hackathon and an intense Tech Quiz. It’s a platform to code, innovate, and showcase your problem-solving skills while competing with top student talent across India.
          </p>
        </div>

        <div style={styles.sectionBox} id="location">
          <h3 style={styles.heading}>📍 Location</h3>
          <p style={styles.text}>Government Engineering College, Hassan, Karnataka</p>
        </div>

        <div style={styles.sectionBox} id="dates">
          <h3 style={styles.heading}>🗓️ Dates</h3>
          <p style={styles.text}>May 9 – 10, 2025</p>
        </div>

        <div style={styles.sectionBox} id="events">
          <h3 style={styles.heading}>🎯 Main Events</h3>
          <p style={styles.text}>
            💡 <strong>Hackathon 2025</strong><br />
            Team Size: 2–4 members (same college)<br />
            Coding Marathon: May 9, 4:00 PM – May 10, 7:00 AM (overnight)<br />
            Final Presentations: May 10, 9:00 AM – 1:00 PM
          </p>
          <br />
          <p style={styles.text}>
            🧠 <strong>Tech Quiz</strong><br />
            Solo Participation<br />
            1st Round (Online): April 28, 1:00 PM<br />
            Final Rounds: May 10, on campus
          </p>
        </div>

        <div style={styles.sectionBox} id="prizepool">
          <h3 style={styles.heading}>🏆 Prize Pool</h3>
          <p style={styles.text}>
            ₹50,000+ worth exciting prizes and goodies to be won!<br />
            Certificates, swags, and more for all finalists.
          </p>
        </div>

        <div style={styles.sectionBox} id="tracks">
          <h3 style={styles.heading}>🧪 Hackathon Tracks</h3>
          <p style={styles.text}>
            HealthTech 🏥 – Better diagnostics & healthcare access<br />
            AgriTech 🌾 – Smart, sustainable agriculture<br />
            FinTech 💸 – Secure, inclusive financial tech<br />
            Robotics/IoT & Mobility 🤖 – Automation, smart devices, mobility<br />
            Sustainability 🌱 – Green energy & waste management<br />
            EduTech 📚 – Enhanced learning through technology
          </p>
        </div>

        <div style={styles.sectionBox} id="fees">
          <h3 style={styles.heading}>🎟️ Entry Fees</h3>
          <p style={styles.text}>
            Hackathon: ₹600 per team (2–4 members)<br />
            Tech Quiz: ₹50 per participant<br />
            📌 Fees are refundable only if not selected to Hackathon
          </p>
        </div>
        <div style={styles.sectionBox} id="benefits">
          <h3 style={styles.heading}>🎁 Benefits of Participating</h3>
          <p style={styles.text}>
            🚀 Real-world coding experience in a competitive yet collaborative environment<br />
            🧑‍💼 Networking opportunities with fellow innovators and industry mentors<br />
            🎓 Recognition, swags, and certificates to boost your portfolio<br />
            💬 Interactive sessions and mentoring to refine your ideas
          </p>
        </div>

        <div style={styles.sectionBox} id="terms">
          <h3 style={styles.heading}>📜 Terms & Conditions</h3>
          <p style={styles.text}>
            • Participants must be currently enrolled students.<br />
            • Team members must be from the same college for the Hackathon.<br />
            • Any form of plagiarism or code-of-conduct violation will lead to disqualification.<br />
            • Final decisions rest with the organizing committee.
          </p>
        </div>

        <div style={styles.sectionBox} id="contact">
          <h3 style={styles.heading}>📞 Contact Us</h3>
          <p style={styles.text}>
            📧 Email: <a href="mailto:sharath7hn@gmail.com">sharath7hn@gmail.com</a><br />
            📱 Phone: +91-7204022677 (Student Coordinator)<br />
            🌐 Website: <a href="https://www.gechassan.ac.in" target="_blank" rel="noopener noreferrer">www.gechassan.ac.in</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;
