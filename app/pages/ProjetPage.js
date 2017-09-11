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
      panelCreationToggle : true
    };
  }

  render() {
    return (
      <div>
        <button 
          className = "c-button --primary"
          onClick = { () =>
            this.setState({
              panelCreationToggle : true
            })}
          >
          Créer projet
        </button>
        <ProjetList projetList = { this.state.projetList } />
        <PanelToggle
          header = "Créer un projet"
          toggle = { this.state.panelCreationToggle } >
          <ProjetCreation />
        </PanelToggle>
      </div>
    );
  }
}