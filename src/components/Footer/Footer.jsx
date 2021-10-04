import React from "react";
import "./Footer.css";
import DigBicks from "assets/images/logo.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footerLogoContainer">
        <img className="footerLogo" src={DigBicks} alt="DigBicks" />
      </div>

      <div className="social-icon-container">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/DigBickNFT"
          className="social-link"
        >
          <FaTwitter className="social-icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/8qXuhTzn"
          className="social-link"
        >
          <FaDiscord className="social-icon" />
        </a>
      </div>

      <p>Dig Bicks All Rights Reserved</p>
    </div>
  );
}

export default Footer;
