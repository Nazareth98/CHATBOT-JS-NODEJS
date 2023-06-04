import React from "react";
import "../../Styles/Components/otherProject.scss";
import SectionHeader from "../Components/SectionHeader/index";
import Card from "./cards/index";

const OtherProjects = () => {
  const [seeMore, setSeeMore] = React.useState(false);

  return (
    <>
      <article className="container cards-container">
        <SectionHeader id="+ " title="Todos os Projetos" />

        <div className="cards-box">
          <Card seeMore={seeMore} />
        </div>
        <div className="button-box" onClick={() => setSeeMore(!seeMore)}>
          <button data-aos="fade-up" data-aos-duration="1200">
            {seeMore ? "Ver Menos" : "Ver Mais"}
          </button>
        </div>
      </article>
    </>
  );
};

export default OtherProjects;
