import React, { Component } from "react";
import ProjetListItem from './ProjetListItem';

export default class ProjetList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      // projetFilterTerm : "",
      projetListFiltered : this.props.projetList
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.projetFilter = this.projetFilter.bind(this);    
  }

  // handleChange(projetFilterTerm) {
  //   this.setState({
  //     projetFilterTerm : projetFilterTerm
  //   });

  //   this.projetFilter();
  // }

  // projetFilter() {
  //   const projetListFiltered = [];
  //   this.props.projetList.map((projet) => {
  //     if (projet.name.includes(this.state.projetFilterTerm)) {
  //       projetListFiltered.push(projet);
  //     }
  //     this.setState({
  //       projetListFiltered : projetListFiltered
  //     });   
  //   });
  // }

  render() {
    let projetListItems = <div>Pas de projet créé</div>
    
    if (this.state.projetListFiltered) {
      projetListItems = this.props.projetList.map((projet) => {
        return (
          <ProjetListItem 
            projet = { projet }
            key =  { projet.id } />
        );
      })
    }
  
    return (
      <div>
        {/* <input
          type = "text"
          onChange = {
            (event) => this.handleChange(event.target.value)
          }
          placeholder = "Filter par nom de projet"
          className = "c-input" /> */}
        <ul>
          { projetListItems }
        </ul>
      </div>
    );
  }
};