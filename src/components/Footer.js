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
              to={{ pathname: "https://github.com/bspencer181" }}
              target="_blank"
              aria-label="GitHub"
            >
              <i class="fab fa-github" />
            </Link>

            <Link
              class="social-icon-link linkedin"
              to={{ pathname: "https://www.linkedin.com/in/beth-spencer-2b374a1b5/" }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>

            <Link
              class="social-icon-link resume"
              to={{ pathname: "https://docs.google.com/document/d/1JurMSqNpH8hxgIglYqMAEghjkCvE_zAO-jFe-nAYCQ0/edit?usp=sharing" }}
              target="_blank"
              aria-label="Resume"
            >
              <i class="far fa-file" />
            </Link>
          </div>
        </div>
      </section>
      <div className="contact">&copy; 2021 Beth Spencer &bull; (620) 605-2613 &bull; beth.spencer88@icloud.com</div>
    </div>
  );
}

export default Footer;
