import React from "react";
import "../../Styles/Components/contact.scss";

const Contact = () => {
  return (
    <article id="contact" className="container container-contact">
      <div className="contact-box">
        <span>03.E agora?</span>
        <h3 data-aos="fade-in" data-aos-duration="1200" className="title">
          Entre em Contato
        </h3>
        <p data-aos="fade-in" data-aos-duration="1200">
          Atualmente estou a procura de uma oportunidade no mercado de trabalho
          para consolidar minha carreira como Desenvolvedor.
        </p>
        <a
          data-aos="fade-in"
          className="button"
          href="mailto:patrickn.contact@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Mandar um "Olá!"
        </a>
      </div>
    </article>
  );
};

export default Contact;
