import React from "react";
import "../../Styles/Components/footer.scss";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://github.com/Nazareth98"
            target="_blank"
            rel="noreferrer"
          >
            Patrick Nazareth
          </a>
        </p>
      </div>
      <div className="footer-icons">
        <a
          href="https://github.com/Nazareth98"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-nazareth-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/patricnazareth/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-square-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
