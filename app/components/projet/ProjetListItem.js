import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ProjetDetail from './ProjetDetail';
import PanelToggle from '../common/PanelToggle';

export default class ProjetListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    this.onProjetDetailButtonClicked = this.onProjetDetailButtonClicked.bind(this);            
  }

  onProjetDetailButtonClicked() {
    this.refs.projectDetailPanelToggleReference.toggle();
  }

  render() {
    const name = this.props.projet.name;
    const commercial = this.props.projet.commercial;
    const client = this.props.projet.client;

    return (
      <div>
        <li className = "c-card">
          <div className = "c-card__item">
            <p className = "u-text-heavy">Nom</p>
            <p className = "u-margin-top-small">{ name }</p>
          </div>
          <div className = "c-card__item">
            <p className = "u-text-heavy">Commercial</p>
            <p className = "u-margin-top-small">{ commercial }</p>
          </div>
          <div className = "c-card__item">
            <p className = "u-text-heavy">Client</p>
            <p className = "u-margin-top-small">{ client }</p>
          </div>
          <button
            className = "c-button --primary u-margin-left-small"
            onClick = { this.onProjetDetailButtonClicked }>
            Voir le détail
          </button>
        </li>
        <PanelToggle
          ref = "projectDetailPanelToggleReference"
          header = { "Détail du projet : " + name }>
          <ProjetDetail projet = { this.props.projet } />
        </PanelToggle>
      </div>
    );
  }
}