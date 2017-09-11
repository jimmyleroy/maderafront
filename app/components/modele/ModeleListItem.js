import React from "react";

const ModeleListItem = ({ modele }) => {

  const name = modele.name;
  const description = modele.description;
  const imgUrl = modele.imgUrl;

  return (
    <div>
      <div className = "c-card">
        <img
          className = "c-card__image" 
          src = { imgUrl } />
        <div>
          <span className = "c-card__item u-text-heavy">{ name }</span>
          <p className = "c-card__item u-margin-top-small">{ description }</p>
          <button
            className = "c-button --primary u-margin-top-small">
            Sélectionner ce modèle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModeleListItem;