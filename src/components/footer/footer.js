import React from "react";
import style from "./footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram ,FaLinkedin ,FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerSection}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            gravida dolor sed velit fringilla, eu vestibulum elit tristique.
          </p>
        </div>
        <div className={style.footerSection}>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <div className={style.footerSection}>
          <h2>Follow Us</h2>
          <div className={style.socialLinks}>
            <a href="https://www.facebook.com">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/rahul-rewar-202517276/">
              <FaLinkedin/>
            </a>
            <a href="https://github.com/RAHULREWAR122">
              <FaGithub />
            </a>

          </div>
        </div>
      </div>
      <div className={style.bottomFooter}>
        <p>&copy; 2024 Your E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
