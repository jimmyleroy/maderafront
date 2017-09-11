import React, { Component } from "react";
import ModeleList from '../modele/ModeleList';

export default class DevisCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGamme : this.props.gammeList[0]    
        };
        this.onGammeSelectChange = this.onGammeSelectChange.bind(this);

    }

    onGammeSelectChange() {
        console.log("AHHHH" + this.props);
        this.props.gammeList.map((gamme) => {
            console.log(event.target.options[event.target.selectedIndex].id);
        });   
    }

    render() {
        const gammeOptionList = this.props.gammeList.map((gamme) => {
            return (
                <option 
                    key = { gamme.id }
                    id = { gamme.id }>
                    { gamme.name }
                </option>
            );
        });

        return (
            <div>
                Choisir une gamme : 
                <select
                    value = { this.state.selectedGamme }
                    onChange = { this.onGammeSelectChange }
                    className = "c-select u-margin-top-small">
                    { gammeOptionList }
                </select>
                Choisir un modèle : 
                <ModeleList modeleList = { this.state.selectedGamme.modeleList } />
            </div>
        );
    }
}