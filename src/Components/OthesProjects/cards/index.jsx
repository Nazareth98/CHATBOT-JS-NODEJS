import React from "react";
import Icons from "../../Components/Icons/index";
import getRepos from "./cardsItems";
import "../../../Styles/Components/card.scss";
import { useEffect } from "react";
import { useState } from "react";

const Card = ({ seeMore }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRepos();
        if (seeMore) {
          setRepos(data);
        } else {
          setRepos(data.slice(0, 6));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [seeMore]);

  if (repos.length === 0) {
    return <div>Carregando...</div>; // ou qualquer outro indicador de carregamento desejado
  }

  return repos.map((item) => (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
      className="card"
      key={item.id}
    >
      <div className="card-header">
        <div>
          <i className="fa-solid fa-code"></i>
        </div>
        <div>
          <Icons github={item.html_url} url={false} />
        </div>
      </div>
      <div className="card-info">
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  ));
};

export default Card;
