import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import mainImg from '../assets/code4changelogomain.png';
import { useLocation } from 'react-router-dom';
import svl_logo from "../assets/svl_logo.png"
import clg_logo from "../assets/college_logo.png"
import avcms_logo from "../assets/avsms.png"
import map from "../assets/map.png"
import prizepool from "../assets/prizepool.png"

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
    presentedLogo: {
      width: windowWidth <= 480 ? 160 : 220,
      height: 'auto',
      objectFit: 'contain',
      backgroundColor: 'transparent',
      borderRadius: 0,
      padding: 0,
      display: 'block',
      margin: '0 auto',
      marginBottom:20,
    },
    sponsorLogo: {
      width: windowWidth <= 480 ? 100 : 180,
      height: 'auto',
      objectFit: 'contain',
      backgroundColor: 'transparent',
      borderRadius: 10,
      padding: 5,
    },
    mapImage: {
      width: '100%',
      maxWidth: 500,
      height: 'auto',
      objectFit: 'contain',
      display: 'block',
      margin: '0 auto',
    },  
    PrizeImg: {
      width: '100%',
      maxWidth: windowWidth <= 480 ? 250 : windowWidth <= 768 ? 350 : 450,
      height: 'auto',
      objectFit: 'contain',
      display: 'block',
      margin: '0 auto',
    },     
    page: {
      backgroundColor: 'rgb(207, 220, 252)',
      minHeight: '100vh',
      width: '100%',
      overflowX: 'auto',
    },
    scrollContent: {
      margin: '0 auto',
      paddingTop: windowWidth < 480 ? "100px": '',
      paddingBottom: '60px',
      paddingLeft: windowWidth < 768 ? '1rem' : '2rem',
      paddingRight: windowWidth < 768 ? '1rem' : '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      maxWidth: 1200,
    },
    mainimg: {
      width: '100%',
      maxWidth: windowWidth < 480 ? 480 : windowWidth < 768 ? 500 : 900,
      height: 'auto',
      objectFit:'contain',
    },
    sectionBox: {
      backgroundColor: '#ffffff',
      padding: windowWidth <= 480 ? '1rem' : '2rem',
      borderRadius: 18,
      width: '100%',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.07)',
      transition: 'all 0.3s ease-in-out',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr',
      gap: '1.5rem',
      marginTop: '1rem',
    },
    sectionBoxTrack: {
      backgroundColor: '#eaf2ff', // soothing light blue background
      padding: windowWidth <= 480 ? '1rem' : '2rem',
      borderRadius: 18,
      width: '100%',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.07)',
      transition: 'all 0.3s ease-in-out',
    },
    sectionBoxss: {
      //backgroundColor: '#ffffff',
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
    card: {
      backgroundColor: '#f0f6ff', // soft blue background like the image
      borderRadius: '16px',
      padding: '20px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      maxWidth: '600px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      margin: '20px auto',
      transition: 'transform 0.2s',
      cursor: 'pointer',
      ':hover': {
  transform: 'scale(1.02)',
},
    },
    icon: {
      fontSize: '40px',
      flexShrink: 0,
    },
    title: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '10px',
    },
    description: {
      fontSize: '16px',
      color: '#4a5568',
      lineHeight: '1.6',
    }
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.scrollContent}>
        <div id="mainImage">
        <img src={mainImg} alt="CODE4CHANGE Logo" style={styles.mainimg} />
        </div>

        <div style={styles.sectionBoxss} id="sponsors">
        <h2 style={{ ...styles.heading, marginTop: 40 }}>Presented By</h2>
          <div style={styles.sponsorRow}>
          <a href="http://www.gechassan.ac.in/?q=cse" target="_blank">
            <img src={clg_logo} alt="Powered 1" style={styles.presentedLogo} /></a>
          </div>
          <h2 style={styles.heading}>Sponsored By</h2>
          <div style={styles.sponsorRow}>
            <a href="https://jsdl.in/DT-99SF2XEKAR3" target="_blank">
            <img src={svl_logo} alt="Sponsor 1" style={styles.sponsorLogo} /> </a>
            <a href="https://avmcs.com.au" target="_blank">
            <img src={avcms_logo} alt="Sponsor 2" style={styles.sponsorLogo} /></a>
          </div>
        </div>

        <div style={styles.sectionBox} id="about">
          <h3 style={styles.heading}>🚀 What is Code4Change?</h3>
          <h3 style={styles.text}>
            Code4Change is the flagship tech fest of Government Engineering College, Hassan, featuring a national-level Hackathon and an intense Tech Quiz. It’s a platform to code, innovate, and showcase your problem-solving skills while competing with top student talent across India.
          </h3>
        </div>
        <div style={styles.sectionBox} id="timeline">
          <img
            src={map}
            alt="Timeline map"
            style={styles.mapImage}
            loading="lazy"
          />
          </div>


        <div style={styles.sectionBox} id="prizepool">
        <img
            src={prizepool}
            alt="Prizepool"
            style={styles.PrizeImg}
            loading="lazy"
          />
        </div>

        <div style={styles.sectionBoxTrack} id="tracks">
          <h3 style={styles.title}>Hackathon Tracks</h3>
          <div style={styles.grid}>
            <div style={styles.card}>
              <div style={styles.icon}>📚</div>
              <p style={styles.description}><strong>EduTech</strong> – Reimagine education through interactive, accessible tech. Think virtual labs, AI tutors, or language apps!</p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>🏥</div>
              <p style={styles.description}><strong>HealthTech</strong> – Innovate healthcare with smart diagnostics, remote monitoring, or digital health tools.</p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>💸</div>
              <p style={styles.description}><strong>FinTech</strong> – Build secure, easy-to-use banking or payment solutions. Focus on trust, speed, and inclusion.</p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>🤖</div>
              <p style={styles.description}><strong>Robotics/IoT & Mobility</strong> – Dive into automation, smart homes, wearables, and intelligent mobility systems.</p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>🌱</div>
              <p style={styles.description}><strong>Sustainability</strong> – Design tech to reduce waste, generate clean energy, and protect the planet.</p>
            </div>
            <div style={styles.card}>
              <div style={styles.icon}>🌾</div>
              <p style={styles.description}><strong>AgriTech</strong> – Use sensors, AI, or drones to support farmers, boost yields, and ensure food security.</p>
            </div>
          </div>
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
        {/* 🚨 Why You Shouldn’t Miss It */}
          <div style={styles.sectionBox}>
            <h3 style={styles.heading}>🚨 Why You Shouldn’t Miss It</h3>
            <p style={styles.text}>
              🚀 A chance to transform your ideas into impactful solutions<br />
              💬 Collaborate with like-minded individuals and sharpen your teamwork skills<br />
              🛠️ Build real-world tech that addresses real-world challenges<br />
              🏆 Win exciting prizes and earn valuable recognition<br />
              🎁 Goodies for All Participants<br />
              📣 Assemble your squad. 💡 Ignite your creativity. 🔥 Let innovation lead the way.
            </p>
            <p style={{ ...styles.text, fontWeight: 600, marginTop: '1rem' }}>
              Hackathon 2025 – Where ideas turn into impact!
            </p>
          </div>

          {/* 🧪 Judging Criteria */}
          <div style={styles.sectionBox}>
            <h3 style={styles.heading}>🧪 Judging Criteria</h3>
            <p style={styles.text}>
              ✅ Prototype submission is mandatory<br />
              💡 Innovation & Originality<br />
              🎨 Creativity & Implementation<br />
              🖥️ Presentation & Demo<br />
              🧑‍💻 User Interface Design and Experience
            </p>
          </div>

          {/* 🔌 Resources Provided */}
          <div style={styles.sectionBox}>
            <h3 style={styles.heading}>🔌 Resources Provided</h3>
            <p style={styles.text}>
              ⚡ High-speed internet connection<br />
              🔋 Power outlets for all teams<br />
              🍽️ Refreshments and food throughout the event.
            </p>
          </div>


        <div style={styles.sectionBox} id="terms">
          <h3 style={styles.heading}>📜 Terms & Conditions</h3>
          <ul style={{ 
            paddingLeft: '1.2rem', 
            fontSize: styles.text.fontSize, 
            color: styles.text.color, 
            lineHeight: 1.7 
          }}>
            <li>🧑‍🎓 Participants must be currently enrolled students.</li>
            <li>🧑‍🤝‍🧑 All team members must enter the same team name and be from the same college.</li>
            <li>🪪 College ID card is mandatory (original only).</li>
            <li>🧑‍🤝‍🧑 Inter-specialization teams are also allowed.</li>
            <li>🎫 QR ticket is required for entry. check <a
                href="https://lu.ma/event/evt-LBKA6lBgRbJ6o6l"
                class="luma-checkout--button"
                data-luma-action="checkout"
                data-luma-event-id="evt-LBKA6lBgRbJ6o6l"
              >
                QR Tickets
              </a>

              <script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script></li>
            <li>❌ No copying or using old projects (even your own).</li>
            <li>🚫 Any form of plagiarism or code-of-conduct violation will lead to disqualification.</li>
            <li>📜 Final decisions rest with the organizing committee.</li>
            <li>😎 Be respectful and enjoy the event!</li>
            <li>🔒✅ Please make sure to review and accept the Terms & Conditions before completing your registration.</li>
          </ul>
        </div>


        <div style={styles.sectionBox} id="contact">
          <h4 style={{ ...styles.heading, fontSize: styles.heading.fontSize - 2 }}>📞 Contact Us</h4>
          <p style={styles.text}>
            👨‍🏫 Dr. Vasantha Kumara M – Placement Officer – 📱 +91 99026 77199<br />
            👨‍💼 B R Adithya – 📱 +91 86182 36719<br />
            👨‍💻 Sharath H N – 📱 +91 72040 22677
          </p>
        </div>

<div style={styles.sectionBox} id="location">
  <h3 style={styles.heading}>📍 Location</h3>
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  }}>
    <p style={styles.text}>Government Engineering College, Hassan, Karnataka</p>
    <iframe
      title="Google Map"
      src="https://maps.google.com/maps?q=Government%20Engineering%20College,%20Hassan&t=&z=13&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="250"
      style={{ border: 0, borderRadius: '10px', maxWidth: '600px' }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
  
</div>
<p style={{fontSize: 14,
  color: '#444',}}>2025 © Code4Change | All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
