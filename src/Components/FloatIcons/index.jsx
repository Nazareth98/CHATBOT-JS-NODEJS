import React from "react";
import "../../Styles/Components/floatIcons.scss";

const FloatIcons = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1600"
        className="icons-container"
      >
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
    </>
  );
};

export default FloatIcons;
