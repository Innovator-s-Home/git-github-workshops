import React from "react";
import "../css/UserCard.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p> Copyright &copy; 2023 | Innovators Home | All Rights Reserved</p>
      <div className="socials">
        <SocialIcon
          url="https://www.linkedin.com/company/innovators-home/"
          bgColor="#38c0ce"
          style={{ height: 25, width: 25, marginRight: "15px" }}
        />
        <SocialIcon
          url="https://www.youtube.com/@InnovatorsHome"
          style={{ height: 25, width: 25, marginRight: "15px" }}
        />
        <SocialIcon
          url="https://github.com/Innovator-s-Home"
          style={{ height: 25, width: 25 }}
        />
      </div>
    </div>
  );
};

export default Footer;
