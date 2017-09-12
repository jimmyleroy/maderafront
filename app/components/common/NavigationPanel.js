import React from "react";
import { Link } from 'react-router-dom';

const NavigationPanel = () => {

  return (
    <nav className = "c-navigation">
        <img
          className = "c-logo" 
          src = "https://seeklogo.com/images/D/dragon-logo-62F627B731-seeklogo.com.png" />
        <Link to = "/" className = "c-navigation__item">Profil</Link>
        <Link to = "/" className = "c-navigation__item">Projets</Link>
        <Link to = "/" className = "c-navigation__item">Clients</Link>
        <Link to = "/" className = "c-navigation__item">Commandes</Link>
    </nav>
  )
};

export default NavigationPanel;