import React from "react";
import ModeleListItem from './ModeleListItem';

const ModeleList = (props) => {
  
  const modeleListItems = props.modeleList.map((modele) => {
    return (
      <ModeleListItem 
        key = { modele.id }
        modele = { modele } />
    );
  })

  return (
    <ul>
      { modeleListItems }
    </ul>
  );
};

export default ModeleList;