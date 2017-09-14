import React from "react";

const DevisListItem = ({ devis }) => {

  const name = devis.name;
  const commercial = devis.commercial;
  const client = devis.client;

  return (
    <li className = "c-card grid has-gutter">
      <div className = "c-card__item">
        <p className = "u-text-heavy">Nom</p>
        <p className = "u-margin-top-small">{ name }</p>
      </div>
      <div className = "c-card__item">
        <p className = "u-text-heavy">Commercial</p>
        <p className = "u-margin-top-small">{ commercial }</p>
      </div>
      <div className = "c-card__item">
        <p className = "u-text-heavy">Client</p>
        <p className = "u-margin-top-small">{ client }</p>
      </div>
    </li>
  );
};

export default DevisListItem;