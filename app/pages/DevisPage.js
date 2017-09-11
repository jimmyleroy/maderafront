import React , { Component } from "react";
import DevisList from '../components/DevisList';

export default class DevisPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devisList : [
        {
            name : "devis1",
            client : "toto le chameau",
            commercial : "hector le castor",
        },
        {
            name : "devis2",
            client : "toto le chameau",
            commercial : "hector le castor",
        },
        {
            name : "devis3",
            client : "toto le chameau",
            commercial : "hector le castor",
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <button 
          className = "c-button --primary">
          Créer devis
        </button>
        <DevisList devisList = { this.state.devisList } />
      </div>
    );
  }
}