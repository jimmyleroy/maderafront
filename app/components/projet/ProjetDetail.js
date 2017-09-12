import React, { Component } from "react";
import PanelToggle from '../common/PanelToggle';
import DevisList from '../devis/DevisList';
import DevisCreation from '../devis/DevisCreation';

export default class ProjetDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  onDevisCreationButtonClicked() {
    this.refs.devisCreationPanelToggleReference.toggle();
  }

  render() {
    const name = this.props.projet.name;
    const client = this.props.projet.client;
    const commercial = this.props.projet.commercial;
    const devisList = this.props.projet.devisList;
    
    return (
      <div>
        <p className = "u-text-heavy">Projet client</p>
        <p className = "c-paragraph">{ client }</p>
        <p className = "u-text-heavy">Commercial</p>
        <p className = "c-paragraph">{ commercial }</p>
        <DevisList devisList = { devisList } />
        <button
          className = "c-button --primary"
          onClick = { this.onDevisCreationButtonClicked.bind(this) } >
          Créer un devis
        </button>
        <PanelToggle
          ref = "devisCreationPanelToggleReference"
          header = "Création d'un nouveau devis" >
          <DevisCreation />
        </PanelToggle>
      </div>
    );
  }
};