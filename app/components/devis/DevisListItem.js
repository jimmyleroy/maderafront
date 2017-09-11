import React from "react";

const DevisListItem = ({ devis }) => {

  const name = devis.name;
  const commercial = devis.commercial;
  const client = devis.client;

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

export default DevisListItem;