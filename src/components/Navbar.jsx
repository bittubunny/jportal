import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar" id="main-navbar">
      <div className="nav-logo">JobPortal</div>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className={`nav-links ${open ? "show" : ""}`}>
        <Link id="nav-home" to="/home">Home</Link>
        <Link id="nav-jobs" to="/jobs">Jobs</Link>
        <Link id="nav-updates" to="/updates">Updates</Link>
        <Link id="nav-about" to="/about">About</Link>
        <Link id="nav-contact" to="/contact">Contact</Link>
      </div>
    </div>
  );
}
