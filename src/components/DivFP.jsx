import React, { memo, Fragment } from 'react';
import './styles/DivFP.css'
import loving from '../images/svg/loving1.svg'

const DivFP = () => {
    return ( 
        <Fragment>

        <div className="container-fluid py-5" id="containerfluid">   
            <div className="row">
                <div  className='row d-block'>
                    <h1 className="animate__bounceInRight mainText">VINTAGE WAFFLES</h1>
                    <p className="sec-Text animate__bounceInRight textoDiv text-uppercase"><strong>un espacio lleno de dulzura, amor y buenas vibras</strong></p>
                    <hr style={{"width":"50%","margin":"auto"}} className='my-4'/>
                </div>
                <div className="col">
                    <img id='elloving' className='mx-auto d-block mt-0' src={loving} viewBox='0 0 400 400'/>
                </div>
                <div className="col">
                        <p className="animate__bounceInRight textoDiv">En <strong>Vintage Waffles</strong> encontrarás deliciosos productos hechos con amor para que los disfrutes junto a las personas que mas quieres</p>
                </div>
            </div>
        </div>
        </Fragment>
    );
}
 
export default memo(DivFP);