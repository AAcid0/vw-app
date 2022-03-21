import React, {Fragment} from 'react';
import logo from '../../images/svg/Recurso.svg';
import pareja from '../../images/svg/chicosFelices.svg'
import chico from '../../images/svg/pareja2.svg'
import './Nosotros.css'
import Carousel from '../../components/Carousel.jsx';

const Nosotros = () => {
    return ( 
        <Fragment>
            <div id='jumbotronNosotros' className='jumbotron-fluid'>
                <div className='container'>
                    <img id='svgLogoNos' className='mx-auto d-block py-2' src={logo} viewBox='0 0 150 150' />
                    <h3 className='mainText'>¿QUIÉNES SOMOS?</h3>
                </div>
            </div>
            <div className='row d-block g-0'>
            <p className="animate__bounceInRight sec-Text text-center"><strong>Te damos la bienvenida a</strong></p>
            <h1 className="animate__bounceInRight mainText">VINTAGE WAFFLES</h1>
            <p className="animate__bounceInRight sec-Text text-center"><strong>un espacio lleno de dulzura, amor y buenas vibras</strong></p>
            <hr style={{"width":"50%","margin":"auto"}} className='my-4'/>
            </div>
            <div className='row g-0' id="primerTexto">
                <div className='col'>
                    <img id='svgPareja' className='mx-auto d-block ' src={pareja} viewBox='0 0 200 200'/>
                </div>
                <div className='col'>
                        <p style={{"fontSize":"35px"}} className='sec-Text text-center '>
                            Aquí encontrarás productos exquisitos e ideales para acompañarte en cualquier hora del día<br/><br/>Además podrás compartir tu amor y buenos deseos con aquellas personas que mas quieres a través de un lindo y rico waffle detalle.
                            </p>
                </div>
            </div>
            <div className='row g-0'>
                <div className='col'>
                    <Carousel />
                    <hr style={{"width":"50%","margin":"auto"}} className='my-5'/>
                </div>
            </div>
            <div className='row g-0' id="laMision">
                <div className='col'>
                    <p className='mainText text-center display-2'>Nuestra Misión</p>
                    <p className='sec-Text text-center display-6'>
                    Producir y comercializar gran variedad de waffles, de este modo tener distintas opciones para nuestro público. Destacarnos por nuestra calidad en productos y servicios.
                    </p>
                </div>
                <div className='col'>
                    <img id='svgChico' className='mx-auto d-block ' src={chico} viewBox='0 0 500 500'/>
                </div>
            </div>
            <div className='row g-0'>
                <div className='col'>
                    <div className='container'>
                    <p className='mainText text-center display-2'>Nuestra Visión</p>
                    <p className='sec-Text text-center display-6'>
                    Producir y comercializar gran variedad de waffles, de este modo tener distintas opciones para nuestro público. Destacarnos por nuestra calidad en productos y servicios.
                    </p>
                    </div>
                    
                </div>
            </div>
        </Fragment>
     );
}
 
export default Nosotros;