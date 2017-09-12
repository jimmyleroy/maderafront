import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ProjetDetail from './ProjetDetail';
import PanelToggle from '../common/PanelToggle';

export default class ProjetListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
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
            { name }
          </div>
          <div className = "c-card__item">
            { commercial }
          </div>
          <div className = "c-card__item">
            { client }
          </div>
          <button
            className = "c-button --primary u-margin-left-small"
            onClick = { this.onProjetDetailButtonClicked.bind(this) }>
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