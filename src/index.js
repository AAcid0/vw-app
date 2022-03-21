import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
const domContainer = document.getElementById('root');


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    
  </React.StrictMode>,domContainer
);
