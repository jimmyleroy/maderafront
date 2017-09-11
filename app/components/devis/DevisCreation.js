import React from "react";
import ModeleList from '../modele/ModeleList';

const DevisCreation = (props) => {

    const modeleList = props.modeleList;
        
    return (
        <div>
            Choisir une gamme : 
            <select className = "c-select u-margin-top-small">
                <option>ok</option>
                <option>non</option>
            </select>
            Choisir un modèle : 
            <ModeleList modeleList = { modeleList } />
        </div>
    );
};

export default DevisCreation;