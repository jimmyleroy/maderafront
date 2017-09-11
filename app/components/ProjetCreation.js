import React from "react";

const ProjetCreation = (props) => {
  return (
    <div>
        <input 
            type = "text"
            placeholder = "Nom du projet" 
            className = "c-input" />
        <input 
            type = "text"
            placeholder = "Client" 
            className = "c-input" />
        Nouveau client ?
        <button className = "c-button --primary margin-top-small">
            Créer un client
        </button>
        <button className = "c-button --primary margin-top-small float-right">
            Enregistrer le projet
        </button>
    </div>
  );
};

export default ProjetCreation;