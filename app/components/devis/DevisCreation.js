import React, { Component } from "react";
import ModeleList from '../modele/ModeleList';

export default class DevisCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gammeList: [
                {
                    id : 1,
                    name : "gamme 1",
                    modeleList : [
                        {
                            id: 1,
                            name: "modèle1",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
                            imgUrl: "app/static/images/planche.jpg"
                        },
                        {
                            id: 2,
                            name: "modèle2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
                            imgUrl: "app/static/images/planche2.jpg"
                        },
                        {
                            id: 3,
                            name: "modèle3",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
                            imgUrl: "app/static/images/laine.jpg"
                        },
                        {
                            id: 4,
                            name: "modèle4",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
                            imgUrl: "app/static/images/tuile.jpg"
                        }
                    ]
                },
                {
                    id : 2,
                    name : "gamme 2",
                    modeleList : [
                        {
                            id: 1,
                            name: "modèle1 gamme 2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
                            imgUrl: "app/static/images/planche.jpg"
                        },
                        {
                            id: 2,
                            name: "modèle2 gamme 2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
                            imgUrl: "app/static/images/planche2.jpg"
                        },
                        {
                            id: 3,
                            name: "modèle3 gamme 2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
                            imgUrl: "app/static/images/laine.jpg"
                        },
                        {
                            id: 4,
                            name: "modèle4 gamme 2",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem quam, tristique vitae purus ac, fermentum iaculis urna.",
                            imgUrl: "app/static/images/tuile.jpg"
                        }
                    ]
                }
            ],
            selectedGamme : {}   
        };
        this.state.selectedGamme = this.state.gammeList[0];
        this.onGammeSelectChange = this.onGammeSelectChange.bind(this);
    }

    onGammeSelectChange(event) {
        this.state.gammeList.map((gamme) => {
            const optionId = event.target.options[event.target.selectedIndex].id;
            if (gamme.id = optionId) {
                this.setState({
                    selectedGamme : gamme
                });
            }
        });
    }

    render() {
        const gammeOptionList = this.state.gammeList.map((gamme) => {
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
                    { this.state.gammeList.map((gamme) => {
                        return (
                            <option
                                key = { gamme.id }
                                id = { gamme.id }>
                                { gamme.name }
                            </option>
                        );
                    })}
                </select>
                Choisir un modèle :
                <ModeleList modeleList = { this.state.selectedGamme.modeleList } />
            </div>
        );
    }
}