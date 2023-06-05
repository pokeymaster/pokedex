import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/pikachu.png";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Yudong</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <div className="profile-links">
        <a href="https://github.com/pokeymaster">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/yudong-chen-15a58b238/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
