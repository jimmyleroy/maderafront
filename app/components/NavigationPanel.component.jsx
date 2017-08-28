import React from 'react';

export default class NavigationPanel extends React.Component {  
  render() {
    return (
      <nav className="c-navigation-panel">
        { this.props.name }
      </nav>
    )
  }
}