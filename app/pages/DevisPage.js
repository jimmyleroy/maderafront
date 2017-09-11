import React, { Component } from "react";
import DevisList from '../components/devis/DevisList';
import DevisCreation from '../components/devis/DevisCreation';
import PanelToggle from '../components/common/PanelToggle';

export default class DevisPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devisList: [
        {
          id: 1,
          name: "devis1",
          client: "toto le chameau",
          commercial: "hector le castor",
        },
        {
          id: 2,
          name: "devis2",
          client: "toto le chameau",
          commercial: "hector le castor",
        },
        {
          id: 3,
          name: "devis3",
          client: "toto le chameau",
          commercial: "hector le castor",
        }
      ],
      gammeList: [
        {
          id : 1,
          name : "gamme 1",
          modeleList : [
            {
              id: 1,
              name: "modèle1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
              imgUrl: "https://seeklogo.com/images/D/dragon-logo-62F627B731-seeklogo.com.png"
            },
            {
              id: 2,
              name: "modèle2",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
              imgUrl: "https://www.laboutiquedubois.com/media/produit/epaisseurs-contreplaqu-pm-34.jpg"
            },
            {
              id: 3,
              name: "modèle3",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
              imgUrl: "https://seeklogo.com/images/D/dragon-logo-62F627B731-seeklogo.com.png"
            },
            {
              id: 4,
              name: "modèle4",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
              imgUrl: "https://www.laboutiquedubois.com/media/produit/epaisseurs-contreplaqu-pm-34.jpg"
            }
          ]
        },
        {
          id : 2,
          name : "gamme 2",
          modeleList : [
            {
              id: 1,
              name: "sacré codec",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
              imgUrl: "https://seeklogo.com/images/D/dragon-logo-62F627B731-seeklogo.com.png"
            },
            {
              id: 2,
              name: "modèle2",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
              imgUrl: "https://www.laboutiquedubois.com/media/produit/epaisseurs-contreplaqu-pm-34.jpg"
            },
            {
              id: 3,
              name: "modèle3",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
              imgUrl: "https://seeklogo.com/images/D/dragon-logo-62F627B731-seeklogo.com.png"
            },
            {
              id: 4,
              name: "modèle4",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
              imgUrl: "https://www.laboutiquedubois.com/media/produit/epaisseurs-contreplaqu-pm-34.jpg"
            }
          ]
        }
      ]
    };
  }

  onDevisCreationButtonClicked() {
    this.refs.panelToggleReference.toggle();
  }

  render() {
    return (
      <div>
        <button
          className = "c-button --primary"
          onClick = {this.onDevisCreationButtonClicked.bind(this)}>
          Créer devis
        </button>
        <DevisList devisList = { this.state.devisList } />
        <PanelToggle
          ref = "panelToggleReference"
          header = "Créer un devis">
            <DevisCreation gammeList = { this.state.gammeList } />
        </PanelToggle>
      </div>
    );
  }
}