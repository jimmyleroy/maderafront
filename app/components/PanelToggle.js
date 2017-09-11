import React , { Component } from "react";

export default class PanelToggle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle : this.props.toggle,
      header : this.props.header
    }
  }

  closePanelToggle() {
    this.setState({
      toggle : false
    });
  }

  render() {
    if (this.state.toggle) {
      return (
        <div>
          <div className = "c-panel-toggle">
            <div className = "c-panel-toggle__header">
              <span>{ this.state.header }</span>
              <span 
                onClick = { () => this.closePanelToggle() }
                className = "c-panel-toggle__cross">
                X
              </span>
            </div>
            { this.props.children }
          </div>
          <div className = "c-overlay"></div>
        </div>
      );
    } else {
      return null;
    }
  }
}