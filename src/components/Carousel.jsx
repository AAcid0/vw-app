import React, {Fragment, useEffect} from 'react';
import './styles/Carousel.css';
import img1 from '../images/products/cajatropical2.jpeg';
import img3 from '../images/pd2.jpg';
import img2 from '../images/products/desayuno1.png'; 
import img5 from '../images/planNiños.jpeg';
import img4 from '../images/products/pd2a.jpg';
import img6 from '../images/products/muestra1.jpeg';
import img7 from '../images/products/waffle1.jpeg';
import img8 from '../images/products/cajaDecorada.jpg';

const Carousel = () => {

    return (
      <div className="image-mosaic">
      <div
        className="card card-wide"
        style={{"backgroundImage" : "url("+img1+")","backgroundPosition":"0% 70%",backgroundSize:"100%"}}
      ></div>
      <div
        className="card card-tall"
        style={{"backgroundImage": "url("+img3+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img2+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img5+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img4+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img6+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img7+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img8+")"}}
      ></div>
    </div>
      
  )
  }
 
export default Carousel;