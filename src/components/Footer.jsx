import React from 'react';
import './styles/Footer.css';
import logo from '../images/svg/logoClaro.svg';

const Footer = () => {
  
  
  return ( 
    <footer className="footer">
          <div className="container">
            <div className="row">

              <div className="col-sm-4">
                <div className="container">
                  <h3 className="titulosFoo mainText">Sobre Nosotros</h3>
                  <div className="footer-widget-content">
                    <div className="cajaimg">
                      
                      <img className="logofoo" src={logo}/>
                    </div>
                    <p className="textFoo">
                      <strong>
                      En Vintage Waffles te ayudamos a encontrar el detalle ideal 
                      para expresar tus emociones con aquellos que más amas
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-sm-4">
                <h3 className="titulosFoo mainText">Horarios Para Ordenar</h3>
                <div className="open-time">
                  <ul className="opening-time mt-5">
                    <li><p><strong>lunes - sábados :</strong><i> 9am - 5pm</i> </p></li>
                    <li><p><strong>domingos - festivos :</strong><i> cerrado</i></p></li>
                    <li><i>(+57) 3172778282</i></li>
                    <li><strong>Haz tu pedido ahora mismo <span className="bi bi-telephone-outbound-fill"></span></strong></li>
                  </ul>
                  
                </div>
                </div>

              <div className="col-sm-4">
              <div className="footer-widget">
                <h3 className="titulosFoo mainText">Siguenos En Redes</h3>
                <div className="ms-4 mt-5 footer-widget-content">
                  <div className="images-gellary">
                    <ul>
                      <li><a target="_blank" href="https://www.facebook.com/vintagewafflescali"><div style={{"backgroundImage":"url('https://i.pinimg.com/564x/2e/53/ac/2e53ac3889653417ffa1795c3778d127.jpg')"}} className='redes'></div></a></li>
                      <li><a target="_blank" href="https://www.instagram.com/vintage_wafflescali/"><div style={{"backgroundImage":"url('https://i.pinimg.com/564x/04/7c/bb/047cbbecaa3386d2ac276363da4bb1ee.jpg')"}} className='redes'></div></a></li>
                      <li><a target="_blank" href="https://wa.me/message/4D45IRY3BI44L1"><div style={{"backgroundImage":"url('https://i.pinimg.com/564x/3f/a3/92/3fa392f1f19912299c7c3a9b28cf7808.jpg')"}} className='redes'></div></a></li>
                      
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
            <div className="jumbotron-fluid crFoo">
              <div className="copyright mainText" data-toggle="tooltip" data-placement="bottom" title="Luis Rosero :)">
                Copyright 2022 | Powered by Z4NJ4 Solutions.
              </div>
            </div>
        </footer>
   );
}
 
export default Footer;