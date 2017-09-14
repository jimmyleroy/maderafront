import React , { Component } from "react";
import ProjetList from '../components/projet/ProjetList';
import ProjetCreation from '../components/projet/ProjetCreation';
import PanelToggle from '../components/common/PanelToggle';

export default class ProjetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projetList : [
        {
          id : 1,
          name : "projet1",
          client : "Jean Pierre",
          commercial : "Charles Paul",
          devisList: [
            {
              id: 1,
              name: "devis1",
              client: "Jean Pierre",
              commercial: "Charles Paul",
            },
            {
              id: 2,
              name: "devis2",
              client: "Jean Pierre",
              commercial: "Charles Paul",
            },
            {
              id: 3,
              name: "devis3",
              client: "Jean Pierre",
              commercial: "Charles Paul",
            }
          ]
        },
        {
          id : 2,
          name : "projet2",
          client : "Jean Pierre",
          commercial : "Charles Paul",
          devisList: [
            {
              id: 1,
              name: "devis1",
              client: "Jean Pierre",
              commercial: "Charles Paul",
            },
            {
              id: 2,
              name: "devis2",
              client: "Jean Pierre",
              commercial: "Charles Paul",
            },
            {
              id: 3,
              name: "devis3",
              client: "Jean Pierre",
              commercial: "Charles Paul",
            }
          ]
        },
        {
          id : 3,
          name : "projet3",
          client : "Jean Pierre",
          commercial : "Charles Paul",
          devisList: [
            {
              id: 1,
              name: "devis1",
              client: "Jean Pierre",
              commercial: "Charles Paul",
            },
            {
              id: 2,
              name: "devis2",
              client: "Jean Pierre",
              commercial: "Charles Paul",
            },
            {
              id: 3,
              name: "devis3",
              client: "Jean Pierre",
              commercial: "Charles Paul",
            }
          ]
        }
      ],
    };

    this.handleProjetCreationSubmit = this.handleProjetCreationSubmit.bind(this);
    this.toggleCreationPanel = this.toggleCreationPanel.bind(this);        
  }

  toggleCreationPanel() {
    this.refs.panelProjetCreationToggleReference.toggle();
  }

  handleProjetCreationSubmit(projet) {
    const projetList = this.state.projetList.slice();
    
    projet.id = projetList.length + 1;
    projetList.push(projet);

    this.setState({
      projetList : projetList
    });
  }

  render() {
    return (
      <div>
        <ProjetList projetList = { this.state.projetList } />
        <button
          className = "c-button --primary"
          onClick = { this.toggleCreationPanel }>
          Créer projet
        </button>
        <PanelToggle
          ref = "panelProjetCreationToggleReference"
          header = "Créer un projet">
          <ProjetCreation
            toggleCreationPanel = { this.toggleCreationPanel }
            handleSubmit = { this.handleProjetCreationSubmit } />
        </PanelToggle>
      </div>
    );
  }
}