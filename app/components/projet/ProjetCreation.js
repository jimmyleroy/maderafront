import React, { Component } from "react";

export default class ProjetCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projet : {
                id : null,
                name : "",
                commercial : "",
                client : ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();     
        this.props.handleSubmit(this.state.projet);
        this.props.toggleCreationPanel();
    }

    handleChange(event) {
        console.log([event.target.name], event.target.value);         
        this.setState({
            projet : {
                [event.target.name] : event.target.value
            }
        });
    }

    render () {
        return (
            <div>
                <form onSubmit = { this.handleSubmit } >
                    <input 
                        type = "text"
                        name = "name"
                        onChange = { this.handleChange }
                        placeholder = "Nom du projet" 
                        className = "c-input" />
                    <input 
                        type = "text"
                        name = "commercial"
                        onChange = { this.handleChange }
                        placeholder = "Commercial" 
                        className = "c-input" />
                    <input 
                        type = "text"
                        name = "client"
                        onChange = { this.handleChange }
                        placeholder = "Client" 
                        className = "c-input" />
                    Nouveau client ?
                    <button className = "c-button --primary u-margin-top-small">
                        Créer un client
                    </button>
                    <button
                        type = "submit"
                        className = "c-button --primary u-margin-top-small u-float-right">
                        Enregistrer le projet
                    </button>
                </form>
            </div>
        );

    }
};