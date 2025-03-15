import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          Learn<span>Sphere</span>
        </div>
        <div className="footer-text">
          <p>
            &copy; {new Date().getFullYear()} LearnSphere. All rights reserved.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/sandeepkumar.pati.92">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://x.com/sandeep_pati18">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/sandeep_27.2/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sandeep-pati-537ba030b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
