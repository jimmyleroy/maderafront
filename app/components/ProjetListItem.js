import React from "react";

const ProjetListItem = ({ projet }) => {

  const name = projet.name;
  const commercial = projet.commercial;
  const client = projet.client;

  return (
    <li className = "c-card">
      <div className = "c-card__item">
        { name }
      </div>
      <div className = "c-card__item">
        { commercial }
      </div>
      <div className = "c-card__item">
        { client }
      </div>
    </li>
  );
};

export default ProjetListItem;