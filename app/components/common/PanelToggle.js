import React , { Component } from "react";

export default class PanelToggle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle : false,
    }
  }

  toggle() {
    this.setState({
      toggle : !this.state.toggle
    });
  }

  render() {
    if (this.state.toggle) {
      return (
        <div>
          <div className = "c-panel-toggle">
            <div className = "c-panel-toggle__header">
              <span>{ this.props.header }</span>
              <span 
                onClick = { () => this.toggle() }
                className = "c-panel-toggle__cross">
                X
              </span>
            </div>
            { this.props.children }
          </div>
          <div 
            onClick = { () => this.toggle() }
            className = "c-overlay"></div>
        </div>
      );
    } else {
      return null;
    }
  }
}