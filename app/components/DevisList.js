import React from "react";
import DevisListItem from './DevisListItem';

const DevisList = (props) => {
  
  const devisListItems = props.devisList.map((devis) => {
    return (
      <DevisListItem 
        devis = { devis }
        key = { devis.name } />
    );
  })

  return (
    <ul>
      { devisListItems }
    </ul>
  );
};

export default DevisList;