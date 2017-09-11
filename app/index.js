//  React
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from 'react-router-dom'

// Pages
import ProjetPage from './pages/ProjetPage';
import DevisPage from './pages/DevisPage';

// Components
import NavigationPanel from './components/NavigationPanel';

//  Styles  
import SCSS from './styles/app.scss';
import RESET from './styles/reset.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.api();
  }

  api() {}

  render() {
    return (
      <Router>
        <main>
          <NavigationPanel />
          <div className = "page-content">
            <Route exact path = "/" component = { ProjetPage } />
            <Route exact path = "/devis" component = { DevisPage } />
          </div>
        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector(".container")
)