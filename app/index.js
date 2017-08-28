//  React
import React from 'react';  
import ReactDOM from 'react-dom';  

//  Components
import WelcomeMessage from './components/WelcomeMessage.component.jsx';
import NavigationPanel from './components/NavigationPanel.component.jsx';
import PageContent from './components/PageContent.component.jsx';

// Pages
import Home from './pages/Home.page.jsx';

//  Styles  
import SCSS from './styles/app.scss'

const appData = {  
  name: 'ta ddch'
}

ReactDOM.render(
  <Home />, 
  document.getElementById('container')
);