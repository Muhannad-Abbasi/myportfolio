import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.facebook.com/profile.php?id=100002102530803' target='_blank' rel="noreferrer"><FaFacebookF /></a>
    </div>
    <div>
      <a href='https://github.com/Muhannad-Abbasi' target='_blank' rel="noreferrer"><FaGithub /></a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/muhannad-abbasi/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
    </div>
  </div>
);

export default SocialMedia;
