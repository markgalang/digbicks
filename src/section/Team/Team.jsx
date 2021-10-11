import React from "react";
import "./Team.css";
import BickFather from "assets/bicks/bick-father.jpg";
import SG from "assets/images/SG.png";
import AT from "assets/images/AT.png";
import Marso from "assets/images/Marso.png";
import EJ from "assets/images/EJ.png";
import JM from "assets/images/JM.png";
import MT from "assets/images/MT.png";
import MG from "assets/images/MG.png";
import { FaDiscord, FaTwitter } from "react-icons/fa";

function Team() {
  const members = [
    {
      key: "two",
      image: Marso,
      name: "Marso",
      icons: (
        <div className="memberCredentials">
          <p>NFT artist vampire</p>
          <p>Part-time Degen</p>
          <p>Pussy-cat lover</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/DigBickNFT"
            className="member-social-link"
          >
            <FaTwitter className="member-social-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/8qXuhTzn"
            className="member-social-link"
          >
            <FaDiscord className="member-social-icon" />
          </a>
        </div>
      ),
      imageDescription: "BickFather",
    },
    {
      key: "three",
      image: SG,
      name: "Sebastian",
      icons: (
        <div className="memberCredentials">
          <p>Solidity Developer </p>
          <p>Professional NFT Degen</p>
          <p>Wallet stalking for a living</p>
          <p>Baby Bick</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/DigBickNFT"
            className="member-social-link"
          >
            <FaTwitter className="member-social-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/8qXuhTzn"
            className="member-social-link"
          >
            <FaDiscord className="member-social-icon" />
          </a>
        </div>
      ),
      imageDescription: "BickFather",
    },
    {
      key: "four",
      image: MT,
      name: "Mervin",
      icons: (
        <div className="memberCredentials">
          <p>AWS Certified solution architect/ Cloud Solutions Architect</p>
          <p>Early adaptor bought cryptopussies but failed to buy punks</p>
          <p>Wine & Alcohol connoisseur</p>
          <p>Uncle Bick</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/DigBickNFT"
            className="member-social-link"
          >
            <FaTwitter className="member-social-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/8qXuhTzn"
            className="member-social-link"
          >
            <FaDiscord className="member-social-icon" />
          </a>
        </div>
      ),
      imageDescription: "BickFather",
    },
    {
      key: "five",
      image: EJ,
      name: "Skylar",
      icons: (
        <div className="memberCredentials">
          <p>Senior SAP Consultant </p>
          <p>Multi-instrumentalist</p>
          <p>Tiktokerist</p>
          <p>Bick Lover</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/DigBickNFT"
            className="member-social-link"
          >
            <FaTwitter className="member-social-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/8qXuhTzn"
            className="member-social-link"
          >
            <FaDiscord className="member-social-icon" />
          </a>
        </div>
      ),
      imageDescription: "BickFather",
    },
    {
      key: "six",
      image: AT,
      name: "Armin",
      icons: (
        <div className="memberCredentials">
          <p>Senior SAP Consultant </p>
          <p>Financial Advisor irl</p>
          <p>Pornhub enthusiast</p>
          <p>Daddy Bick</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/DigBickNFT"
            className="member-social-link"
          >
            <FaTwitter className="member-social-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/8qXuhTzn"
            className="member-social-link"
          >
            <FaDiscord className="member-social-icon" />
          </a>
        </div>
      ),
      imageDescription: "BickFather",
    },
    {
      key: "seven",
      image: MG,
      name: "MG",
      icons: (
        <div className="memberCredentials">
          <p>Developer</p>
          <p>Minesweeper pro</p>
          <p>Undefeated in Chess (easy mode)</p>
          <p>Adopted Bick</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/DigBickNFT"
            className="member-social-link"
          >
            <FaTwitter className="member-social-icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/8qXuhTzn"
            className="member-social-link"
          >
            <FaDiscord className="member-social-icon" />
          </a>
        </div>
      ),
      imageDescription: "BickFather",
    },
  ];

  const membersMarkup = members?.map((member, index) => {
    return (
      <div id={member.key} key={index} className="teamMember">
        <div className="memberOverlay">
          <p className="memberName">{member.name}</p>
          {member?.icons && <div className="memberHorizontalLine" />}
          {member?.icons || null}
        </div>
        <img className="teamMemberImage" src={member.image} />
      </div>
    );
  });

  return (
    <div id="team" className="teamContainer">
      <div className="customContainer teamContentContainer">
        <div className="teamTitle">Team</div>
        <div id="zero" className="teamMember marginAuto">
          <div className="memberOverlay">
            <p className="memberName">Alvin</p>
            <div className="memberHorizontalLine" />
            <div className="memberCredentials">
              <p>Digital and irl Entrepreneur</p>
              <p>NFT, Sports card and sneaker collector</p>
              <p>Failed to buy punks </p>
              <p>Bick Father</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/DigBickNFT"
                className="member-social-link"
              >
                <FaTwitter className="member-social-icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/8qXuhTzn"
                className="member-social-link"
              >
                <FaDiscord className="member-social-icon" />
              </a>
            </div>
          </div>
          <img className="teamMemberImage" src={BickFather} />
        </div>
        <div className="teamMembersContainer">{membersMarkup}</div>
      </div>
    </div>
  );
}

export default Team;
