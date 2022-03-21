import React, { Fragment } from 'react';
import HeadBar from './components/HeadBar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import CarruselCards from './components/CarruselCards.jsx';
import DivFP from './components/DivFP.jsx';
import Footer from './components/Footer.jsx';
import Minicarta from './components/Minicarta.jsx';
import Horarios from './components/Horarios.jsx';
import PagMenu from './pages/Menu/Menu.js';
import Nosotros from './pages/Nosotros/Nosotros.js';
import {
  Routes,
  Route,
} from "react-router-dom";

//import './App.css';

function App() {
  return (
      <div className="App">
        <HeadBar />
        
        
          
            <Routes>
            <Route path="/" element={
              <Fragment>
                <HeroBanner />
                <DivFP />
                <CarruselCards />
                <Minicarta />
                <Horarios />
                
              </Fragment>
              }/>

              <Route path="nuestromenu" element={<PagMenu />} />
              <Route path="nosotros" element={<Nosotros />}/>
            </Routes>
          
        <div className='row g-0'>
        <Footer />  
        </div>
            

        
         
      </div>

  );
}

export default App;