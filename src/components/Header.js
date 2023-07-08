import React from "react";
import "../css/UserCard.css";

const Header = () => {
  return (
    <div className="header-title">
      <img src="ihm_logo_black.png" alt="kucc-logo" height={100} width={120} />
      <h1 style={{ color: "#373F5F" }}>
        Innovators Home - Git and Github : All you need to know!
      </h1>
      <a
        href="https://sunset-agenda-480.notion.site/Exploring-Git-and-GitHub-46349a389070408ca9fa44279ec950b5"
        target="_blank"
        rel="noreferrer"
      >
        Workshsop Content
      </a>
    </div>
  );
};

export default Header;
