import React, { Component } from 'react';
import logo from '../images/svg/logoClaroHor.svg';
import './styles/HeadBar.css';
import {Link} from 'react-router-dom';

class HeadBar extends Component {
    render(){
      return(
        <nav className="navbar navbar-expand-lg static-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo Vintage Waffles Cali" id='logoNav'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto ulNavBar">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/nosotros">¿Quiénes Somos?</Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to="/nuestromenu">Nuestros Productos</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to="/nuestromenu">Contáctanos</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      );
    }
}

export default HeadBar;