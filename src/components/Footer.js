import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
        
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons">
            <Link
              class="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="GitHub"
            >
              <i class="fab fa-github" />
            </Link>

            <Link
              class="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>

            <Link
              class="social-icon-link resume"
              to="/"
              target="_blank"
              aria-label="Resume"
            >
              <i class="far fa-file" />
            </Link>
            
          </div>
        </div>
        
      </section>
      &copy; 2020 Beth Spencer &bull; (620) 605-2613 &bull; beth.spencer88@icloud.com
    </div>
  );
}

export default Footer;
