import React , { Component } from "react";
import ProjetList from '../components/ProjetList';
import ProjetCreation from '../components/ProjetCreation';
import PanelToggle from '../components/PanelToggle';

export default class ProjetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projetList : [
        {
          if : 1,
          name : "devis1",
          client : "toto le chameau",
          commercial : "hector le castor",
        },
        {
          id : 2,
          name : "devis2",
          client : "toto le chameau",
          commercial : "hector le castor",
        },
        {
          id : 3,
          name : "devis3",
          client : "toto le chameau",
          commercial : "hector le castor",
        }
      ],
      panelToggle : true
    };
  }

  onPanelToggle() {
    this.setState({
      panelToggle : true
    });
  }

  render() {
    return (
      <div>
        <button 
          className = "c-button --primary"
          onClick = { 
            () => this.onPanelToggle() } >
          Créer projet
        </button>
        <ProjetList projetList = { this.state.projetList } />
        <PanelToggle
          header = "Créer un projet"
          toggle = { this.state.panelToggle } >
          <ProjetCreation />
        </PanelToggle>
      </div>
    );
  }
}