import React , { Component } from "react";
import ProjetList from '../components/projet/ProjetList';
import ProjetCreation from '../components/projet/ProjetCreation';
import PanelToggle from '../components/common/PanelToggle';

export default class ProjetPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      projetList : [
        {
          id : 1,
          name : "projet1",
          client : "toto le chameau",
          commercial : "hector le castor",
        },
        {
          id : 2,
          name : "projet2",
          client : "toto le chameau",
          commercial : "hector le castor",
        },
        {
          id : 3,
          name : "projet3",
          client : "toto le chameau",
          commercial : "hector le castor",
        }
      ],
      panelCreationToggle : false
    };
  }

  onProjetCreationButtonClicked() {
    this.refs.panelToggleReference.toggle();
  }

  render() {
    return (
      <div>
        <button
          className = "c-button --primary"
          onClick = { this.onProjetCreationButtonClicked.bind(this) }>
          Créer projet
        </button>
        <ProjetList projetList = { this.state.projetList } />
        <PanelToggle
          ref = "panelToggleReference"
          header = "Créer un projet">
          <ProjetCreation />
        </PanelToggle>
      </div>
    );
  }
}