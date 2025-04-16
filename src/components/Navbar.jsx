import { ArrowRightToLine, Menu, X } from 'lucide-react';
import { useState } from 'react';
import '../styles/Navbar.css';
import logo from "../assets/code4change.png";
import { useNavigate } from 'react-router-dom';

export default function Navbar({ loggedIn = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ for routing

  const handleRegisterClick = () => {
    navigate('/register'); // ✅ go to /register route
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <a href="/home">
            <img src={logo} alt="Logo" className="logo-img" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <a href="/home">HOME</a>
          <a href="#/home#sponsors">SPONSORS</a>
          <a href="#/home#about">ABOUT</a>
          <a href="#/home#prizepool">PRIZES</a>
          <a href="#/home#tracks">TRACKS</a>
          <a href="#/home#events">TIMELINE</a>
        </nav>

        {/* Right-side (Profile/Register + Menu Icon) */}
        <div className="right-icons">
          {!loggedIn && (
            <button onClick={handleRegisterClick} className="register-btn">
              <ArrowRightToLine className="icon" />
              Register
            </button>
          )}
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#/home" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="#/home#sponsors" onClick={() => setIsOpen(false)}>SPONSORS</a>
          <a href="#/home#about" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#/home#prizepool" onClick={() => setIsOpen(false)}>PRIZES</a>
          <a href="#/home#tracks" onClick={() => setIsOpen(false)}>TRACKS</a>
          <a href="#/home#events" onClick={() => setIsOpen(false)}>TIMELINE</a>
        </div>
      )}
    </header>
  );
}
