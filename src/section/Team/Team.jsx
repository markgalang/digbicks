import React from "react";
import "./Team.css";
import BickFather from "assets/bicks/bick-father.jpg";
import SupremeLeader from "assets/bicks/supreme-leader.jpg";
import BobMarley from "assets/bicks/bob.jpg";
import Trump from "assets/bicks/trump.jpg";
import Pope from "assets/bicks/pope.png";
import MichealJackson from "assets/bicks/michael-jackson.jpg";
import { FaDiscord, FaTwitter } from "react-icons/fa";

function Team() {
  const members = [
    {
      key: "one",
      image: BickFather,
      name: "Bick Father",
      icons: (
        <div>
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
      key: "two",
      image: SupremeLeader,
      name: "Supreme Leader",
      icons: (
        <div>
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
      image: BobMarley,
      name: "Bob Marley",
      icons: (
        <div>
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
      image: Trump,
      name: "Trump",
      icons: (
        <div>
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
      image: Pope,
      name: "Pope",
      icons: (
        <div>
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
      image: MichealJackson,
      name: "Micheal Jackson",
      icons: (
        <div>
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
      image: SupremeLeader,
      name: "Supreme Leader",
      icons: (
        <div>
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
      key: "eight",
      image: Trump,
      name: "Trump",
      icons: (
        <div>
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
          {member?.icons && <hr className="memberHorizontalLine" />}
          {member?.icons || null}
        </div>
        <img className="teamMemberImage" src={member.image} />
      </div>
    );
  });

  return (
    <div className="teamContainer">
      <div className="container teamContentContainer">
        <div className="teamTitle">Team</div>
        <div className="teamMembersContainer">{membersMarkup}</div>
      </div>
    </div>
  );
}

export default Team;
