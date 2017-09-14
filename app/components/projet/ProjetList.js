import React, { Component } from "react";
import ProjetListItem from './ProjetListItem';

export default class ProjetList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projetListFiltered : this.props.projetList
    };
}

  render() {
  
    const projetListItems = this.props.projetList.map((projet) => {
      return (
        <ProjetListItem 
          projet = { projet }
          key =  { projet.id } />
      );
    })
  
    return (
      <ul>
        { projetListItems }
      </ul>
    );
  }
};