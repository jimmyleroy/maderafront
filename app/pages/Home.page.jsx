import React from 'react';
import NavigationPanel from '../components/NavigationPanel.component.jsx';
import PageContent from '../components/PageContent.component.jsx';

export default class Home extends React.Component {  
  render() {
    return (
      <main>
        <NavigationPanel name="Madera" />
        <PageContent name="Madera" />
      </main>
    )
  }
}