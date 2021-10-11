import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";

// Bootstrap
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Image
import DigBicksLogo from "assets/images/logo.png";

const NavbarComponent = () => {
  const [isStickyNav, setIsStickyNav] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const scrollCallBack = () => {
      setIsStickyNav(window.pageYOffset > 10);
    };

    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
      setIsStickyNav(false);
    };
    // eslint-disable-next-line
  }, []);

  const toggleCollapsibleMenu = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const closeCollapsibleMenu = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={`navbar-wrapper ${
        (isStickyNav || isExpanded) && "isStickyNav"
      }`}
      //   className={`navbar-wrapper ${false && "isStickyNav"}`}
    >
      <Navbar
        collapseOnSelect
        expand="lg"
        expanded={isExpanded}
        variant="dark"
        className={`navbar-container`}
      >
        <Navbar.Brand as="span" href="#home">
          <Link to="/" className="navbar-logo">
            <img src={DigBicksLogo} alt="DigBicks" placeholder="DigBicks" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler-container"
          onClick={toggleCollapsibleMenu}
        >
          <span className="navbar-toggle-icon"> &nbsp; </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="navbar-menus">
            <NavDropdown
              title="Home"
              id="basic-nav-dropdown"
              className="dropdownText"
            >
              <NavDropdown.Item href="#bick-land">Bick Land</NavDropdown.Item>
              <NavDropdown.Item href="#roadmap">Roadmap</NavDropdown.Item>
              <NavDropdown.Item href="#faqs">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#team">Team</NavDropdown.Item>
            </NavDropdown>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/DigBickNFT"
              className="nav-social-link"
            >
              <FaTwitter className="social-icon" />
            </a>

            <a
              href="https://discord.gg/MPBfmRyjDT"
              rel="noreferrer"
              target="_blank"
              className="discordButton"
              onClick={closeCollapsibleMenu}
            >
              Join our Discord
            </a>

            <button className="connectButton" onClick={() => alert("connect")}>
              Connect
            </button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
