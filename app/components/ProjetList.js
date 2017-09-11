import React from "react";
import ProjetListItem from './ProjetListItem';

const ProjetList = (props) => {
  
  const projetListItems = props.projetList.map((projet) => {
    return (
      <ProjetListItem 
        projet = { projet }
        key = { projet.id } />
    );
  })

  return (
    <ul>
      { projetListItems }
    </ul>
  );
};

export default ProjetList;