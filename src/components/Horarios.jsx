import React, { memo, Fragment, useEffect } from 'react';
import vidfondo from './waffles-reducidos.mp4';
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import Card1 from './Card1.jsx';
import './styles/Horarios.css';
import img1 from '../images/clients/clientews1.jpg';
import img2 from '../images/clients/clientews2.jpg';
import img3 from '../images/clients/clientews3.jpg';
import img4 from '../images/clients/clientews4.jpg';
import img5 from '../images/clients/clientews5.jpg';
import img6 from '../images/clients/clientews6.jpg';
import img7 from '../images/clients/clientews7.jpg';
import img8 from '../images/clients/clientews8.jpg';
import img9 from '../images/clients/clientews9.jpg';
import img10 from '../images/clients/clientews10.jpg';

const Horarios = () => {
    useEffect(() => {
        new Swiper('.swiper1', {
            slidesPerView: 1,
            speed: 400,
            spaceBetween: 100,
            breakpoints:{
                320:{
                    slidesPerView: 2,
                    spaceBetween: 100
                },
                720:{
                    slidesPerView: 3,
                    spaceBetween: 100
                },
                992:{
                    slidesPerView: 4,
                    spaceBetween: 100
                }
            },
            autoplay: {
                delay: 2000,
            }, 
            
        })
    })
    return ( 
        <Fragment>
            <div  id="video-container" className="jumbotron">
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={vidfondo} type="video/mp4"/>
                </video>
                <div className="video-container-text">
                    <h3 className="mainText">ORDENA TU WAFFLE A DOMICILIO</h3>
                    <p>¿Qué esperas para sorprender a aquellos que más amas?</p>
                </div>
                <div className="swiper1 pb-3 px-4" dir="rtl">
                    <div className="swiper-wrapper my-3">
                        <div className="swiper-slide d-flex justify-content-center ">
                            <Card1 imgsrc={img1} remWidth="10rem"/>
                        </div>
                        <div className="swiper-slide d-flex justify-content-center">
                            <Card1 imgsrc={img2} remWidth="10rem"/>
                        </div>
                        <div className="swiper-slide d-flex justify-content-center">
                            <Card1 imgsrc={img3} remWidth="10rem"/>
                        </div>
                        <div className="swiper-slide d-flex justify-content-center">
                            <Card1 imgsrc={img4} remWidth="10rem"/>
                        </div>
                        <div className="swiper-slide d-flex justify-content-center">
                            <Card1 imgsrc={img5} remWidth="10rem"/>
                        </div>
                        <div className="swiper-slide d-flex justify-content-center">
                            <Card1 imgsrc={img6} remWidth="10rem"/>
                        </div>
                        <div className="swiper-slide d-flex justify-content-center">
                            <Card1 imgsrc={img7} remWidth="10rem"/>
                        </div>
                        <div className="swiper-slide d-flex justify-content-center">
                            <Card1 imgsrc={img8} remWidth="10rem"/>
                        </div>
                        <div className="swiper-slide d-flex justify-content-center">
                            <Card1 imgsrc={img9} remWidth="10rem"/>
                        </div>
                        <div className="swiper-slide d-flex justify-content-center">
                            <Card1 imgsrc={img10} remWidth="10rem"/>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
     );
}
 
export default memo(Horarios);